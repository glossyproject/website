"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

interface Background27Props {
  className?: string;
  imageUrl?: string;
  pointerColor?: string;
}

interface PointerState {
  uv: THREE.Vector2;
  prev: THREE.Vector2;
  delta: THREE.Vector2;
  instant: THREE.Vector2;
  moved: boolean;
  target: THREE.Vector2;
}

const POINTER_LERP_SPEED = 10;
const POINTER_VELOCITY_LERP = 40;
const POINTER_MIN_DELTA = 0.0001;
const POINTER_POSITION_EPSILON = 0.0002;
const MAX_INFLUENCE_TEXTURE_SIZE = 1024;

const createDefaultInfluenceTexture = () => {
  const texture = new THREE.DataTexture(
    new Uint8Array([255, 255, 255, 255]),
    1,
    1,
    THREE.RGBAFormat,
  );
  texture.needsUpdate = true;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
};

const getImageDimensions = (image: CanvasImageSource) => {
  const video = image as HTMLVideoElement;
  if (video && typeof video.videoWidth === "number" && video.videoWidth > 0) {
    return { width: video.videoWidth, height: video.videoHeight };
  }

  const htmlImage = image as HTMLImageElement;
  if (
    htmlImage &&
    typeof htmlImage.naturalWidth === "number" &&
    htmlImage.naturalWidth > 0
  ) {
    return { width: htmlImage.naturalWidth, height: htmlImage.naturalHeight };
  }

  const bitmap = image as ImageBitmap;
  if (
    bitmap &&
    typeof bitmap.width === "number" &&
    typeof bitmap.height === "number" &&
    bitmap.width > 0 &&
    bitmap.height > 0
  ) {
    return { width: bitmap.width, height: bitmap.height };
  }

  const canvas = image as HTMLCanvasElement;
  if (
    canvas &&
    typeof canvas.width === "number" &&
    typeof canvas.height === "number" &&
    canvas.width > 0 &&
    canvas.height > 0
  ) {
    return { width: canvas.width, height: canvas.height };
  }

  return { width: 1, height: 1 };
};

const createLuminanceInfluenceTexture = (
  source: THREE.Texture,
  targetWidth?: number,
  targetHeight?: number,
) => {
  const image = source.image as CanvasImageSource | undefined;

  if (!image) {
    return null;
  }

  const { width: imageWidth, height: imageHeight } = getImageDimensions(image);

  if (!imageWidth || !imageHeight) {
    return null;
  }

  let canvasWidth = Math.max(1, targetWidth ?? imageWidth);
  let canvasHeight = Math.max(1, targetHeight ?? imageHeight);

  const widthScale = Math.min(MAX_INFLUENCE_TEXTURE_SIZE / canvasWidth, 1);
  const heightScale = Math.min(MAX_INFLUENCE_TEXTURE_SIZE / canvasHeight, 1);
  const scale = Math.min(widthScale, heightScale);

  if (scale < 1) {
    canvasWidth = Math.max(1, Math.floor(canvasWidth * scale));
    canvasHeight = Math.max(1, Math.floor(canvasHeight * scale));
  }

  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  context.imageSmoothingEnabled = true;
  context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
  const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
  const { data } = imageData;
  const output = new Uint8Array(canvasWidth * canvasHeight * 4);

  for (let i = 0; i < canvasWidth * canvasHeight; i++) {
    const baseIndex = i * 4;
    const luminance = Math.round(
      data[baseIndex] * 0.299 +
        data[baseIndex + 1] * 0.587 +
        data[baseIndex + 2] * 0.114,
    );
    output[baseIndex] = luminance;
    output[baseIndex + 1] = luminance;
    output[baseIndex + 2] = luminance;
    output[baseIndex + 3] = 255;
  }

  const texture = new THREE.DataTexture(
    output,
    canvasWidth,
    canvasHeight,
    THREE.RGBAFormat,
  );
  texture.needsUpdate = true;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
};

const BASE_VERTEX_SHADER = `
  precision highp float;

  attribute vec3 position;
  attribute vec2 uv;

  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;

  uniform vec2 u_texel;

  void main () {
    vUv = uv;
    vL = vUv - vec2(u_texel.x, 0.0);
    vR = vUv + vec2(u_texel.x, 0.0);
    vT = vUv + vec2(0.0, u_texel.y);
    vB = vUv - vec2(0.0, u_texel.y);
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const ADVECTION_SHADER = `
  precision highp float;
  precision highp sampler2D;

  varying vec2 vUv;
  uniform sampler2D u_velocity_texture;
  uniform sampler2D u_input_texture;
  uniform sampler2D u_influence_texture;
  uniform vec2 u_texel;
  uniform float u_dt;
  uniform float u_use_influence;

  vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
    vec2 st = uv / tsize - 0.5;

    vec2 iuv = floor(st);
    vec2 fuv = fract(st);

    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
  }

  void main () {
    vec2 coord = vUv - u_dt * bilerp(u_velocity_texture, vUv, u_texel).xy * u_texel;
    float influence = texture2D(u_influence_texture, vec2(vUv.x, 1.0 - vUv.y)).r;
    float dissipation = (0.85 + influence * 0.1 * u_use_influence);

    gl_FragColor = dissipation * bilerp(u_input_texture, coord, u_texel);
    gl_FragColor.a = 1.0;
  }
`;

const DIVERGENCE_SHADER = `
  precision highp float;
  precision highp sampler2D;

  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D u_velocity_texture;

  void main () {
    float L = texture2D(u_velocity_texture, vL).x;
    float R = texture2D(u_velocity_texture, vR).x;
    float T = texture2D(u_velocity_texture, vT).y;
    float B = texture2D(u_velocity_texture, vB).y;

    float div = 0.6 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`;

const PRESSURE_SHADER = `
  precision highp float;
  precision highp sampler2D;

  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D u_pressure_texture;
  uniform sampler2D u_divergence_texture;
  uniform sampler2D u_influence_texture;

  void main () {
    float influence = texture2D(u_influence_texture, vec2(vUv.x, 1.0 - vUv.y)).r;

    float L = texture2D(u_pressure_texture, vL).x;
    float R = texture2D(u_pressure_texture, vR).x;
    float T = texture2D(u_pressure_texture, vT).x;
    float B = texture2D(u_pressure_texture, vB).x;
    float divergence = texture2D(u_divergence_texture, vUv).x;

    float pressure = (L + R + B + T - divergence) * 0.25;
    pressure += (0.2 * influence);

    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`;

const GRADIENT_SHADER = `
  precision highp float;
  precision highp sampler2D;

  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D u_pressure_texture;
  uniform sampler2D u_velocity_texture;
  uniform sampler2D u_influence_texture;

  void main () {
    float L = texture2D(u_pressure_texture, vL).x;
    float R = texture2D(u_pressure_texture, vR).x;
    float T = texture2D(u_pressure_texture, vT).x;
    float B = texture2D(u_pressure_texture, vB).x;
    vec2 velocity = texture2D(u_velocity_texture, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;

const POINT_SHADER = `
  precision highp float;
  precision highp sampler2D;

  varying vec2 vUv;
  uniform sampler2D u_input_texture;
  uniform float u_ratio;
  uniform vec3 u_point_value;
  uniform vec2 u_point;
  uniform float u_point_size;
  uniform sampler2D u_influence_texture;

  void main () {
    vec2 p = vUv - u_point.xy;
    p.x *= u_ratio;
    vec3 splat = pow(3.0, -dot(p, p) / u_point_size) * u_point_value;

    float influence = texture2D(u_influence_texture, vec2(vUv.x, 1.0 - vUv.y)).r;
    splat *= (0.7 + 0.2 * influence);

    vec3 base = texture2D(u_input_texture, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
  }
`;

const DISPLAY_VERTEX_SHADER = `
  varying vec2 vUv;

  void main () {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const DISPLAY_FRAGMENT_SHADER = `
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D u_colorTexture;
  uniform sampler2D u_fluidTexture;

  float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
  }

  void main () {
    vec4 image = texture2D(u_colorTexture, vUv);
    vec3 gray = vec3(luma(image.rgb));
    vec3 fluid = texture2D(u_fluidTexture, vUv).rgb;
    vec3 shifted = vec3(
      texture2D(u_fluidTexture, vUv + vec2(0.0006, 0.0)).r,
      texture2D(u_fluidTexture, vUv).g,
      texture2D(u_fluidTexture, vUv - vec2(0.0006, 0.0)).b
    );

    float mask = clamp(length(fluid) * 1.5, 0.0, 1.0);
    mask = pow(mask, 0.6);
    mask = smoothstep(0.05, 0.8, mask);

    vec3 fluidColor = mix(fluid, shifted, 3.0);
    fluidColor = normalize(fluidColor + 0.1) * 0.8;

    vec3 color = mix(gray, image.rgb + fluidColor * 0.4, mask);
    gl_FragColor = vec4(color, image.a);
  }
`;

const requestFloatSupport = (renderer: THREE.WebGLRenderer) => {
  const gl = renderer.getContext();
  const extensions = [
    "OES_texture_float",
    "OES_texture_float_linear",
    "OES_texture_half_float",
    "OES_texture_half_float_linear",
    "WEBGL_color_buffer_float",
    "EXT_color_buffer_float",
    "EXT_color_buffer_half_float",
  ];
  extensions.forEach((name) => {
    if (name && gl.getExtension(name) === null) {
      return;
    }
  });
};

const getSupportedTextureType = (renderer: THREE.WebGLRenderer) => {
  const gl = renderer.getContext();
  const isWebGL2 = renderer.capabilities.isWebGL2;

  if (isWebGL2) {
    if (
      gl.getExtension("EXT_color_buffer_float") ||
      gl.getExtension("WEBGL_color_buffer_float")
    ) {
      return THREE.FloatType;
    }
    if (gl.getExtension("EXT_color_buffer_half_float")) {
      return THREE.HalfFloatType;
    }
  } else {
    if (
      gl.getExtension("OES_texture_float") &&
      gl.getExtension("WEBGL_color_buffer_float")
    ) {
      return THREE.FloatType;
    }
    if (
      gl.getExtension("OES_texture_half_float") &&
      gl.getExtension("EXT_color_buffer_half_float")
    ) {
      return THREE.HalfFloatType;
    }
  }

  return THREE.UnsignedByteType;
};

const createRenderTarget = (
  width: number,
  height: number,
  type: THREE.TextureDataType,
) => {
  const target = new THREE.WebGLRenderTarget(width, height, {
    type,
    format: THREE.RGBAFormat,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
    stencilBuffer: false,
  });
  target.texture.wrapS = THREE.ClampToEdgeWrapping;
  target.texture.wrapT = THREE.ClampToEdgeWrapping;
  target.texture.generateMipmaps = false;
  return target;
};

class DoubleFBO {
  read: THREE.WebGLRenderTarget;
  write: THREE.WebGLRenderTarget;

  constructor(width: number, height: number, type: THREE.TextureDataType) {
    this.read = createRenderTarget(width, height, type);
    this.write = createRenderTarget(width, height, type);
  }

  swap() {
    const temp = this.read;
    this.read = this.write;
    this.write = temp;
  }

  dispose() {
    this.read.dispose();
    this.write.dispose();
  }
}

class FluidSimulation {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private quad: THREE.Mesh<THREE.PlaneGeometry, THREE.RawShaderMaterial>;
  private geometry: THREE.PlaneGeometry;
  private advectionMaterial: THREE.RawShaderMaterial;
  private divergenceMaterial: THREE.RawShaderMaterial;
  private pressureMaterial: THREE.RawShaderMaterial;
  private gradientMaterial: THREE.RawShaderMaterial;
  private pointMaterial: THREE.RawShaderMaterial;
  private defaultInfluenceTexture: THREE.DataTexture;
  private influenceTexture: THREE.Texture;
  private ownsInfluenceTexture: boolean;
  private velocity: DoubleFBO;
  private dye: DoubleFBO;
  private divergence: THREE.WebGLRenderTarget;
  private pressure: DoubleFBO;
  private pointerColor: THREE.Vector3;
  private aspect: number;

  constructor(
    renderer: THREE.WebGLRenderer,
    width: number,
    height: number,
    pointerColor: THREE.Vector3,
  ) {
    this.renderer = renderer;
    this.pointerColor = pointerColor.clone();

    requestFloatSupport(renderer);
    this.defaultInfluenceTexture = createDefaultInfluenceTexture();
    this.influenceTexture = this.defaultInfluenceTexture;
    this.ownsInfluenceTexture = false;

    const type = getSupportedTextureType(renderer);

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.geometry = new THREE.PlaneGeometry(2, 2);

    this.advectionMaterial = this.createAdvectionMaterial(width, height);
    this.divergenceMaterial = this.createDivergenceMaterial(width, height);
    this.pressureMaterial = this.createPressureMaterial(width, height);
    this.gradientMaterial = this.createGradientMaterial(width, height);
    this.pointMaterial = this.createPointMaterial(width, height);
    this.updateInfluenceUniforms(this.influenceTexture, false);

    this.quad = new THREE.Mesh(this.geometry, this.advectionMaterial);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);

    this.velocity = new DoubleFBO(width, height, type);
    this.dye = new DoubleFBO(width, height, type);
    this.pressure = new DoubleFBO(width, height, type);
    this.divergence = createRenderTarget(width, height, type);

    this.aspect = width / Math.max(height, 1);
    this.updateTexelUniforms(width, height);
  }

  private createAdvectionMaterial(width: number, height: number) {
    return new THREE.RawShaderMaterial({
      vertexShader: BASE_VERTEX_SHADER,
      fragmentShader: ADVECTION_SHADER,
      uniforms: {
        u_velocity_texture: { value: null },
        u_input_texture: { value: null },
        u_influence_texture: { value: this.influenceTexture },
        u_texel: { value: new THREE.Vector2(1 / width, 1 / height) },
        u_dt: { value: 0.016 },
        u_use_influence: { value: 0.0 },
      },
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
    });
  }

  private createDivergenceMaterial(width: number, height: number) {
    return new THREE.RawShaderMaterial({
      vertexShader: BASE_VERTEX_SHADER,
      fragmentShader: DIVERGENCE_SHADER,
      uniforms: {
        u_velocity_texture: { value: null },
        u_texel: { value: new THREE.Vector2(1 / width, 1 / height) },
      },
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
    });
  }

  private createPressureMaterial(width: number, height: number) {
    return new THREE.RawShaderMaterial({
      vertexShader: BASE_VERTEX_SHADER,
      fragmentShader: PRESSURE_SHADER,
      uniforms: {
        u_pressure_texture: { value: null },
        u_divergence_texture: { value: null },
        u_influence_texture: { value: this.influenceTexture },
        u_texel: { value: new THREE.Vector2(1 / width, 1 / height) },
      },
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
    });
  }

  private createGradientMaterial(width: number, height: number) {
    return new THREE.RawShaderMaterial({
      vertexShader: BASE_VERTEX_SHADER,
      fragmentShader: GRADIENT_SHADER,
      uniforms: {
        u_pressure_texture: { value: null },
        u_velocity_texture: { value: null },
        u_influence_texture: { value: this.influenceTexture },
        u_texel: { value: new THREE.Vector2(1 / width, 1 / height) },
      },
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
    });
  }

  private createPointMaterial(width: number, height: number) {
    return new THREE.RawShaderMaterial({
      vertexShader: BASE_VERTEX_SHADER,
      fragmentShader: POINT_SHADER,
      uniforms: {
        u_input_texture: { value: null },
        u_ratio: { value: width / Math.max(height, 1) },
        u_point_value: { value: new THREE.Vector3() },
        u_point: { value: new THREE.Vector2(0.5, 0.5) },
        u_point_size: { value: 0.02 },
        u_influence_texture: { value: this.influenceTexture },
        u_texel: { value: new THREE.Vector2(1 / width, 1 / height) },
      },
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
    });
  }

  private updateInfluenceUniforms(
    texture: THREE.Texture,
    enableInfluence: boolean,
  ) {
    this.advectionMaterial.uniforms.u_influence_texture.value = texture;
    this.pressureMaterial.uniforms.u_influence_texture.value = texture;
    this.gradientMaterial.uniforms.u_influence_texture.value = texture;
    this.pointMaterial.uniforms.u_influence_texture.value = texture;
    this.advectionMaterial.uniforms.u_use_influence.value = enableInfluence
      ? 1.0
      : 0.0;
  }

  setInfluenceTexture(texture: THREE.Texture | null, ownsTexture = false) {
    if (
      this.ownsInfluenceTexture &&
      this.influenceTexture &&
      this.influenceTexture !== this.defaultInfluenceTexture
    ) {
      this.influenceTexture.dispose();
    }

    if (texture) {
      this.influenceTexture = texture;
      this.ownsInfluenceTexture = ownsTexture;
      this.updateInfluenceUniforms(texture, true);
    } else {
      this.influenceTexture = this.defaultInfluenceTexture;
      this.ownsInfluenceTexture = false;
      this.updateInfluenceUniforms(this.defaultInfluenceTexture, false);
    }
  }

  private updateTexelUniforms(width: number, height: number) {
    const texel = new THREE.Vector2(1 / width, 1 / height);
    (this.advectionMaterial.uniforms.u_texel.value as THREE.Vector2).copy(
      texel,
    );
    (this.divergenceMaterial.uniforms.u_texel.value as THREE.Vector2).copy(
      texel,
    );
    (this.pressureMaterial.uniforms.u_texel.value as THREE.Vector2).copy(texel);
    (this.gradientMaterial.uniforms.u_texel.value as THREE.Vector2).copy(texel);
    (this.pointMaterial.uniforms.u_texel.value as THREE.Vector2).copy(texel);
    this.pointMaterial.uniforms.u_ratio.value = width / Math.max(height, 1);
  }

  private blit(
    material: THREE.RawShaderMaterial,
    target: THREE.WebGLRenderTarget | null,
  ) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);
  }

  private splat(pointer: PointerState) {
    const material = this.pointMaterial;
    material.uniforms.u_point.value.copy(pointer.uv);
    material.uniforms.u_ratio.value = this.aspect;

    const deltaLength = pointer.delta.length();
    if (deltaLength <= 0.0) {
      return;
    }

    const velocityValue = material.uniforms.u_point_value
      .value as THREE.Vector3;
    velocityValue.set(pointer.delta.x, pointer.delta.y, 0.0);
    velocityValue.multiplyScalar(10.0);
    material.uniforms.u_point_size.value = 0.005;
    material.uniforms.u_input_texture.value = this.velocity.read.texture;
    this.blit(material, this.velocity.write);
    this.velocity.swap();

    const colorValue = material.uniforms.u_point_value.value as THREE.Vector3;
    const colorIntensity = THREE.MathUtils.clamp(deltaLength * 20.0, 0.0, 1.0);
    if (colorIntensity <= 0.0) {
      return;
    }
    colorValue.copy(this.pointerColor).multiplyScalar(300 * colorIntensity);
    material.uniforms.u_point_size.value = 0.0025;
    material.uniforms.u_input_texture.value = this.dye.read.texture;
    this.blit(material, this.dye.write);
    this.dye.swap();
  }

  update(delta: number, pointer: PointerState) {
    if (pointer?.moved) {
      this.splat(pointer);
    }

    this.advectionMaterial.uniforms.u_dt.value = delta;

    this.advectionMaterial.uniforms.u_velocity_texture.value =
      this.velocity.read.texture;
    this.advectionMaterial.uniforms.u_input_texture.value =
      this.velocity.read.texture;
    this.blit(this.advectionMaterial, this.velocity.write);
    this.velocity.swap();

    this.advectionMaterial.uniforms.u_velocity_texture.value =
      this.velocity.read.texture;
    this.advectionMaterial.uniforms.u_input_texture.value =
      this.dye.read.texture;
    this.blit(this.advectionMaterial, this.dye.write);
    this.dye.swap();

    this.divergenceMaterial.uniforms.u_velocity_texture.value =
      this.velocity.read.texture;
    this.blit(this.divergenceMaterial, this.divergence);

    for (let i = 0; i < 10; i++) {
      this.pressureMaterial.uniforms.u_pressure_texture.value =
        this.pressure.read.texture;
      this.pressureMaterial.uniforms.u_divergence_texture.value =
        this.divergence.texture;
      this.blit(this.pressureMaterial, this.pressure.write);
      this.pressure.swap();
    }

    this.gradientMaterial.uniforms.u_pressure_texture.value =
      this.pressure.read.texture;
    this.gradientMaterial.uniforms.u_velocity_texture.value =
      this.velocity.read.texture;
    this.blit(this.gradientMaterial, this.velocity.write);
    this.velocity.swap();
  }

  setPointerColor(color: THREE.Vector3) {
    this.pointerColor.copy(color);
  }

  getTexture() {
    return this.dye.read.texture;
  }

  dispose() {
    this.geometry.dispose();
    this.advectionMaterial.dispose();
    this.divergenceMaterial.dispose();
    this.pressureMaterial.dispose();
    this.gradientMaterial.dispose();
    this.pointMaterial.dispose();
    this.velocity.dispose();
    this.dye.dispose();
    this.pressure.dispose();
    this.divergence.dispose();
    if (
      this.ownsInfluenceTexture &&
      this.influenceTexture &&
      this.influenceTexture !== this.defaultInfluenceTexture
    ) {
      this.influenceTexture.dispose();
    }
    this.defaultInfluenceTexture.dispose();
  }
}

const FluidRevealPlane = ({
  imageUrl,
  pointerColor,
}: {
  imageUrl: string;
  pointerColor: string;
}) => {
  const colorVector = useMemo(() => {
    const color = new THREE.Color(pointerColor);
    return new THREE.Vector3(color.r, color.g, color.b);
  }, [pointerColor]);

  const pointerColorRef = useRef(colorVector.clone());
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  const { gl, size } = useThree();

  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const simulationRef = useRef<FluidSimulation | null>(null);
  const pointerRef = useRef<PointerState>({
    uv: new THREE.Vector2(0.5, 0.5),
    prev: new THREE.Vector2(0.5, 0.5),
    delta: new THREE.Vector2(),
    instant: new THREE.Vector2(),
    moved: false,
    target: new THREE.Vector2(0.5, 0.5),
  });

  useEffect(() => {
    pointerColorRef.current.copy(colorVector);
    simulationRef.current?.setPointerColor(colorVector);
  }, [colorVector]);

  const uniforms = useMemo(
    () => ({
      u_colorTexture: { value: null as THREE.Texture | null },
      u_fluidTexture: { value: null as THREE.Texture | null },
    }),
    [],
  );

  const uniformsRef = useRef(uniforms);
  const textureRef = useRef(texture);

  useEffect(() => {
    uniformsRef.current = uniforms;
  }, [uniforms]);

  useEffect(() => {
    textureRef.current = texture;
    const currentTexture = textureRef.current;
    const currentUniforms = uniformsRef.current;

    currentUniforms.u_colorTexture.value = currentTexture;
    currentTexture.wrapS = THREE.ClampToEdgeWrapping;
    currentTexture.wrapT = THREE.ClampToEdgeWrapping;
    currentTexture.minFilter = THREE.LinearFilter;
    currentTexture.magFilter = THREE.LinearFilter;
    currentTexture.generateMipmaps = false;
    currentTexture.colorSpace = THREE.LinearSRGBColorSpace;
    currentTexture.needsUpdate = true;
    if (materialRef.current) {
      materialRef.current.uniforms.u_colorTexture.value = currentTexture;
    }
  }, [texture]);

  useEffect(() => {
    const width = Math.max(1, Math.floor(size.width * gl.getPixelRatio()));
    const height = Math.max(1, Math.floor(size.height * gl.getPixelRatio()));
    const previous = simulationRef.current;
    const simulation = new FluidSimulation(
      gl,
      width,
      height,
      pointerColorRef.current,
    );
    simulationRef.current = simulation;
    previous?.dispose();

    return () => {
      simulation.dispose();
      if (simulationRef.current === simulation) {
        simulationRef.current = null;
      }
    };
  }, [gl, size.width, size.height]);

  useEffect(() => {
    const simulation = simulationRef.current;
    if (!simulation) {
      return;
    }

    if (!texture.image) {
      simulation.setInfluenceTexture(null);
      return;
    }

    const pixelRatio = gl.getPixelRatio();
    const targetWidth = Math.max(1, Math.floor(size.width * pixelRatio));
    const targetHeight = Math.max(1, Math.floor(size.height * pixelRatio));
    const influenceTexture = createLuminanceInfluenceTexture(
      texture,
      targetWidth,
      targetHeight,
    );
    if (!influenceTexture) {
      simulation.setInfluenceTexture(null);
      return;
    }

    simulation.setInfluenceTexture(influenceTexture, true);
  }, [gl, texture, size.width, size.height]);

  useEffect(() => {
    const element = gl.domElement;

    const updatePointer = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const pointer = pointerRef.current;
      pointer.target.set(
        THREE.MathUtils.clamp(x, 0, 1),
        THREE.MathUtils.clamp(1 - y, 0, 1),
      );
      pointer.moved = true;
    };

    const handleLeave = () => {
      const pointer = pointerRef.current;
      pointer.target.copy(pointer.uv);
      pointer.moved = false;
      pointer.delta.set(0, 0);
      pointer.instant.set(0, 0);
    };

    element.addEventListener("pointermove", updatePointer);
    element.addEventListener("pointerdown", updatePointer);
    element.addEventListener("pointerenter", updatePointer);
    element.addEventListener("pointerleave", handleLeave);

    return () => {
      element.removeEventListener("pointermove", updatePointer);
      element.removeEventListener("pointerdown", updatePointer);
      element.removeEventListener("pointerenter", updatePointer);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, [gl]);

  useFrame(() => {
    const simulation = simulationRef.current;
    const material = materialRef.current;
    if (!simulation || !material) return;

    const pointer = pointerRef.current;

    pointer.prev.copy(pointer.uv);

    const positionLerp = 1 - Math.exp((-1 / 60) * POINTER_LERP_SPEED);
    if (
      pointer.target.distanceToSquared(pointer.uv) <=
      POINTER_POSITION_EPSILON * POINTER_POSITION_EPSILON
    ) {
      pointer.uv.copy(pointer.target);
    } else {
      pointer.uv.lerp(pointer.target, positionLerp);
    }

    pointer.instant.copy(pointer.uv).sub(pointer.prev);
    const velocityLerp = 1 - Math.exp((-1 / 60) * POINTER_VELOCITY_LERP);
    pointer.delta.lerp(pointer.instant, velocityLerp);

    const deltaLength = pointer.delta.length();
    const hasMovement = deltaLength > POINTER_MIN_DELTA;
    pointer.moved = hasMovement;
    if (!hasMovement) {
      pointer.delta.set(0, 0);
    }

    const FIXED_DT = 1 / 60;

    simulation.update(FIXED_DT, pointer);

    const textureRef = simulation.getTexture();
    material.uniforms.u_fluidTexture.value = textureRef;
    uniformsRef.current.u_fluidTexture.value = textureRef;
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={DISPLAY_VERTEX_SHADER}
        fragmentShader={DISPLAY_FRAGMENT_SHADER}
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
};

const Shader17 = ({
  className,
  imageUrl = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/background27/bg-photo.png",
  pointerColor = "#ffffff",
}: Background27Props) => {
  return (
    <section
      className={cn(
        "relative h-svh max-h-[1200px] min-h-[600px] w-full overflow-hidden",
        className,
      )}
    >
      <Canvas
        gl={{ powerPreference: "high-performance", antialias: false }}
        frameloop="always"
        orthographic
        camera={{ position: [0, 0, 1], near: 0.01, far: 10, zoom: 1 }}
        dpr={[1, 2]}
      >
        <FluidRevealPlane imageUrl={imageUrl} pointerColor={pointerColor} />
      </Canvas>
    </section>
  );
};

export { Shader17 };

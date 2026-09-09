"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

const ShaderPlane = ({
  vertexShader,
  fragmentShader,
  uniforms,
}: ShaderPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.FrontSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

interface Background28Props {
  className?: string;
  channel0Url?: string;
  channel1Url?: string;
  channel2Url?: string;
  channel3Url?: string;

  Silhouette_height?: number;
  Vertical_drift?: number;
  Warp_tex_scale?: number;
  Edge_sharpness?: number;
  Tiling_rate?: number;
}

export const Shader18 = ({
  className = "bg-black",

  channel0Url = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/background28/noise1.jpg",
  channel1Url = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/background28/noise1.jpg",
  channel2Url = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/background28/noise2.png",
  channel3Url = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/background28/noise2.png",

  Silhouette_height = 0.45,
  Vertical_drift = 0.57,
  Warp_tex_scale = 2.9,
  Edge_sharpness = 0.15,
  Tiling_rate = 0.6,
}: Background28Props) => {
  const [textures, setTextures] = useState<{
    t0: THREE.Texture | null;
    t1: THREE.Texture | null;
    t2: THREE.Texture | null;
    t3: THREE.Texture | null;
  }>({
    t0: null,
    t1: null,
    t2: null,
    t3: null,
  });

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const t0 = loader.load(channel0Url);
    const t1 = loader.load(channel1Url);
    const t2 = loader.load(channel2Url);
    const t3 = loader.load(channel3Url);

    [t0, t1, t2, t3].forEach((t) => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
    });

    startTransition(() => {
      setTextures({ t0, t1, t2, t3 });
    });
  }, [channel0Url, channel1Url, channel2Url, channel3Url]);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;

    uniform sampler2D u_channel0;
    uniform sampler2D u_channel1;
    uniform sampler2D u_channel2;
    uniform sampler2D u_channel3;

    uniform float u_silhouette_height;
    uniform float u_vertical_drift;
    uniform float u_warp_tex_scale;
    uniform float u_edge_sharpness;
    uniform float u_tiling_rate;

    #define ENABLE_MASKING
    #define ENABLE_SOFT_EDGE
    #define ENABLE_DETAIL
    #define ENABLE_WARP
    #define ENABLE_COLOR

    const int NUM_PARABOLAS = 26;
    const float SPEED = 0.0025;
    const float SCROLL_SPEED = -0.05;
    const float HORIZONTAL_DRIFT = 0.1;
    const float CURVATURE_BASE = 0.005;
    const float CURVATURE_DRIFT = 0.02;
    const float WARP_STRENGTH = 0.025;

    vec3 flame_color_ramp(float val) {
      vec3 color_a = 1.2 * vec3(1.2, 0.1, 0.2);
      vec3 color_b = 1.8 * vec3(1.0, 0.8, 0.5);
      vec3 color_c = 0.95 * vec3(0.25, 0.25, 0.4);
      vec3 color_d = 0.5 * vec3(0.35, 0.2, 0.4);

      float pos_a = 0.35;
      float pos_b = 0.65;

      if (val < pos_a)
          return mix(color_a, color_b, val / pos_a);
      else if (val < pos_b)
          return mix(color_b, color_c, (val - pos_a) / (pos_b - pos_a));
      return mix(color_c, color_d, (val - pos_b) / (1.0 - pos_b));
    }

    vec2 warp(vec2 uv, vec2 warp_uvs, float strength, sampler2D tex) {
      vec4 w = texture2D(tex, warp_uvs);
      return uv + strength * w.xy;
    }

    vec3 get_focus(float i) {
      vec4 r = texture2D(u_channel0, vec2(i, u_time * SPEED * 0.1));
      float x = i + mix(-HORIZONTAL_DRIFT, HORIZONTAL_DRIFT, r.r);
      float y = (1.0 - u_silhouette_height) + mix(-u_vertical_drift, u_vertical_drift, r.g);
      vec2 focus = vec2(x, y);
      float directrix = y + CURVATURE_BASE + mix(0.0, CURVATURE_DRIFT, r.b);
      return vec3(focus, directrix);
    }

    vec4 stretched_scrolling_noise(vec2 uv) {
      vec2 scrolled_uvs = vec2(0.85 * uv.s, 0.2 * uv.t + u_time * 0.1 * SCROLL_SPEED);
      vec4 n = texture2D(u_channel1, scrolled_uvs);
      return 1.0 - n;
    }

    vec4 contrast(vec4 in_rgb, float c) {
      return ((in_rgb - 0.5) * c) + 0.5;
    }

    vec3 desaturate(vec3 in_rgb) {
      const vec3 W = vec3(0.2125, 0.7154, 0.0721);
      float luminance = dot(in_rgb, W);
      return vec3(luminance);
    }

    float quadratic_signed_distance(vec2 uv, vec2 focus, float c) {
      float x = uv.s;
      float a = (x - focus.x);
      float a2 = a * a;
      float b2 = focus.y * focus.y;
      float c2 = c * c;
      float denominator = 2.0 * (focus.y - c);
      float y = (a2 + b2 - c2) / denominator;
      return (1.0 - uv.y) - y;
    }

    void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 uv = fragCoord.xy / u_resolution.xy;

      float tilt_strength = 0.35;
      vec2 tilt_dir = vec2(-1.0, 0.0);
      float wind_strength = tilt_strength * pow(uv.y, 2.);
      uv += wind_strength * tilt_dir;

      uv *= vec2(u_tiling_rate, 1.0);

      float Warp_strength_dynamic = mix(4.0 * WARP_STRENGTH, 0.4 * WARP_STRENGTH, pow(1.0 - uv.y, 0.2));
      Warp_strength_dynamic = clamp(Warp_strength_dynamic, 0.0, 0.2);

      vec2 warped_uv = uv;
    #ifdef ENABLE_WARP
      vec2 warp_tex_uvs = vec2(u_warp_tex_scale * uv.s + 0.0005 * u_time * 0.1, 0.25 * uv.t - 0.8 * u_time);
      warped_uv = warp(uv, warp_tex_uvs, Warp_strength_dynamic, u_channel2);
    #endif

      float silhouette_mask = 1.0;
      float edge_gradient = 1.0;

      for (int i = 0; i < NUM_PARABOLAS; i++) {
        float seed = float(i) / float(NUM_PARABOLAS - 1);
        vec3 focus = get_focus(seed);
        float d1 = quadratic_signed_distance(warped_uv, focus.xy, focus.z);
        float vertical_dist = u_edge_sharpness * d1;
        if (vertical_dist < 0.0)
            silhouette_mask = min(silhouette_mask, 0.0);
        else
            edge_gradient = min(edge_gradient, vertical_dist);
      }

      float c = mix(1.0, 5.0, 1.0 - edge_gradient);
      vec2 scroll_uvs = warped_uv;
      scroll_uvs.y = mix(2.0 * scroll_uvs.y, 0.7 * scroll_uvs.y, pow(uv.y, 0.5));
      vec4 scroll_tex = contrast(stretched_scrolling_noise(scroll_uvs), c);
      scroll_tex = vec4(desaturate(scroll_tex.rgb), 1.0);

      vec4 plasma_color = vec4(flame_color_ramp(edge_gradient), 1.0);
      fragColor = plasma_color * silhouette_mask;
      fragColor *= edge_gradient;
      fragColor *= scroll_tex;
    }

    void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
    }
  `;

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      u_channel0: { value: textures.t0 },
      u_channel1: { value: textures.t1 },
      u_channel2: { value: textures.t2 },
      u_channel3: { value: textures.t3 },
      u_silhouette_height: { value: Silhouette_height },
      u_vertical_drift: { value: Vertical_drift },
      u_warp_tex_scale: { value: Warp_tex_scale },
      u_edge_sharpness: { value: Edge_sharpness },
      u_tiling_rate: { value: Tiling_rate },
    }),
    [
      textures,
      Silhouette_height,
      Vertical_drift,
      Warp_tex_scale,
      Edge_sharpness,
      Tiling_rate,
    ],
  );

  return (
    <section
      className={cn(
        "relative h-svh max-h-[1200px] min-h-[600px] w-full overflow-hidden",
        className,
      )}
    >
      <Canvas>
        {textures.t0 && (
          <ShaderPlane
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
          />
        )}
      </Canvas>
    </section>
  );
};

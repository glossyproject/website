"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: Record<string, THREE.IUniform>;
  timeMultiplier: number;
}

const ShaderPlane = ({
  vertexShader,
  fragmentShader,
  uniforms,
  timeMultiplier,
}: ShaderPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * timeMultiplier;
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

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: Record<string, THREE.IUniform>;
  className?: string;
  timeMultiplier?: number;
  backgroundColor?: THREE.ColorRepresentation;
  objectColor?: THREE.ColorRepresentation;
}

const Shader19 = ({
  vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader = `
    precision highp float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform vec3 u_backgroundColor;
    uniform vec3 u_objectColor;

    vec3 hash(vec3 p) {
      p = vec3(
        dot(p, vec3(127.1, 311.7, 74.7)),
        dot(p, vec3(269.5, 183.3, 246.1)),
        dot(p, vec3(113.5, 271.9, 124.6))
      );
      return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
    }

    float noise(vec3 x) {
      x = x * 1.5;
      vec3 p = floor(x);
      vec3 w = fract(x);
      vec3 u = w * w * w * (w * (w * 6.0 - 15.0) + 10.0);

      vec3 ga = hash(p + vec3(0.0, 0.0, 0.0));
      vec3 gb = hash(p + vec3(1.0, 0.0, 0.0));
      vec3 gc = hash(p + vec3(0.0, 1.0, 0.0));
      vec3 gd = hash(p + vec3(1.0, 1.0, 0.0));
      vec3 ge = hash(p + vec3(0.0, 0.0, 1.0));
      vec3 gf = hash(p + vec3(1.0, 0.0, 1.0));
      vec3 gg = hash(p + vec3(0.0, 1.0, 1.0));
      vec3 gh = hash(p + vec3(1.0, 1.0, 1.0));

      float va = dot(ga, w - vec3(0.0, 0.0, 0.0));
      float vb = dot(gb, w - vec3(1.0, 0.0, 0.0));
      float vc = dot(gc, w - vec3(0.0, 1.0, 0.0));
      float vd = dot(gd, w - vec3(1.0, 1.0, 0.0));
      float ve = dot(ge, w - vec3(0.0, 0.0, 1.0));
      float vf = dot(gf, w - vec3(1.0, 0.0, 1.0));
      float vg = dot(gg, w - vec3(0.0, 1.0, 1.0));
      float vh = dot(gh, w - vec3(1.0, 1.0, 1.0));

      return va +
             u.x * (vb - va) +
             u.y * (vc - va) +
             u.z * (ve - va) +
             u.x * u.y * (va - vb - vc + vd) +
             u.y * u.z * (va - vc - ve + vg) +
             u.z * u.x * (va - vb - ve + vf) +
             u.x * u.y * u.z * (-va + vb + vc - vd + ve - vf - vg + vh);
    }

    void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = (2.0 * fragCoord - u_resolution.xy) / u_resolution.y;
      float angle = radians(45.0);
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      p = rot * p;

      vec3 rd = vec3(0.0, 0.0, -1.0);

      float wave = 0.05 * sin(p.y * 6.0);
      float rod_x = fract((p.x + wave) * 5.0) * 2.0 - 1.0;
      float rod_z = sqrt(1.0 - rod_x * rod_x);
      vec3 n = vec3(rod_x, 0.0, -rod_z);

      float refractive_index = 0.4;
      vec3 refracted_ray = mix(n, rd, refractive_index);
      float z_dist = 0.4 / (refracted_ray.z + 0.00001);
      vec3 pos = vec3(p, 0.0) + z_dist * refracted_ray;

      float dispersion = 0.015;
      float t = u_time * 0.2;

      vec2 motion = vec2(t * 0.3, t * 0.2);

      float nR = noise(vec3(pos.xy + motion + vec2(dispersion, 0.0), 0.0));
      float nG = noise(vec3(pos.xy + motion, 0.0));
      float nB = noise(vec3(pos.xy + motion - vec2(dispersion, 0.0), 0.0));

      vec3 refract_col = vec3(nR, nG, nB);
      refract_col = 1.0 - mix(vec3(0.0), vec3(1.0), smoothstep(-0.5, 0.0, refract_col));

      float g = 1.0 - abs(n.z);
      g = g * 0.4 / (g * 0.4 - g + 1.0);
      float glass = (1.0 - 0.3 * g);

      vec3 pattern = clamp(vec3(glass) - refract_col, 0.0, 1.0);
      vec3 finalColor = mix(u_objectColor, u_backgroundColor, pattern);
      fragColor = vec4(finalColor, 1.0);
    }

    void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
    }
  `,
  uniforms,
  className,
  timeMultiplier = 1.5,
  backgroundColor = "#ffffff",
  objectColor = "#000000",
}: ShaderBackgroundProps) => {
  const backgroundColorValue = useMemo(
    () => new THREE.Color(backgroundColor),
    [backgroundColor],
  );
  const objectColorValue = useMemo(
    () => new THREE.Color(objectColor),
    [objectColor],
  );

  const shaderUniforms = useMemo<Record<string, THREE.IUniform>>(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      ...(uniforms ?? {}),
      u_backgroundColor: { value: backgroundColorValue },
      u_objectColor: { value: objectColorValue },
    }),
    [uniforms, backgroundColorValue, objectColorValue],
  );

  return (
    <section
      className={cn(
        "relative h-svh max-h-[1200px] min-h-[600px] w-full overflow-hidden",
        className,
      )}
    >
      <Canvas gl={{ antialias: true }}>
        <ShaderPlane
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={shaderUniforms}
          timeMultiplier={timeMultiplier}
        />
      </Canvas>
    </section>
  );
};

export { Shader19 };

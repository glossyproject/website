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
  metaballColor?: THREE.ColorRepresentation;
  backgroundColor?: THREE.ColorRepresentation;
}

const Shader20 = ({
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
    uniform vec3 u_metaballColor;
    uniform vec3 u_backgroundColor;

    float metaball(vec2 p, vec2 c, float r) {
        return r * r / dot(p - c, p - c);
    }

    float map(vec2 p) {
        float v = 0.0;
        v += metaball(p, vec2(sin(u_time), cos(u_time * 0.5)), 0.3);
        v += metaball(p, vec2(-cos(u_time * 0.8), sin(u_time * 0.3)), 0.3);
        return 0.5 - v;
    }

    void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 p = (2.0 * fragCoord - u_resolution.xy) / u_resolution.y;
        vec3 rd = vec3(0.0, 0.0, -1.0);

        bool isPortrait = (u_resolution.y > u_resolution.x);

        if (isPortrait) {
            p = vec2(p.y, -p.x);
        }

        float glassSide = isPortrait ? step(p.x, 0.0) : step(0.0, p.x);

        float rod_x = fract(p.x * 8.0) * 2.0 - 1.0;
        float rod_z = sqrt(1.0 - rod_x * rod_x);
        vec3 n = vec3(rod_x, 0.0, -rod_z);

        float refractive_index = 0.4;
        vec3 refracted_ray = mix(n, rd, refractive_index);
        float z_dist = 0.4 / (refracted_ray.z + 0.00001);
        vec3 pos = mix(vec3(p, 0.0), vec3(p, 0.0) + z_dist * refracted_ray, glassSide);

        float metaballMask = smoothstep(-0.05, 0.0, map(pos.xy));

        vec3 baseColor = mix(u_metaballColor, u_backgroundColor, metaballMask);

        float g = 1.0 - abs(n.z);
        g = g * 0.4 / (g * 0.4 - g + 1.0);
        float glass = 1.0 - 0.4 * g;
        vec3 glassColor = baseColor * glass;

        vec3 finalColor = mix(baseColor, glassColor, glassSide);

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
  timeMultiplier = 1,
  metaballColor = "#000000",
  backgroundColor = "#ffffff",
}: ShaderBackgroundProps) => {
  const metaballColorValue = useMemo(
    () => new THREE.Color(metaballColor),
    [metaballColor],
  );
  const backgroundColorValue = useMemo(
    () => new THREE.Color(backgroundColor),
    [backgroundColor],
  );

  const shaderUniforms = useMemo<Record<string, THREE.IUniform>>(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      ...(uniforms ?? {}),
      u_metaballColor: { value: metaballColorValue },
      u_backgroundColor: { value: backgroundColorValue },
    }),
    [uniforms, metaballColorValue, backgroundColorValue],
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

export { Shader20 };

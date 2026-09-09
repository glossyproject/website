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
  color?: THREE.ColorRepresentation;
  timeMultiplier?: number;
}

const Shader16 = ({
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
    uniform vec3 u_color;

    float rand(float x) { return fract(sin(x) * 4358.5453123); }
    float rand(vec2 co) { return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5357); }

    float invader(vec2 p, float n)
    {
	p.x = abs(p.x);
	p.y = floor(p.y - 5.0);
        return step(p.x, 2.0) * step(1.0, floor(mod(n/(exp2(floor(p.x - 3.0*p.y))),2.0)));
    }

    float ring(vec2 uv, float rnd)
    {
        float t = 0.6*(u_time+0.2*rnd);
        float i = floor(t/2.0);
        vec2 pos = 2.0*vec2(rand(i*0.123), rand(i*2.371))-1.0;
	return smoothstep(0.2, 0.0, abs(length(uv-pos)-mod(t,2.0)));
    }

    void mainImage(out vec4 fragColor, in vec2 fragCoord)
    {

        vec2 p = fragCoord.xy;
	vec2 uv = p / u_resolution.xy - 0.5;
        p.y += 20.0*u_time;
        float r = rand(floor(p/8.0));
        vec2 ip = mod(p,8.0)-4.0;

        float a = -0.3*smoothstep(0.1, 0.8, length(uv)) +
            invader(ip, 809999.0*r) * (0.06 + 0.3*ring(uv,r) + max(0.0, 0.2*sin(10.0*r*u_time)));

	fragColor = vec4(u_color + a, 1.0);
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
  color = "#e5e5e5",
  timeMultiplier = 1.5,
}: ShaderBackgroundProps) => {
  const colorUniformValue = useMemo(() => new THREE.Color(color), [color]);

  const shaderUniforms = useMemo<Record<string, THREE.IUniform>>(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      ...(uniforms ?? {}),
      u_color: { value: colorUniformValue },
    }),
    [uniforms, colorUniformValue],
  );

  return (
    <section
      className={cn(
        "relative h-svh max-h-[1200px] min-h-[600px] w-full overflow-hidden",
        className,
      )}
    >
      <Canvas>
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

export { Shader16 };

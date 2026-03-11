"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec3 u_bgBase;
  uniform vec3 u_accentColor;
  uniform float u_intensityMultiplier;

  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    // Create subtle movement with noise
    vec2 pos = vec2(st * 1.5);
    float noise1 = snoise(pos + u_time * 0.1);
    float noise2 = snoise(pos * 2.0 - u_time * 0.15);
    
    float blendedNoise = (noise1 + noise2) * 0.5;
    
    // Subtle radial gradient to center spotlight
    float dist = distance(vUv, vec2(0.8, 0.2));
    float radial = 1.0 - smoothstep(0.0, 1.2, dist);

    // Mix color based on noise and radial focus
    float intensity = (blendedNoise * 0.15 + 0.05) * radial * u_intensityMultiplier;
    
    vec3 finalColor = mix(u_bgBase, u_accentColor, intensity);
    
    // Grid lines (subtle)
    vec2 gridCount = vec2(20.0, 20.0);
    vec2 gridSt = fract(vUv * gridCount);
    float lineThickness = 0.015;
    float lineX = step(1.0 - lineThickness, gridSt.x);
    float lineY = step(1.0 - lineThickness, gridSt.y);
    float gridLine = max(lineX, lineY);
    
    // Add grid with very low opacity
    // If it's light mode, grid lines should be dark. If dark mode, grid lines light.
    vec3 gridLineColor = mix(vec3(0.0), vec3(1.0), step(0.5, u_bgBase.r)); // Inverse of bg roughly
    finalColor = mix(finalColor, gridLineColor, gridLine * 0.02 * u_intensityMultiplier);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function WebGLBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const uniformsRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Shader Material Variables Default
    const isDark = true;

    uniformsRef.current = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_bgBase: { value: new THREE.Color("#09090B") },
      u_accentColor: { value: new THREE.Color("#3B82F6") },
      u_intensityMultiplier: { value: 1.0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: uniformsRef.current,
      depthWrite: false,
      depthTest: false,
    });

    // Full screen plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const render = () => {
      uniformsRef.current.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Resize Handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniformsRef.current.u_resolution.value.set(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    const currentMount = mountRef.current;

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Sync theme changes with shader uniforms
  useEffect(() => {
    if (uniformsRef.current && mounted) {
      const isDark = resolvedTheme !== "light";
      uniformsRef.current.u_bgBase.value = new THREE.Color(isDark ? "#09090B" : "#FFFFFF");
      uniformsRef.current.u_accentColor.value = new THREE.Color(isDark ? "#3B82F6" : "#2563EB");
      uniformsRef.current.u_intensityMultiplier.value = isDark ? 1.0 : 0.2;
    }
  }, [resolvedTheme, mounted]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

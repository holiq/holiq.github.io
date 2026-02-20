'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import { useTheme } from './ThemeProvider'

interface SphereConfig {
  color: string
  emissive: string
  scale: number
  position: [number, number, number]
  transparent: boolean
  opacity: number
  distort: number
  metalness: number
  roughness: number
}

function SceneSphere(props: SphereConfig) {
  return (
    <Sphere args={[1, 100, 200]} scale={props.scale} position={props.position}>
      <MeshDistortMaterial
        color={props.color}
        emissive={props.emissive}
        emissiveIntensity={0.2}
        attach="material"
        distort={props.distort}
        speed={2}
        roughness={props.roughness}
        metalness={props.metalness}
        transparent={props.transparent}
        opacity={props.opacity}
      />
    </Sphere>
  )
}

export default function Hero3D() {
  const [hasError, setHasError] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-slate-500 dark:text-gray-400">Unable to load 3D graphics</p>
      </div>
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      onCreated={() => setHasError(false)}
      className="w-full h-full"
      gl={{ alpha: true, antialias: true }}
      fallback={<LoadingSpinner />}
    >
      {isDark ? (
        // Dark mode: single large dramatic centered sphere
        <>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1.0} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.6} color="#6366F1" />
          <pointLight position={[10, -5, 0]} intensity={0.3} color="#EC4899" />
          <SceneSphere
            color="#8B5CF6"
            emissive="#4C1D95"
            scale={2.5}
            position={[0, 0, 0]}
            transparent={false}
            opacity={1}
            distort={0.5}
            metalness={0.75}
            roughness={0.2}
          />
        </>
      ) : (
        // Light mode: two translucent spheres pushed to sides — decorative, not blocking text
        <>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ede9fe" />
          <pointLight position={[0, 5, 3]} intensity={1.0} color="#A78BFA" />
          <pointLight position={[-5, -5, 0]} intensity={0.6} color="#818CF8" />
          {/* Left sphere */}
          <SceneSphere
            color="#7C3AED"
            emissive="#5B21B6"
            scale={1.8}
            position={[-3.2, 0.5, -1]}
            transparent
            opacity={0.45}
            distort={0.45}
            metalness={0.1}
            roughness={0.05}
          />
          {/* Right sphere */}
          <SceneSphere
            color="#6D28D9"
            emissive="#4C1D95"
            scale={1.4}
            position={[3.0, -0.8, -1]}
            transparent
            opacity={0.35}
            distort={0.35}
            metalness={0.1}
            roughness={0.05}
          />
        </>
      )}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

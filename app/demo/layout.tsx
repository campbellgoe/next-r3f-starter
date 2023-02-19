"use client"
import { Canvas } from "@react-three/fiber"

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Canvas
      gl={{ physicallyCorrectLights: true }}
      camera={{ position: [-6, 0, 16], fov: 36 }}
    >
      {children}
    </Canvas>
  )
}

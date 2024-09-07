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
      camera={{ position: [-6, 0, 16] as [x:number, y:number, z:number], fov: 36 }}
      shadows
    >
      {children}
    </Canvas>
  )
}

"use client"
import { Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import type { GLTF } from "three-stdlib"

function IPhone(props: any) {
  const { scene } = useGLTF("/models/iphone.glb") as GLTF

  useFrame(() => {
    scene.rotation.y += 0.01
  })

  return <primitive {...props} object={scene} />
}

export default function Page() {
  return (
    <>
      <color attach="background" args={[0xe2f4df]} />

      <ambientLight />
      <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
      <directionalLight intensity={0.8} position={[-6, 2, 2]} />

      <Suspense>
        <Environment preset="park" />
        <IPhone />
      </Suspense>

      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.9} />
      </EffectComposer>
    </>
  )
}

"use client"
import { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, useGLTF } from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary"
// import { EffectComposer, Bloom } from "@react-three/postprocessing"
import type { GLTF } from "three-stdlib"

function IPhone(props: any) {
  const { scene } = useGLTF("/models/iphone.glb") as GLTF

  useFrame((_state, delta) => {
    scene.rotation.y += 0.1*delta
  })

  return <primitive {...props} object={scene} />
}

export default function Page() {
  return (
    <>
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Not loading</div>}>
        {/* <color attach="background" args={[0xe2f4df]} /> */}
        <ambientLight />
        <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
        <directionalLight intensity={0.8} position={[-6, 2, 2]} />
        <Suspense>
          <Environment preset="park" />
          <IPhone />
          <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial />
          </mesh>
        </Suspense>
        {/* <EffectComposer>
          <Bloom intensity={1.5} luminanceThreshold={0.9} />
        </EffectComposer> */}
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

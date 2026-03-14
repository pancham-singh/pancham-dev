// app/components/ThreeBackground.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

function ClayBlob({ position, color, scale = 1 }:any) {
    return (
        <mesh position={position} scale={scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color={color}
                roughness={0.4}
                metalness={0.1}
                emissive={new THREE.Color(color).multiplyScalar(0.2)}
            />
        </mesh>
    )
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 opacity-30">
            <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Suspense fallback={null}>
                    <ClayBlob position={[-4, 2, -2]} color="#b09076" scale={1.2} />
                    <ClayBlob position={[5, -2, -1]} color="#9c7b62" scale={1.5} />
                    <ClayBlob position={[2, 3, -3]} color="#d5c4b4" scale={0.8} />
                    <ClayBlob position={[-3, -2, -4]} color="#7e634d" scale={1} />

                    <Environment preset="sunset" />
                    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                </Suspense>
            </Canvas>
        </div>
    )
}
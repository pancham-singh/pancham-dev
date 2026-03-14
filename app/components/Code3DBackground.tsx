// app/components/Code3DBackground.tsx
'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, MeshDistortMaterial, Box, Line } from '@react-three/drei'
import * as THREE from 'three'

// Floating Code Characters
function FloatingCode({ position, char, color = '#569cd6', scale = 1, speed = 1 }:any) {
    const meshRef: any = useRef(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005 * speed
            meshRef.current.rotation.y += 0.01 * speed
        }
    })

    return (
        <Float speed={speed * 2} floatIntensity={0.5} rotationIntensity={0.2}>
            <Text
                ref={meshRef}
                position={position}
                fontSize={0.5 * scale}
                color={color}
                font="https://fonts.gstatic.com/s/monoton/v15/5h1aiZUrOngCibe4TkHLQg.woff"
                anchorX="center"
                anchorY="middle"
            >
                {char}
            </Text>
        </Float>
    )
}

// Coding Cube with Matrix effect
function CodeCube({ position, color = '#3b82f6' }:any) {
    const meshRef:any = useRef(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005
            meshRef.current.rotation.y += 0.007
        }
    })

    return (
        <Box ref={meshRef} args={[1, 1, 1]} position={position}>
            <MeshDistortMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.3}
                wireframe
                distort={0.2}
                speed={2}
                transparent
                opacity={0.6}
            />
        </Box>
    )
}

// Binary Rain Lines
function BinaryRain() {
    const count = 50

    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 30
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10
    }

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#4ade80"
                size={0.1}
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

// Code Window Frame
function CodeWindow() {
    return (
        <group position={[0, 0, -15]}>
            {/* Window frame */}
            <Box args={[12, 8, 0.2]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#1e1e2e" emissive="#0a0c10" transparent opacity={0.3} />
            </Box>

            {/* Code lines */}
            {[...Array(10)].map((_, i) => (
                <Box
                    key={i}
                    args={[8 - i * 0.5, 0.1, 0.1]}
                    position={[-2 + i * 0.4, 2 - i * 0.4, 0.1]}
                >
                    <meshStandardMaterial color="#569cd6" emissive="#569cd6" emissiveIntensity={0.2} />
                </Box>
            ))}
        </group>
    )
}

export default function Code3DBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-code-dark to-[#151a2a]">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
                <pointLight position={[5, 5, 5]} intensity={0.5} color="#4ade80" />

                {/* Programming characters floating */}
                <FloatingCode position={[-4, 2, -3]} char="{" color="#569cd6" scale={1.2} speed={0.5} />
                <FloatingCode position={[5, -1, -2]} char="}" color="#ce9178" scale={1} speed={0.7} />
                <FloatingCode position={[3, 3, -4]} char="<" color="#6a9955" scale={1.1} speed={0.4} />
                <FloatingCode position={[-3, -2, -5]} char=">" color="#dcdcaa" scale={1.3} speed={0.6} />
                <FloatingCode position={[0, 4, -6]} char="/" color="#c586c0" scale={1.2} speed={0.8} />
                <FloatingCode position={[-5, -3, -4]} char="=" color="#4ade80" scale={1} speed={0.5} />
                <FloatingCode position={[4, -4, -3]} char=";" color="#569cd6" scale={1.1} speed={0.7} />
                <FloatingCode position={[-2, 5, -5]} char="(" color="#ce9178" scale={1.2} speed={0.4} />
                <FloatingCode position={[2, -3, -6]} char=")" color="#6a9955" scale={1} speed={0.6} />
                <FloatingCode position={[6, 2, -8]} char="[" color="#dcdcaa" scale={1.1} speed={0.5} />
                <FloatingCode position={[-6, -1, -7]} char="]" color="#c586c0" scale={1.2} speed={0.7} />

                {/* Code cubes */}
                <CodeCube position={[-2, 0, -8]} color="#3b82f6" />
                <CodeCube position={[3, -2, -10]} color="#4ade80" />
                <CodeCube position={[-1, 3, -12]} color="#ce9178" />
                <CodeCube position={[4, 2, -14]} color="#569cd6" />

                {/* Binary rain effect */}
                <BinaryRain />

                {/* Code window in background */}
                <CodeWindow />

                {/* Grid floor for tech feel */}
                <gridHelper args={[30, 20, "#3b82f6", "#1e40af"]} position={[0, -5, -5]} />
            </Canvas>

            {/* Overlay gradient for better readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-code-dark/50 via-transparent to-code-dark/30 pointer-events-none" />
        </div>
    )
}
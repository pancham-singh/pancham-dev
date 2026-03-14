// app/components/Character3D.tsx
'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, OrbitControls, Text3D, Center, Float } from '@react-three/drei'
import * as THREE from 'three'

// This component creates a 3D character from a 2D image using a plane with the image texture
function PhotoCharacter({ imageUrl, mousePosition }: { imageUrl: string; mousePosition: { x: number; y: number } }) {
    const meshRef = useRef<THREE.Mesh>(null)
    const groupRef = useRef<THREE.Group>(null)
    const [texture, setTexture] = useState<THREE.Texture | null>(null)

    useEffect(() => {
        if (imageUrl) {
            const loader = new THREE.TextureLoader()
            loader.load(imageUrl, (loadedTexture) => {
                setTexture(loadedTexture)
            })
        }
    }, [imageUrl])

    useFrame(() => {
        if (groupRef.current) {
            // Make character follow cursor smoothly
            const targetRotY = mousePosition.x * 0.5 // -0.5 to 0.5 range
            const targetRotX = mousePosition.y * 0.3 // -0.3 to 0.3 range

            // Smooth interpolation
            groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05
            groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05

            // Add subtle floating animation
            groupRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.1
        }
    })

    if (!texture) return null

    return (
        <group ref={groupRef}>
            {/* Main character plane */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <planeGeometry args={[3, 3]} />
                <meshStandardMaterial
                    map={texture}
                    side={THREE.DoubleSide}
                    emissive={new THREE.Color('#0ea5e9')}
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Glowing outline */}
            <mesh position={[0, 0, -0.1]}>
                <planeGeometry args={[3.1, 3.1]} />
                <meshBasicMaterial color="#0ea5e9" transparent opacity={0.2} />
            </mesh>

            {/* Floating particles around character */}
            {[...Array(8)].map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[
                        Math.sin(i * Math.PI / 4) * 1.8,
                        Math.cos(i * Math.PI / 4) * 1.8,
                        0.2
                    ]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshStandardMaterial
                            color={['#0ea5e9', '#ec4899', '#8b5cf6', '#f59e0b'][i % 4]}
                            emissive={['#0ea5e9', '#ec4899', '#8b5cf6', '#f59e0b'][i % 4]}
                            emissiveIntensity={0.8}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    )
}

// Or use a 3D model if you have one
function GlowingCharacter({ mousePosition }: { mousePosition: { x: number; y: number } }) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (groupRef.current) {
            const targetRotY = mousePosition.x * 0.8
            const targetRotX = mousePosition.y * 0.5

            groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05
            groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05

            // Floating animation
            groupRef.current.position.y = Math.sin(Date.now() * 0.003) * 0.2
        }
    })

    return (
        <group ref={groupRef}>
            {/* Head */}
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial
                    color="#f0f0f0"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.3}
                    roughness={0.2}
                    metalness={0.1}
                />
            </mesh>

            {/* Eyes */}
            <mesh position={[-0.3, 0.7, 0.7]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[0.3, 0.7, 0.7]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#000000" />
            </mesh>

            {/* Body */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.6, 0.8, 1.2, 8]} />
                <meshStandardMaterial
                    color="#0ea5e9"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Glowing aura */}
            <mesh position={[0, 0.5, -0.5]}>
                <sphereGeometry args={[1.2, 16, 16]} />
                <meshBasicMaterial color="#0ea5e9" transparent opacity={0.1} />
            </mesh>

            {/* Floating code characters */}
            <Float speed={2} floatIntensity={0.5}>
                <Text3D
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={0.2}
                    height={0.05}
                    position={[1.2, 0.8, 0.2]}
                >
                    {'<'}
                    <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
                </Text3D>
            </Float>

            <Float speed={1.5} floatIntensity={0.6}>
                <Text3D
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={0.2}
                    height={0.05}
                    position={[-1.2, 0.2, -0.3]}
                >
                    {'/>'}
                    <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
                </Text3D>
            </Float>
        </group>
    )
}

interface Character3DProps {
    imageUrl?: string
    use3DModel?: boolean
}

export default function Character3D({ imageUrl, use3DModel = false }: Character3DProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Convert mouse position to normalized coordinates (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = -(e.clientY / window.innerHeight) * 2 + 1
            setMousePosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            className="relative w-full h-full cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <pointLight position={[-5, 5, 5]} intensity={1} color="#ec4899" />
                <pointLight position={[5, -5, 5]} intensity={1} color="#0ea5e9" />

                {use3DModel ? (
                    <GlowingCharacter mousePosition={mousePosition} />
                ) : (
                    imageUrl && <PhotoCharacter imageUrl={imageUrl} mousePosition={mousePosition} />
                )}

                {/* Floating particles background */}
                {[...Array(20)].map((_, i) => (
                    <Float key={i} speed={1} floatIntensity={2}>
                        <mesh position={[
                            (Math.random() - 0.5) * 8,
                            (Math.random() - 0.5) * 8,
                            (Math.random() - 0.5) * 5 - 5
                        ]}>
                            <sphereGeometry args={[0.03, 4, 4]} />
                            <meshStandardMaterial
                                color={`hsl(${200 + Math.random() * 100}, 80%, 60%)`}
                                emissive={`hsl(${200 + Math.random() * 100}, 80%, 60%)`}
                                emissiveIntensity={0.8}
                            />
                        </mesh>
                    </Float>
                ))}

                <Environment preset="sunset" />
            </Canvas>

            {/* Glow effect on hover */}
            {isHovering && (
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl animate-pulse" />
            )}
        </div>
    )
}
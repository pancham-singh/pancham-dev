// app/components/FloatingCodeBackground.tsx
'use client'

import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    char: string
    speed: number
    size: number
    opacity: number
    color: string
}

export default function FloatingCodeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        setCanvasDimensions()
        window.addEventListener('resize', setCanvasDimensions)

        // Code snippets for floating particles
        const codeSnippets = [
            '{', '}', '(', ')', '[', ']', '<', '>', '=', ';',
            'const', 'let', 'var', 'function', 'return', 'if', 'else',
            'for', 'while', 'import', 'export', 'default', 'class',
            'React', 'useState', 'useEffect', 'props', 'state',
            'npm', 'yarn', 'git', 'commit', 'push', 'pull',
            'AWS', 'Lambda', 'Docker', 'K8s', 'API', 'DB',
            '=>', '&&', '||', '++', '--', '+=', '-=',
            '0', '1', 'true', 'false', 'null', 'undefined'
        ]

        // Create particles
        const particles: Particle[] = []
        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                char: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                speed: 0.2 + Math.random() * 0.5,
                size: 12 + Math.random() * 20,
                opacity: 0.1 + Math.random() * 0.3,
                color: `hsl(${200 + Math.random() * 40}, 70%, 60%)`
            })
        }

        // Animation
        function animate() {
            if(ctx && canvas){
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                // Draw gradient background
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
                gradient.addColorStop(0, '#0a0c10')
                gradient.addColorStop(0.5, '#1e1e2e')
                gradient.addColorStop(1, '#0a0c10')
                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                // Draw and update particles
                particles.forEach(particle => {
                    // Move particles
                    particle.y += particle.speed
                    if (particle.y > canvas.height) {
                        particle.y = -20
                        particle.x = Math.random() * canvas.width
                    }

                    // Add slight horizontal movement
                    particle.x += Math.sin(Date.now() * 0.001 + particle.y) * 0.1

                    // Draw particle
                    ctx.font = `${particle.size}px 'Monaco', 'Monospace', monospace`
                    ctx.fillStyle = particle.color
                    ctx.globalAlpha = particle.opacity
                    ctx.fillText(particle.char, particle.x, particle.y)

                    // Draw connecting lines
                    particles.forEach(otherParticle => {
                        const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y)
                        if (distance < 100) {
                            ctx.beginPath()
                            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
                            ctx.lineWidth = 1
                            ctx.moveTo(particle.x, particle.y)
                            ctx.lineTo(otherParticle.x, otherParticle.y)
                            ctx.stroke()
                        }
                    })
                })
            }

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', setCanvasDimensions)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}
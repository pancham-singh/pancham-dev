// app/components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail, Download, Sparkles, ArrowRight, Award, Code2, Zap } from 'lucide-react'
import Character3D from './Character3D'

interface HeroSectionProps {
    characterImage?: string
}

export default function HeroSection({ characterImage }: HeroSectionProps) {
    return (
        <section className="min-h-screen relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-vibrant animate-gradient opacity-30" />

            {/* Floating orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Grid pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0)',
                backgroundSize: '40px 40px',
                opacity: 0.1
            }} />

            <div className="container mx-auto px-4 h-screen relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                    {/* Left side - 3D Character */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-[600px] relative"
                    >
                        <Character3D imageUrl={characterImage} />

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl"
                        >
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-neon-purple" />
                                <span className="text-sm font-medium">9+ Years Experience</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                            className="absolute bottom-20 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl"
                        >
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-neon-blue" />
                                <span className="text-sm font-medium">10+ Projects</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - About Me */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left"
                    >
                        {/* Welcome badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-full mb-6"
                        >
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-medium">Welcome to my portfolio!</span>
                        </motion.div>

                        {/* Name with gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold mb-4"
                        >
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient">
                Pancham Singh
              </span>
                        </motion.h1>

                        {/* Animated typing effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-2xl md:text-3xl text-gray-700 mb-6 font-light"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'React Specialist',
                                    2000,
                                    'Node.js Expert',
                                    2000,
                                    'Cloud Architect',
                                    2000,
                                    'UI/UX Enthusiast',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-semibold bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text"
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                        >
                            I craft exceptional digital experiences with 9+ years of expertise in building scalable,
                            high-performance web and mobile applications. Passionate about clean code, innovative
                            solutions, and pushing the boundaries of what's possible on the web.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="grid grid-cols-3 gap-4 mb-8"
                        >
                            {[
                                { value: '9+', label: 'Years', color: 'from-neon-blue to-neon-purple' },
                                { value: '10+', label: 'Projects', color: 'from-neon-purple to-neon-pink' },
                                { value: '100%', label: 'Success', color: 'from-neon-pink to-neon-orange' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/Pancham Singh -FullStack Developer.pdf"
                                className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-neon-blue text-neon-blue rounded-full font-semibold hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                            className="flex gap-4 mt-8"
                        >
                            {[
                                { icon: Github, href: 'https://github.com/pancham-singh', color: 'hover:text-neon-purple' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/pancham-singh-253b65120', color: 'hover:text-neon-blue' },
                                { icon: Mail, href: 'mailto:dev.pancham.singh@email.com', color: 'hover:text-neon-pink' },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ${social.color} transition-all duration-300`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-neon-blue rounded-full mt-2 animate-bounce" />
                </div>
            </motion.div>
        </section>
    )
}
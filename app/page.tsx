// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import VibrantSkills from './components/VibrantSkills'
import VibrantExperience from './components/VibrantExperience'
import VibrantProjects from './components/VibrantProjects'
import VibrantContact from './components/VibrantContact'
import { motion } from 'framer-motion'
import {ArrowUp, Heart} from 'lucide-react'
import FloatingCodeBackground from "@/app/components/FloatingCodeBackground";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
const classNames = `absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 20 L40 20 L30 40 Z" fill="%23ffffff" opacity="0.03"/%3E%3C/svg%3E")] bg-repeat`
  return (
      <main className="relative">
        {/* Your photo URL - replace with your actual image */}
        <HeroSection characterImage="/your-photo.jpeg" />
<FloatingCodeBackground/>
        <VibrantSkills />
        <VibrantExperience />
        <VibrantProjects />
        <VibrantContact />

        {/* Footer */}
        <footer className="py-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
          <div className={classNames} />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text font-bold text-xl">
              Pancham Singh
            </span>
              <span className="text-2xl">✨</span>
            </div>

            <p className="text-gray-400 mb-4 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-neon-pink fill-current animate-pulse" /> using Next.js & Three.js
            </p>

            <p className="text-sm text-gray-500">
              © 2024 All rights reserved. | Full Stack Developer
            </p>
          </div>
        </footer>

        {/* Scroll to top button */}
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </main>
  )
}
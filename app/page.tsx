// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  Sparkles,
  Download
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Code3DBackground from './components/Code3DBackground'
import ExperienceTimeline from './components/ExperienceTimeline'
import ProjectsSlider from './components/ProjectsSlider'
import SkillsSection from './components/SkillsSection'
import FloatingCodeBackground from "@/app/components/FloatingCodeBackground";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="min-h-screen bg-code-dark"></div>
  }

  return (
      <main className="min-h-screen relative overflow-x-hidden">
        {/*<Code3DBackground />*/}
        <FloatingCodeBackground />

        {/* Matrix rain overlay */}
        <div className="matrix-rain" />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
              {/* Animated code badge */}
              <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-6"
              >
              <span className="bg-code-light/50 backdrop-blur-sm text-ocean-300 px-4 py-2 rounded-full text-sm font-mono border border-ocean-500/30">
                <span className="text-ocean-400">const</span>{" "}
                <span className="text-ocean-200">developer</span>{" "}
                <span className="text-ocean-400">=</span>{" "}
                <span className="text-ocean-300">&quot;Pancham Singh&quot;</span>;
              </span>
              </motion.div>

              {/* Name with glow effect */}
              <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-7xl md:text-8xl font-bold mb-4 animate-glow"
              >
              <span className="bg-gradient-to-r from-ocean-400 via-ocean-300 to-ocean-500 text-transparent bg-clip-text">
                Pancham Singh
              </span>
              </motion.h1>

              <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-2xl md:text-3xl text-ocean-300 mb-6 font-mono"
              >
                &lt;Full Stack Developer /&gt;
              </motion.h2>

              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg text-ocean-200/80 max-w-2xl mx-auto mb-8 font-mono"
              >
                {`// 9+ years crafting scalable, high-quality web and mobile software`}
              </motion.p>

              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="flex gap-4 justify-center flex-wrap"
              >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="code-button"
                >
                  <span className="relative z-10">Hire me</span>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#experience"
                    className="code-button bg-transparent border-2 border-ocean-500 hover:bg-ocean-500/10"
                >
                  <span className="relative z-10">View my work</span>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf"
                    className="code-button bg-transparent border-2 border-ocean-500 hover:bg-ocean-500/10"
                >
                  <Download className="inline-block w-4 h-4 mr-2" />
                  <span className="relative z-10">Resume</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-6 h-10 border-2 border-ocean-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-ocean-400 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-ocean-300 mb-4 font-mono">
                <span className="text-ocean-400">{'<'}</span>
                Technical Skills
                <span className="text-ocean-400">{'/>'}</span>
              </h2>
              <p className="text-ocean-200/60 font-mono">
                {`// Technologies I work with`}
              </p>
            </motion.div>

            <SkillsSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-ocean-300 mb-4 font-mono">
                <span className="text-ocean-400">{'<'}</span>
                Experience
                <span className="text-ocean-400">{'/>'}</span>
              </h2>
              <p className="text-ocean-200/60 font-mono">
                {`// 9+ years of professional journey`}
              </p>
            </motion.div>

            <ExperienceTimeline />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-ocean-300 mb-4 font-mono">
                <span className="text-ocean-400">{'<'}</span>
                Featured Projects
                <span className="text-ocean-400">{'/>'}</span>
              </h2>
              <p className="text-ocean-200/60 font-mono">
                {`// Key projects with measurable impact`}
              </p>
            </motion.div>

            <ProjectsSlider />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-ocean-300 mb-4 font-mono">
                <span className="text-ocean-400">{'<'}</span>
                Let's Connect
                <span className="text-ocean-400">{'/>'}</span>
              </h2>
              <p className="text-ocean-200/60 font-mono">
                {`// Let's build something amazing together`}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Contact Info */}
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="glass-card p-8"
              >
                <h3 className="text-2xl font-bold text-ocean-300 mb-6 font-mono">Contact Info</h3>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "pancham.singh@email.com", href: "mailto:pancham.singh@email.com" },
                    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: Github, label: "GitHub", value: "@pancham-singh", href: "https://github.com/pancham-singh" },
                    { icon: Linkedin, label: "LinkedIn", value: "in/pancham-singh", href: "https://linkedin.com/in/pancham-singh" },
                  ].map((item, index) => (
                      <motion.a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-ocean-500/20 rounded-lg group-hover:bg-ocean-500/30 transition-colors">
                          <item.icon className="w-5 h-5 text-ocean-400" />
                        </div>
                        <div>
                          <p className="text-sm text-ocean-400">{item.label}</p>
                          <p className="text-ocean-200">{item.value}</p>
                        </div>
                      </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-8"
              >
                <h3 className="text-2xl font-bold text-ocean-300 mb-6 font-mono">Send Message</h3>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                      type="text"
                      placeholder="// Your name"
                      className="code-input w-full"
                  />
                  <input
                      type="email"
                      placeholder="// Your email"
                      className="code-input w-full"
                  />
                  <textarea
                      rows={4}
                      placeholder="// Your message"
                      className="code-input w-full resize-none"
                  />

                  <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="code-button w-full"
                  >
                    <span className="relative z-10">Send message</span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-ocean-500/20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-ocean-400 font-mono text-sm">
              <span className="text-ocean-500">©</span> 2024 Pancham Singh - Full Stack Developer
            </p>
            <p className="text-ocean-500/50 font-mono text-xs mt-2">
              {`// Built with Next.js, Three.js, and 💙`}
            </p>
          </div>
        </footer>
      </main>
  )
}
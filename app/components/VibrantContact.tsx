'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import EmailJSContactForm from "@/app/components/EmailJSContactForm";
export default function VibrantContact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />

            {/* Floating shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient">
              Let's Connect
            </span>
                    </h2>
                    <p className="text-xl text-gray-600">Have a project in mind? Let's create something amazing together!</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">
                                Get in Touch
                            </h3>

                            <div className="space-y-4">
                                {[
                                    { icon: Mail, label: 'Email', value: 'dev.pancham.singh@email.com', href: 'mailto:dev.pancham.singh@email.com', color: 'from-neon-blue to-neon-purple' },
                                    { icon: Phone, label: 'Phone', value: '+91 98721 13805', href: 'tel:+919872113805', color: 'from-neon-purple to-neon-pink' },
                                    { icon: MapPin, label: 'Location', value: 'Patiala,Punjab, India', href: '#', color: 'from-neon-pink to-neon-orange' },
                                ].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">{item.label}</p>
                                            <p className="font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple group-hover:bg-clip-text">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink text-transparent bg-clip-text">
                                Social Media
                            </h3>

                            <div className="flex gap-4">
                                {[
                                    { icon: FaGithub, href: 'https://github.com/pancham-singh', color: 'from-gray-700 to-gray-900', label: 'GitHub' },
                                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pancham-singh-253b65120/', color: 'from-blue-600 to-blue-700', label: 'LinkedIn' },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`flex-1 p-4 rounded-xl bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
                                    >
                                        <social.icon className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-medium">{social.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="bg-gradient-to-r from-neon-green to-neon-blue p-4 rounded-2xl text-white text-center"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">Available for New opportunities</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <EmailJSContactForm/>
                </div>
            </div>
        </section>
    )
}
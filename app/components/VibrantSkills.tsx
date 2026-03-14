// app/components/VibrantSkills.tsx
'use client'

import { motion } from 'framer-motion'
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiNodedotjs,
    SiNestjs, SiGraphql, SiMongodb, SiPostgresql, SiDocker,
    SiJest, SiCypress, SiGit, SiJira, SiCss, SiSocketdotio,SiJavascript,SiHtml5
} from 'react-icons/si'
import { GiDatabase as  SiDynamodb} from "react-icons/gi";
import { FaAws as  SiAmazonaws} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 100 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 95 },
    { name: 'JavaScript', icon: SiJavascript, color: '#3100CC', level: 95 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 100},
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E', level: 90 },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', level: 90 },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 90 },
    { name: 'DynamoDB', icon: SiDynamodb, color: '#AADD09', level: 90 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 88 },
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', level: 85 },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 82 },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
    { name: 'Redux', icon: SiRedux, color: '#764ABC', level: 90 },
    { name: 'Jest', icon: SiJest, color: '#C21325', level: 90 },
    { name: 'Cypress', icon: SiCypress, color: '#17202C', level: 80 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 95 },
    { name: 'Socket.io', icon: SiSocketdotio, color: '#010101', level: 85 },
    { name: 'HTML5', icon: SiHtml5, color: '#dc532c', level: 95 },
    { name: 'CSS3', icon: FaCss3Alt, color: '#3178C6', level: 95 },

]

export default function VibrantSkills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-neon-blue/5 to-white" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient">
              Technical Expertise
            </span>
                    </h2>
                    <p className="text-xl text-gray-600">Technologies I work with daily</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { type: 'spring', stiffness: 300 }
                            }}
                            className="group relative"
                        >
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-neon-blue/50">
                                <div className="flex flex-col items-center text-center">
                                    <skill.icon
                                        className="w-12 h-12 mb-3 transition-transform group-hover:scale-110"
                                        style={{ color: skill.color }}
                                    />
                                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>

                                    {/* Skill level indicator */}
                                    <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ delay: index * 0.05 + 0.5 }}
                                            className="h-full rounded-full"
                                            style={{
                                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
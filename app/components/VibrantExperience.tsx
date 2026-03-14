// app/components/VibrantExperience.tsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award, ChevronRight, Sparkles } from 'lucide-react'

const experiences = [
    {
        title: 'Sr. Software Engineer',
        company: 'CPP INDIA',
        period: 'Oct 2021 - Present',
        location: 'Gurgaon, Haryana | Remote',
        achievements: [
            'Refactored legacy modules with rigorous code optimization, improving platform performance by 45%',
            'Drove adoption of Next.js/React modular patterns, accelerating release frequency by 60%',
            'Built microservices with NestJS and PostgreSQL, strengthening API contracts',
            'Engineered serverless pipelines on AWS, sustaining 100% service uptime',
            'Reduced defects by 80% through code reviews and linting enforcement'
        ],
        color: 'from-neon-blue to-neon-purple'
    },
    {
        title: 'Sr. Software Engineer',
        company: 'Terasol Technologies',
        period: 'Jun 2020 - Oct 2021',
        location: 'Noida | Remote',
        achievements: [
            'Designed RESTful APIs improving response times by 90%',
            'Built React Native interfaces boosting user engagement by 50%',
            'Integrated RTC capabilities increasing session stability by 85%',
            'Maintained 99.95% uptime during peak traffic'
        ],
        color: 'from-neon-purple to-neon-pink'
    },
    {
        title: 'Sr. Software Engineer',
        company: 'Colseloop',
        period: 'Sep 2019 - May 2020',
        location: 'Mohali',
        achievements: [
            'Implemented data visualizations improving decision-making by 90%',
            'Developed Node.js/MongoDB services cutting API latency by 75%',
            'Reduced UI defects by 50% through state management optimization'
        ],
        color: 'from-neon-pink to-neon-orange'
    },
    {
        title: 'Software Engineer',
        company: 'Pielinfo Systems',
        period: 'Jul 2018 - Sep 2019',
        location: 'Mohali',
        achievements: [
            'Engineered a reusable React UI library for client/candidate portals',
            'Created RESTful services for dynamic form generation, reducing manual configuration by 50%',
            'Applied microservices and micro-frontend patterns to enhance scalability'
        ],
        color: 'from-neon-orange to-neon-yellow'
    },
    {
        title: 'Full Stack Developer',
        company: 'YappApp India',
        period: 'May 2017 - Jun 2018',
        location: 'Mohali',
        achievements: [
            'Built GraphQL and REST services in Node.js and Java',
            'Developed admin panels and real-time chat with Socket.IO',
            'Delivered a React Native gaming chat app'
        ],
        color: 'from-neon-yellow to-neon-green'
    },
    {
        title: "Software Engineer",
        company: "Mindful (Applegos)",
        period: "Nov 2016 - May 2017",
        location: "Mohali",
        achievements: [
            "Developed RESTful services in Node.js and POS integrations with Java Jersey to support transactional flows",
            "Built Angular 4 frontends and optimized JS/CSS/images, reducing page load",
            "Integrated third-party APIs to extend platform capabilities, elevating user experience"
        ],
        color: 'from-neon-red to-neon-green'

    }
]

export default function VibrantExperience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-neon-purple/5 to-white" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient">
              Professional Journey
            </span>
                    </h2>
                    <p className="text-xl text-gray-600">9+ years of crafting exceptional digital experiences</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink rounded-full" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-lg z-10"
                            >
                                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-25" />
                            </motion.div>

                            {/* Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-neon-blue/30"
                                >
                                    {/* Header with gradient */}
                                    <div className={`bg-gradient-to-r ${exp.color} p-4 -m-6 mb-4 rounded-t-2xl text-white`}>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold">{exp.title}</h3>
                                                <p className="text-white/90">{exp.company}</p>
                                            </div>
                                            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mt-2 text-white/80">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <ul className="space-y-3 mt-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-2 text-gray-700"
                                            >
                                                <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`} />
                                                <span className="text-sm">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Empty div for layout */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
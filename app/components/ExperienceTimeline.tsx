// app/components/ExperienceTimeline.tsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

const experiences = [
    {
        id: 1,
        title: "Sr. Software Engineer",
        company: "CPP INDIA",
        period: "Oct 2021 - Present",
        location: "Gurgaon, Haryana | Remote",
        achievements: [
            "Refactored legacy modules with rigorous code optimization, improving platform performance by 45%",
            "Drove adoption of Next.js/React modular patterns, accelerating release frequency by 60%",
            "Built microservices with NestJS and PostgreSQL, strengthening API contracts",
            "Engineered serverless pipelines on AWS, sustaining 100% service uptime",
            "Reduced defects by 80% through code reviews and linting enforcement"
        ],
        technologies: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "AWS"]
    },
    {
        id: 2,
        title: "Sr. Software Engineer",
        company: "Terasol Technologies",
        period: "Jun 2020 - Oct 2021",
        location: "Noida | Remote",
        achievements: [
            "Designed RESTful APIs improving response times by 90%",
            "Built React Native interfaces boosting user engagement by 50%",
            "Integrated RTC capabilities increasing session stability by 85%",
            "Maintained 99.95% uptime during peak traffic"
        ],
        technologies: ["Node.js", "React Native", "REST APIs", "RTC", "JavaScript"]
    },
    {
        id: 3,
        title: "Sr. Software Engineer",
        company: "Colseloop",
        period: "Sep 2019 - May 2020",
        location: "Mohali",
        achievements: [
            "Implemented data visualizations improving decision-making by 90%",
            "Developed Node.js/MongoDB services cutting API latency by 75%",
            "Reduced UI defects by 50% through state management optimization"
        ],
        technologies: ["React", "Redux", "Node.js", "MongoDB"]
    },
    {
        id: 4,
        title: "Software Engineer",
        company: "Pielinfo Systems",
        period: "Jul 2018 - Sep 2019",
        location: "Mohali",
        achievements: [
            "Engineered a reusable React UI library for client/candidate portals",
            "Created RESTful services for dynamic form generation, reducing manual configuration by 50%",
            "Applied microservices and micro-frontend patterns to enhance scalability"
        ],
        technologies: ["React", "JavaScript", "Node.js", "Microservices"]
    },
    {
        id: 5,
        title: "Full Stack Developer",
        company: "YappApp India",
        period: "May 2017 - Jun 2018",
        location: "Mohali",
        achievements: [
            "Built GraphQL and REST services in Node.js and Java",
            "Developed admin panels and real-time chat with Socket.IO",
            "Delivered a React Native gaming chat app"
        ],
        technologies: ["Node.js", "Java", "GraphQL", "React Native", "Socket.IO"]
    }
]

export default function ExperienceTimeline() {
    return (
        <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ocean-400 via-ocean-500 to-ocean-600 rounded-full hidden lg:block" />

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-ocean-500 rounded-full border-4 border-ocean-200 hidden lg:block z-10" />

                        {/* Content card */}
                        <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-ocean-800">{exp.title}</h3>
                                        <p className="text-ocean-600 font-semibold">{exp.company}</p>
                                    </div>
                                    <div className="bg-ocean-500 text-white px-3 py-1 rounded-full text-sm">
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-ocean-500 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{exp.location}</span>
                                </div>

                                {/* Achievements */}
                                <ul className="space-y-2 mb-4">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-ocean-700">
                                            <Award className="w-4 h-4 text-ocean-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Empty div for layout */}
                        <div className="flex-1 hidden lg:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
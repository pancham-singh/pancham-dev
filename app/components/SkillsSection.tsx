// app/components/SkillsSection.tsx
'use client'

import { motion } from 'framer-motion'
import {
    SiReact, SiNextdotjs, SiTypescript, SiMui, SiTailwindcss, SiRedux, SiThreedotjs,
    SiNodedotjs, SiNestjs, SiGraphql, SiMongodb, SiPostgresql, SiMysql,
   SiDocker, SiJenkins, SiGit, SiJira, SiSonar,
    SiJest, SiCypress, SiSocketdotio, SiElasticsearch,
    SiKubernetes, SiRedis, SiPrisma, SiExpress,
} from 'react-icons/si';
import { GiDatabase as  SiDynamodb} from "react-icons/gi";
import { FaAws as  SiAmazonaws} from "react-icons/fa";
import {
    DiJava,
    DiJavascript1,
    DiMongodb,
    DiPostgresql,
    DiMysql,
    DiAws,
    DiDocker,
    DiGit,
    DiJenkins,
    DiNodejsSmall,
    DiReact
} from 'react-icons/di'

const skillCategories = [
    {
        name: "Frontend",
        icon: SiReact,
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Material-UI", icon: SiMui, color: "#007FFF" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Redux", icon: SiRedux, color: "#764ABC" },
            { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
        ]
    },
    {
        name: "Backend",
        icon: SiNodedotjs,
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
            { name: "Express", icon: SiExpress, color: "#000000" },
            { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
            { name: "Java", icon: DiJava, color: "#007396" },
        ]
    },
    {
        name: "Databases",
        icon: SiMongodb,
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "DynamoDB", icon: SiDynamodb, color: "#4053D6" },
            { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
        ]
    },
    {
        name: "Cloud & DevOps",
        icon: SiAmazonaws,
        skills: [
            // { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "JIRA", icon: SiJira, color: "#0052CC" },
        ]
    },
    {
        name: "Testing",
        icon: SiJest,
        skills: [
            { name: "Jest", icon: SiJest, color: "#C21325" },
            { name: "Cypress", icon: SiCypress, color: "#17202C" },
            { name: "React Testing Library", icon: SiReact, color: "#61DAFB" },
        ]
    },
    {
        name: "Tools",
        icon: SiGit,
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
            { name: "Sonar", icon: SiSonar, color: "#FD3456" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        ]
    }
]

export default function SkillsSection() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
                <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 group hover:shadow-2xl transition-all duration-300"
                >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-ocean-800">{category.name}</h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {category.skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                whileHover={{ scale: 1.05, x: 2 }}
                                className="flex items-center gap-2 p-2 bg-ocean-50 rounded-lg hover:bg-ocean-100 transition-colors cursor-pointer group/item"
                            >
                                <skill.icon
                                    className="w-5 h-5"
                                    style={{ color: skill.color }}
                                />
                                <span className="text-sm font-medium text-ocean-700 group-hover/item:text-ocean-900">
                  {skill.name}
                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
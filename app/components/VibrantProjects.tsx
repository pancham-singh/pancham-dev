// app/components/VibrantProjects.tsx
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { Github, ExternalLink, ChevronLeft, ChevronRight, Star, GitFork } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const projects = [
    {
        title: 'OneApp Module Federation',
        description: 'Migrated legacy micro-frontend platform to Next.js Module Federation for independent deployments.',
        impact: 'Improved release cadence by 50%',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        technologies: ['Next.js', 'React', 'Module Federation', 'Docker'],
        github: '#',
        live: '#',
        stars: 45,
        forks: 12,
        color: 'from-neon-blue to-neon-purple'
    },
    {
        title: 'Event-Driven Processing',
        description: 'Scalable batch processing pipeline with AWS serverless handling multi-million records.',
        impact: 'Scaled from 500K to 2.5M records',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        technologies: ['AWS Lambda', 'EventBridge', 'S3', 'Docker'],
        github: '#',
        live: '#',
        stars: 32,
        forks: 8,
        color: 'from-neon-purple to-neon-pink'
    },
    {
        title: 'Real-Time Chat Application',
        description: 'Scalable chat app with Socket.IO and React Native supporting concurrent users.',
        impact: '85% increase in session stability',
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        technologies: ['React Native', 'Socket.IO', 'Node.js', 'MongoDB'],
        github: '#',
        live: '#',
        stars: 28,
        forks: 6,
        color: 'from-neon-pink to-neon-orange'
    },
    {
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboards with D3.js and React for real-time KPI monitoring.',
        impact: '90% improvement in decision-making',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        technologies: ['React', 'D3.js', 'Redux', 'Node.js'],
        github: '#',
        live: '#',
        stars: 56,
        forks: 15,
        color: 'from-neon-orange to-neon-yellow'
    },
    {
        title: 'Microservices API Gateway',
        description: 'Scalable API gateway with NestJS handling rate limiting and authentication.',
        impact: '99.95% uptime during peak traffic',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        technologies: ['NestJS', 'Redis', 'Docker', 'Kubernetes'],
        github: '#',
        live: '#',
        stars: 41,
        forks: 10,
        color: 'from-neon-yellow to-neon-green'
    }
]

export default function VibrantProjects() {
    const swiperRef:any = useRef(null)

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-neon-pink/5 to-white" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient">
              Featured Projects
            </span>
                    </h2>
                    <p className="text-xl text-gray-600">Real-world solutions with measurable impact</p>
                </motion.div>

                <div className="relative px-12">
                    {/* Navigation buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple hover:text-white transition-all duration-300 group"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple hover:text-white transition-all duration-300 group"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white" />
                    </button>

                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="projects-swiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Image with gradient overlay */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-60 mix-blend-overlay`} />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                                        {/* Impact badge */}
                                        <div className={`inline-block bg-gradient-to-r ${project.color} text-white text-xs px-3 py-1 rounded-full mb-3`}>
                                            {project.impact}
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500" />
                                                {project.stars}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <GitFork className="w-4 h-4 text-gray-500" />
                                                {project.forks}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl pointer-events-none`} />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
// app/components/ProjectsSlider.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const projects = [
    {
        id: 1,
        title: "OneApp Next.js Module Federation Migration",
        description: "Migrated legacy micro-frontend platform to Next.js Module Federation to enable independently deployable modules and faster releases across teams.",
        impact: "Improved release cadence by 50% through modular delivery",
        technologies: ["Next.js", "Module Federation", "React", "Docker", "CI/CD"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/pancham-singh/oneapp",
        live: "https://oneapp-demo.vercel.app"
    },
    {
        id: 2,
        title: "Event-Driven Batch Processing Scale-Up",
        description: "Scalable, reliable batch data processing pipeline leveraging AWS serverless services to handle multi-million record workloads.",
        impact: "Scaled throughput from 500K to 2,500K records",
        technologies: ["AWS Lambda", "EventBridge", "S3", "Docker", "Node.js"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/pancham-singh/event-processing",
        live: "https://event-processing-demo.vercel.app"
    },
    {
        id: 3,
        title: "Real-Time Chat Application",
        description: "Built a scalable real-time chat application with Socket.IO and React Native, supporting concurrent users with robust presence features.",
        impact: "Increased session stability by 85%",
        technologies: ["React Native", "Socket.IO", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/pancham-singh/chat-app",
        live: "https://chat-app-demo.vercel.app"
    },
    {
        id: 4,
        title: "Data Visualization Dashboard",
        description: "Implemented interactive data visualizations with charting libraries to surface KPIs and improve decision-making processes.",
        impact: "Improved decision-making by 90%",
        technologies: ["React", "D3.js", "Redux", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/pancham-singh/dashboard",
        live: "https://dashboard-demo.vercel.app"
    },
    {
        id: 5,
        title: "Microservices API Gateway",
        description: "Designed and implemented a scalable API gateway with NestJS, handling rate limiting, authentication, and request routing.",
        impact: "Maintained 99.95% uptime during peak traffic",
        technologies: ["NestJS", "Redis", "JWT", "Docker", "Kubernetes"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/pancham-singh/api-gateway",
        live: "https://api-gateway-demo.vercel.app"
    }
]

export default function ProjectsSlider() {
    const swiperRef: any = useRef(null)

    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            {/* Custom navigation buttons */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-ocean-500 text-white p-3 rounded-full shadow-lg hover:bg-ocean-600 transition-all duration-300 hidden md:block"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-ocean-500 text-white p-3 rounded-full shadow-lg hover:bg-ocean-600 transition-all duration-300 hidden md:block"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <Swiper
                onSwiper={(swiper:any) => (swiperRef.current = swiper)}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
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
                navigation={false}
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
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-card overflow-hidden group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-code-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Overlay buttons */}
                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-code-light p-2 rounded-full hover:bg-ocean-500 transition-colors"
                                    >
                                        <Github className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-code-light p-2 rounded-full hover:bg-ocean-500 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-ocean-800 mb-2 line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-ocean-600 text-sm mb-3 line-clamp-2">
                                    {project.description}
                                </p>
                                <p className="text-ocean-500 font-semibold text-sm mb-3">
                                    Impact: {project.impact}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
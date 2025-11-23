import { motion } from 'framer-motion'
import { ExternalLink, Github, Loader2 } from 'lucide-react'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  demo: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Clean Project Card */}
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 h-full flex flex-col">
        {/* Top Gradient Bar */}
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/20 dark:to-cyan-900/20">
          {/* Loading Skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Loader2 className="w-8 h-8 text-purple-500" />
              </motion.div>
            </div>
          )}
          
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-110`}
          />
          
          {/* Error Fallback */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-200 to-cyan-200 dark:from-purple-900/30 dark:to-cyan-900/30">
              <div className="text-center p-4">
                <ExternalLink className="w-12 h-12 mx-auto mb-2 text-purple-500 opacity-50" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Image unavailable</p>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-800/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-5 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300 font-medium text-sm sm:text-base"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-medium text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chat Application',
      description: 'A sophisticated chat application leveraging Large Language Models for intelligent conversations. Built with React, Node.js, and integrated with OpenAI API.',
      tech: ['React', 'Node.js', 'LLM', 'OpenAI API', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Machine Learning Model Deployment Platform',
      description: 'End-to-end platform for training, deploying, and monitoring ML models. Features include model versioning, A/B testing, and real-time performance metrics.',
      tech: ['Python', 'TensorFlow', 'Docker', 'FastAPI', 'React'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analysis. Supports multiple data sources, real-time updates, and customizable visualizations.',
      tech: ['React', 'Python', 'Pandas', 'D3.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Full Stack E-Commerce Platform',
      description: 'Modern e-commerce platform with AI-powered recommendations, real-time inventory management, and secure payment processing.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Computer Vision Image Classifier',
      description: 'Deep learning model for image classification using CNN. Includes web interface for real-time predictions and model training capabilities.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Generative AI Content Creator',
      description: 'Platform for generating creative content using Generative AI. Supports text, image, and code generation with customizable parameters.',
      tech: ['React', 'Python', 'LangChain', 'Hugging Face', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1676299080920-3b54feca7f44?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section
      id="projects"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-purple-600 dark:text-purple-400"
          >
            Projects
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6 sm:mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Showcasing innovative solutions and creative implementations
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

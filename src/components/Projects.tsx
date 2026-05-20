import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, Filter, Play, X } from 'lucide-react'
import { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'All' | 'Generative AI' | 'Computer Vision' | 'Machine Learning' | 'Automation' | 'Full Stack'

interface Project {
  title: string
  subtitle: string
  description: string
  tech: string[]
  category: Category
  github: string
  demo: string
  featured: boolean
  badge?: string          // e.g. "93.5% Accuracy"
  gradient: string        // tailwind gradient classes for card accent
  videoEmbed?: string     // LinkedIn embed src — opens inline video modal
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  // ── FEATURED ──────────────────────────────────────────────────────────────
  {
    title: 'DocuRAG Assistant',
    subtitle: 'Enterprise RAG-Powered Document Intelligence',
    description:
      'Architected an enterprise-grade Retrieval-Augmented Generation (RAG) assistant using LangChain and LangGraph, integrating OpenAI API and Azure OpenAI with ChromaDB vector database for semantic search, context-aware document Q&A, and intelligent knowledge retrieval across unstructured data sources. Implemented agentic AI workflows using MCP (Model Context Protocol) with LangSmith for pipeline monitoring and hallucination mitigation.',
    tech: ['LangChain', 'LangGraph', 'LangSmith', 'OpenAI API', 'Azure OpenAI', 'ChromaDB', 'FastAPI', 'RAG', 'MCP', 'Python'],
    category: 'Generative AI',
    github: 'https://github.com/C-Logesh-Perumal-29',
    demo: 'https://drive.google.com/file/d/1W6EjssTv2ZQLuCFiApidaFUx4NOVYUlO/view?usp=sharing',
    featured: true,
    badge: 'Agentic AI',
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
  },
  {
    title: 'NutriVision AI',
    subtitle: 'Food & Vegetable Deep Learning Classifier',
    description:
      'Designed and trained two independent deep learning image classification models — a Food Classifier and a Vegetable Classifier — using CNN architecture with Transfer Learning (TensorFlow Hub pre-trained models), achieving 93.5% classification accuracy. Applied data augmentation, normalization, and hyperparameter tuning. Deployed as interactive Streamlit web applications supporting real-time image upload and live camera-based prediction.',
    tech: ['CNN', 'TensorFlow', 'Keras', 'Transfer Learning', 'TensorFlow Hub', 'OpenCV', 'Streamlit', 'PIL', 'NumPy', 'Python'],
    category: 'Computer Vision',
    github: 'https://github.com/C-Logesh-Perumal-29/Food_Classification',
    demo: 'https://drive.google.com/file/d/1gnkQEvuuB2GZ6aw-tD70Tu1hOMCBgAeF/view?usp=sharing',
    featured: true,
    badge: '93.5% Accuracy',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'ExpensiaAI',
    subtitle: 'Smart Bill Insight & Expense Intelligence System',
    description:
      'Production-ready Flask web application for intelligent bill processing, expense tracking, and AI-powered financial insights. Supports image and PDF bill uploads with automatic text extraction and categorization using Ollama LLM (qwen3-vl). Features a full dashboard with interactive analytics, category-wise and monthly expense trends, AI spending insights, and export functionality in PDF, Excel, and JSON formats. Includes secure user authentication, dark/light mode, and Lottie animations.',
    tech: ['Flask', 'Python', 'Ollama LLM', 'SQLite', 'Pandas', 'Chart.js', 'PDF Processing', 'OCR', 'REST APIs', 'HTML/CSS'],
    category: 'Generative AI',
    github: 'https://github.com/C-Logesh-Perumal-29/ExpensiaAI',
    demo: 'https://drive.google.com/file/d/1DZ5QcF8uPSFZ9g5B4wiK22TOridJo3Y6/view?usp=sharing',
    featured: true,
    badge: 'AI-Powered',
    gradient: 'from-rose-500 via-orange-500 to-amber-400',
  },

  // ── GRID ──────────────────────────────────────────────────────────────────
  {
    title: 'Face Detection & Recognition',
    subtitle: 'Computer Vision Web App with Streamlit',
    description:
      'Comprehensive web application built with Streamlit integrating both face detection and recognition. Uses Haar cascades and OpenCV for accurate face detection from uploaded images, and a trained face_recognition model to identify known individuals based on facial features — applicable across security, authentication, and image analysis domains.',
    tech: ['Streamlit', 'OpenCV', 'face_recognition', 'Python', 'Haar Cascades', 'Deep Learning'],
    category: 'Computer Vision',
    github: 'https://github.com/C-Logesh-Perumal-29/Face_Recognition',
    demo: '#',
    featured: false,
    badge: 'Real-time',
    gradient: 'from-blue-500 to-cyan-500',
    videoEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7173002903580819457?compact=1',
  },
  {
    title: 'Certificate Generation System',
    subtitle: 'Automated Bulk Certificate Pipeline',
    description:
      'Automated bulk certificate generation pipeline that processes user-provided templates and participant data to produce customized certificates at scale, eliminating manual effort for large events.',
    tech: ['Python', 'PIL', 'Automation', 'Pandas', 'OpenCV'],
    category: 'Automation',
    github: 'https://github.com/C-Logesh-Perumal-29/C-LP_Certificate_Generation',
    demo: '#',
    featured: false,
    badge: 'Bulk Processing',
    gradient: 'from-pink-500 to-rose-500',
    videoEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7172633822377730048?compact=1',
  },
  {
    title: 'Digital Calligraphy',
    subtitle: 'Text-to-Handwriting Art Generator',
    description:
      'Streamlit web application that transforms plain text into stunning personalised handwritten calligraphy art. Users can customise handwriting style, size, ink colour, and paper texture to generate beautiful handwritten outputs — downloadable as images.',
    tech: ['Streamlit', 'Python', 'PIL', 'NumPy', 'Image Processing', 'Automation'],
    category: 'Computer Vision',
    github: 'https://github.com/C-Logesh-Perumal-29/C_LP_Digital-Calligraphy',
    demo: '#',
    featured: false,
    badge: 'Creative AI',
    gradient: 'from-fuchsia-500 to-purple-500',
    videoEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7180183159098028032?compact=1',
  },
]


const CATEGORIES: Category[] = ['All', 'Generative AI', 'Computer Vision', 'Machine Learning', 'Automation', 'Full Stack']

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns an embeddable iframe src for whichever video source the project has */
const getEmbedSrc = (project: Project): string | null => {
  if (project.videoEmbed) return project.videoEmbed
  if (project.demo && project.demo !== '#') {
    const match = project.demo.match(/\/file\/d\/([^/?]+)/)
    if (match) return `https://drive.google.com/file/d/${match[1]}/preview`
  }
  return null
}

// ─── Video Modal ──────────────────────────────────────────────────────────────

const VideoModal = ({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) => {
  if (!project) return null
  const embedSrc = getEmbedSrc(project)

  /** Viewport-relative preview height (Google Drive gets more vertical room vs fixed 16:9 box) */
  const previewHeight =
    project.videoEmbed != null ? 'min(75dvh, 520px)' : 'calc(100dvh - 11rem)'

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          {/* Cinematic blurred backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[calc(100dvh-2rem)] flex flex-col rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            {/* ── Header — title + Close (Drive pop-out in iframe cannot be removed; masked below) ── */}
            <div className={`relative shrink-0 bg-gradient-to-r ${project.gradient} px-6 py-4 sm:px-8 sm:py-5 overflow-hidden`}>
              {/* Noise texture */}
              <div className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-4 sm:top-4 sm:right-6 z-10 inline-flex items-center justify-center rounded-full p-2.5 bg-black/25 hover:bg-black/40 border border-white/20 text-white backdrop-blur-sm transition-colors"
                aria-label="Close demo preview"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>

              <div className="relative min-w-0 pr-16 sm:pr-36">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-sm">
                  {project.title}
                </h2>
                <p className="text-white/80 text-sm mt-1 font-medium">{project.subtitle}</p>
              </div>
            </div>

            {/* ── Video — viewport-relative height ── */}
            <div className="bg-black min-h-0 flex-1 overflow-hidden flex flex-col">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-full min-h-[200px]"
                style={{ height: previewHeight }}
              >
                {embedSrc ? (
                  <iframe
                    src={embedSrc}
                    title={`${project.title} — Demo`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/50 px-4 text-center text-sm">
                    Demo not available for preview
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Featured Card ────────────────────────────────────────────────────────────

const FeaturedCard = ({
  project,
  index,
  onDemoClick,
}: {
  project: Project
  index: number
  onDemoClick?: () => void
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay: index * 0.15 }}
    whileHover={{ y: -8 }}
    className="group relative h-full"
  >
    {/* Glow ring on hover */}
    <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500 pointer-events-none`} />

    <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-xl group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">

      {/* ── Full-bleed gradient hero ── */}
      <div className={`relative bg-gradient-to-br ${project.gradient} px-6 pt-7 pb-8 sm:px-8 sm:pt-8 sm:pb-10 overflow-hidden`}>

        {/* Background index number watermark */}
        <span className="absolute -right-3 -top-4 text-[6rem] sm:text-[7rem] font-black text-white/10 leading-none select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Noise texture overlay for depth */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* Badge row */}
        <div className="relative flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm border border-white/30">
            <Star className="w-3 h-3 fill-white" /> Featured
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/15 text-white/90 backdrop-blur-sm border border-white/20">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/20 text-white backdrop-blur-sm border border-white/10">
              🎯 {project.badge}
            </span>
          )}
        </div>

        {/* Title & subtitle */}
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 drop-shadow-sm">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-white/75 font-medium leading-snug">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 flex flex-col px-6 py-6 sm:px-8 sm:py-7 gap-5">

        {/* Description */}
        <p className="text-sm sm:text-[0.9rem] text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags — accent-tinted */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[0.7rem] font-semibold rounded-lg
                         bg-gray-50 dark:bg-slate-800
                         text-gray-600 dark:text-gray-300
                         border border-gray-200 dark:border-slate-700
                         tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 dark:bg-slate-800" />

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                       bg-gray-50 dark:bg-slate-800
                       border border-gray-200 dark:border-slate-700
                       text-gray-700 dark:text-gray-300
                       hover:bg-gray-100 dark:hover:bg-slate-700
                       transition-all font-semibold text-sm"
          >
            <Github className="w-4 h-4" /> Code
          </motion.a>
          {onDemoClick ? (
            <motion.button
              onClick={onDemoClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                          bg-gradient-to-r ${project.gradient}
                          text-white font-bold text-sm
                          shadow-lg hover:shadow-xl hover:opacity-95
                          transition-all duration-300`}
            >
              <Play className="w-4 h-4 fill-white" /> Live Demo
            </motion.button>
          ) : (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                          bg-gradient-to-r ${project.gradient}
                          text-white font-bold text-sm
                          shadow-lg hover:shadow-xl hover:opacity-95
                          transition-all duration-300`}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </motion.a>
          )}
        </div>
      </div>

    </div>
  </motion.div>
)

// ─── Grid Card ────────────────────────────────────────────────────────────────

const GridCard = ({
  project,
  index,
  onDemoClick,
}: {
  project: Project
  index: number
  onDemoClick?: () => void
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6 }}
    layout
    className="group relative h-full"
  >
    {/* Hover glow ring */}
    <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 pointer-events-none`} />

    <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-md group-hover:shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col">

      {/* ── Gradient mini-header ── */}
      <div className={`relative bg-gradient-to-br ${project.gradient} px-5 pt-5 pb-6 sm:px-6 overflow-hidden`}>
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* Badges */}
        <div className="relative flex flex-wrap items-center gap-1.5 mb-3">
          <span className="px-2.5 py-1 rounded-full text-[0.65rem] font-bold bg-white/20 text-white border border-white/30 backdrop-blur-sm">
            {project.category}
          </span>
          {project.badge && project.badge !== project.category && (
            <span className="px-2.5 py-1 rounded-full text-[0.65rem] font-bold bg-black/20 text-white border border-white/10 backdrop-blur-sm">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & subtitle */}
        <div className="relative">
          <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight mb-1 drop-shadow-sm">
            {project.title}
          </h3>
          <p className="text-[0.7rem] text-white/70 font-medium leading-snug">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 flex flex-col px-5 py-5 sm:px-6 gap-4">

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[0.68rem] font-semibold rounded-lg
                         bg-gray-50 dark:bg-slate-800
                         text-gray-600 dark:text-gray-300
                         border border-gray-200 dark:border-slate-700
                         tracking-wide"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2.5 py-1 text-[0.68rem] font-semibold rounded-lg
                             bg-gray-50 dark:bg-slate-800
                             text-gray-400 dark:text-gray-500
                             border border-gray-200 dark:border-slate-700">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 dark:bg-slate-800" />

        {/* Buttons */}
        <div className="flex gap-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg
                       bg-gray-50 dark:bg-slate-800
                       border border-gray-200 dark:border-slate-700
                       text-gray-600 dark:text-gray-300
                       hover:bg-gray-100 dark:hover:bg-slate-700
                       transition-all font-semibold text-xs"
          >
            <Github className="w-3.5 h-3.5" /> Code
          </motion.a>
          {onDemoClick ? (
            <motion.button
              onClick={onDemoClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg
                          bg-gradient-to-r ${project.gradient}
                          text-white font-bold text-xs
                          shadow-md hover:shadow-lg hover:opacity-95 transition-all`}
            >
              <Play className="w-3 h-3 fill-white" /> Demo
            </motion.button>
          ) : (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg
                          bg-gradient-to-r ${project.gradient}
                          text-white font-bold text-xs
                          shadow-md hover:shadow-lg hover:opacity-95 transition-all`}
            >
              <ExternalLink className="w-3 h-3" /> Demo
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

// ─── Main Section ─────────────────────────────────────────────────────────────

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [videoProject, setVideoProject] = useState<Project | null>(null)

  const featured = projects.filter(p => p.featured)
  const grid = projects.filter(
    p => !p.featured && (activeCategory === 'All' || p.category === activeCategory)
  )

  // Count per category for filter buttons
  const countFor = (cat: Category) =>
    cat === 'All'
      ? projects.filter(p => !p.featured).length
      : projects.filter(p => !p.featured && p.category === cat).length

  return (
    <section
      id="projects"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* ── Section Header ── */}
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
            From Generative AI pipelines to real-time Computer Vision systems —
            each project built to solve a real problem.
          </motion.p>

        </motion.div>

        {/* ── Featured Projects ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Featured Projects</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-slate-700 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {featured.map((project, index) => (
            <FeaturedCard
              key={project.title}
              project={project}
              index={index}
              onDemoClick={getEmbedSrc(project) ? () => setVideoProject(project) : undefined}
            />
          ))}
        </div>

        {/* ── All Projects ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <Filter className="w-5 h-5 text-purple-500" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">All Projects</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-slate-700 to-transparent" />
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {CATEGORIES.map(cat => {
            const count = countFor(cat)
            if (count === 0 && cat !== 'All') return null
            const isActive = activeCategory === cat
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 flex items-center gap-1.5
                  ${isActive
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200 dark:shadow-purple-900'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500'
                  }`}
              >
                {cat}
                <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold
                  ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}`}>
                  {count}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Project Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          {grid.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {grid.map((project, index) => (
                <GridCard
                  key={project.title}
                  project={project}
                  index={index}
                  onDemoClick={project.videoEmbed ? () => setVideoProject(project) : undefined}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-gray-400 dark:text-gray-500"
            >
              <Filter className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">No projects in this category yet.</p>
              <p className="text-sm mt-1">Check back soon or browse All projects.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            Explore more projects and experiments on GitHub
          </p>
          <motion.a
            href="https://github.com/C-Logesh-Perumal-29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:opacity-90 transition-all shadow-lg"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </motion.a>
        </motion.div>

      </div>

      {/* Video preview modal — for projects with videoEmbed */}
      <VideoModal project={videoProject} onClose={() => setVideoProject(null)} />

    </section>
  )
}

export default Projects

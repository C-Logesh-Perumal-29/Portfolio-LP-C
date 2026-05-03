import { motion, useInView } from 'framer-motion'
import {
  Brain, Sparkles, Zap, Code,
  Layers, MessageSquare, Eye, Languages,
  MapPin, Briefcase,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// ─── Animated Counter ─────────────────────────────────────────────────────────

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)
  const numeric = parseInt(value.replace(/\D/g, '')) || 0
  const suffix  = value.replace(/[\d]/g, '')

  useEffect(() => {
    if (!isInView) return
    let start: number | null = null
    const tick = (now: number) => {
      if (start === null) start = now
      const p = Math.min((now - start) / (duration * 1000), 1)
      setCount(Math.floor(numeric * (1 - Math.pow(1 - p, 4))))
      if (p < 1) requestAnimationFrame(tick)
      else setCount(numeric)
    }
    requestAnimationFrame(tick)
  }, [isInView, numeric, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Noise texture ────────────────────────────────────────────────────────────

const noiseStyle = {
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { number: '6+',  label: 'Expertise Areas' },
  { number: '2+',  label: 'Years Experience' },
  { number: '20+', label: 'Projects Built' },
]

const expertise = [
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Supervised & unsupervised learning, model training, evaluation and optimisation.',
    gradient: 'from-indigo-500 to-blue-600',
    pillBg: 'bg-indigo-50 dark:bg-indigo-950/30',
    pillText: 'text-indigo-700 dark:text-indigo-300',
    pillBorder: 'border-indigo-200 dark:border-indigo-800',
  },
  {
    icon: Layers,
    title: 'Deep Learning',
    desc: 'Neural network architectures — CNNs, ANNs, transfer learning with TensorFlow & PyTorch.',
    gradient: 'from-violet-500 to-purple-600',
    pillBg: 'bg-violet-50 dark:bg-violet-950/30',
    pillText: 'text-violet-700 dark:text-violet-300',
    pillBorder: 'border-violet-200 dark:border-violet-800',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    desc: 'LLM fine-tuning, prompt engineering, RAG pipelines and AI-powered application development.',
    gradient: 'from-fuchsia-500 to-pink-500',
    pillBg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30',
    pillText: 'text-fuchsia-700 dark:text-fuchsia-300',
    pillBorder: 'border-fuchsia-200 dark:border-fuchsia-800',
  },
  {
    icon: MessageSquare,
    title: 'Large Language Models',
    desc: 'LangChain, LangGraph, agentic workflows, MCP integration and LangSmith monitoring.',
    gradient: 'from-cyan-500 to-teal-500',
    pillBg: 'bg-cyan-50 dark:bg-cyan-950/30',
    pillText: 'text-cyan-700 dark:text-cyan-300',
    pillBorder: 'border-cyan-200 dark:border-cyan-800',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    desc: 'Real-time face detection, image classification, object recognition using OpenCV & deep models.',
    gradient: 'from-teal-500 to-emerald-500',
    pillBg: 'bg-teal-50 dark:bg-teal-950/30',
    pillText: 'text-teal-700 dark:text-teal-300',
    pillBorder: 'border-teal-200 dark:border-teal-800',
  },
  {
    icon: Languages,
    title: 'Natural Language Processing',
    desc: 'Text processing, sentiment analysis, NER and information extraction using NLTK & Transformers.',
    gradient: 'from-amber-500 to-orange-500',
    pillBg: 'bg-amber-50 dark:bg-amber-950/30',
    pillText: 'text-amber-700 dark:text-amber-300',
    pillBorder: 'border-amber-200 dark:border-amber-800',
  },
]

const strengths = [
  {
    icon: Sparkles,
    title: 'Generative AI & LLM Development',
    desc: 'Building production-grade RAG pipelines, fine-tuning LLMs, and architecting agentic AI systems with LangChain, LangGraph and OpenAI — designed for real enterprise workloads.',
    gradient: 'from-violet-500 to-indigo-600',
    leftBar: 'bg-gradient-to-b from-violet-500 to-indigo-600',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Zap,
    title: 'MLOps & Production AI Systems',
    desc: 'End-to-end model lifecycle — training, evaluation, CI/CD pipelines, FastAPI inference APIs, Azure cloud deployment and real-time performance monitoring.',
    gradient: 'from-cyan-500 to-teal-500',
    leftBar: 'bg-gradient-to-b from-cyan-500 to-teal-500',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/40',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    desc: 'End-to-end web applications using React, Next.js, TypeScript on the frontend with Node.js, FastAPI and Python backends — connected to modern SQL and NoSQL databases.',
    gradient: 'from-emerald-500 to-cyan-500',
    leftBar: 'bg-gradient-to-b from-emerald-500 to-cyan-500',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

const About = () => (
  <section
    id="about"
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
          About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '120px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
        />
      </motion.div>

      {/* ── Hero: Profile + Intro ── */}
      <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12">

        {/* ── LEFT: Profile Card ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl overflow-hidden h-full">

            {/* Gradient top banner */}
            <div className="relative bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 px-7 pt-8 pb-10 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07]" style={noiseStyle} />

              {/* Avatar initials */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center mb-5 shadow-xl"
              >
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight select-none">LP</span>
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1 drop-shadow-sm">
                Logesh Perumal C
              </h3>
              <p className="text-white/75 text-sm font-medium mb-4">
                AI Engineer &amp; Full Stack Developer
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Work
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/80 border border-white/20 text-xs font-semibold">
                  <MapPin className="w-3 h-3" /> Tamil Nadu, India
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/80 border border-white/20 text-xs font-semibold">
                  <Briefcase className="w-3 h-3" /> FocusR Technologies
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-slate-800 border-t border-gray-100 dark:border-slate-800">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex flex-col items-center py-5 px-2"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                    <Counter value={s.number} duration={2} />
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-semibold mt-0.5 text-center">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── RIGHT: Intro Text ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 flex flex-col gap-5"
        >
          {[
            {
              text: <>I'm a passionate <strong className="text-purple-600 dark:text-purple-400">AI professional</strong> dedicated to crafting intelligent solutions that bridge the gap between cutting-edge technology and real-world applications. With a strong foundation in Generative AI, Machine Learning, and Full-Stack Development, I specialise in building scalable AI systems that drive innovation and create meaningful impact.</>,
              grad: 'from-purple-500 to-violet-500',
            },
            {
              text: <>My expertise spans the entire <strong className="text-violet-600 dark:text-violet-400">AI development lifecycle</strong> — from conceptualising and designing AI products to deploying production-ready MLOps pipelines. I thrive on solving complex challenges and transforming data into actionable insights that empower businesses and enhance user experiences.</>,
              grad: 'from-violet-500 to-indigo-500',
            },
            {
              text: <>Whether it's developing advanced <strong className="text-indigo-600 dark:text-indigo-400">LLM applications</strong>, architecting robust AI infrastructure, or creating seamless full-stack solutions, I bring a holistic approach to every project — ensuring both technical excellence and strategic value.</>,
              grad: 'from-indigo-500 to-cyan-500',
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
              className="relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm px-6 py-5 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${p.grad} rounded-l-2xl`} />
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed pl-1">
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Core Expertise ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10 sm:mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-5 h-5 text-purple-500" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Core Expertise</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-slate-700 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-500 pointer-events-none`} />

                <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm group-hover:shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col">

                  {/* Gradient header */}
                  <div className={`relative bg-gradient-to-br ${item.gradient} px-5 pt-4 pb-5 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.06]" style={noiseStyle} />
                    <div className="relative flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4.5 h-4.5 text-white w-5 h-5" strokeWidth={2} />
                      </div>
                      <h4 className="text-sm font-extrabold text-white drop-shadow-sm leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4 flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* ── Key Strengths ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 text-purple-500" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Key Strengths</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-slate-700 to-transparent" />
        </div>

        <div className="flex flex-col gap-4">
          {strengths.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${s.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 pointer-events-none`} />

                <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm group-hover:shadow-lg overflow-hidden transition-all duration-300 flex items-center gap-5 px-6 py-5">
                  {/* Left bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${s.leftBar} rounded-l-2xl`} />

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center ml-1`}>
                    <Icon className={`w-5 h-5 ${s.iconColor}`} strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {s.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

    </div>
  </section>
)

export default About

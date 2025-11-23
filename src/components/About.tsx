import { motion, useInView } from 'framer-motion'
import { Code, Sparkles, Zap, Brain, Layers, MessageSquare, Eye, Languages, Target, Rocket, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Counter Component
interface CounterProps {
  value: string
  duration?: number
  className?: string
}

const Counter = ({ value, duration = 2, className }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  const numericValue = parseInt(value.replace(/\D/g, '')) || 0
  const suffix = value.replace(/\d/g, '')

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0
    const endValue = numericValue

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, numericValue, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

const About = () => {
  const roles = [
    { icon: Brain, title: 'Machine Learning', gradient: 'from-indigo-500 to-indigo-600', textColor: 'text-indigo-600 dark:text-indigo-400' },
    { icon: Layers, title: 'Deep Learning', gradient: 'from-purple-500 to-purple-600', textColor: 'text-purple-600 dark:text-purple-400' },
    { icon: Sparkles, title: 'Generative AI', gradient: 'from-cyan-500 to-cyan-600', textColor: 'text-cyan-600 dark:text-cyan-400' },
    { icon: MessageSquare, title: 'Large Language Models', gradient: 'from-indigo-600 to-indigo-700', textColor: 'text-indigo-600 dark:text-indigo-400' },
    { icon: Eye, title: 'Computer Vision', gradient: 'from-purple-600 to-purple-700', textColor: 'text-purple-600 dark:text-purple-400' },
    { icon: Languages, title: 'Natural Language Processing', gradient: 'from-cyan-600 to-cyan-700', textColor: 'text-cyan-600 dark:text-cyan-400' },
  ]

  const highlights = [
    { icon: Sparkles, text: 'Specialized in Generative AI & LLM Development', gradient: 'from-indigo-500 to-purple-500' },
    { icon: Zap, text: 'Expert in MLOps & Production AI Systems', gradient: 'from-purple-500 to-cyan-500' },
    { icon: Code, text: 'Full-Stack Development with Modern Technologies', gradient: 'from-cyan-500 to-indigo-500' },
  ]

  const stats = [
    { icon: Target, number: '6+', label: 'Core Expertise Areas' },
    { icon: Rocket, number: '4+', label: 'Years Experience' },
    { icon: TrendingUp, number: '50+', label: 'Projects Completed' },
  ]

  return (
    <section
      id="about"
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
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6 sm:mb-8"
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 h-full">
                  {/* Top Gradient Bar */}
                  <div className="h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                  
                  <div className="p-6 sm:p-8 text-center">
                    <div className="inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 mb-4 sm:mb-6 shadow-lg">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 sm:mb-3"
                    >
                      <Counter value={stat.number} duration={2} />
                    </motion.div>
                    <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
            {/* Top Gradient Bar */}
            <div className="h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
            
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 space-y-5 sm:space-y-6 md:space-y-8">
              {/* First Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4 sm:pl-6 md:pl-8">
                  I'm a passionate{' '}
                  <span className="font-bold text-purple-600 dark:text-purple-400">AI professional</span>{' '}
                  dedicated to crafting intelligent solutions that bridge the gap between cutting-edge technology and real-world applications. With a strong foundation in Generative AI, Machine Learning, and Full-Stack Development, I specialize in building scalable AI systems that drive innovation and create meaningful impact.
                </p>
              </motion.div>

              {/* Second Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4 sm:pl-6 md:pl-8">
                  My expertise spans across the entire{' '}
                  <span className="font-bold text-purple-600 dark:text-purple-400">AI development lifecycle</span>
                  —from conceptualizing and designing AI products to deploying production-ready MLOps pipelines. I thrive on solving complex challenges and transforming data into actionable insights that empower businesses and enhance user experiences.
                </p>
              </motion.div>

              {/* Third Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4 sm:pl-6 md:pl-8">
                  Whether it's developing advanced{' '}
                  <span className="font-bold text-purple-600 dark:text-purple-400">LLM applications</span>
                  , architecting robust AI infrastructure, or creating seamless full-stack solutions, I bring a holistic approach to every project, ensuring both technical excellence and strategic value.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-purple-600 dark:text-purple-400">
            Key Strengths
          </h3>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 h-full">
                    {/* Top Gradient Bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${highlight.gradient}`}></div>
                    
                    <div className="p-6 sm:p-8 text-center">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${highlight.gradient} mb-5 sm:mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {highlight.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-purple-600 dark:text-purple-400">
            Core Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 h-full">
                    {/* Top Gradient Bar */}
                    <div className={`h-1 bg-gradient-to-r ${role.gradient}`}></div>
                    
                    <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px]">
                      <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${role.gradient} mb-3 sm:mb-4 shadow-md`}>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${role.textColor.replace('text-', 'text-white')}`} strokeWidth={2} />
                      </div>
                      <h4 className={`font-bold text-xs sm:text-sm leading-tight ${role.textColor}`}>
                        {role.title}
                      </h4>
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
}

export default About

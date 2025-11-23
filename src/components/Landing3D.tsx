import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import { Button } from './ui/button'

// Typing animation component
const TypingAnimation = ({ roles, speed = 100 }: { roles: string[], speed?: number }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(speed)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1))
          setTypingSpeed(speed)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
          setTypingSpeed(speed * 2)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentRole.substring(0, currentText.length - 1))
          setTypingSpeed(speed / 2)
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(speed)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed, speed])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const Landing3D = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  
  const roles = [
    "GenAI Engineer",
    "AI Developer",
    "AI Full Stack Developer",
    "Data Scientist",
    "MLOps Engineer",
    "AI Product Designer"
  ]

  return (
    <section
      id="landing"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-cyan-500/5 to-purple-500/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
      </div>

      {/* Glassmorphic Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 md:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
            {/* Photo Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center order-2 md:order-1 w-full"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-1.5 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src="/Photo.jpeg"
                      alt="Logesh Perumal C"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>

            {/* Text Content Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center order-1 md:order-2 w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 dark:border-white/10 shadow-2xl w-full min-w-0 overflow-visible"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent text-center whitespace-nowrap break-keep leading-tight pb-2"
                  style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}
                >
                  Logesh Perumal C
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold text-slate-700 dark:text-slate-200 min-h-[3rem] flex items-center justify-center flex-wrap"
                >
                  <span>I'm a&nbsp;</span>
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold">
                    <TypingAnimation roles={roles} speed={150} />
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 space-y-2 text-center mb-6"
                >
                  <p>Crafting intelligent AI solutions that turn innovation</p>
                  <p>into real-world impact and shape the future.</p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
                >
                  <Button
                    onClick={() => {
                      const projectsSection = document.getElementById('projects')
                      projectsSection?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => {
                      // Create download link for resume
                      const resumeLink = document.createElement('a')
                      resumeLink.href = '/Resume/LP Resume.pdf'
                      resumeLink.download = 'Logesh_Perumal_C_Resume.pdf'
                      resumeLink.style.display = 'none'
                      document.body.appendChild(resumeLink)
                      
                      // Trigger download
                      resumeLink.click()
                      
                      // Clean up
                      setTimeout(() => {
                        document.body.removeChild(resumeLink)
                      }, 100)
                    }}
                    variant="outline"
                    className="w-full sm:w-auto backdrop-blur-sm bg-white/50 dark:bg-white/10 border-2 border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex justify-center gap-4"
                >
                  <a
                    href="https://github.com/C-Logesh-Perumal-29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/20 transition-all hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/logesh-perumal-c/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/20 transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  </a>
                  <a
                    href="mailto:clogeshperumal@gmail.com"
                    className="p-2 rounded-full backdrop-blur-sm bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/20 transition-all hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Glassmorphic Scroll Indicator */}
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const aboutSection = document.getElementById('about')
            aboutSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-sm text-slate-600 dark:text-slate-300 mb-3 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
            Scroll Down
          </span>
          <div className="p-3 rounded-full backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-lg group-hover:bg-white/30 dark:group-hover:bg-white/15 transition-all">
            <ChevronDown className="h-6 w-6 text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Landing3D

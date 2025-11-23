import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      url: 'mailto:clogeshperumal@gmail.com', 
      color: 'text-gray-700 dark:text-gray-300',
      hoverColor: 'group-hover:text-red-600 dark:group-hover:text-red-500',
      bgGradient: 'from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      url: 'https://github.com/C-Logesh-Perumal-29', 
      color: 'text-gray-700 dark:text-gray-300',
      hoverColor: 'group-hover:text-gray-900 dark:group-hover:text-gray-100',
      bgGradient: 'from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/logesh-perumal-c/', 
      color: 'text-gray-700 dark:text-gray-300',
      hoverColor: 'group-hover:text-blue-600 dark:group-hover:text-blue-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20'
    },
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden flex items-center"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
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
            Get In Touch
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Social Links - Clean Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + index * 0.1,
                  ease: 'easeOut'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* Clean White Card */}
                <div className={`
                  relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                  rounded-2xl sm:rounded-3xl
                  bg-white dark:bg-slate-800
                  shadow-lg hover:shadow-2xl
                  border border-gray-200 dark:border-slate-700
                  transition-all duration-300
                  group-hover:border-transparent
                  overflow-hidden
                `}>
                  {/* Subtle Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon Container */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 0.5,
                        rotate: { duration: 0.6 }
                      }}
                    >
                      <Icon 
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${social.color} ${social.hoverColor} transition-colors duration-300`}
                        strokeWidth={2}
                      />
                    </motion.div>
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

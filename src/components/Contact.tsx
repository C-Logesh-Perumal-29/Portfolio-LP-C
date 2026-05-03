import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      platform: 'Email',
      handle: 'clogeshperumal2004@gmail.com',
      url: 'mailto:clogeshperumal2004@gmail.com',
      gradient: 'from-rose-500 to-pink-500',
      lightBg: 'bg-rose-50 dark:bg-rose-950/30',
      iconBg: 'bg-rose-100 dark:bg-rose-900/40',
      iconColor: 'text-rose-600 dark:text-rose-400',
    },
    {
      icon: Github,
      platform: 'GitHub',
      handle: 'C-Logesh-Perumal-29',
      url: 'https://github.com/C-Logesh-Perumal-29',
      gradient: 'from-gray-700 to-slate-700',
      lightBg: 'bg-gray-50 dark:bg-slate-800/60',
      iconBg: 'bg-gray-100 dark:bg-slate-700/60',
      iconColor: 'text-gray-700 dark:text-gray-300',
    },
    {
      icon: Linkedin,
      platform: 'LinkedIn',
      handle: 'logesh-perumal-c',
      url: 'https://www.linkedin.com/in/logesh-perumal-c/',
      gradient: 'from-blue-600 to-cyan-500',
      lightBg: 'bg-blue-50 dark:bg-blue-950/30',
      iconBg: 'bg-blue-100 dark:bg-blue-900/40',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: ExternalLink,
      platform: 'Behance',
      handle: 'logeshperumal',
      url: 'https://www.behance.net/logeshperumal',
      gradient: 'from-indigo-500 to-violet-500',
      lightBg: 'bg-indigo-50 dark:bg-indigo-950/30',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/40',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
    },
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to Opportunities
          </motion.div>

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
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you — pick any platform below.
          </motion.p>
        </motion.div>

        {/* ── Contact Cards ── */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {contacts.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.a
                key={i}
                href={c.url}
                target={c.url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${c.gradient} rounded-2xl opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-400 pointer-events-none`} />

                <div className="relative flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm group-hover:shadow-lg transition-all duration-300 overflow-hidden">

                  {/* Left accent border */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${c.gradient} rounded-l-2xl`} />

                  {/* Icon box */}
                  <div className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${c.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ml-2`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${c.iconColor}`} strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">
                      {c.platform}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100 truncate">
                      {c.handle}
                    </p>
                  </div>

                  {/* Arrow — faint at rest, vivid on hover */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center opacity-20 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0`}>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-xs text-gray-400 dark:text-gray-600 mt-8"
        >
          Usually respond within 24 hours · Based in Tamil Nadu, India
        </motion.p>

      </div>
    </section>
  )
}

export default Contact

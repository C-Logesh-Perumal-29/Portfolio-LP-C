import { motion } from 'framer-motion'
import { Brain, Code, Database, Sparkles } from 'lucide-react'

// ─── Skill Tree Data ──────────────────────────────────────────────────────────

const skillTree = [
  {
    domain: 'AI & Machine Learning',
    icon: Brain,
    tagline: 'Deep learning, neural architectures & intelligent systems',
    iconGrad: 'from-sky-400 to-blue-600',
    glowColor: 'from-sky-400 to-blue-600',
    accentText: 'text-sky-600 dark:text-sky-400',
    leftBar: 'bg-gradient-to-b from-sky-400 to-blue-600',
    divider: 'bg-sky-100 dark:bg-sky-900/40',
    pillBg: 'bg-sky-50 dark:bg-sky-900/25',
    pillBorder: 'border-sky-200 dark:border-sky-800/60',
    pillText: 'text-sky-800 dark:text-sky-200',
    dotColor: 'bg-sky-400',
    groups: [
      { label: 'Core Concepts',   skills: ['Neural Networks', 'Deep Learning', 'CNN', 'ANN'] },
      { label: 'Frameworks',      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn'] },
      { label: 'Domains',         skills: ['LLM (Large Language Models)', 'Gen AI (Generative AI)', 'NLP', 'Computer Vision'] },
      { label: 'Libraries',       skills: ['OpenCV', 'NLTK'] },
    ],
  },
  {
    domain: 'Full Stack Development',
    icon: Code,
    tagline: 'End-to-end web engineering & system design',
    iconGrad: 'from-violet-400 to-purple-600',
    glowColor: 'from-violet-400 to-purple-600',
    accentText: 'text-violet-600 dark:text-violet-400',
    leftBar: 'bg-gradient-to-b from-violet-400 to-purple-600',
    divider: 'bg-violet-100 dark:bg-violet-900/40',
    pillBg: 'bg-violet-50 dark:bg-violet-900/25',
    pillBorder: 'border-violet-200 dark:border-violet-800/60',
    pillText: 'text-violet-800 dark:text-violet-200',
    dotColor: 'bg-violet-400',
    groups: [
      { label: 'Frontend',   skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
      { label: 'Backend',    skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'GraphQL'] },
      { label: 'Databases',  skills: ['MongoDB', 'PostgreSQL'] },
      { label: 'DevOps',     skills: ['Git', 'Docker'] },
    ],
  },
  {
    domain: 'Data Science & Analytics',
    icon: Database,
    tagline: 'Data wrangling, visualization & predictive modelling',
    iconGrad: 'from-teal-400 to-cyan-600',
    glowColor: 'from-teal-400 to-cyan-600',
    accentText: 'text-teal-600 dark:text-teal-400',
    leftBar: 'bg-gradient-to-b from-teal-400 to-cyan-600',
    divider: 'bg-teal-100 dark:bg-teal-900/40',
    pillBg: 'bg-teal-50 dark:bg-teal-900/25',
    pillBorder: 'border-teal-200 dark:border-teal-800/60',
    pillText: 'text-teal-800 dark:text-teal-200',
    dotColor: 'bg-teal-400',
    groups: [
      { label: 'Libraries',   skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
      { label: 'Analysis',    skills: ['EDA', 'Data Analysis', 'Data Visualization', 'Feature Engineering'] },
      { label: 'ML Methods',  skills: ['Classification', 'Regression', 'Hyperparameter Tuning'] },
      { label: 'Tools',       skills: ['SQL', 'Microsoft Excel'] },
    ],
  },
  {
    domain: 'AI Tools & Frameworks',
    icon: Sparkles,
    tagline: 'Modern LLM ecosystem & production-grade AI workflows',
    iconGrad: 'from-amber-400 to-orange-500',
    glowColor: 'from-amber-400 to-orange-500',
    accentText: 'text-amber-600 dark:text-amber-400',
    leftBar: 'bg-gradient-to-b from-amber-400 to-orange-500',
    divider: 'bg-amber-100 dark:bg-amber-900/40',
    pillBg: 'bg-amber-50 dark:bg-amber-900/25',
    pillBorder: 'border-amber-200 dark:border-amber-800/60',
    pillText: 'text-amber-800 dark:text-amber-200',
    dotColor: 'bg-amber-400',
    groups: [
      { label: 'LLM Stack',   skills: ['LangChain', 'OpenAI API', 'Hugging Face', 'Vector Databases'] },
      { label: 'Techniques',  skills: ['RAG (Retrieval Augmented Generation)', 'Fine-tuning'] },
      { label: 'Operations',  skills: ['Model Deployment', 'MLOps', 'Jupyter Notebooks'] },
    ],
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

const Skills = () => {
  const totalSkills = skillTree.reduce(
    (s, c) => s + c.groups.reduce((gs, g) => gs + g.skills.length, 0), 0
  )

  return (
    <section
      id="skills"
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
            Skills
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
            className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A structured knowledge map of technologies, frameworks and tools I work with
          </motion.p>

          {/* Total badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            {totalSkills} Skills across {skillTree.length} domains
          </motion.div>
        </motion.div>

        {/* ── Skill Rows ── */}
        <div className="space-y-5 sm:space-y-6">
          {skillTree.map((cat, i) => {
            const Icon = cat.icon
            const skillCount = cat.groups.reduce((s, g) => s + g.skills.length, 0)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                {/* Glow ring */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cat.glowColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 pointer-events-none`} />

                <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm group-hover:shadow-xl overflow-hidden transition-all duration-300">

                  {/* Left colour bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${cat.leftBar} rounded-l-2xl`} />

                  <div className="flex flex-col lg:flex-row">

                    {/* ── Left info panel ── */}
                    <div className="lg:w-56 xl:w-64 flex-shrink-0 pl-7 pr-6 py-7 flex flex-col justify-center gap-3 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-slate-800">
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.iconGrad} flex items-center justify-center shadow-md`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>

                      {/* Name & tagline */}
                      <div>
                        <h3 className={`text-base font-extrabold ${cat.accentText} leading-tight mb-1`}>
                          {cat.domain}
                        </h3>
                        <p className="text-[0.7rem] text-gray-400 dark:text-gray-500 leading-relaxed">
                          {cat.tagline}
                        </p>
                      </div>

                      {/* Count */}
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                        <span className="text-[0.68rem] text-gray-400 dark:text-gray-500 font-semibold">
                          {skillCount} skills
                        </span>
                      </div>
                    </div>

                    {/* ── Right skill tree ── */}
                    <div className="relative flex-1 px-6 py-6 lg:px-8 lg:py-7 overflow-hidden">

                      {/* Subtle tinted wash */}
                      <div className={`absolute inset-0 ${cat.pillBg} opacity-40 pointer-events-none`} />

                      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
                        {cat.groups.map((group, gi) => (
                          <div key={gi}>
                            {/* Group label */}
                            <div className="flex items-center gap-1.5 mb-2.5">
                              <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                              <span className={`text-[0.65rem] font-extrabold uppercase tracking-[0.12em] ${cat.accentText} opacity-80`}>
                                {group.label}
                              </span>
                            </div>

                            {/* Thin divider */}
                            <div className={`h-px w-full ${cat.divider} mb-3`} />

                            {/* Skills */}
                            <div className="flex flex-col gap-1.5">
                              {group.skills.map((skill, si) => (
                                <motion.span
                                  key={si}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.28,
                                    delay: 0.2 + i * 0.07 + gi * 0.04 + si * 0.03,
                                  }}
                                  whileHover={{ x: 4, scale: 1.02 }}
                                  className={`inline-block px-3 py-1 rounded-full text-[0.68rem] font-semibold
                                              bg-white dark:bg-slate-900
                                              ${cat.pillText} border ${cat.pillBorder}
                                              shadow-sm hover:shadow-md
                                              transition-all duration-150 cursor-default`}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills

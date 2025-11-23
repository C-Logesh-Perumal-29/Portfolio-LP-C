import { motion } from 'framer-motion'
import { Brain, Code, Database, Sparkles, TrendingUp } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      borderColor: 'border-indigo-500/30 dark:border-indigo-400/30',
      hoverBorderColor: 'group-hover:border-indigo-500/60 dark:group-hover:border-indigo-400/60',
      skills: [
        'LLM (Large Language Models)',
        'Gen AI (Generative AI)',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Keras',
        'Neural Networks',
        'CNN',
        'ANN',
        'Deep Learning',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'OpenCV',
        'NLTK',
      ],
    },
    {
      category: 'Full Stack Development',
      icon: Code,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400',
      borderColor: 'border-purple-500/30 dark:border-purple-400/30',
      hoverBorderColor: 'group-hover:border-purple-500/60 dark:group-hover:border-purple-400/60',
      skills: [
        'React',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'Python',
        'HTML/CSS',
        'RESTful APIs',
        'GraphQL',
        'MongoDB',
        'PostgreSQL',
        'Express.js',
        'Next.js',
        'Git',
        'Docker',
      ],
    },
    {
      category: 'Data Science & Analytics',
      icon: Database,
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20',
      textColor: 'text-cyan-600 dark:text-cyan-400',
      borderColor: 'border-cyan-500/30 dark:border-cyan-400/30',
      hoverBorderColor: 'group-hover:border-cyan-500/60 dark:group-hover:border-cyan-400/60',
      skills: [
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Data Analysis',
        'EDA (Exploratory Data Analysis)',
        'Data Visualization',
        'Feature Engineering',
        'Hyperparameter Tuning',
        'Classification',
        'Regression',
        'Microsoft Excel',
        'SQL',
      ],
    },
    {
      category: 'AI Tools & Frameworks',
      icon: Sparkles,
      gradient: 'from-indigo-600 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      borderColor: 'border-indigo-500/30 dark:border-indigo-400/30',
      hoverBorderColor: 'group-hover:border-indigo-500/60 dark:group-hover:border-indigo-400/60',
      skills: [
        'LangChain',
        'Hugging Face',
        'OpenAI API',
        'Vector Databases',
        'RAG (Retrieval Augmented Generation)',
        'Fine-tuning',
        'Model Deployment',
        'MLOps',
        'Jupyter Notebooks',
      ],
    },
  ]

  return (
    <section
      id="skills"
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
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive collection of technologies and tools I work with
          </motion.p>
        </motion.div>

        {/* Modern Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Clean Skill Card */}
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 h-full flex flex-col">
                  {/* Top Gradient Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`}></div>

                  {/* Card Content */}
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                      <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg flex-shrink-0`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xl sm:text-2xl font-bold ${category.textColor} mb-1`}>
                          {category.category}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <TrendingUp className="w-4 h-4 flex-shrink-0" />
                          <span>{category.skills.length} Skills</span>
                        </div>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-2 sm:gap-2.5 items-start">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + index * 0.1 + skillIndex * 0.02,
                            ease: 'easeOut'
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2
                          }}
                          className={`
                            relative z-10
                            inline-block px-3 sm:px-4 py-1.5 sm:py-2 
                            rounded-lg text-xs sm:text-sm font-medium
                            bg-white dark:bg-slate-700
                            border ${category.borderColor} ${category.hoverBorderColor}
                            ${category.textColor}
                            shadow-sm hover:shadow-md
                            transition-all duration-300
                            cursor-default
                            whitespace-nowrap
                          `}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-0`}
                  />
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

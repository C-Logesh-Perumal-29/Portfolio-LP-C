import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Building2, Code2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { format, parse } from 'date-fns'

interface Internship {
  id: string
  company: string
  role: string
  period: string
  isCurrent?: boolean
  skills: string[]
}

// Date formatting utility
const formatPeriod = (period: string): string => {
  if (period.includes('Present')) {
    const [startDate] = period.split(' - ')
    try {
      const parsed = parse(startDate, 'dd/MM/yyyy', new Date())
      return `${format(parsed, 'MMM yyyy')} - Present`
    } catch {
      return period
    }
  }
  
  const [startDate, endDate] = period.split(' - ')
  try {
    const start = parse(startDate, 'dd/MM/yyyy', new Date())
    const end = parse(endDate, 'dd/MM/yyyy', new Date())
    
    // If same month and year, show once
    if (format(start, 'MMM yyyy') === format(end, 'MMM yyyy')) {
      return format(start, 'MMM yyyy')
    }
    
    // If same year, show "MMM - MMM yyyy"
    if (format(start, 'yyyy') === format(end, 'yyyy')) {
      return `${format(start, 'MMM')} - ${format(end, 'MMM yyyy')}`
    }
    
    // Different years
    return `${format(start, 'MMM yyyy')} - ${format(end, 'MMM yyyy')}`
  } catch {
    return period
  }
}

// Skills threshold for showing "Show More" toggle
const SKILLS_THRESHOLD = 8

// Internship Card Component with Expandable Skills
const InternshipCard = ({ internship, index }: { internship: Internship; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldShowToggle = internship.skills.length > SKILLS_THRESHOLD
  const displayedSkills = shouldShowToggle && !isExpanded 
    ? internship.skills.slice(0, SKILLS_THRESHOLD)
    : internship.skills
  const hiddenSkillsCount = internship.skills.length - SKILLS_THRESHOLD

  return (
    <motion.div
      key={internship.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 sm:left-8 md:left-1/2 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg transform md:-translate-x-1/2 z-10">
        <div className="absolute inset-0 rounded-full bg-white dark:bg-slate-800 scale-50"></div>
        {internship.isCurrent && (
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-cyan-400/30"
          />
        )}
      </div>

      {/* Content Card */}
      <div
        className={`ml-12 sm:ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
          index % 2 === 0 ? 'md:mr-auto md:pr-6 lg:pr-10' : 'md:ml-auto md:pl-6 lg:pl-10'
        }`}
      >
        <motion.div
          whileHover={{ y: -8 }}
          className="group relative"
        >
          {/* Clean Card */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300">
            {/* Top Gradient Bar */}
            <div className={`h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 ${internship.isCurrent ? 'from-cyan-500 to-purple-500' : ''}`}></div>

            {/* Card Content */}
            <div className="relative z-10 p-5 sm:p-6 md:p-8">
              {/* Role Title with Current Badge */}
              <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 flex-1">
                  {internship.role}
                </h3>
                {internship.isCurrent && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold whitespace-nowrap"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Current</span>
                  </motion.div>
                )}
              </div>

              {/* Company Name */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex-shrink-0" aria-hidden="true">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 break-words">
                  {internship.company}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" aria-hidden="true" />
                  <time className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap" dateTime={internship.period}>
                    {formatPeriod(internship.period)}
                  </time>
                </div>
              </div>

              {/* Skills Section */}
              <div className="pt-4 sm:pt-5 border-t border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex-shrink-0">
                    <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300">Skills & Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  <AnimatePresence mode="popLayout">
                    {displayedSkills.map((skill) => (
                      <motion.span
                        key={`${internship.id}-${skill}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-white dark:bg-slate-700 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-md transition-all duration-300 cursor-default break-words sm:whitespace-nowrap"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
                
                {/* Show More/Less Toggle */}
                {shouldShowToggle && (
                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg transition-all duration-300 mx-auto"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Show {hiddenSkillsCount} More</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>

            {/* Hover Gradient Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-0"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Internships = () => {
  const internships: Internship[] = [
    {
      id: 'matt-engineering-2022',
      company: 'Matt Engineering Solutions',
      role: 'Data Science & Machine Learning with Python',
      period: '01/09/2022 - 07/09/2022',
      skills: [
        'Python Programming Language',
        'Data Handling',
        'Data Visualization',
        'Natural Language Toolkit (NLTK)',
        'Machine Learning - Scikit Learn',
      ],
    },
    {
      id: 'mar-baselios-2023',
      company: 'Mar Baselios College of Engineering and Technology (Autonomous)',
      role: 'Machine Learning & Deep Learning',
      period: '20/02/2023 - 24/02/2023',
      skills: [
        'Scikit Learn',
        'OpenCV',
        'NN, CNN, ANN',
        'Tensorflow',
        'Keras',
      ],
    },
    {
      id: 'codsoft-2023',
      company: 'Codsoft',
      role: 'Machine Learning Intern',
      period: '20/07/2023 - 20/08/2023',
      skills: [
        'Data Collection',
        'Data Preparation',
        'Data Analysis',
        'EDA',
        'Feature Scaling',
        'Numpy, Pandas',
        'Matplotlib, Seaborn',
        'NLTK',
        'Scikit Learn',
        'Hyper-Parameter Tuning',
      ],
    },
    {
      id: 'bharat-intern-2023',
      company: 'Bharat Intern',
      role: 'Data Science Intern',
      period: '10/10/2023 - 10/11/2023',
      skills: [
        'Data Analysis',
        'EDA',
        'Data Visualization',
        'Deep Learning',
        'Machine Learning',
        'Classification',
        'Regression',
        'Feature Scaling',
        'Microsoft Excel',
      ],
    },
    {
      id: 'oasis-infobyte-2024',
      company: 'Oasis Infobyte',
      role: 'Data Analyst',
      period: '15/10/2024 - 20/11/2024',
      skills: [
        'Data Visualization',
        'Data Analysis',
        'Data Cleaning',
        'Data Preprocessing',
        'EDA',
        'Feature Engineering',
        'Hyperparameter Tuning',
        'Classification',
        'Regression',
      ],
    },
    {
      id: 'technohacks-2024',
      company: 'TechnoHacks',
      role: 'Prompt Engineer',
      period: '23/10/2024 - 22/11/2024',
      skills: [
        'Prompt Engineering',
        'Prompt Optimization',
        'Prompt Testing',
        'Prompt Evaluation',
        'Prompt Improvement',
        'Prompt Refinement',
        'Prompt Enhancement',
      ],
    },
    {
      id: 'focusr-ai-intern-2024',
      company: 'FocusR Consultancy and Technologies Private Limited',
      role: 'AI Intern',
      period: '02/12/2024 - 01/06/2025',
      skills: [
        'Python',
        'FastAPI',
        'Flask',
        'Django',
        'React',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'RESTful APIs',
        'LLM',
        'Gen AI',
        'RAG',
        'Fine-tuning',
        'Model Deployment',
        'MLOps',
        'Jupyter Notebooks',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'MongoDB',
        'Prompt Engineering',
        'Data Analysis',
        'LangChain',
        'LangGraph',
        'LangSmith',
        'Hugging Face',
        'OpenAI API',
        'Azure OpenAI API',
      ],
    },
    {
      id: 'focusr-consultant-2025',
      company: 'FocusR Consultancy and Technologies Private Limited',
      role: 'Trainee Consultant-AI & Data Analytics',
      period: '02/06/2025 - Present',
      isCurrent: true,
      skills: [
        'Python',
        'Frontend Development',
        'Backend Development',
        'Full Stack Development',
        'Database Management',
        'API Development',
        'Web Development',
        'Mobile Development',
        'AI',
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Generative AI',
        'Large Language Models',
        'Retrieval Augmented Generation',
        'Agentic AI',
        'Data Analytics',
        'Data Visualization',
        'Git / GitHub',
      ],
    },
  ]

  return (
    <section
      id="internships"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
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
            Internships
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
            Professional experiences and learning opportunities
          </motion.p>
            </motion.div>

        {/* Modern Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-cyan-300 dark:from-purple-500 dark:to-cyan-500 opacity-30 dark:opacity-20 transform md:-translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {internships.map((internship, index) => (
              <InternshipCard key={internship.id} internship={internship} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internships

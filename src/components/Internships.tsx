import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Building2, ChevronDown, ChevronUp, Sparkles, Clock } from 'lucide-react'
import { format, parse } from 'date-fns'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Internship {
  id: string
  company: string
  role: string
  period: string
  duration: string
  type: 'Training' | 'Internship' | 'Full-time'
  isCurrent?: boolean
  gradient: string
  dotGrad: string
  pillBg: string
  pillText: string
  pillBorder: string
  skills: string[]
}

// ─── Date helper ──────────────────────────────────────────────────────────────

const formatPeriod = (period: string): string => {
  if (period.includes('Present')) {
    const [startDate] = period.split(' - ')
    try {
      const parsed = parse(startDate, 'dd/MM/yyyy', new Date())
      return `${format(parsed, 'MMM yyyy')} — Present`
    } catch { return period }
  }
  const [startDate, endDate] = period.split(' - ')
  try {
    const start = parse(startDate, 'dd/MM/yyyy', new Date())
    const end   = parse(endDate,   'dd/MM/yyyy', new Date())
    if (format(start, 'MMM yyyy') === format(end, 'MMM yyyy'))
      return format(start, 'MMM yyyy')
    if (format(start, 'yyyy') === format(end, 'yyyy'))
      return `${format(start, 'MMM')} — ${format(end, 'MMM yyyy')}`
    return `${format(start, 'MMM yyyy')} — ${format(end, 'MMM yyyy')}`
  } catch { return period }
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const internships: Internship[] = [
  {
    id: 'matt-engineering-2022',
    company: 'Matt Engineering Solutions',
    role: 'Data Science & Machine Learning with Python',
    period: '01/09/2022 - 07/09/2022',
    duration: '1 Week',
    type: 'Training',
    gradient: 'from-slate-500 to-blue-500',
    dotGrad: 'from-slate-400 to-blue-500',
    pillBg: 'bg-blue-50 dark:bg-blue-950/30',
    pillText: 'text-blue-700 dark:text-blue-300',
    pillBorder: 'border-blue-200 dark:border-blue-800',
    skills: ['Python Programming Language', 'Data Handling', 'Data Visualization', 'Natural Language Toolkit (NLTK)', 'Machine Learning - Scikit Learn'],
  },
  {
    id: 'mar-baselios-2023',
    company: 'Mar Baselios College of Engineering and Technology',
    role: 'Machine Learning & Deep Learning',
    period: '20/02/2023 - 24/02/2023',
    duration: '1 Week',
    type: 'Training',
    gradient: 'from-blue-500 to-cyan-500',
    dotGrad: 'from-blue-400 to-cyan-500',
    pillBg: 'bg-cyan-50 dark:bg-cyan-950/30',
    pillText: 'text-cyan-700 dark:text-cyan-300',
    pillBorder: 'border-cyan-200 dark:border-cyan-800',
    skills: ['Scikit Learn', 'OpenCV', 'NN, CNN, ANN', 'Tensorflow', 'Keras'],
  },
  {
    id: 'codsoft-2023',
    company: 'Codsoft',
    role: 'Machine Learning Intern',
    period: '20/07/2023 - 20/08/2023',
    duration: '1 Month',
    type: 'Internship',
    gradient: 'from-cyan-500 to-teal-500',
    dotGrad: 'from-cyan-400 to-teal-500',
    pillBg: 'bg-teal-50 dark:bg-teal-950/30',
    pillText: 'text-teal-700 dark:text-teal-300',
    pillBorder: 'border-teal-200 dark:border-teal-800',
    skills: ['Data Collection', 'Data Preparation', 'Data Analysis', 'EDA', 'Feature Scaling', 'Numpy, Pandas', 'Matplotlib, Seaborn', 'NLTK', 'Scikit Learn', 'Hyper-Parameter Tuning'],
  },
  {
    id: 'bharat-intern-2023',
    company: 'Bharat Intern',
    role: 'Data Science Intern',
    period: '10/10/2023 - 10/11/2023',
    duration: '1 Month',
    type: 'Internship',
    gradient: 'from-teal-500 to-emerald-500',
    dotGrad: 'from-teal-400 to-emerald-500',
    pillBg: 'bg-emerald-50 dark:bg-emerald-950/30',
    pillText: 'text-emerald-700 dark:text-emerald-300',
    pillBorder: 'border-emerald-200 dark:border-emerald-800',
    skills: ['Data Analysis', 'EDA', 'Data Visualization', 'Deep Learning', 'Machine Learning', 'Classification', 'Regression', 'Feature Scaling', 'Microsoft Excel'],
  },
  {
    id: 'oasis-infobyte-2024',
    company: 'Oasis Infobyte',
    role: 'Data Analyst',
    period: '15/10/2024 - 20/11/2024',
    duration: '1 Month',
    type: 'Internship',
    gradient: 'from-violet-500 to-indigo-500',
    dotGrad: 'from-violet-400 to-indigo-500',
    pillBg: 'bg-violet-50 dark:bg-violet-950/30',
    pillText: 'text-violet-700 dark:text-violet-300',
    pillBorder: 'border-violet-200 dark:border-violet-800',
    skills: ['Data Visualization', 'Data Analysis', 'Data Cleaning', 'Data Preprocessing', 'EDA', 'Feature Engineering', 'Hyperparameter Tuning', 'Classification', 'Regression'],
  },
  {
    id: 'technohacks-2024',
    company: 'TechnoHacks',
    role: 'Prompt Engineer',
    period: '23/10/2024 - 22/11/2024',
    duration: '1 Month',
    type: 'Internship',
    gradient: 'from-fuchsia-500 to-pink-500',
    dotGrad: 'from-fuchsia-400 to-pink-500',
    pillBg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30',
    pillText: 'text-fuchsia-700 dark:text-fuchsia-300',
    pillBorder: 'border-fuchsia-200 dark:border-fuchsia-800',
    skills: ['Prompt Engineering', 'Prompt Optimization', 'Prompt Testing', 'Prompt Evaluation', 'Prompt Improvement', 'Prompt Refinement', 'Prompt Enhancement'],
  },
  {
    id: 'focusr-ai-intern-2024',
    company: 'FocusR Consultancy and Technologies Pvt. Ltd.',
    role: 'AI Intern',
    period: '02/12/2024 - 01/06/2025',
    duration: '6 Months',
    type: 'Internship',
    gradient: 'from-orange-500 to-amber-400',
    dotGrad: 'from-orange-400 to-amber-400',
    pillBg: 'bg-amber-50 dark:bg-amber-950/30',
    pillText: 'text-amber-700 dark:text-amber-300',
    pillBorder: 'border-amber-200 dark:border-amber-800',
    skills: ['Python', 'FastAPI', 'Flask', 'Django', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'RESTful APIs', 'LLM', 'Gen AI', 'RAG', 'Fine-tuning', 'Model Deployment', 'MLOps', 'Jupyter Notebooks', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MongoDB', 'Prompt Engineering', 'Data Analysis', 'LangChain', 'LangGraph', 'LangSmith', 'Hugging Face', 'OpenAI API', 'Azure OpenAI API'],
  },
  {
    id: 'focusr-consultant-2025',
    company: 'FocusR Consultancy and Technologies Pvt. Ltd.',
    role: 'Trainee Consultant — AI & Data Analytics',
    period: '02/06/2025 - Present',
    duration: 'Ongoing',
    type: 'Full-time',
    isCurrent: true,
    gradient: 'from-purple-500 via-violet-500 to-indigo-600',
    dotGrad: 'from-purple-400 to-indigo-500',
    pillBg: 'bg-purple-50 dark:bg-purple-950/30',
    pillText: 'text-purple-700 dark:text-purple-300',
    pillBorder: 'border-purple-200 dark:border-purple-800',
    skills: ['Python', 'Frontend Development', 'Backend Development', 'Full Stack Development', 'Database Management', 'API Development', 'Web Development', 'Mobile Development', 'AI', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Generative AI', 'Large Language Models', 'Retrieval Augmented Generation', 'Agentic AI', 'Data Analytics', 'Data Visualization', 'Git / GitHub'],
  },
]

// ─── Card ──────────────────────────────────────────────────────────────────────

const SKILLS_THRESHOLD = 8

const typeStyle: Record<Internship['type'], string> = {
  'Training':   'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
  'Internship': 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  'Full-time':  'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
}

const noiseStyle = {
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
}

const InternshipCard = ({ internship, index }: { internship: Internship; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldShowToggle = internship.skills.length > SKILLS_THRESHOLD
  const displayedSkills = shouldShowToggle && !isExpanded
    ? internship.skills.slice(0, SKILLS_THRESHOLD)
    : internship.skills
  const hiddenCount = internship.skills.length - SKILLS_THRESHOLD

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.07 }}
      className="relative"
    >
      {/* Timeline dot — matches card gradient */}
      <div className={`absolute left-6 sm:left-8 md:left-1/2 top-7 w-4 h-4 rounded-full bg-gradient-to-br ${internship.dotGrad} shadow-md transform md:-translate-x-1/2 z-10 flex items-center justify-center`}>
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
        {internship.isCurrent && (
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${internship.dotGrad} opacity-60`}
          />
        )}
      </div>

      {/* Card wrapper */}
      <div className={`ml-12 sm:ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
        index % 2 === 0 ? 'md:mr-auto md:pr-6 lg:pr-10' : 'md:ml-auto md:pl-6 lg:pl-10'
      }`}>
        <motion.div whileHover={{ y: -5 }} className="group relative">

          {/* Glow ring */}
          <div className={`absolute -inset-0.5 bg-gradient-to-br ${internship.gradient} rounded-2xl opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-500 pointer-events-none`} />

          <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-md group-hover:shadow-xl overflow-hidden transition-all duration-300">

            {/* ── Gradient header ── */}
            <div className={`relative bg-gradient-to-br ${internship.gradient} px-5 pt-5 pb-6 sm:px-7 overflow-hidden`}>
              <div className="absolute inset-0 opacity-[0.06]" style={noiseStyle} />

              {/* Badges row */}
              <div className="relative flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-full text-[0.65rem] font-bold border ${typeStyle[internship.type]}`}>
                  {internship.type}
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.65rem] font-bold bg-white/20 text-white border border-white/25">
                  <Clock className="w-2.5 h-2.5" /> {internship.duration}
                </span>
                {internship.isCurrent && (
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.65rem] font-bold bg-white/25 text-white border border-white/30"
                  >
                    <Sparkles className="w-2.5 h-2.5" /> Current
                  </motion.span>
                )}
              </div>

              {/* Role & company */}
              <div className="relative">
                <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight mb-1.5 drop-shadow-sm">
                  {internship.role}
                </h3>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-white/70 flex-shrink-0" />
                  <p className="text-[0.72rem] text-white/80 font-medium leading-snug">
                    {internship.company}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="px-5 py-5 sm:px-7">

              {/* Date pill */}
              <div className="flex items-center gap-1.5 mb-4">
                <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {formatPeriod(internship.period)}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 dark:bg-slate-800 mb-4" />

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                <AnimatePresence mode="popLayout">
                  {displayedSkills.map((skill) => (
                    <motion.span
                      key={`${internship.id}-${skill}`}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.88 }}
                      transition={{ duration: 0.18 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`inline-block px-2.5 py-1 rounded-full text-[0.68rem] font-semibold
                                  ${internship.pillBg} ${internship.pillText} border ${internship.pillBorder}
                                  transition-all duration-150 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>

              {/* Show more/less */}
              {shouldShowToggle && (
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-3 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg
                              ${internship.pillBg} ${internship.pillText} border ${internship.pillBorder}
                              transition-all duration-200`}
                >
                  {isExpanded ? (
                    <><ChevronUp className="w-3.5 h-3.5" /> Show Less</>
                  ) : (
                    <><ChevronDown className="w-3.5 h-3.5" /> +{hiddenCount} more skills</>
                  )}
                </motion.button>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

const Internships = () => (
  <section
    id="internships"
    className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>

    <div className="container mx-auto max-w-6xl relative z-10">

      {/* ── Header ── */}
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
          className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Professional experiences, training programmes and roles across AI, Data Science & Full Stack
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-6 mt-6"
        >
          {[
            { label: 'Experiences', value: `${internships.length}` },
            { label: 'Trainings', value: `${internships.filter(i => i.type === 'Training').length}` },
            { label: 'Internships', value: `${internships.filter(i => i.type === 'Internship').length}` },
            { label: 'Full-time', value: `${internships.filter(i => i.type === 'Full-time').length}` },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-xl font-extrabold text-purple-600 dark:text-purple-400">{s.value}</p>
              <p className="text-[0.65rem] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-semibold mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Timeline ── */}
      <div className="relative">
        {/* Centre line */}
        <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300 via-cyan-300 to-purple-300 dark:from-purple-700 dark:via-cyan-700 dark:to-purple-700 opacity-40 transform md:-translate-x-1/2" />

        <div className="space-y-8 sm:space-y-12 md:space-y-14">
          {internships.map((internship, index) => (
            <InternshipCard key={internship.id} internship={internship} index={index} />
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default Internships

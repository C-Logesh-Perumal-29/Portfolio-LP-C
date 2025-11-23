import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface DesignImageProps {
  src: string
  alt: string
  gradient: string
}

const DesignImage = ({ src, alt, gradient }: DesignImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/20 dark:to-cyan-900/20">
      {/* Loading Skeleton */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Loader2 className="w-8 h-8 text-purple-500" />
          </motion.div>
        </div>
      )}
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Error Fallback */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-200 to-cyan-200 dark:from-purple-900/30 dark:to-cyan-900/30">
          <div className="text-center p-4">
            <Loader2 className="w-12 h-12 mx-auto mb-2 text-purple-500 opacity-50" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Image unavailable</p>
          </div>
        </div>
      )}
      
      {/* Gradient Overlay on Hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />
    </div>
  )
}
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { ExternalLink } from 'lucide-react'

const UIDesigns = () => {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null)

  const designs = [
    {
      title: 'Fashiolux',
      description: 'Trendy Fashion Interface Design - A modern and elegant fashion e-commerce platform with intuitive navigation and stunning visuals',
      image: '/UIUXDesigns/Fashiolux.png',
      category: 'Fashion E-Commerce',
      behanceUrl: 'https://www.behance.net/gallery/197147221/Trendy-Fashion-Interface-Design',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20',
      textColor: 'text-pink-600 dark:text-pink-400',
    },
    {
      title: 'Hotel Booking',
      description: 'Hotel Booking APP - A user-friendly hotel reservation system with seamless booking experience and beautiful interface',
      image: '/UIUXDesigns/HotelBooking.png',
      category: 'Travel & Hospitality',
      behanceUrl: 'https://www.behance.net/gallery/197101897/Hotel-Booking-APP',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'MindScript Library',
      description: 'MindScript Library - An innovative library management system with modern design and intuitive user experience',
      image: '/UIUXDesigns/MindScript.png',
      category: 'Education & Library',
      behanceUrl: 'https://www.behance.net/gallery/196827535/MindScript-Library',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Music Player',
      description: 'Music UI - A sleek and modern music player interface with smooth animations and beautiful design',
      image: '/UIUXDesigns/MusicPlayer.png',
      category: 'Entertainment',
      behanceUrl: 'https://www.behance.net/gallery/197397277/Music-UI',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
  ]

  return (
    <section
      id="ui-designs"
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
            UI/UX Designs
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
            Explore my creative UI/UX design projects showcasing modern interfaces and user experiences
          </motion.p>
        </motion.div>

        {/* Modern Design Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Clean Design Card */}
              <div
                className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden cursor-pointer transition-all duration-300 h-full flex flex-col"
                onClick={() => setSelectedDesign(index)}
              >
                {/* Image Container */}
                <DesignImage src={design.image} alt={design.title} gradient={design.gradient} />
                
                <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm ${design.textColor} shadow-md`}>
                      {design.category}
                    </span>
                  </div>

                  {/* External Link Icon */}
                  <motion.a
                    href={design.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm ${design.textColor} shadow-md hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                {/* Content Section */}
                <div className="relative p-5 sm:p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${design.textColor} group-hover:translate-x-1 transition-transform duration-300`}>
                    {design.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-1 line-clamp-3">
                    {design.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 border-2 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${design.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Lightbox Dialog */}
        <Dialog open={selectedDesign !== null} onOpenChange={() => setSelectedDesign(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 bg-white dark:bg-slate-900">
            {selectedDesign !== null && (
              <>
                {/* Header with Gradient */}
                <div className={`relative p-6 sm:p-8 bg-gradient-to-r ${designs[selectedDesign].gradient}`}>
                  <DialogHeader>
                    <DialogTitle className="text-2xl sm:text-3xl text-white mb-3">
                      {designs[selectedDesign].title}
                    </DialogTitle>
                    <DialogDescription className="text-white/90 text-base sm:text-lg leading-relaxed">
                      {designs[selectedDesign].description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  {/* Behance Link Button */}
                  <motion.a
                    href={designs[selectedDesign].behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl text-white font-semibold text-sm transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Full Project on Behance</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Image Container */}
                <div className="p-4 sm:p-6 md:p-8">
                  <motion.img
                    src={designs[selectedDesign].image}
                    alt={designs[selectedDesign].title}
                    className="w-full h-auto rounded-xl shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default UIDesigns

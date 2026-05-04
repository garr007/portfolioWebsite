'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-gold/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Text Content */}
        <motion.div variants={itemVariants} className="flex-1 space-y-6">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.p 
              variants={itemVariants}
              className="text-amber-gold text-lg font-semibold tracking-widest"
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Muhammad Tegar <span className="text-amber-gold">Abhiram</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-medium">
              Data Science & AI Engineer
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg"
          >
            Transforming data into meaningful insights and developing intelligent systems. Specialized in Computer Vision, Machine Learning, and AI solutions with expertise in TensorFlow, YOLO, and advanced Python programming.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex gap-4 flex-wrap pt-4"
          >
            <a 
              href="#projects"
              className="px-8 py-3 bg-amber-gold text-charcoal font-semibold rounded-lg hover:bg-amber-gold-light transition-colors duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 glass-hover text-white font-semibold rounded-lg flex items-center gap-2"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-8 pt-8 flex-wrap"
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-gold">5+</p>
              <p className="text-sm text-white/60">Project Delivered</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-gold">99%</p>
              <p className="text-sm text-white/60">Max Accuracy</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-gold">2</p>
              <p className="text-sm text-white/60">Scientific Papers</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 flex justify-center items-center"
        >
          <motion.div 
            className="relative w-72 h-72 md:w-96 md:h-96"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {/* Glowing border frame */}
            <div className="absolute inset-0 rounded-3xl border-2 border-amber-gold/30 shadow-2xl shadow-amber-gold/20"></div>
            
            {/* Glass effect background */}
            <div className="absolute inset-0 rounded-3xl glass-sm"></div>
            
            {/* Profile image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                src="/profilepic.jpeg"
                alt="Muhammad Tegar Abhiram"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-amber-gold/50 mx-auto" size={24} />
      </motion.div>
    </section>
  )
}

export default Hero

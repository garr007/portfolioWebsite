'use client'

import { ScrollReveal } from '@/components/common/ScrollReveal'
import { motion } from 'framer-motion'
import { Code2, Database, Zap, BarChart3 } from 'lucide-react'

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: string[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: ['Python (Advanced)', 'R (Intermediate)', 'SQL (Advanced)', 'JavaScript', 'HTML/CSS']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'ML & AI',
      skills: ['TensorFlow', 'Neural Networks', 'YOLO (Object Detection)', 'Support Vector Machine', 'Scikit-learn']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data & Visualization',
      skills: ['Tableau', 'Streamlit', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'ggplot2']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Tools & Frameworks',
      skills: ['Roboflow', 'Pentaho', 'Talend', 'Google Colab', 'OpenCV', 'Next.js', 'Git']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background gradient */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <ScrollReveal>
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Technical <span className="text-amber-gold">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-gold to-amber-gold-light rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-hover p-8 rounded-2xl group"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-gold/10 rounded-lg text-amber-gold group-hover:bg-amber-gold group-hover:text-charcoal transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-gold rounded-full"></div>
                    <span className="text-white/80 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-amber-gold/0 via-transparent to-amber-gold/0"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 glass-sm p-6 md:p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Certified by leading platforms including Dicoding (DBS Foundation Coding Camp, Indosat Digital Camp), DataCamp (Tableau & Data Analysis), DQLab (Advanced R & Data Visualization), HackerRank (SQL & Python), and EF SET (C2 Proficient English).
            </p>
            <div className="flex flex-wrap gap-3">
              {['Machine Learning', 'Data Science', 'Tableau', 'R Programming', 'SQL', 'English (C2)'].map((cert, idx) => (
                <span key={idx} className="px-4 py-2 bg-amber-gold/10 text-amber-gold text-sm font-medium rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Skills

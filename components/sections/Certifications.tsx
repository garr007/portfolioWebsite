'use client'

import { ScrollReveal } from '@/components/common/ScrollReveal'
import { motion } from 'framer-motion'
import { Award, Check } from 'lucide-react'

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  category: string
  credentialUrl?: string
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Machine Learning Developer',
      issuer: 'Dicoding - DBS Foundation Coding Camp 2024',
      date: 'Nov 2024',
      category: 'Machine Learning',
    },
    {
      id: '2',
      title: 'Data Scientist',
      issuer: 'Dicoding - Indosat Ooredoo Hutchison Digital Camp 2024',
      date: 'Nov 2024',
      category: 'Data Science',
    },
    {
      id: '3',
      title: 'Analyzing Data in Tableau',
      issuer: 'DataCamp',
      date: '2023',
      category: 'Data Visualization',
    },
    {
      id: '4',
      title: 'Creating Dashboards in Tableau',
      issuer: 'DataCamp',
      date: '2023',
      category: 'Data Visualization',
    },
    {
      id: '5',
      title: 'Case Study: Analyzing Customer Churn in Tableau',
      issuer: 'DataCamp',
      date: '2023',
      category: 'Data Analysis',
    },
    {
      id: '6',
      title: 'Statistics using R for Data Science',
      issuer: 'DQLab',
      date: '2023',
      category: 'Data Science',
    },
    {
      id: '7',
      title: 'Data Preparation in Data Science Using R',
      issuer: 'DQLab',
      date: '2023',
      category: 'Data Science',
    },
    {
      id: '8',
      title: 'Data Visualization in Data Science using R',
      issuer: 'DQLab',
      date: '2023',
      category: 'Data Visualization',
    },
    {
      id: '9',
      title: 'Advanced Data Visualization with ggplot2 using R',
      issuer: 'DQLab',
      date: '2023',
      category: 'Data Visualization',
    },
    {
      id: '10',
      title: 'SQL (Advanced) Certificate',
      issuer: 'HackerRank',
      date: '2023',
      category: 'Database',
    },
    {
      id: '11',
      title: 'Python (Basic) Certificate',
      issuer: 'HackerRank',
      date: '2023',
      category: 'Programming',
    },
    {
      id: '12',
      title: 'EF SET English Certificate - C2 Proficient (83/100)',
      issuer: 'EF SET',
      date: '2023',
      category: 'Language',
    },
  ]

  const categories = ['All', ...new Set(certifications.map(c => c.category))]
  
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
    <section id="certifications" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background gradient */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <ScrollReveal>
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Certifications & <span className="text-amber-gold">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-gold to-amber-gold-light rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-amber-gold text-charcoal'
                    : 'glass-sm text-amber-gold hover:bg-amber-gold hover:text-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="glass-hover p-6 rounded-xl group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-gold/0 to-amber-gold/0 group-hover:from-amber-gold/5 group-hover:to-amber-gold/10 transition-colors duration-300 -z-10"></div>

              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-amber-gold/10 text-amber-gold flex items-center justify-center group-hover:bg-amber-gold group-hover:text-charcoal transition-all duration-300">
                    <Award size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-amber-gold transition-colors duration-300 leading-tight">
                      {cert.title}
                    </h4>
                    <Check className="text-amber-gold flex-shrink-0 mt-1" size={20} />
                  </div>

                  <p className="text-white/70 text-sm font-medium mb-2">{cert.issuer}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-white/50 text-xs">{cert.date}</p>
                    <span className="px-2 py-1 bg-amber-gold/10 text-amber-gold text-xs font-semibold rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { number: '12', label: 'Certifications Earned' },
              { number: '2', label: 'Scientific Papers' },
              { number: '7', label: 'Professional Categories' }
            ].map((stat, idx) => (
              <div key={idx} className="glass-sm p-6 rounded-lg text-center group hover:bg-white/15 transition-colors duration-300">
                <p className="text-3xl md:text-4xl font-bold text-amber-gold mb-2">{stat.number}</p>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Certifications

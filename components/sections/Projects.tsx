'use client'

import { ScrollReveal } from '@/components/common/ScrollReveal'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCard {
  id: string
  title: string
  description: string
  metrics?: Array<{ label: string; value: string }>
  tags: string[]
  image?: string
  link?: string
  github?: string
  colSpan: 'col-span-1' | 'col-span-2'
}

const Projects = () => {
  const projects: ProjectCard[] = [
    {
      id: '1',
      title: 'E-Vector Qur\'an Search System',
      description: 'Intelligent search system for Qur\'an verses with advanced NLP capabilities',
      metrics: [
        { label: 'Accuracy', value: '80%' },
        { label: 'Improvement', value: '+17.90%' },
        { label: 'Prompt Efficiency', value: '+79.77%' }
      ],
      tags: ['NLP', 'Python', 'Vector Search', 'AI'],
      colSpan: 'col-span-2',
    },
    {
      id: '2',
      title: 'Mouse Movement Detection',
      description: 'Real-time computer vision application for detecting and tracking mouse movement',
      metrics: [
        { label: 'Accuracy', value: '99%' },
        { label: 'Model', value: 'YOLOv11' },
        { label: 'Epochs', value: '100' }
      ],
      tags: ['Computer Vision', 'YOLO', 'OpenCV', 'Python'],
      colSpan: 'col-span-1',
    },
    {
      id: '3',
      title: 'Tuna Fish Classification',
      description: 'Deep learning model for classifying tuna fish species from images',
      metrics: [
        { label: 'Accuracy', value: '80%' },
        { label: 'Images Annotated', value: '1500+' },
        { label: 'Tool', value: 'Roboflow' }
      ],
      tags: ['Computer Vision', 'Classification', 'YOLO', 'TensorFlow'],
      colSpan: 'col-span-1',
    },
    {
      id: '4',
      title: 'Chatbot Integration & Optimization',
      description: 'AI-powered chatbot system for enhanced user interaction and support on Compro website',
      metrics: [
        { label: 'Response Time', value: '+50%' },
        { label: 'Optimization', value: 'Prompt Engineering' },
        { label: 'Platform', value: 'Web' }
      ],
      tags: ['AI', 'Chatbot', 'NLP', 'Web Integration'],
      colSpan: 'col-span-1',
    },
    {
      id: '5',
      title: 'Student Performance Prediction',
      description: 'Machine learning model to predict student exam scores based on learning behavior',
      metrics: [
        { label: 'Dataset', value: '6,607 rows' },
        { label: 'Features', value: '20' },
        { label: 'Best MSE', value: '3.0' }
      ],
      tags: ['Machine Learning', 'Python', 'Data Analysis', 'Regression'],
      colSpan: 'col-span-1',
    },
    {
      id: '6',
      title: 'Customer Churn Analysis - Databel',
      description: 'Comprehensive data analysis and visualization using Tableau for telecom company',
      metrics: [
        { label: 'Dashboards', value: '4' },
        { label: 'KPIs', value: 'Multiple' },
        { label: 'Tool', value: 'Tableau' }
      ],
      tags: ['Data Analysis', 'Tableau', 'Business Intelligence', 'Visualization'],
      colSpan: 'col-span-2',
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <ScrollReveal>
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Featured <span className="text-amber-gold">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-gold to-amber-gold-light rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${project.colSpan} group relative`}
            >
              <div className="glass-hover p-6 md:p-8 rounded-2xl h-full flex flex-col overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-gold/0 to-amber-gold/0 group-hover:from-amber-gold/5 group-hover:to-amber-gold/10 transition-colors duration-300 -z-10"></div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                          <p className="text-amber-gold font-bold text-lg">{metric.value}</p>
                          <p className="text-white/60 text-xs md:text-sm">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-amber-gold/10 text-amber-gold text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.link || project.github) && (
                  <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-amber-gold hover:text-amber-gold-light transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">View Project</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-amber-gold hover:text-amber-gold-light transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

'use client'

import { ScrollReveal } from '@/components/common/ScrollReveal'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

interface Experience {
  id: string
  type: 'professional' | 'organizational'
  title: string
  company?: string
  organization?: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  highlights?: string[]
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      type: 'professional',
      title: 'Data Analyst & AI Engineer Intern',
      company: 'PT. Mitra Graha Integrasi (MIGRASI)',
      location: 'Bogor, Indonesia',
      startDate: 'Nov 2025',
      endDate: 'Present',
      description: [
        'Developed an e-vector Qur\'an search system achieving 80% accuracy in search results',
        'Optimized prompt performance, improving response time efficiency by 50%',
        'Achieved 79.77% improvement in prompt character usage efficiency and 17.90% increase in verse relevance',
        'Created and integrated a chatbot system into the Compro website for enhanced user interaction',
        'Developing a crowd density system for gate recommendation feature in the Masjidil Haram mobile app'
      ],
      highlights: ['E-Vector Qur\'an Search', '80% Accuracy', 'Chatbot Integration', 'AI Engineering']
    },
    {
      id: '2',
      type: 'professional',
      title: 'Computer Vision Research Intern',
      company: 'Badan Riset dan Inovasi Nasional (BRIN)',
      location: 'Bandung, Indonesia',
      startDate: 'Feb 2024',
      endDate: 'Jul 2024',
      description: [
        'Worked on 2 key projects: Mouse Movement Detection and Tuna Fish Classification using YOLOv11',
        'Built a model achieving 99% accuracy for mouse movement detection',
        'Developed a model achieving 80% accuracy for tuna fish classification',
        'Annotated and pre-processed 1,500+ images using Roboflow',
        'Authored 2 scientific papers documenting research findings'
      ],
      highlights: ['99% Accuracy', 'YOLO', '1500+ Images Annotated', 'Scientific Papers']
    },
    {
      id: '3',
      type: 'organizational',
      title: 'General Secretary of Student Representative Body',
      organization: 'Keluarga Besar Mahasiswa Departemen Sistem Informasi FILKOM UB',
      location: 'Malang, Indonesia',
      startDate: 'Jan 2023',
      endDate: 'Jan 2024',
      description: [
        'Collaborated actively with a team of 7 members to ensure effective coordination',
        'Formulated 5+ regulations and oversaw activity execution',
        'Actively involved in deliberations and decision-making processes',
        'Contributed to planning, organizing, and evaluating 10+ events'
      ],
      highlights: ['Team Leadership', '7 Members', '5+ Regulations', '10+ Events']
    },
    {
      id: '4',
      type: 'organizational',
      title: 'Algorithm and Data Structure Laboratory Assistant',
      organization: 'Faculty of Computer Science (FILKOM) University of Brawijaya',
      location: 'Malang, Indonesia',
      startDate: 'Aug 2023',
      endDate: 'Dec 2023',
      description: [
        'Mentored 42 students in algorithms and data structures fundamentals',
        'Provided in-depth explanations on complex algorithmic concepts',
        'Evaluated and graded assignments related to algorithm and data structure coursework',
        'Contributed to student learning and understanding improvement'
      ],
      highlights: ['Mentored 42 Students', 'Algorithms', 'Data Structures', 'Education']
    },
    {
      id: '5',
      type: 'organizational',
      title: 'Head of IT Paper & Poster Division',
      organization: 'House of Technology FILKOM UB',
      location: 'Malang, Indonesia',
      startDate: 'May 2022',
      endDate: 'Nov 2022',
      description: [
        'Led a 5-member team in planning and executing the annual IT Paper and Poster Exhibition',
        'Successfully attracted 10+ participants showcasing innovative tech projects',
        'Managed final stage event coordination for 5 finalists ensuring smooth execution',
        'Created platform for students to showcase their innovative projects'
      ],
      highlights: ['Team Lead', '5 Members', '10+ Participants', 'Event Management']
    }
  ]

  const professionalExperiences = experiences.filter(e => e.type === 'professional')
  const organizationalExperiences = experiences.filter(e => e.type === 'organizational')

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const ExperienceCard = ({ experience }: { experience: Experience }) => (
    <motion.div
      variants={itemVariants}
      className="glass-hover p-6 md:p-8 rounded-2xl group relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-4 md:-left-6 top-8 w-4 h-4 md:w-5 md:h-5 bg-amber-gold rounded-full border-4 border-charcoal"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-gold transition-colors duration-300">
            {experience.title}
          </h4>
          <p className="text-amber-gold font-semibold mt-1">
            {experience.company || experience.organization}
          </p>
        </div>
      </div>

      {/* Meta information */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-amber-gold" />
          <span>{experience.startDate} – {experience.endDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-amber-gold" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3 mb-6">
        {experience.description.map((desc, idx) => (
          <div key={idx} className="flex gap-3">
            <span className="text-amber-gold mt-1 flex-shrink-0">•</span>
            <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      {experience.highlights && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {experience.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-amber-gold/10 text-amber-gold text-xs font-semibold rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <ScrollReveal>
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional <span className="text-amber-gold">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-gold to-amber-gold-light rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Professional Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-amber-gold" size={28} />
            <h3 className="text-2xl md:text-3xl font-bold">Work Experience</h3>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8 md:pl-6 border-l-2 border-amber-gold/30"
          >
            {professionalExperiences.map(exp => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </motion.div>
        </div>

        {/* Organizational Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-amber-gold" size={28} />
            <h3 className="text-2xl md:text-3xl font-bold">Organizational Experience</h3>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8 md:pl-6 border-l-2 border-amber-gold/30"
          >
            {organizationalExperiences.map(exp => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

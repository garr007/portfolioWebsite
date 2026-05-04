'use client'

import { ScrollReveal } from '@/components/common/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

const About = () => {
  const expertise = [
    'Data Analysis & Visualization',
    'Machine Learning & AI',
    'Computer Vision',
    'Backend Development',
    'Database Management',
    'ETL & Data Pipeline',
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <ScrollReveal>
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              About <span className="text-amber-gold">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-gold to-amber-gold-light rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                An enthusiastic Information Technology graduate from <span className="text-amber-gold font-semibold">Brawijaya University</span> with hands-on experience in Data Science and Artificial Intelligence. My passion lies in transforming raw data into actionable insights and developing intelligent systems that solve real-world problems.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                With a strong foundation in Python, R, and SQL, combined with expertise in modern tools like TensorFlow, YOLO, and Tableau, I&apos;m committed to continuous learning and excellence in the rapidly evolving field of AI and Data Science.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                Currently working as a <span className="text-amber-gold font-semibold">Data Analyst & AI Engineer</span> at PT. Mitra Graha Integrasi, where I develop cutting-edge solutions in AI chatbots, computer vision systems, and data analytics applications.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-white">Key Focus Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {['Machine Learning', 'Data Analysis', 'Computer Vision', 'AI Systems'].map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 glass-sm text-amber-gold text-sm font-medium rounded-full hover:bg-amber-gold hover:text-charcoal transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Expertise cards */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
              {expertise.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 items-start p-4 glass-sm hover:bg-white/10 rounded-xl transition-colors duration-300"
                >
                  <CheckCircle2 className="text-amber-gold flex-shrink-0 mt-1" size={24} />
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Education highlight */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 glass-hover p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-lg font-semibold text-amber-gold">Bachelor of Information Technology</h4>
                <p className="text-white/70">Brawijaya University, Faculty of Computer Science</p>
                <p className="text-white/60 text-sm mt-2">Cumulative GPA: 3.8/4.0</p>
              </div>
              <p className="text-white/70 font-semibold">Aug 2021 – Aug 2025</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About

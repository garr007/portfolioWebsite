'use client'

import { ScrollReveal } from '@/components/common/ScrollReveal'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Github, ArrowRight } from 'lucide-react'

interface ContactMethod {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  link: string
  label: string
  color: string
}

const Contact = () => {
  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      icon: <Mail size={28} />,
      title: 'Email',
      description: 'Get in touch directly',
      link: 'mailto:tegar.abhiram77@gmail.com',
      label: 'tegar.abhiram77@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: '2',
      icon: <MessageCircle size={28} />,
      title: 'WhatsApp',
      description: 'Message me on WhatsApp',
      link: 'https://wa.me/6282269076085',
      label: '+62 822 6907 6085',
      color: 'from-green-500 to-green-600',
    },
    {
      id: '3',
      icon: <Linkedin size={28} />,
      title: 'LinkedIn',
      description: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/muhammad-tegar-abhiram',
      label: 'Muhammad Tegar Abhiram',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: '4',
      icon: <Github size={28} />,
      title: 'GitHub',
      description: 'Check my repositories',
      link: 'https://github.com/garr',
      label: 'github.com/garr',
      color: 'from-gray-700 to-gray-800',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <ScrollReveal>
          <div className="space-y-4 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let&apos;s <span className="text-amber-gold">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-gold to-amber-gold-light rounded-full mx-auto"></div>
            <p className="text-lg text-white/70 max-w-2xl mx-auto pt-4">
              Interested in collaboration, opportunities, or just want to chat about Data Science and AI? I&apos;d love to hear from you!
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.id}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group glass-hover p-8 rounded-2xl flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-gold/20"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${method.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                {method.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-gold transition-colors duration-300">
                {method.title}
              </h3>
              <p className="text-white/60 mb-4 flex-1">
                {method.description}
              </p>

              {/* Link Label */}
              <div className="flex items-center gap-3 text-amber-gold font-semibold group-hover:gap-4 transition-all duration-300">
                <span className="text-sm md:text-base truncate">{method.label}</span>
                <ArrowRight size={20} className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-amber-gold/0 via-amber-gold/0 to-amber-gold/0"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <ScrollReveal delay={0.4}>
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Open to opportunities and collaborations
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Whether you have a project in mind or just want to discuss ideas, feel free to reach out through any of the channels above.
            </p>
            <a 
              href="mailto:tegar.abhiram77@gmail.com"
              className="inline-block px-8 py-4 bg-amber-gold text-charcoal font-bold rounded-lg hover:bg-amber-gold-light transition-colors duration-300 text-lg"
            >
              Send Me an Email
            </a>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50">
            <p>© 2025 Muhammad Tegar Abhiram. All rights reserved.</p>
            <p className="text-sm mt-2">Crafted with passion for Data Science & AI</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact

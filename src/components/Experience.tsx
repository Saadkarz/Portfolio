'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist Intern',
      company: 'SYGMA.AI',
      location: 'Casablanca, Morocco',
      period: 'Jul 2025 – Sep 2025',
      highlights: [
        'Built an automated vehicle damage evaluation system using AI & Computer Vision',
        'Integrated LLaMA 3.2B Vision for multimodal analysis (text + image)',
        'Deployed an optimized inference pipeline with PyTorch and Unsloth on Streamlit'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Bureau d\'Adoul',
      location: 'Marrakech, Morocco',
      period: 'Jul 2024 – Aug 2024',
      highlights: [
        'Developed a full admin dashboard with Java Spring Boot and MySQL',
        'Automated client visit tracking and enhanced UI with HTML, CSS, JavaScript'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-background p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                    <p className="text-xl text-text mb-2">{exp.company}</p>
                  </div>
                  <div className="text-text/70">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-text/80">
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

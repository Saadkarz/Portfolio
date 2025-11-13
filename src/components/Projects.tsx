'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: '🩺 Shiha',
      description: 'Smart Diabetes Management Platform - AI-powered health application integrating Machine Learning and LLMs for personalized diabetes management',
      tech: ['Python', 'Machine Learning', 'LLMs', 'Streamlit'],
      github: 'https://github.com/Saadkarz',
      demo: '#'
    },
    {
      title: '🧠 FaceSmart',
      description: 'HR Facial Recognition App - A facial recognition-based HR system for secure employee tracking and attendance management',
      tech: ['Python', 'Computer Vision', 'Face Recognition', 'Flask'],
      github: 'https://github.com/Saadkarz',
      demo: '#'
    },
    {
      title: '🚗 Vehicle Damage Assessment',
      description: 'Automated vehicle damage evaluation system using AI & Computer Vision with LLaMA 3.2B Vision integration',
      tech: ['PyTorch', 'LLaMA', 'Computer Vision', 'Streamlit'],
      github: 'https://github.com/Saadkarz',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-text/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-background p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    École Marocaine des Sciences de l&apos;Ingénieur (EMSI)
                  </h3>
                  <p className="text-xl text-text mb-2">
                    5th Year – Informatics & Network Engineering (MIAGE)
                  </p>
                  <p className="text-text/70 mb-3">📍 Marrakech, Morocco</p>
                  <p className="text-text/80">
                    Focus: Machine Learning, Web Development, Data Analysis, and LLM Integration
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-background p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Baccalauréat en Sciences Physiques
                  </h3>
                  <p className="text-xl text-text mb-2">El Araki School</p>
                  <p className="text-text/70">2020</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-background p-6 rounded-lg border border-primary/20"
            >
              <h4 className="text-xl font-semibold mb-4 text-center">Languages</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-lg font-medium">🇲🇦 Arabic</p>
                  <p className="text-text/70">Native</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">🇫🇷 French</p>
                  <p className="text-text/70">Advanced</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">🇬🇧 English</p>
                  <p className="text-text/70">Advanced</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">🇪🇸 Spanish</p>
                  <p className="text-text/70">Beginner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

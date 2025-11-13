'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Connect!
            </span>
          </h2>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-lg text-text/80 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="mailto:karzouz03@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-background p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:transform hover:scale-105 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-text/70">karzouz03@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/saad-karzouz-65690629b"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-background p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:transform hover:scale-105 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-text/70">Saad Karzouz</p>
            </motion.a>

            <motion.a
              href="https://github.com/Saadkarz"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-background p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:transform hover:scale-105 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Github className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-text/70">@Saadkarz</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-text/60 mb-4">
              &quot;AI isn&apos;t just about automation — it&apos;s about enhancing human creativity and intelligence&quot;
            </p>
            <p className="text-text/40">
              © 2024 Saad Karzouz. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

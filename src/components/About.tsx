'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Sparkles } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-lg text-text/80 mb-6">
                I&apos;m a final-year engineering student at <strong className="text-primary">École Marocaine des Sciences de l&apos;Ingénieur (EMSI)</strong>, 
                specializing in <strong>Informatics & Network Engineering – MIAGE Option</strong>.
              </p>
              <p className="text-lg text-text/80 mb-6">
                🔭 I love designing <strong className="text-primary">intelligent systems</strong> that blend data, AI, 
                and web technologies to solve real-world problems.
              </p>
              <p className="text-lg text-text/80 mb-6">
                🌱 Currently exploring <strong className="text-primary">Large Language Models</strong>, 
                <strong className="text-primary"> Computer Vision</strong>, and <strong className="text-primary">Advanced ML techniques</strong>
              </p>
              <p className="text-lg text-text/80">
                ⚡ Fun fact: <em>I believe AI isn&apos;t just about automation — it&apos;s about enhancing human creativity and intelligence</em>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid gap-6"
            >
              <div className="bg-background p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                <Brain className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">AI/ML Enthusiast</h3>
                <p className="text-text/70">
                  Passionate about building intelligent systems using TensorFlow, PyTorch, and cutting-edge LLMs
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                <Code className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                <p className="text-text/70">
                  Experienced in Java Spring Boot, Python Flask, and modern web technologies
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                <Sparkles className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-text/70">
                  Innovator who loves tackling complex challenges with creative technical solutions
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

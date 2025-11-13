'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-full blur-lg opacity-50 animate-pulse" />
              <Image
                src="/profile.png"
                alt="Saad Karzouz"
                width={256}
                height={256}
                className="relative rounded-full border-4 border-primary/50 shadow-2xl object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Saad Karzouz
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl text-text mb-6 space-y-2"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></span>
              <span className="block font-semibold">AI & Data Science Engineer</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></span>
            </div>
            <span className="text-xl md:text-2xl text-text/80 block">Full Stack Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-text/70 mb-8 max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-surface/50 rounded-full border border-primary/20">
              Based in Morocco
            </span>
            <span className="block mt-4">Transforming Data into Intelligent Solutions</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-6 justify-center mb-12"
          >
            <a
              href="https://github.com/Saadkarz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-surface hover:bg-primary transition-all duration-300 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github size={24} className="relative z-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/saad-karzouz-65690629b"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-surface hover:bg-primary transition-all duration-300 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin size={24} className="relative z-10" />
            </a>
            <a
              href="mailto:karzouz03@gmail.com"
              className="group relative p-3 bg-surface hover:bg-primary transition-all duration-300 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail size={24} className="relative z-10" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#contact"
              className="group relative px-8 py-3 bg-primary hover:bg-primary/80 rounded-lg font-medium transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-surface hover:bg-surface/80 rounded-lg font-medium transition-all duration-300 border border-primary/30 hover:border-primary/60"
            >
              <span className="relative z-10">View Projects</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="animate-bounce text-primary" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

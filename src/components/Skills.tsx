'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: '💻 Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'C#', 'SQL']
    },
    {
      title: '🤖 AI/ML & Data Science',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: '🛠️ Frameworks & Tools',
      skills: ['Spring Boot', 'Flask', 'Streamlit', 'Docker', 'Git']
    },
    {
      title: '🗄️ Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: '🧠 AI Platforms & APIs',
      skills: ['ChatGPT', 'Google Gemini', 'Hugging Face']
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Tech Stack & Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-background text-primary border border-primary/30 rounded-full text-sm hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

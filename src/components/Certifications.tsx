'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      category: '🤖 AI & Machine Learning',
      certs: [
        { name: 'Introduction to Machine Learning', org: 'Duke University' },
        { name: 'Introduction to Machine Learning with Python', org: 'Arizona State University' }
      ]
    },
    {
      category: '☁️ Cloud & DevOps',
      certs: [
        { name: 'Introduction to Cloud Computing', org: 'IBM' },
        { name: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', org: 'IBM' },
        { name: 'Virtual Networks in Azure', org: 'Whizlabs' }
      ]
    },
    {
      category: '💻 Programming & Software Engineering',
      certs: [
        { name: 'Introduction to Java and Object-Oriented Programming', org: 'University of Pennsylvania' },
        { name: 'Introduction à la programmation orientée objet (en C++)', org: 'École Polytechnique Fédérale de Lausanne' },
        { name: 'Software Engineering: Software Design and Project Management', org: 'The Hong Kong University of Science and Technology' }
      ]
    },
    {
      category: '🌐 Web Development',
      certs: [
        { name: 'React Basics', org: 'Meta' },
        { name: 'Advanced Styling with Responsive Design', org: 'University of Michigan' },
        { name: 'HTML, CSS, and Javascript for Web Developers', org: 'Johns Hopkins University' }
      ]
    }
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.certs.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Award className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-text font-medium">{cert.name}</p>
                        <p className="text-text/60 text-sm">{cert.org}</p>
                      </div>
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

export default Certifications

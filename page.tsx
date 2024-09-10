'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, GitHub, Linkedin, Mail } from 'lucide-react'

const skills = [
  { name: 'Manual Testing', icon: '🧪' },
  { name: 'Automation Testing', icon: '🤖' },
  { name: 'UI Testing', icon: '🖥️' },
  { name: 'API Testing', icon: '🌐' },
  { name: 'Performance Testing', icon: '⚡' },
  { name: 'Tools & Technologies', icon: '🛠️' },
]

const projects = [
  {
    title: 'Automation Testing with Selenium',
    description: 'A project demonstrating automated UI testing using Selenium WebDriver and Python.',
    link: 'https://github.com/hari-haran06/selenium-automation',
  },
  {
    title: 'API Testing with Postman',
    description: 'A collection of Postman tests for various REST APIs, showcasing different testing scenarios.',
    link: 'https://github.com/hari-haran06/api-testing-postman',
  },
  {
    title: 'Performance Testing with JMeter',
    description: 'A repository of JMeter test plans and scripts for load testing web applications.',
    link: 'https://github.com/hari-haran06/performance-testing-jmeter',
  },
  {
    title: 'Database Testing with PostgreSQL',
    description: 'Examples of database testing using PostgreSQL, including setup and query validation.',
    link: 'https://github.com/hari-haran06/postgresql-testing',
  },
  {
    title: 'Mobile Testing',
    description: 'A project for testing mobile applications on different platforms and devices.',
    link: 'https://github.com/hari-haran06/mobile-testing',
  },
]

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            <li><a href="#home" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a></li>
            <li><a href="#skills" className="text-gray-800 hover:text-blue-600 transition duration-300">Skills</a></li>
            <li><a href="#projects" className="text-gray-800 hover:text-blue-600 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="home" className="text-center mb-20">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hari Haran
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate and Skilled Tester
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Get in Touch
            </a>
          </motion.div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <ChevronDown className={`transform transition-transform duration-300 ${expandedProject === index ? 'rotate-180' : ''}`} />
                </div>
                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View on GitHub
                    </a>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/hari-haran-671817263/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition duration-300">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/hari-haran06" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition duration-300">
              <GitHub size={32} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-800 hover:text-blue-600 transition duration-300">
              <Mail size={32} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2023 Hari Haran. All rights reserved.</p>
      </footer>
    </div>
  )
}
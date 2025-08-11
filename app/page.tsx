'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaCode, 
  FaRobot, 
  FaCloud, 
  FaDatabase,
  FaDocker,
  FaReact,
  FaPython,
  FaJava,
  FaJs
} from 'react-icons/fa'
import { SiTailwindcss, SiKubernetes, SiAzuredevops, SiOpenai } from 'react-icons/si'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skills = [
    { name: 'Python', icon: FaPython, color: 'text-blue-600' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'Java', icon: FaJava, color: 'text-red-600' },
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
    { name: 'Azure DevOps', icon: SiAzuredevops, color: 'text-blue-700' },
    { name: 'OpenAI', icon: SiOpenai, color: 'text-green-600' },
    { name: 'Databases', icon: FaDatabase, color: 'text-purple-600' },
  ]

  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'Bajaj Finance',
      location: 'Pune, India',
      period: 'Nov 2023 – Present',
      achievements: [
        'Developed responsive chatbot user interfaces using HTML, CSS, JavaScript, and Preact, Tailwind for seamless interaction',
        'Built and deployed scalable chatbot backends leveraging OpenAI models and retrieval-augmented generation using Azure AI Search and ChromaDB',
        'Engineered voicebot backends integrating speech-to-text and text-to-speech models to enable real-time conversational experiences with features such as interruption handling',
        'Managed Kubernetes clusters, RHEL OS and automated CI/CD pipelines using GitHub Actions for smooth AI service deployment'
      ]
    }
  ]

  const education = [
    {
      degree: 'PG Diploma in Advanced Computing (CDAC)',
      institution: 'IET C-DAC ACTS ATC, Pune',
      year: '2023'
    },
    {
      degree: 'B.E. Mechanical Engineering',
      institution: 'Bhivarabai Sawant Institute Of Technology And Research, Pune',
      year: '2022'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.h1 
              className="text-xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nikhil Dhole
            </motion.h1>
            <div className="flex space-x-6">
              {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Nikhil Dhole</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-secondary-600 mb-8"
              variants={fadeInUp}
            >
              Senior AI Engineer
            </motion.h2>
            <motion.p 
              className="text-lg text-secondary-700 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              With 1.5+ years of experience building production-ready customer service chatbots and voicebots. 
              Proven ability to deliver cost-efficient RAG solutions, cloud deployments, and telephony integration.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8"
              variants={fadeInUp}
            >
              <a href="mailto:nikhildhole001@gmail.com" className="btn-primary flex items-center gap-2">
                <FaEnvelope />
                Get In Touch
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2">
                <FaPhone />
                Contact Me
              </a>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6"
              variants={fadeInUp}
            >
              <a 
                href="https://github.com/nikhildhole" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a 
                href="https://linkedin.com/in/nikhildhole" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              A comprehensive skill set covering AI/ML, full-stack development, DevOps, and cloud technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaCode className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <div className="space-y-2">
                {['Python', 'JavaScript', 'Java', 'C#', 'Bash', 'Go Lang'].map((lang) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-secondary-700">{lang}</span>
                    <div className="w-20 bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI/ML */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaRobot className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">AI/ML Technologies</h3>
              </div>
              <div className="space-y-2">
                {['BERT fine tune', 'LangChain', 'AutoGen', 'LangGraph', 'CrewAI', 'LlamaIndex'].map((tech) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-secondary-700">{tech}</span>
                    <div className="w-20 bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaReact className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Frontend Technologies</h3>
              </div>
              <div className="space-y-2">
                {['ReactJS', 'Preact', 'HTML', 'CSS', 'JavaScript', 'Tailwind'].map((tech) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-secondary-700">{tech}</span>
                    <div className="w-20 bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaCode className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Backend Frameworks</h3>
              </div>
              <div className="space-y-2">
                {['Dotnet', 'Spring Boot', 'Hibernate', 'Express JS'].map((tech) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-secondary-700">{tech}</span>
                    <div className="w-20 bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaCloud className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
              </div>
              <div className="space-y-2">
                {['Docker', 'Kubernetes', 'Azure DevOps', 'GitHub', 'Linux'].map((tech) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-secondary-700">{tech}</span>
                    <div className="w-20 bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaDatabase className="text-3xl text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="space-y-2">
                {['MySQL', 'PostgreSQL', 'Oracle', 'Redis'].map((db) => (
                  <div key={db} className="flex items-center justify-between">
                    <span className="text-secondary-700">{db}</span>
                    <div className="w-20 bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Building innovative AI solutions and driving digital transformation
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">{exp.title}</h3>
                    <p className="text-lg text-secondary-700 mb-1">{exp.company}</p>
                    <p className="text-secondary-600">{exp.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-secondary-700 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Continuous learning and academic excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-3">{edu.degree}</h3>
                <p className="text-secondary-700 mb-2">{edu.institution}</p>
                <span className="inline-block bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full font-medium">
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Let's discuss how we can work together on your next AI project
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary-600 mr-3 text-xl" />
                  <a href="mailto:nikhildhole001@gmail.com" className="text-secondary-700 hover:text-primary-600 transition-colors">
                    nikhildhole001@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-primary-600 mr-3 text-xl" />
                  <a href="tel:+918788325037" className="text-secondary-700 hover:text-primary-600 transition-colors">
                    +91 87883 25037
                  </a>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-primary-600 mr-3 text-xl" />
                  <a href="https://github.com/nikhildhole" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-primary-600 transition-colors">
                    github.com/nikhildhole
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-primary-600 mr-3 text-xl" />
                  <a href="https://linkedin.com/in/nikhildhole" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-primary-600 transition-colors">
                    linkedin.com/in/nikhildhole
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-center">Quick Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-800 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-secondary-300">
            © 2024 Nikhil Narayan Dhole. All rights reserved.
          </p>
          <p className="text-secondary-400 mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

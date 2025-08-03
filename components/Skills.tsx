"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "mobile_development",
      icon: "📱",
      skills: ["Java", "Kotlin", "React Native", "SwiftUI", "Jetpack Compose"],
    },
    {
      title: "web_development",
      icon: "🌐",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "Next.js"],
    },
    {
      title: "dev_tools",
      icon: "🛠️",
      skills: ["Git", "Unity 3D", "CI/CD"],
    },
    {
      title: "databases",
      icon: "🗄️",
      skills: ["Realm", "Firebase", "SQLite", "PostgreSQL", "MySQL"],
    },
    {
      title: "methodologies",
      icon: "📋",
      skills: ["Agile/Scrum", "Code Review", "Team Leadership", "Mentoring"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      rotateX: 5,
      boxShadow: "0 20px 40px rgba(57, 208, 214, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="skills" className="py-12 md:py-20 px-4 bg-terminal-surface/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="pixel-font text-2xl md:text-3xl lg:text-4xl text-syntax-green mb-4"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px #7ee787",
              transition: { duration: 0.3 },
            }}
          >
            {"<"} TECH_STACK {"/>"}
          </motion.div>
          <motion.div className="mono-font text-terminal-text-dim text-sm md:text-base" variants={itemVariants}>
            <span className="syntax-comment">// My technical expertise and tools</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="terminal-window"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="terminal-header">
                <div className="terminal-dot red animate-pulse"></div>
                <div className="terminal-dot yellow animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="terminal-dot green animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                <span className="mono-font text-xs md:text-sm text-terminal-text-dim ml-4">
                  {category.icon} {category.title}.js
                </span>
              </div>
              <div className="terminal-content">
                <div className="mono-font text-xs md:text-sm space-y-2">
                  <div className="text-syntax-comment">// Skills in this category</div>
                  <div className="text-syntax-keyword">const</div>{" "}
                  <span className="text-syntax-highlight">{category.title}</span>{" "}
                  <span className="text-terminal-text">= [</span>
                  <div className="ml-4 space-y-1">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        <span className="text-syntax-string">"{skill}"</span>
                        {i < category.skills.length - 1 && <span className="text-terminal-text">,</span>}
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-terminal-text">];</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="mono-font text-xs md:text-sm text-terminal-text-dim ml-4">currently_learning.js</span>
            </div>
            <div className="terminal-content">
              <div className="mono-font text-xs md:text-sm">
                <div className="text-syntax-comment">// Always expanding my skillset</div>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
                  {[
                    "AI/ML",
                    "DevOps",
                    "Mobile Security",
                    "Performance Optimization",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

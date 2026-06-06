"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "IT Specialist — Mobile & Web Engineer",
      company: "PT Bank Central Asia (BCA)",
      location: "Tangerang, Indonesia",
      period: "May 2023 - Present",
      type: "Full Time",
      tasks: [
        "Own end-to-end feature delivery — from requirements analysis to production deployment — for enterprise banking applications serving millions of customers across Android, iOS and web platforms.",
        "Delivered 10+ major features with zero critical post-release incidents, maintaining 99% uptime SLA in a highly regulated banking environment.",
        "Reduced code review cycle time by 30% by introducing structured review checklists and refactoring legacy modules into testable, maintainable components.",
        "Led technical improvement initiatives including architecture refactoring and performance tuning, resulting in measurable gains in app responsiveness.",
        "Collaborate with product managers, designers, and backend engineers in cross-functional Agile squads with minimal supervision.",
      ],
      color: "green",
    },
    {
      title: "Web Frontend Engineer",
      company: "PT Agate International",
      location: "Bandung, Indonesia",
      period: "April 2022 - April 2023",
      type: "Full Time",
      tasks: [
        "Built and maintained 5+ React-based web applications for interactive gamification products, translating UI/UX designs into pixel-perfect responsive interfaces.",
        "Reduced average page load time by approximately 40% through code splitting, lazy loading, and asset optimization.",
        "Integrated frontend applications with backend REST APIs and contributed to a shared component library, cutting new feature implementation time.",
        "Improved performance and user experience through systematic profiling and optimization techniques.",
      ],
      color: "pink",
    },
    {
      title: "Android Developer",
      company: "PT Tokio Marine Life Insurance Indonesia",
      location: "Jakarta, Indonesia",
      period: "August 2020 - June 2022",
      type: "Full Time",
      tasks: [
        "Led Android development for the company's insurance agent mobile application used by 200+ agents nationwide to manage policies and client interactions.",
        "Implemented 15+ new features and enhancements using Kotlin and Java, consistently meeting sprint delivery targets.",
        "Managed end-to-end Google Play Store release lifecycle including versioning, staged rollouts, and production monitoring.",
        "Translated complex insurance business workflows into intuitive mobile UX solutions in close collaboration with stakeholders.",
      ],
      color: "blue",
    },
    {
      title: "Android and Web Developer",
      company: "Multiple Companies & Freelance Projects",
      location: "Indonesia",
      period: "2018 - 2020",
      type: "Freelance",
      tasks: [
        "Delivered Android and web applications end-to-end for clients across manufacturing, agriculture, and technology industries.",
        "Built a strong foundation in full-cycle mobile development: requirements gathering, architecture design, development, testing, and deployment.",
        "Managed freelance client relationships, sharpening self-directed project management and communication skills.",
      ],
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-400 text-green-400",
      pink: "border-pink-400 text-pink-400",
      blue: "border-blue-400 text-blue-400",
      yellow: "border-yellow-400 text-yellow-400",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 40px rgba(57, 208, 214, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="experience" className="py-12 md:py-20 px-4 bg-gray-900/50 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="pixel-font text-2xl md:text-3xl lg:text-4xl text-syntax-green mb-4"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px #7ee787",
              transition: { duration: 0.3 },
            }}
          >
            WORK_EXPERIENCE.LOG
          </motion.h2>
          <motion.div
            className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          className="space-y-6 md:space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`retro-card p-4 md:p-6 lg:p-8 ${getColorClasses(exp.color)}`}
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3 + index * 0.5,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-1">
                  <motion.h3 className="pixel-font text-sm md:text-base lg:text-lg mb-2" whileHover={{ scale: 1.05 }}>
                    {exp.title}
                  </motion.h3>
                  <div className="text-white font-semibold mb-1 text-sm md:text-base">{exp.company}</div>
                  <div className="text-xs md:text-sm text-gray-400 mb-2">{exp.location}</div>
                  <div className="text-xs text-gray-500 mb-2">{exp.period}</div>
                  <motion.div
                    className={`inline-block px-2 py-1 text-xs pixel-font border ${getColorClasses(exp.color)}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {exp.type}
                  </motion.div>
                </div>

                <div className="md:col-span-2">
                  <h4 className="text-white font-semibold mb-3 text-sm md:text-base">Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, i) => (
                      <motion.li
                        key={i}
                        className="text-gray-300 text-xs md:text-sm flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className={`${getColorClasses(exp.color)} mr-2 mt-1 text-xs`}>▶</span>
                        {task}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

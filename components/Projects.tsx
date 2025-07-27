"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "myBCA BISNIS",
      category: "Banking",
      description:
        "Enterprise-grade internet banking platform serving thousands of business clients with comprehensive cash management solutions. Features multi-device accessibility, real-time transaction processing, and advanced authorization workflows for corporate financial operations.",
      tech: ["Angular", "TypeScript", "SwiftUI", "Jetpack Compose"],
      status: "LIVE",
      color: "blue",
      projectUrl: "https://mybcabisnis.bca.co.id/",
      githubUrl: "#",
    },
    {
      title: "MYTHIC PORTAL",
      category: "Gaming",
      description:
        "Immersive fantasy gaming portal powered by web3 technology, enabling players to explore vast worlds, engage in strategic battles, collect rare items, and interact with a global community. ",
      tech: ["React", "TypeScript", "Spine.js"],
      status: "LIVE",
      color: "green",
      projectUrl: "https://one.confiction.com/portal",
      githubUrl: "#",
    },
    {
      title: "FANTASY TEAM",
      category: "Gamification",
      description:
        "Revolutionary fantasy sports platform that transforms soccer fandom into an interactive gaming experience. Users build dream teams, implement strategic formations, and compete globally based on real-world player performances and match statistics.",
      tech: ["React", "JavaScript"],
      status: "ARCHIVED",
      color: "pink",
      projectUrl: "https://www.vidio.com/fantasy-team",
      githubUrl: "#",
    },
    {
      title: "BAGIKUOTA",
      category: "Fintech",
      description:
        "Innovative social commerce platform that monetizes social media engagement through data quota rewards. Successfully connected content creators with brands while providing users with tangible benefits for their social media activities.",
      tech: ["Kotlin", "Firebase", "Android"],
      status: "ARCHIVED",
      color: "yellow",
      projectUrl: "https://bagikuota.id/",
      githubUrl: "#",
    },
    {
      title: "ACTIVITY MANAGEMENT SYSTEM",
      category: "Insurance",
      description:
        "Comprehensive CRM solution designed for insurance sales teams to streamline prospect management, track recruitment activities, and optimize conversion rates. Features advanced analytics, automated workflows, and real-time performance monitoring.",
      tech: ["Java", "Kotlin", "Firebase", "Realm"],
      status: "LIVE",
      color: "purple",
      projectUrl:
        "https://play.google.com/store/apps/details?id=id.co.tokiomarine_life.salesmanagementactivity&pcampaignid=web_share",
      githubUrl: "#",
    },
    {
      title: "LOYOLA PPDB WEBSITE",
      category: "EdTech",
      description:
        "Modern student registration platform serving Kolese Loyola High School with streamlined admission processes. Features automated application workflows, document management, and real-time status tracking for prospective students and administrators.",
      tech: ["React", "JavaScript"],
      status: "LIVE",
      color: "blue",
      projectUrl: "https://ppdb.yayasanloyola.org/#/login",
      githubUrl: "#",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-400 text-green-400",
      pink: "border-pink-400 text-pink-400",
      blue: "border-blue-400 text-blue-400",
      yellow: "border-yellow-400 text-yellow-400",
      purple: "border-purple-400 text-purple-400",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  const getStatusColor = (status: string) => {
    const statusColors = {
      LIVE: "bg-green-400",
      BETA: "bg-yellow-400",
      DEPLOYED: "bg-blue-400",
      ARCHIVED: "bg-gray-400",
    }
    return statusColors[status as keyof typeof statusColors] || "bg-green-400"
  }

  const handleProjectClick = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithubClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
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
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(57, 208, 214, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="projects" className="py-12 md:py-20 px-4 overflow-hidden">
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
            PROJECT_PORTFOLIO.DB
          </motion.h2>
          <motion.div
            className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`retro-card p-4 md:p-6 group cursor-pointer ${getColorClasses(project.color)} ${
                project.projectUrl !== "#" ? "hover:cursor-pointer" : ""
              } flex flex-col h-full`}
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4 + index * 0.3,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              onClick={() => handleProjectClick(project.projectUrl)}
            >
              <div className="flex justify-between items-start mb-4">
                <motion.div
                  className={`pixel-font text-xs px-2 py-1 border ${getColorClasses(project.color)}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {project.status}
                </motion.div>
                <div className="text-xs text-gray-400">{project.category}</div>
              </div>

              <motion.h3
                className="pixel-font text-sm md:text-base lg:text-lg mb-3 group-hover:neon-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {project.title}
              </motion.h3>

              <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300"
                    whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2">
                  {project.projectUrl !== "#" && (
                    <motion.button
                      className={`text-xs pixel-font hover:neon-glow transition-all duration-300 ${getColorClasses(project.color)} flex items-center gap-1`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProjectClick(project.projectUrl)
                      }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      VISIT
                    </motion.button>
                  )}
                  {project.githubUrl !== "#" && (
                    <motion.button
                      className={`text-xs pixel-font hover:neon-glow transition-all duration-300 ${getColorClasses(project.color)} flex items-center gap-1`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleGithubClick(e, project.githubUrl)}
                    >
                      <Github className="w-3 h-3" />
                      CODE
                    </motion.button>
                  )}
                  {project.projectUrl === "#" && project.githubUrl === "#" && (
                    <motion.span className={`text-xs pixel-font opacity-50 ${getColorClasses(project.color)}`}>
                      ARCHIVED
                    </motion.span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} ${project.status === "ARCHIVED" ? "" : "animate-pulse"}`}
                    animate={project.status !== "ARCHIVED" ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center justify-center gap-3 text-terminal-text-dim"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-px bg-terminal-border"></div>
            <div className="mono-font text-sm">
              <span className="syntax-comment">// and many more projects under NDA</span>
            </div>
            <div className="w-8 h-px bg-terminal-border"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

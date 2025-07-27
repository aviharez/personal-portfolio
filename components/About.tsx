"use client"

import { motion } from "framer-motion"

export default function About() {
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
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const titleHoverVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0 0 20px #7ee787",
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="about" className="py-12 md:py-20 px-4 overflow-hidden">
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
            {"<"} ABOUT_ME.EXE {"/>"}
          </motion.div>
          <motion.div className="mono-font text-sm md:text-base text-terminal-text-dim" variants={itemVariants}>
            <span className="syntax-comment">// Get to know the developer behind the code</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="retro-card p-6 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            whileHover="hover"
            animate="hover"
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          >
            <div className="space-y-4 md:space-y-6 text-terminal-text">
              <motion.p className="text-sm md:text-base leading-relaxed" variants={itemVariants}>
                Passionate developer with over 5 years of experience building innovative solutions across mobile and web
                platforms. Currently serving as an IT Specialist at PT Bank Central Asia, where I contribute to research
                and development initiatives for mobile and web products.
              </motion.p>
              <motion.p className="text-sm md:text-base leading-relaxed" variants={itemVariants}>
                My expertise spans from native Android development with Kotlin and Java to iOS development with SwiftUI,
                and modern web technologies like React and Angular. I have a proven track record of delivering
                high-quality cross-platform applications that serve thousands of users.
              </motion.p>
              <motion.p className="text-sm md:text-base leading-relaxed" variants={itemVariants}>
                I believe in writing clean, maintainable code and staying current with emerging technologies to maximize
                development efficiency and create innovative products.
              </motion.p>
            </div>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            <motion.div
              className="retro-card p-4 md:p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
            >
              <h3 className="pixel-font text-base md:text-lg text-pink-400 mb-4">CURRENT_ROLE</h3>
              <div className="text-terminal-text">
                <div className="text-green-400 font-semibold">IT Specialist</div>
                <div className="text-sm">PT Bank Central Asia</div>
                <div className="text-xs text-gray-400">May 2023 - Present</div>
              </div>
            </motion.div>

            <motion.div
              className="retro-card p-4 md:p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.8, ease: "easeInOut", delay: 0.2 }}
            >
              <h3 className="pixel-font text-base md:text-lg text-blue-400 mb-4">EDUCATION</h3>
              <div className="text-terminal-text">
                <div className="text-green-400 font-semibold">S1 Informatics Engineering</div>
                <div className="text-sm">Sekolah Tinggi Teknologi Bandung</div>
                <div className="text-xs text-gray-400">2016 - 2020 | GPA: 3.78</div>
              </div>
            </motion.div>

            <motion.div
              className="retro-card p-4 md:p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.2, ease: "easeInOut", delay: 0.4 }}
            >
              <h3 className="pixel-font text-base md:text-lg text-yellow-400 mb-4">LOCATION</h3>
              <div className="text-terminal-text">
                <div className="text-green-400 font-semibold">Tangerang, Indonesia</div>
                <div className="text-sm">Available for remote work</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "IT Specialist",
      company: "PT Bank Central Asia",
      location: "Tangerang, Indonesia",
      period: "May 2023 - Present",
      type: "Full Time",
      tasks: [
        "Conduct research and development for features to be implemented in the web and mobile product",
        "Conduct comprehensive code reviews to ensure adherence to quality standards and best practices",
        "Collaborate with cross-functional teams to deliver high-quality application",
        "Maintain core aspect of the product to ensure optimal performance and reliability",
      ],
      color: "green",
    },
    {
      title: "Web Frontend Programmer",
      company: "PT Agate International",
      location: "Bandung, Indonesia",
      period: "April 2022 - April 2023",
      type: "Full Time",
      tasks: [
        "Developed responsive web applications using React framework and modern JavaScript technologies",
        "Specialized in gamification project development with interactive user interfaces",
        "Transformed UI/UX designs into functional, pixel-perfect frontend components",
        "Collaborated with backend development teams to ensure seamless API integration and data flow",
        "Implemented performance optimization techniques to enhance user experience",
      ],
      color: "pink",
    },
    {
      title: "Android Developer",
      company: "PT Tokio Marine Life Insurance",
      location: "Jakarta, Indonesia",
      period: "August 2020 - June 2022",
      type: "Full Time",
      tasks: [
        "Led Android development team and managed workflow processes",
        "Developed feature enhancements and new functionalities for insurance agent mobile applications",
        "Managed application publishing, deployment, and maintenance on Google Play Store",
        "Coordinated with product managers and stakeholders to define technical requirements",
      ],
      color: "blue",
    },
    {
      title: "Software Developer",
      company: "PT Padepokan Tujuh Sembilan",
      location: "Bandung, Indonesia",
      period: "June 2020 - June 2022",
      type: "Full Time",
      tasks: [
        "Developed Android and web applications for diverse client portfolio across multiple industries",
        "Worked as outsourced developer providing technical solutions for partner companies",
        "Delivered scalable software solutions using various technology stacks and frameworks",
        "Participated in client requirement analysis and technical solution design",
      ],
      color: "yellow",
    },
    {
      title: "Software Developer",
      company: "BEE TECHNOLOGY",
      location: "Bandung, Indonesia",
      period: "February 2020 - June 2020",
      type: "Full Time",
      tasks: [
        "Developed custom Android and web applications tailored to client specifications",
        "Implemented responsive web interfaces and mobile application features",
        "Participated in project planning and technical requirement documentation",
      ],
      color: "green",
    },
    {
      title: "Programmer",
      company: "PT Pupuk Kujang",
      location: "Karawang, Indonesia",
      period: "August 2019 - January 2020",
      type: "Internship",
      tasks: [
        "Built Android and web applications to support internal business operations",
        "Collaborated with IT department in conceptualizing and designing application workflows",
        "Developed user-friendly interfaces for internal staff and management systems",
        "Participated in system testing and quality assurance processes",
      ],
      color: "blue",
    },
    {
      title: "Android Developer",
      company: "PT Kreasi Teknologi Mandiri",
      location: "Bandung, Indonesia",
      period: "July 2018 - May 2019",
      type: "Freelance",
      tasks: [
        "Developed comprehensive Android application for apartment management and owner services",
        "Implemented user authentication, property management, and notification systems",
        "Managed complete application lifecycle from development to Google Play Store deployment",
        "Provided ongoing maintenance and feature updates based on user feedback",
        "Collaborated with stakeholders to define functional requirements and user experience",
      ],
      color: "pink",
    }
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

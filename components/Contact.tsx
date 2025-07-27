"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      label: "EMAIL",
      value: "elzainsyifa@gmail.com",
      href: "mailto:elzainsyifa@gmail.com",
      color: "green",
    },
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
      label: "PHONE",
      value: "(+62) 851-7234-0473",
      href: "tel:+6285172340473",
      color: "blue",
    },
    {
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
      label: "LOCATION",
      value: "Tangerang, Indonesia",
      href: "#",
      color: "pink",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6 md:w-8 md:h-8" />,
      label: "GitHub",
      href: "#",
      color: "green",
    },
    {
      icon: <Linkedin className="w-6 h-6 md:w-8 md:h-8" />,
      label: "LinkedIn",
      href: "#",
      color: "blue",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-400 text-green-400 hover:bg-green-400",
      pink: "border-pink-400 text-pink-400 hover:bg-pink-400",
      blue: "border-blue-400 text-blue-400 hover:bg-blue-400",
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
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="contact" className="py-12 md:py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="pixel-font text-2xl md:text-3xl lg:text-4xl text-syntax-green mb-4 cursor-default"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px #7ee787",
              transition: { duration: 0.3 },
            }}
          >
            CONTACT_INFO.TXT
          </motion.h2>
          <motion.div
            className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="space-y-6 md:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="retro-card p-6 md:p-8"
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            >
              <h3 className="pixel-font text-base md:text-xl text-green-400 mb-4 md:mb-6">GET_IN_TOUCH</h3>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Ready to collaborate on your next project? I'm always interested in discussing new opportunities,
                innovative ideas, and challenging problems. Let's build something amazing together!
              </p>

              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`flex items-center space-x-3 md:space-x-4 p-3 md:p-4 border-2 transition-all duration-300 hover:text-gray-900 ${getColorClasses(info.color)}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <div className="pixel-font text-xs mb-1">{info.label}</div>
                      <div className="text-xs md:text-sm">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6 md:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="retro-card p-6 md:p-8"
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            >
              <h3 className="pixel-font text-base md:text-xl text-blue-400 mb-4 md:mb-6">SOCIAL_LINKS</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`flex flex-col items-center justify-center p-4 md:p-6 border-2 transition-all duration-300 hover:text-gray-900 group ${getColorClasses(social.color)}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="mb-2 group-hover:animate-bounce"
                      animate={{ rotateY: [0, 360] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "linear" }}
                    >
                      {social.icon}
                    </motion.div>
                    <div className="pixel-font text-xs">{social.label}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="retro-card p-6 md:p-8"
              variants={itemVariants}
              whileHover="hover"
              animate="hover"
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut", delay: 0.4 }}
            >
              <h3 className="pixel-font text-base md:text-xl text-pink-400 mb-4 md:mb-6">AVAILABILITY</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm md:text-base">Status:</span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    />
                    <span className="text-green-400 pixel-font text-xs md:text-sm">AVAILABLE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm md:text-base">Response Time:</span>
                  <span className="text-blue-400 pixel-font text-xs md:text-sm">{"< 24 HOURS"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm md:text-base">Timezone:</span>
                  <span className="text-yellow-400 pixel-font text-xs md:text-sm">GMT+7</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

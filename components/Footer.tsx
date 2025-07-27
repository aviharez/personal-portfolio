"use client"

import { motion } from "framer-motion"
import { Terminal, Heart, Code } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-terminal-surface/50 border-t border-terminal-border py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <Terminal className="w-4 h-4 text-syntax-green animate-pulse" />
            <span className="mono-font text-sm text-terminal-text">
              <span className="syntax-keyword">const</span> <span className="syntax-highlight">developer</span>{" "}
              <span className="text-terminal-text">=</span> <span className="syntax-string">"Syifa Nurzain"</span>
            </span>
          </motion.div>

          <motion.div className="flex items-center gap-2 text-xs text-terminal-text-dim" whileHover={{ scale: 1.05 }}>
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <Heart className="w-3 h-3 text-syntax-red fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <Code className="w-3 h-3 text-syntax-green" />
            </motion.div>
          </motion.div>

          <motion.div className="mono-font text-xs text-terminal-text-dim" whileHover={{ scale: 1.05 }}>
            © {currentYear} All rights reserved
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

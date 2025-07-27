"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("")

  const bootSequence = [
    "Initializing system...",
    "Loading developer profile...",
    "Connecting to portfolio database...",
    "Rendering UI components...",
    "System ready!",
  ]

  useEffect(() => {
    let textIndex = 0
    let charIndex = 0

    const typeText = () => {
      if (textIndex < bootSequence.length) {
        if (charIndex < bootSequence[textIndex].length) {
          setCurrentText(bootSequence[textIndex].slice(0, charIndex + 1))
          charIndex++
          setTimeout(typeText, 50)
        } else {
          setTimeout(() => {
            textIndex++
            charIndex = 0
            if (textIndex < bootSequence.length) {
              setCurrentText("")
              typeText()
            }
          }, 800)
        }
      }
    }

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => setLoading(false), 1000)
          return 100
        }
        return prev + 2
      })
    }, 80)

    typeText()

    return () => clearInterval(progressTimer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-terminal-bg flex items-center justify-center">
      <div className="terminal-window !w-96">
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="mono-font text-sm text-terminal-text-dim ml-2">zain@portfolio:~$</span>
        </div>
        <div className="terminal-content">
          <div className="pixel-font text-xl text-syntax-green mb-6">SNZAIN.DEV</div>
          <div className="mono-font text-sm text-terminal-text mb-4">
            {currentText}
            <span className="typing-cursor">_</span>
          </div>
          <div className="w-full bg-terminal-border h-2 mb-4">
            <div className="h-full bg-syntax-green transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
          <div className="mono-font text-xs text-terminal-text-dim">
            [{progress.toString().padStart(3, "0")}%] Loading complete...
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
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
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => setLoading(false), 800)
          }, 500)
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
    <div
      className={`fixed inset-0 z-50 bg-terminal-bg flex items-center justify-center transition-all duration-800 ease-in-out ${
        fadeOut ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
      }`}
    >
      <div
        className={`terminal-window !w-96 transition-all duration-800 ease-in-out ${
          fadeOut ? "transform scale-90 opacity-0" : "transform scale-100 opacity-100"
        }`}
      >
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="mono-font text-sm text-terminal-text-dim ml-2">zain@portfolio:~$</span>
        </div>
        <div className="terminal-content">
          <div className="pixel-font text-xl text-syntax-green mb-6">ZAIN.DEV</div>
          <div className="mono-font text-sm text-terminal-text mb-4">
            {currentText}
            <span className="typing-cursor">_</span>
          </div>
          <div className="w-full bg-terminal-border h-2 mb-4 overflow-hidden rounded">
            <div
              className="h-full bg-gradient-to-r from-syntax-green via-syntax-cyan to-syntax-blue transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="mono-font text-xs text-terminal-text-dim flex justify-between items-center">
            <span>[{progress.toString().padStart(3, "0")}%] Loading complete...</span>
            {progress === 100 && <span className="text-syntax-green animate-pulse">✓ Ready</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

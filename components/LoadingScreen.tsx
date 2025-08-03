"use client"

import { useState, useEffect, useRef } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const timersRef = useRef<Array<NodeJS.Timeout>>([])

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
    let isActive = true

    const typeText = () => {
      if (!isActive || textIndex >= bootSequence.length) return

      if (charIndex < bootSequence[textIndex].length) {
        setCurrentText(bootSequence[textIndex].slice(0, charIndex + 1))
        charIndex++
        const timer = setTimeout(typeText, 60)
        timersRef.current.push(timer)
      } else {
        const timer = setTimeout(() => {
          if (!isActive) return
          textIndex++
          charIndex = 0
          if (textIndex < bootSequence.length) {
            setCurrentText("")
            typeText()
          }
        }, 600)
        timersRef.current.push(timer)
      }
    }

    const progressTimer = setInterval(() => {
      if (!isActive) return
      
              setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer)
            const timer = setTimeout(() => {
              if (!isActive) return
              setFadeOut(true)
              const finalTimer = setTimeout(() => {
                if (isActive) setLoading(false)
              }, 600)
              timersRef.current.push(finalTimer)
            }, 300)
            timersRef.current.push(timer)
            return 100
          }
          return prev + 3
        })
      }, 60)

    typeText()

    return () => {
      isActive = false
      clearInterval(progressTimer)
      timersRef.current.forEach(timer => clearTimeout(timer))
      timersRef.current = []
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-terminal-bg flex items-center justify-center transition-all duration-600 ease-in-out ${
        fadeOut ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
      }`}
    >
      <div
        className={`terminal-window !w-96 transition-all duration-600 ease-in-out ${
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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
          <div className="mono-font text-xs text-terminal-text-dim flex justify-between items-center">
            <span>[{progress.toString().padStart(3, "0")}%] Loading complete...</span>
            {progress === 100 && <span className="text-syntax-green">✓ Ready</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

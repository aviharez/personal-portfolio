"use client"

import { useEffect, useState, useRef } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<number>(0)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (isMobile) return

    let animationFrame: number

    const updatePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }

      // Cancel previous animation frame
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }

      // Use requestAnimationFrame for smooth movement
      animationFrame = requestAnimationFrame(() => {
        setPosition(newPosition)

        // Add to trail
        setTrail((prevTrail) => {
          const newTrail = [
            { x: newPosition.x, y: newPosition.y, id: trailRef.current++ },
            ...prevTrail.slice(0, 8), // Keep only last 8 trail points
          ]
          return newTrail
        })
      })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.role === "button" ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("pixel-button") ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".retro-card") ||
        target.closest(".game-card") ||
        target.closest(".tech-tag")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.role === "button" ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("pixel-button") ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".retro-card") ||
        target.closest(".game-card") ||
        target.closest(".tech-tag")
      ) {
        setIsHovering(false)
      }
    }

    // Add event listeners
    document.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter, { passive: true })
    document.addEventListener("mouseout", handleMouseLeave, { passive: true })

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: ((trail.length - index) / trail.length) * 0.6,
            transform: `translate(-50%, -50%) scale(${(trail.length - index) / trail.length})`,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "hover" : ""} ${isClicking ? "click" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

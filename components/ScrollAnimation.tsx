"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade-in" | "scale-up"
  delay?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    "slide-up": "translate-y-8 opacity-0 transition-all duration-700 ease-out",
    "slide-left": "translate-x-8 opacity-0 transition-all duration-700 ease-out",
    "slide-right": "-translate-x-8 opacity-0 transition-all duration-700 ease-out",
    "fade-in": "opacity-0 transition-all duration-700 ease-out",
    "scale-up": "scale-95 opacity-0 transition-all duration-700 ease-out",
  }

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
      style={{
        transform: "translateY(20px)",
        opacity: 0,
      }}
    >
      {children}
      <style jsx>{`
        .animate-in {
          transform: translateY(0) translateX(0) scale(1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  )
}

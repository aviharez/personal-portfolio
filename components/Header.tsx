"use client"

import { useState, useEffect } from "react"
import { Menu, X, Terminal } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "about", icon: "📄" },
    { href: "#experience", label: "experience", icon: "💼" },
    { href: "#projects", label: "projects", icon: "🚀" },
    { href: "#skills", label: "skills", icon: "⚡" },
    { href: "#contact", label: "contact", icon: "📧" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-terminal-surface/95 backdrop-blur-md border-b border-terminal-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-2 header-logo">
            <Terminal className="w-5 h-5 md:w-6 md:h-6 text-syntax-green animate-pulse" />
            <div className="mono-font text-sm md:text-lg text-syntax-green">
              <span className="syntax-keyword">const</span> <span className="syntax-highlight">syifa</span>{" "}
              <span className="text-terminal-text">=</span> <span className="syntax-string">"developer"</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-item mono-font text-xs lg:text-sm text-terminal-text hover:text-syntax-cyan transition-all duration-400 relative group px-2 lg:px-3 py-2 animate-slide-in-up stagger-${index + 1}`}
              >
                <span className="mr-1 lg:mr-2 text-xs lg:text-sm">{item.icon}</span>
                <span className="syntax-keyword">cd</span> <span className="syntax-string">~/{item.label}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-syntax-cyan group-hover:w-full transition-all duration-400"></div>
                <div className="absolute inset-0 bg-syntax-cyan/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-syntax-green hover:text-syntax-cyan transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? <X size={20} className="animate-spin" /> : <Menu size={20} className="animate-pulse" />}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-slide-in-up">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red animate-pulse"></div>
                <div className="terminal-dot yellow animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="terminal-dot green animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                <span className="mono-font text-xs text-terminal-text-dim ml-4">navigation.sh</span>
              </div>
              <div className="terminal-content space-y-3">
                <div className="mono-font text-xs text-syntax-comment">#!/bin/bash</div>
                <div className="mono-font text-xs text-syntax-comment"># Navigation menu</div>
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block mono-font text-xs text-terminal-text hover:text-syntax-cyan transition-all duration-300 p-2 rounded hover:bg-syntax-cyan/10 animate-slide-in-left stagger-${index + 1}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="syntax-keyword">function</span>{" "}
                    <span className="syntax-highlight">navigate_{item.label}</span>
                    <span className="text-terminal-text">() {"{"}</span>
                    <br />
                    <span className="ml-4 text-syntax-comment text-xs">
                      // {item.icon} Go to {item.label} section
                    </span>
                    <br />
                    <span className="ml-4 syntax-keyword">window.location</span>
                    <span className="text-terminal-text"> = </span>
                    <span className="syntax-string">"{item.href}"</span>
                    <br />
                    <span className="text-terminal-text">{"}"}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

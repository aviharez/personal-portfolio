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

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    smoothScrollTo(href)
  }

  const navItems = [
    { href: "#about", label: "about", icon: "📄" },
    { href: "#experience", label: "experience", icon: "💼" },
    { href: "#projects", label: "projects", icon: "🚀" },
    { href: "#skills", label: "skills", icon: "⚡" },
    { href: "#contact", label: "contact", icon: "📧" },
  ]

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-terminal-surface/95 backdrop-blur-md border-b border-terminal-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 header-logo">
              <Terminal className="w-5 h-5 md:w-6 md:h-6 text-syntax-green animate-pulse" />
              <div className="mono-font text-sm md:text-lg text-syntax-green">
                <span className="syntax-keyword">const</span> <span className="syntax-highlight">syifa</span>{" "}
                <span className="text-terminal-text">=</span> <span className="syntax-string">"developer"</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-item mono-font text-xs lg:text-sm text-terminal-text hover:text-syntax-cyan transition-all duration-400 relative group px-2 lg:px-3 py-2 animate-slide-in-up stagger-${index + 1}`}
                >
                  <span className="mr-1 lg:mr-2 text-xs lg:text-sm">{item.icon}</span>
                  <span className="syntax-keyword">cd</span> <span className="syntax-string">~/{item.label}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-syntax-cyan group-hover:w-full transition-all duration-400"></div>
                  <div className="absolute inset-0 bg-syntax-cyan/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-syntax-green hover:text-syntax-cyan transition-all duration-300 transform hover:scale-110 z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? <X size={20} className="animate-pulse" /> : <Menu size={20} className="animate-pulse" />}
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 animate-slide-in-up relative z-40">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red animate-pulse"></div>
                  <div className="terminal-dot yellow animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="terminal-dot green animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  <span className="mono-font text-xs text-terminal-text-dim ml-4">navigation.js</span>
                </div>
                <div className="terminal-content space-y-3">
                  <div className="mono-font text-xs text-syntax-comment">// Navigation menu</div>
                  {navItems.map((item, index) => (
                    <button
                      key={item.href}
                      className={`block mono-font text-xs text-terminal-text hover:text-syntax-cyan transition-all duration-300 p-2 rounded hover:bg-syntax-cyan/10 animate-slide-in-left stagger-${index + 1} w-full text-left`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      <span className="syntax-keyword">function</span>{" "}
                      <span className="syntax-highlight">navigate_{item.label}</span>
                      <span className="text-terminal-text">() {"{"}</span>
                      <br />
                      <span className="ml-4 text-syntax-comment text-xs">
                        // {item.icon} Go to {item.label} section
                      </span>
                      <br />
                      <span className="ml-4 syntax-keyword">window.scrollTo</span>
                      <span className="text-terminal-text"> = </span>
                      <span className="syntax-string">"{item.href}"</span>
                      <br />
                      <span className="text-terminal-text">{"}"}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

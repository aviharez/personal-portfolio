"use client"

import { useEffect, useState, useRef } from "react"
import { Code, Coffee, Zap, Play, Pause } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout>()

  const codeLines = [
    "class Developer {",
    "  constructor() {",
    "    this.name = 'Syifa Nurzain';",
    "    this.role = 'Mobile & Front End Developer';",
    "    this.experience = '5+ years';",
    "    this.passion = 'Building apps';",
    "    this.status = 'Available';",
    "  }",
    "",
    "  getSkills() {",
    "    return ['Java', 'Kotlin',",
    "            'React', 'Node.js'];",
    "  }",
    "",
    "  buildAwesomeApps() {",
    "    return 'Let\\'s create!';",
    "  }",
    "}",
  ]

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0

    const typeCode = () => {
      if (!isPlaying) return

      if (lineIndex < codeLines.length) {
        if (charIndex < codeLines[lineIndex].length) {
          setDisplayText((prev) => prev + codeLines[lineIndex][charIndex])
          charIndex++
          setTimeout(typeCode, 50)
        } else {
          setDisplayText((prev) => prev + "\n")
          lineIndex++
          charIndex = 0
          setCurrentLine(lineIndex)
          setTimeout(typeCode, 300)
        }
      } else {
        // Restart animation after completion
        setTimeout(() => {
          setDisplayText("")
          lineIndex = 0
          charIndex = 0
          setCurrentLine(0)
          typeCode()
        }, 3000)
      }
    }

    if (isPlaying) {
      typeCode()
    }

    // Cursor blinking
    intervalRef.current = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const stats = [
    {
      icon: Code,
      value: "5+",
      label: "years_exp",
      colorClass: "text-syntax-green",
      delay: "0.2s",
    },
    {
      icon: Zap,
      value: "25+",
      label: "projects",
      colorClass: "text-syntax-yellow",
      delay: "0.4s",
    },
    {
      icon: Coffee,
      value: "∞",
      label: "choco_cups",
      colorClass: "text-syntax-orange",
      delay: "0.6s",
    },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv/Syifa_Nurzain_CV.pdf"
    link.download = "Syifa_Nurzain_CV.pdf"
    link.target = "_blank"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <ScrollAnimation animation="slide-right">
            <div className="terminal-window hover:scale-105 transition-all duration-500 w-full max-w-full">
              <div className="terminal-header">
                <div className="terminal-dot red animate-pulse"></div>
                <div className="terminal-dot yellow animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="terminal-dot green animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                <span className="mono-font text-xs text-terminal-text-dim ml-2 truncate">Developer.js</span>
              </div>
              <div className="terminal-content p-3 md:p-4 lg:p-6">
                <pre className="mono-font text-xs leading-relaxed overflow-x-auto">
                  <code className="block">
                    {displayText.split("\n").map((line, index) => (
                      <div
                        key={index}
                        className="flex hover:bg-syntax-green/5 transition-colors duration-200 min-h-[1.2em]"
                      >
                        <span className="line-number w-4 md:w-6 text-right mr-2 md:mr-3 text-terminal-text-dim select-none text-xs flex-shrink-0">
                          {line.trim() ? index + 1 : ""}
                        </span>
                        <span className="flex-1 text-xs break-all">
                          {line.includes("class") && (
                            <>
                              <span className="syntax-keyword">class </span>
                              <span className="syntax-highlight">Developer</span>
                              <span className="text-terminal-text"> {"{"}</span>
                            </>
                          )}
                          {line.includes("constructor") && (
                            <>
                              <span className="ml-1 md:ml-2 syntax-keyword">constructor</span>
                              <span className="text-terminal-text">() {"{"}</span>
                            </>
                          )}
                          {line.includes("this.name") && (
                            <>
                              <span className="ml-2 md:ml-4 syntax-keyword">this</span>
                              <span className="text-terminal-text">.</span>
                              <span className="syntax-highlight">name</span>
                              <span className="text-terminal-text"> = </span>
                              <span className="syntax-string">'Syifa Nurzain'</span>
                              <span className="text-terminal-text">;</span>
                            </>
                          )}
                          {line.includes("this.role") && (
                            <>
                              <span className="ml-2 md:ml-4 syntax-keyword">this</span>
                              <span className="text-terminal-text">.</span>
                              <span className="syntax-highlight">role</span>
                              <span className="text-terminal-text"> = </span>
                              <span className="syntax-string">'Mobile & Web Developer'</span>
                              <span className="text-terminal-text">;</span>
                            </>
                          )}
                          {line.includes("this.experience") && (
                            <>
                              <span className="ml-2 md:ml-4 syntax-keyword">this</span>
                              <span className="text-terminal-text">.</span>
                              <span className="syntax-highlight">experience</span>
                              <span className="text-terminal-text"> = </span>
                              <span className="syntax-string">'5+ years'</span>
                              <span className="text-terminal-text">;</span>
                            </>
                          )}
                          {line.includes("this.passion") && (
                            <>
                              <span className="ml-2 md:ml-4 syntax-keyword">this</span>
                              <span className="text-terminal-text">.</span>
                              <span className="syntax-highlight">passion</span>
                              <span className="text-terminal-text"> = </span>
                              <span className="syntax-string">'Building apps'</span>
                              <span className="text-terminal-text">;</span>
                            </>
                          )}
                          {line.includes("this.status") && (
                            <>
                              <span className="ml-2 md:ml-4 syntax-keyword">this</span>
                              <span className="text-terminal-text">.</span>
                              <span className="syntax-highlight">status</span>
                              <span className="text-terminal-text"> = </span>
                              <span className="syntax-string">'Available'</span>
                              <span className="text-terminal-text">;</span>
                            </>
                          )}
                          {line.includes("getSkills") && (
                            <>
                              <span className="ml-1 md:ml-2 syntax-keyword">getSkills</span>
                              <span className="text-terminal-text">() {"{"}</span>
                            </>
                          )}
                          {line.includes("return ['Java'") && (
                            <>
                              <span className="ml-2 md:ml-4 syntax-keyword">return </span>
                              <span className="text-terminal-text">[</span>
                              <span className="syntax-string">'Kotlin'</span>
                              <span className="text-terminal-text">, </span>
                              <span className="syntax-string">'SwiftUI'</span>
                              <span className="text-terminal-text">,</span>
                            </>
                          )}
                          {line.includes("'React'") && (
                            <>
                              <span className="ml-6 md:ml-12 syntax-string">'React'</span>
                              <span className="text-terminal-text">, </span>
                              <span className="syntax-string">'Angular'</span>
                              <span className="text-terminal-text">];</span>
                            </>
                          )}
                          {line.includes("buildAwesome") && (
                            <>
                              <span className="ml-1 md:ml-2 syntax-keyword">buildAwesomeApps</span>
                              <span className="text-terminal-text">() {"{"}</span>
                            </>
                          )}
                          {line.includes("return 'Let") && (
                            <>
                              <span className="ml-2 md:ml-4 syntax-keyword">return </span>
                              <span className="syntax-string">'Let\\'s create!'</span>
                              <span className="text-terminal-text">;</span>
                            </>
                          )}
                          {line.includes("}") && !line.includes("{") && (
                            <span className="text-terminal-text ml-1 md:ml-2">{"}"}</span>
                          )}
                          {line.trim() === "" && <span>&nbsp;</span>}
                        </span>
                      </div>
                    ))}
                    <span
                      className={`text-syntax-green ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
                    >
                      █
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </ScrollAnimation>

          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div>
                <div className="pixel-font text-lg md:text-2xl lg:text-4xl text-syntax-green mb-3 md:mb-4 break-words">
                  <span className="pixel-font glitch-text" data-text="SYIFA NURZAIN">
                    SYIFA NURZAIN
                  </span>
                </div>
                <div className="mono-font text-sm md:text-base lg:text-lg text-syntax-cyan mb-3 md:mb-4 lg:mb-6 break-words">
                  <span className="syntax-keyword">const</span> <span className="syntax-highlight">role</span>{" "}
                  <span className="text-terminal-text">=</span>{" "}
                  <span className="syntax-string">"Mobile & Web Developer"</span>
                </div>
                <div className="mono-font text-terminal-text leading-relaxed mb-4 md:mb-6 space-y-1 text-sm md:text-base">
                  <div>
                    <span className="syntax-comment">// Passionate developer with 5+ years experience</span>
                  </div>
                  <div>
                    <span className="syntax-comment">// Specializing in mobile and web development</span>
                  </div>
                  <div>
                    <span className="syntax-comment">// Currently building solutions at BCA</span>
                  </div>
                  <div>
                    <span className="syntax-comment">// Always learning new technologies</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={400}>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button 
                  className="pixel-button group text-sm"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="group-hover:animate-bounce pixel-font">VIEW_PROJECTS()</span>
                </button>
                <button 
                  className="pixel-button group text-sm"
                  onClick={handleDownloadCV}
                >
                  <span className="group-hover:animate-bounce pixel-font">DOWNLOAD_CV()</span>
                </button>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <ScrollAnimation key={index} animation="scale-up" delay={600 + index * 200}>
                  <div className="game-card p-2 md:p-3 lg:p-4 text-center group">
                    <stat.icon
                      className={`w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 ${stat.colorClass} mx-auto mb-1 md:mb-2 group-hover:animate-bounce`}
                    />
                    <div
                      className={`pixel-font text-xs md:text-sm lg:text-lg ${stat.colorClass} group-hover:animate-pulse`}
                    >
                      {stat.value}
                    </div>
                    <div className="mono-font text-xs text-terminal-text-dim">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

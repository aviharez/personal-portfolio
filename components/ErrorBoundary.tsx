"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    this.setState({ error, errorInfo })
    
    console.group("🚨 Application Error")
    console.error("Error:", error)
    console.error("Error Info:", errorInfo)
    console.error("Component Stack:", errorInfo.componentStack)
    console.groupEnd()
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-4">
          <div className="terminal-window max-w-md w-full">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="mono-font text-sm text-terminal-text-dim ml-2">error@portfolio:~$</span>
            </div>
            <div className="terminal-content p-6">
              <div className="pixel-font text-lg text-syntax-red mb-4">⚠️ SYSTEM ERROR</div>
              <div className="mono-font text-sm text-terminal-text mb-4">
                <p className="mb-2">A client-side exception has occurred.</p>
                <p className="text-terminal-text-dim text-xs mb-4">
                  Error: {this.state.error?.message || "Unknown error"}
                </p>
                <details className="text-xs text-terminal-text-dim">
                  <summary className="cursor-pointer hover:text-terminal-text mb-2">
                    View Error Details
                  </summary>
                  <pre className="bg-terminal-surface p-2 rounded text-xs overflow-auto max-h-32">
                    {this.state.error?.stack}
                  </pre>
                </details>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.location.reload()}
                  className="pixel-button text-xs"
                >
                  Reload Page
                </button>
                <button
                  onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                  className="pixel-button text-xs"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 
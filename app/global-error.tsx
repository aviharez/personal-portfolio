'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error caught:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-4">
          <div className="terminal-window max-w-lg w-full">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="mono-font text-sm text-terminal-text-dim ml-2">global-error@portfolio:~$</span>
            </div>
            <div className="terminal-content p-6">
              <div className="pixel-font text-lg text-syntax-red mb-4">🚨 CRITICAL SYSTEM ERROR</div>
              <div className="mono-font text-sm text-terminal-text mb-4">
                <p className="mb-2">A critical error has occurred in the application.</p>
                <p className="text-terminal-text-dim text-xs mb-4">
                  Error: {error.message || "Unknown error"}
                </p>
                {error.digest && (
                  <p className="text-terminal-text-dim text-xs mb-4">
                    Error ID: {error.digest}
                  </p>
                )}
                <details className="text-xs text-terminal-text-dim">
                  <summary className="cursor-pointer hover:text-terminal-text mb-2">
                    View Error Stack
                  </summary>
                  <pre className="bg-terminal-surface p-2 rounded text-xs overflow-auto max-h-32">
                    {error.stack}
                  </pre>
                </details>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => reset()}
                  className="pixel-button text-xs"
                >
                  Try Again
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="pixel-button text-xs"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 
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
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en" data-theme="dark">
      <head>
        <style>{`
          body { margin: 0; background: oklch(0.155 0.004 155); color: oklch(0.945 0.004 155);
                 font-family: ui-monospace, monospace; display: flex; align-items: center;
                 justify-content: center; min-height: 100vh; }
          .box { max-width: 480px; padding: 48px 40px; border: 1px solid oklch(0.985 0 0 / 0.10); }
          h1 { font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase;
               color: oklch(0.76 0.075 158); margin: 0 0 24px; }
          p  { font-size: 13px; color: oklch(0.70 0.006 155); line-height: 1.7; margin: 0 0 8px; }
          small { font-size: 11px; color: oklch(0.50 0.006 155); }
          button { margin-top: 28px; font-family: inherit; font-size: 11px; letter-spacing: 0.14em;
                   text-transform: uppercase; padding: 12px 22px; border-radius: 100px; cursor: pointer;
                   border: 1px solid oklch(0.76 0.075 158); background: oklch(0.76 0.075 158);
                   color: oklch(0.20 0.04 158); }
        `}</style>
      </head>
      <body>
        <div className="box">
          <h1>Something went wrong</h1>
          <p>{error.message || 'An unexpected error occurred.'}</p>
          {error.digest && <small>ID: {error.digest}</small>}
          <br />
          <button onClick={reset}>Try again</button>
        </div>
      </body>
    </html>
  )
}

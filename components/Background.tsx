"use client"

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 opacity-35 pointer-events-none animate-circuit-flow"
      style={{
        backgroundColor: "var(--terminal-bg)",
        backgroundImage: `
          linear-gradient(0deg, rgba(57, 208, 214, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(57, 208, 214, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "25px 25px",
        backgroundPosition: "0% 0%",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, rgba(126, 231, 135, 0.05) 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}

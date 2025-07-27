import type React from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Syifa Nurzain - Mobile & Web Developer",
  description:
    "Portfolio of Syifa Nurzain - Mobile & Web Developer with 5+ years experience in mobile and web development",
  keywords: "developer, full stack, react, android, kotlin, java, portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={firaCode.className}>
        <div className="min-h-screen bg-terminal-bg">{children}</div>
      </body>
    </html>
  )
}

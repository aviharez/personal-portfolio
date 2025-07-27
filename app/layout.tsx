import type React from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Syifa Nurzain - Mobile & Web Developer",
  description: "Portfolio of Syifa Nurzain - Mobile & Web Developer",
  keywords: "developer, full stack, react, android, kotlin, java, portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest"
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0d1117" />
        <meta name="msapplication-TileColor" content="#0d1117" />
      </head>
      <body className={firaCode.className}>
        <ScrollProgressIndicator />
        <CustomCursor />
        <div className="min-h-screen bg-terminal-bg">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

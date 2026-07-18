import type React from 'react'
import type { Metadata } from 'next'
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Interactions from '@/components/Interactions'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Syifa Nurzain — Mobile & Web Engineer',
  description:
    'Syifa Nurzain — Mobile & Web Engineer. Android (Kotlin / Jetpack Compose), React, TypeScript, Angular. 5+ years shipping production apps in banking, insurance & consumer products.',
  keywords: 'mobile engineer, web engineer, android, kotlin, jetpack compose, react, typescript, angular, portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-motion="full"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#232b26" />
        {/* Inline no-flash script — restores stored theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {/* Cursor elements — wired by Interactions.tsx */}
        <div className="cursor-dot" aria-hidden="true" />
        <div className="cursor-ring" aria-hidden="true" />
        {children}
        <Interactions />
      </body>
    </html>
  )
}

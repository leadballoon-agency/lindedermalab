import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser London - Linde DermaLab | Marylebone Skin Clinic',
  description: 'Expert CO2 laser skin resurfacing in Marylebone, London. Transform your skin with medical-grade treatments for wrinkles, acne scars, and skin rejuvenation.',
  keywords: 'CO2 laser London, skin resurfacing Marylebone, laser treatment London, acne scars, Linde DermaLab, aesthetics',
  openGraph: {
    title: 'CO2 Laser London - Linde DermaLab',
    description: 'Expert CO2 laser treatments in Marylebone. Transform your skin with medical precision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Instagram Embed Script */}
        <script async src="//www.instagram.com/embed.js"></script>
      </body>
    </html>
  )
}
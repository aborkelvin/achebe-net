import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oxanium } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const oxanium = Oxanium({subsets:["latin-ext"]})

export const metadata: Metadata = {
  title: 'Achebe.net',
  description: 'Interact with Achebe in a more personal way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oxanium.className}>
        {children}
      </body>
    </html>
  )
}

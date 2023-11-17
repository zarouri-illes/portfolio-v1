import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zarouri Illes',
  description: "Welcome! I'm a front-end developer with a focus on React and Next.js. I specialize in transforming design concepts into seamless, visually appealing websites. Proficient in HTML, CSS, and JavaScript, I ensure responsive and dynamic user experiences. Let's create something exceptional together!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

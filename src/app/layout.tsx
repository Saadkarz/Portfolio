import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saad Karzouz | AI & Data Science Engineer',
  description: 'Portfolio of Saad Karzouz - AI & Data Science Engineer specializing in Machine Learning, LLMs, and Full Stack Development',
  keywords: ['AI', 'Data Science', 'Machine Learning', 'LLM', 'Python', 'Java', 'Spring Boot', 'Portfolio'],
  authors: [{ name: 'Saad Karzouz' }],
  openGraph: {
    title: 'Saad Karzouz | AI & Data Science Engineer',
    description: 'AI & Data Science Engineer specializing in Machine Learning and Full Stack Development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

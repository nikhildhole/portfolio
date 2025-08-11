import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nikhil Narayan Dhole - Senior AI Engineer',
  description: 'Senior AI Engineer with 1.5+ years of experience building production-ready customer service chatbots and voicebots. Expert in RAG solutions, cloud deployments, and telephony integration.',
  keywords: 'AI Engineer, Chatbot, Voicebot, RAG, LangChain, OpenAI, Azure, Kubernetes',
  authors: [{ name: 'Nikhil Narayan Dhole' }],
  creator: 'Nikhil Narayan Dhole',
  openGraph: {
    title: 'Nikhil Narayan Dhole - Senior AI Engineer',
    description: 'Senior AI Engineer with expertise in chatbots, voicebots, and AI solutions',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

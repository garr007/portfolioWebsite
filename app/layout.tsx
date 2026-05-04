import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/common/Navbar'

export const metadata: Metadata = {
  title: 'Muhammad Tegar Abhiram | Data Science & AI Engineer',
  description: 'Portfolio website showcasing AI, Data Science, and Computer Vision projects. Specialized in TensorFlow, YOLO, and machine learning.',
  keywords: ['Data Science', 'AI Engineer', 'Computer Vision', 'Machine Learning', 'Python'],
  authors: [{ name: 'Muhammad Tegar Abhiram' }],
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

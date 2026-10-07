import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Local Journey | Hành Trình Khám Phá 34 Tỉnh Thành Ở Việt Nam',
  description: 'Smart AI-powered travel itinerary generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="dark">
      <body className="antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
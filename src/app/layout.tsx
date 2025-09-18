import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BunStream — OTT Subscriptions, Simplified',
  description: 'Bundle U.S. OTT subscriptions with one bill and save. Modern, secure checkout with dedicated support.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container-px mx-auto max-w-7xl">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

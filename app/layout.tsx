import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Urja Yoga & Sound · Berlin',
    template: '%s · Urja Yoga Berlin',
  },
  description: 'Traditional Hatha Yoga, Pranayama and Sound Healing in Berlin — online and in studio. Small groups, full attention. Trial class from €10.',
  metadataBase: new URL('https://www.urja.yoga'),
  openGraph: {
    siteName: 'Urja Yoga & Sound',
    locale: 'en_DE',
    type: 'website',
    images: [{ url: '/images/HomePage_Hero.jpg', width: 1200, height: 630, alt: 'Urja Yoga & Sound Berlin' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.urja.yoga',
  },
  verification: {
    google: '4HCDRSt44k6zTfyDQ5QEF_jcO8j6GNvCzTTz4TBb96A',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

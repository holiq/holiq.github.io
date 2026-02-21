import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import SkipToContent from '@/components/SkipToContent'
import ThemeProvider from '@/components/ThemeProvider'
import ProgressBar from '@/components/ProgressBar'

export const metadata: Metadata = {
  metadataBase: new URL('https://holiq.id'),

  title: {
    default: 'Holiq Ibrahim | Web Developer Specialist Laravel',
    template: '%s | Holiq Ibrahim',
  },

  description: 'Web Developer dengan keahlian Laravel, PHP, dan teknologi modern. Pengalaman di PT Hasta Prima Solusi, KoalaFacade, dan Seccodeid.',

  applicationName: 'Holiq Ibrahim Portfolio',

  keywords: ['web developer', 'Laravel', 'PHP', 'fullstack developer', 'Indonesia', 'Tangerang', 'CodeIgniter', 'TailwindCSS'],

  authors: [{ name: 'Holiq Ibrahim', url: 'https://holiq.id' }],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Holiq Ibrahim | Web Developer',
    description: 'Web Developer specializing in Laravel, PHP, and modern web technologies',
    url: 'https://holiq.id',
    siteName: 'Holiq Ibrahim Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Holiq Ibrahim | Web Developer',
    description: 'Web Developer specializing in Laravel, PHP, and modern web technologies',
    images: ['/twitter-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Holiq Ibrahim',
  jobTitle: 'Web Developer',
  url: 'https://holiq.id',
  email: 'me@holiq.id',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tangerang',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://github.com/holiq',
    'https://linkedin.com/in/holiq-ibrahim',
  ],
  knowsAbout: ['Laravel', 'PHP', 'CodeIgniter', 'TailwindCSS', 'JavaScript', 'MySQL', 'REST API'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8B5CF6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ProgressBar />
          <SkipToContent />
          <ErrorBoundary>
            <SmoothScroll>
              <main id="main-content">{children}</main>
            </SmoothScroll>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}

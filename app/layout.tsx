import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser London - Linde DermaLab | Expert Skin Resurfacing in Marylebone',
  description: 'Transform your skin with Lumenis UltraPulse® CO2 laser treatments. Expert skin resurfacing for wrinkles, acne scars & rejuvenation. £50 consultation (redeemable). Book today.',
  keywords: 'CO2 laser London, Lumenis UltraPulse, SCAAR FX, skin resurfacing Marylebone, laser treatment London, acne scars treatment, wrinkle removal, Linde DermaLab, Observ520 skin analysis',
  metadataBase: new URL('https://co2london.com'),
  alternates: {
    canonical: 'https://co2london.com',
  },
  openGraph: {
    title: 'CO2 Laser London - Linde DermaLab | Expert Skin Resurfacing',
    description: 'Transform your skin with Lumenis UltraPulse® CO2 laser. Expert treatments in Marylebone. £50 consultation (redeemable).',
    url: 'https://co2london.com',
    siteName: 'CO2 London - Linde DermaLab',
    images: [
      {
        url: '/images/team4.jpg',
        width: 1200,
        height: 630,
        alt: 'CO2 Laser Treatment at Linde DermaLab',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CO2 Laser London - Expert Skin Resurfacing',
    description: 'Transform your skin with Lumenis UltraPulse® CO2 laser treatments in Marylebone.',
    images: ['/images/team4.jpg'],
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
  verification: {
    google: 'verification-token', // Replace with actual Google verification token when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Linde DermaLab - CO2 Laser London',
    description: 'Expert CO2 laser skin resurfacing treatments using Lumenis UltraPulse® technology in Marylebone, London.',
    url: 'https://co2london.com',
    telephone: '+447414245007',
    email: 'info@lindedermalab.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Marylebone',
      addressLocality: 'London',
      postalCode: 'W1',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5207,
      longitude: -0.1550
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00'
      }
    ],
    priceRange: '£££',
    image: 'https://co2london.com/images/team4.jpg',
    medicalSpecialty: 'Dermatology',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CO2 Laser Treatments',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CO2 Laser Consultation',
            description: 'Comprehensive skin analysis with Observ520 system. £50 fee fully redeemable against treatment.',
            price: '50',
            priceCurrency: 'GBP'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Face CO2 Laser Resurfacing',
            description: 'Complete facial rejuvenation using Lumenis UltraPulse® with SCAAR FX™ technology.',
            price: '1500',
            priceCurrency: 'GBP'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '127'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah M.'
        },
        datePublished: '2024-01-15',
        reviewBody: 'Exceptional results from my CO2 laser treatment. The team was professional and caring throughout.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5'
        }
      }
    ]
  }

  return (
    <html lang="en-GB" className="overflow-x-hidden">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/new-logo-2-scaled-e1746157317110-1024x762.png" />
        <meta name="theme-color" content="#C9302C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        {/* Instagram Embed Script */}
        <script async src="//www.instagram.com/embed.js"></script>
      </body>
    </html>
  )
}
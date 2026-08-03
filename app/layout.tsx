import type { Metadata, Viewport } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import './globals.css'
import { JsonLd } from '@/components/seo/json-ld'
import { COMPANY_NAME, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HUANING ZHIKE — PVD Vacuum Coating Equipment',
    template: '%s | HUANING ZHIKE',
  },
  description:
    'Customized PVD vacuum coating systems for industrial production, semiconductor, optical, and laboratory R&D applications. Multi-arc ion plating, magnetron sputtering, electron beam evaporation, and composite coating platforms.',
  keywords: [
    'PVD coating equipment',
    'vacuum coating machine',
    'magnetron sputtering',
    'multi-arc ion plating',
    'electron beam evaporation',
    'DLC coating',
    'optical coating',
    'thin film deposition',
    'semiconductor coating',
    'HUANING ZHIKE',
  ],
  authors: [{ name: 'Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd.' }],
  creator: 'HUANING ZHIKE',
  publisher: 'HUANING ZHIKE',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'HUANING ZHIKE',
    title: 'HUANING ZHIKE — PVD Vacuum Coating Equipment',
    description:
      'Customized PVD vacuum coating systems for industrial production, semiconductor, optical, and laboratory R&D applications.',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: 'HUANING ZHIKE PVD Vacuum Coating Equipment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUANING ZHIKE — PVD Vacuum Coating Equipment',
    description:
      'Customized PVD vacuum coating systems for industrial production, semiconductor, optical, and laboratory R&D applications.',
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
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
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#F7FAFE',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className={`bg-background ${inter.variable} ${rajdhani.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: COMPANY_NAME,
            alternateName: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/images/logo.png`,
            email: 'huaning@huaningzhike.cn',
            telephone: '+86-131-5710-7579',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'No. 16 Xiken Road, Building 1, Room 102, Xingqiao Subdistrict',
              addressLocality: 'Hangzhou',
              addressRegion: 'Zhejiang',
              addressCountry: 'CN',
            },
          }}
        />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

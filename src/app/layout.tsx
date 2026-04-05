import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAWidget from '@/components/layout/CTAWidget';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leamah.co.za'),
  title: {
    template: '%s | Leamah',
    default: 'Leamah | Business Management Software for African SMEs',
  },
  description:
    'Leamah provides purpose-built business management software for South African SMEs across retail, healthcare, logistics and professional services.',
  openGraph: {
    siteName: 'Leamah',
    locale: 'en_ZA',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://leamah.co.za/#org',
      name: 'Leamah',
      url: 'https://leamah.co.za',
      logo: 'https://leamah.co.za/images/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@leamah.co.za',
        contactType: 'customer service',
        areaServed: 'ZA',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://leamah.co.za/#website',
      url: 'https://leamah.co.za',
      name: 'Leamah',
      publisher: { '@id': 'https://leamah.co.za/#org' },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CTAWidget />
      </body>
    </html>
  );
}

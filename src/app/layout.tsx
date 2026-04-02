import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://relohu.com'),
  title: {
    default: "ReLoHu | Be Seen. Be Known.",
    template: "%s | ReLoHu"
  },
  description: "A private one-on-one session with Dr. David that maps your psychological terrain and produces a complete written portrait of who you are. Not therapy. One experience. Permanent clarity.",
  keywords: [
    "ReLoHu",
    "psychological terrain map",
    "self-knowledge session",
    "know yourself",
    "personal clarity",
    "emotional mapping",
    "depth psychology",
    "one-on-one session",
    "psychological portrait",
    "therapy alternative",
    "self-awareness",
    "personal insight"
  ],
  authors: [{ name: "Dr. David - ReLoHu Creator" }],
  creator: "Dr. David",
  publisher: "ReLoHu",
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
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://relohu.com',
    siteName: 'ReLoHu',
    title: "ReLoHu | Be Seen. Be Known.",
    description: "A private one-on-one session with Dr. David that maps your psychological terrain and produces a complete written portrait of who you are. Not therapy. One experience. Permanent clarity.",
    images: [
      {
        url: '/david-photo-cropped.jpeg',
        width: 800,
        height: 1000,
        alt: 'Dr. David - ReLoHu Creator',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ReLoHu | Be Seen. Be Known.",
    description: "A private one-on-one session with Dr. David that maps your psychological terrain and produces a complete written portrait of who you are.",
    creator: '@relohu',
    images: ['/david-photo-cropped.jpeg'],
  },
  // To verify with Google Search Console, add your verification code here:
  // verification: { google: 'YOUR_CODE_FROM_SEARCH_CONSOLE' },
  icons: {
    icon: [
      { url: '/favicon-r.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon-r.svg', type: 'image/svg+xml' },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ReLoHu',
  description: 'A private one-on-one session with Dr. David that maps your psychological terrain and produces a complete written portrait of who you are.',
  url: 'https://relohu.com',
  logo: 'https://relohu.com/relohu-logo.png',
  image: 'https://relohu.com/david-photo-cropped.jpeg',
  founder: {
    '@type': 'Person',
    name: 'Dr. David',
    jobTitle: 'Founder',
    description: 'Licensed dentist, Harvard-certified wellness coach, and creator of the ReLoHu methodology.',
  },
  serviceType: 'Psychological Terrain Mapping',
  areaServed: 'Worldwide',
  availableLanguage: ['English', 'Spanish'],
  offers: [
    {
      '@type': 'Offer',
      name: 'Full Session',
      price: '497',
      priceCurrency: 'USD',
      description: '90-minute intake conversation, five detailed reports, and a Terrain Map reading session with Dr. David.',
    },
    {
      '@type': 'Offer',
      name: 'Terrain Session',
      price: '250',
      priceCurrency: 'USD',
      description: 'A focused intake conversation and a core pattern summary with a verbal readback.',
    },
  ],
  sameAs: [
    'https://www.google.com/maps/place/ReLoHu',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <FloatingCTA />
        <Toaster />
      </body>
    </html>
  );
}

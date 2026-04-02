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
  description: "A single deep session that maps your inner world. ReLoHu is a 1-2 hour conversation with Dr. David that produces a complete picture of who you are — not what is wrong with you.",
  keywords: [
    "ReLoHu",
    "emotional terrain map",
    "therapy optimization",
    "psychologically sophisticated",
    "inner observer",
    "deep therapy",
    "therapeutic alliance",
    "emotional mapping",
    "personal transformation",
    "consciousness exploration",
    "depth psychology"
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
    description: "A single deep session that maps your inner world. ReLoHu is a 1-2 hour conversation with Dr. David that produces a complete picture of who you are — not what is wrong with you.",
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
    description: "A single deep session that maps your inner world. ReLoHu is a 1-2 hour conversation with Dr. David that produces a complete picture of who you are.",
    creator: '@relohu',
    images: ['/david-photo-cropped.jpeg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-r.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon-r.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

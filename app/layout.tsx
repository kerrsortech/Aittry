import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stylr.tech'),
  title: {
    default: "Stylr - AI-Powered Virtual Try-On & Shopping Assistant",
    template: "%s | Stylr"
  },
  description: "Transform your online store with studio-quality virtual try-on and an AI shopping assistant. Reduce returns by 30%, boost conversions by 30%, and provide personalized product recommendations.",
  keywords: ["virtual try-on", "AI shopping assistant", "e-commerce", "fashion technology", "virtual fitting room", "online shopping", "AR shopping", "product visualization", "fashion AI", "clothing try-on"],
  authors: [{ name: "Stylr" }],
  creator: "Stylr",
  publisher: "Stylr",
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
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stylr.tech',
    siteName: "Stylr",
    title: "Stylr - AI-Powered Virtual Try-On & Shopping Assistant",
    description: "Transform your online store with studio-quality virtual try-on and an AI shopping assistant. Reduce returns by 30%, boost conversions by 30%.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stylr - Virtual Try-On Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stylr - AI-Powered Virtual Try-On & Shopping Assistant",
    description: "Transform your online store with studio-quality virtual try-on and an AI shopping assistant.",
    images: ["/og-image.png"],
    creator: "@stylr",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://stylr.tech',
  },
  category: "E-commerce Technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Stylr_icon.png", type: "image/png" },
    ],
    apple: "/Stylr_icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stylr",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://stylr.tech",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://stylr.tech"}/Stylr_icon.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@stylr.tech",
      "contactType": "Customer Service"
    },
    "sameAs": [],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Leeds",
        "addressCountry": "GB"
      }
    ],
    "description": "AI-powered virtual try-on and shopping assistant platform for e-commerce retailers"
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Stylr Virtual Try-On",
    "applicationCategory": "E-commerce Software",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

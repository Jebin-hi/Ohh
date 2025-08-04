import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"

const tiltNeon = Tilt_Neon({
  variable: "--font-tilt-neon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Jebs Portfolio",
    template: "%s | Jebs Portfolio"
  },
  description: "Hey there! I'm Jebs - a content writer who loves turning ideas into stories that actually work. Check out my guides, articles, and let's create something awesome together.",
  metadataBase: new URL("https://jebs.vercel.app"),
  keywords: [
    "content writer",
    "copywriter",
    "blog writer",
    "content marketing",
    "SEO content",
    "tech writer",
    "healthcare content",
    "finance copywriter",
    "e-commerce content",
    "conversion copywriting",
    "content strategy",
    "writing services",
    "portfolio"
  ],
  authors: [{ name: "Jebin Sultana", url: "https://jebs.vercel.app" }],
  creator: "Jebin Sultana",
  publisher: "Jebin Sultana",
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
    google: "your-google-verification-code",
  },
  openGraph: {
    title: "Jebs Portfolio",
    description: "Hey there! I'm Jebs - a content writer who loves turning ideas into stories that actually work. Check out my guides, articles, and let's create something awesome together.",
    siteName: "Jebs Portfolio",
    url: "https://jebs.vercel.app",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jebs - Content Writer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jebs Portfolio",
    description: "Hey there! I'm Jebs - a content writer who loves turning ideas into stories that actually work. Check out my guides, articles, and let's create something awesome together.",
    images: ["/og-image.jpg"],
    creator: "@jebs_writer",
  },
  alternates: {
    canonical: "https://jebs.vercel.app",
  },
  category: "Portfolio",
  classification: "Content Writing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jebin Sultana",
    "alternateName": "Jebs",
    "url": "https://jebs.vercel.app",
    "email": "hello.jebin2025@gmail.com",
    "jobTitle": "Content Writer & Copywriter",
    "description": "Professional content writer and copywriter with 5+ years of experience specializing in tech, healthcare, finance, and e-commerce content.",
    "knowsAbout": [
      "Content Writing",
      "Copywriting",
      "Content Marketing",
      "SEO Content",
      "Tech Writing",
      "Healthcare Content",
      "Finance Copywriting",
      "E-commerce Content"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Content Writer",
      "description": "Creating engaging content that converts and connects with audiences",
      "url": "https://jebs.vercel.app"
    },
    "sameAs": [
      "https://www.facebook.com/jebinsultanaa",
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${tiltNeon.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

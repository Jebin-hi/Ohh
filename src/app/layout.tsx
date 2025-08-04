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
  title: "Jebs Portfolio",
  description: "Hey there! I'm Jebs - a content writer who loves turning ideas into stories that actually work. Check out my guides, articles, and let's create something awesome together.",
  metadataBase: new URL("https://jebs.vercel.app"),
  keywords: ["content writer", "copywriter", "blog writer", "guides", "articles", "content marketing"],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Jebin Sultana", url: "https://jebs.vercel.app" }],
  openGraph: {
    title: "Jebs Portfolio",
    description: "Hey there! I'm Jebs - a content writer who loves turning ideas into stories that actually work.",
    siteName: "Jebs Portfolio",
    url: "https://jebs.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
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

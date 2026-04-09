import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olympus Academy - Learn In-Demand Skills | Courses in Trading, Design & Development",
  description: "Master trading, design, development, cybersecurity, data analytics, and video production with expert instructors. Lifetime access to premium courses. Join 50,000+ learners.",
  keywords: "online courses, forex trading, web development, graphic design, cybersecurity, data analytics, video production, skill development, professional training",
  authors: [{ name: "Olympus Academy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://olympus.academy",
    siteName: "Olympus Academy",
    title: "Olympus Academy - Learn In-Demand Skills",
    description: "Master in-demand skills with expert instructors. Lifetime access to premium courses in trading, design, development, and more.",
    images: [
      {
        url: "https://olympus.academy/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olympus Academy - Learn In-Demand Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olympus Academy - Learn In-Demand Skills",
    description: "Master in-demand skills with expert instructors and lifetime course access.",
    images: ["https://olympus.academy/twitter-image.jpg"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://olympus.academy",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

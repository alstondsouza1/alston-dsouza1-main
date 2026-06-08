import localFont from "next/font/local";
import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistMono = localFont({
  src: "./geist-mono-latin.woff2",
  variable: "--font-space-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alston Dsouza | Software Developer",
  description:
    "Portfolio of Alston Dsouza, a recent software development graduate building full-stack web apps, AI tools, and backend systems.",
  keywords: [
    "Alston Dsouza",
    "Software Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Java",
    "Node.js",
    "Docker",
    "AI",
  ],
  authors: [{ name: "Alston Dsouza" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Alston Dsouza | Software Developer",
    description:
      "Full-stack, backend, and AI projects by software developer Alston Dsouza.",
    siteName: "Alston Dsouza Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alston Dsouza, Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alston Dsouza | Software Developer",
    description:
      "Full-stack, backend, and AI projects by software developer Alston Dsouza.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

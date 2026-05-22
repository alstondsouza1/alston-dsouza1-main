import { Space_Mono } from "next/font/google";
import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
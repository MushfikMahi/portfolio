import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mushfikus Salehin Mahi — Full-Stack Developer & Entrepreneur",
  description:
    "Mushfikus Salehin Mahi is a full-stack developer and entrepreneur from Chittagong building premium digital products — from first line of code to first million users.",
  keywords: [
    "Mushfikus Salehin Mahi",
    "Founder",
    "Full-Stack Developer",
    "Entrepreneur",
    "Portfolio",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} bg-obsidian font-sans text-ivory antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

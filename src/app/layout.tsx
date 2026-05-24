import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arjun Prasad | Portfolio",
  description: "4.5 years building high-throughput payment systems at PhonePe. 500+ RPS microservices, 4M+ daily transactions, distributed backend ownership.",
  keywords: "backend engineer, distributed systems, java, microservices, system design, PhonePe, payments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

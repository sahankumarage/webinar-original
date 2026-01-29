import type { Metadata } from "next";
import { Oswald, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IronForge Fitness",
  description: "Forge Your Ultimate Physique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-oswald)]`}
      >
        {children}
      </body>
    </html>
  );
}


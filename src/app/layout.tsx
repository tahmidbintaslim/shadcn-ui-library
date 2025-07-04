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
  title: "shadcn/ui Components Collection",
  description: "A curated collection of beautiful, accessible, and reusable components built with React, TypeScript, and Tailwind CSS",
  keywords: ["shadcn", "ui", "components", "react", "typescript", "tailwind", "nextjs"],
  authors: [{ name: "shadcn/ui Components Collection" }],
  creator: "shadcn/ui Components Collection",
  publisher: "shadcn/ui Components Collection",
  metadataBase: new URL("https://your-app-name.vercel.app"),
  openGraph: {
    title: "shadcn/ui Components Collection",
    description: "A curated collection of beautiful, accessible, and reusable components built with React, TypeScript, and Tailwind CSS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcn/ui Components Collection",
    description: "A curated collection of beautiful, accessible, and reusable components built with React, TypeScript, and Tailwind CSS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

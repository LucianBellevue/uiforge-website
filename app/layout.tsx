import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIForge - Premium Frontend Development Services",
  description: "Transform your vision into stunning web experiences. Custom websites, web applications, and frontend development services tailored to your needs.",
  keywords: ["frontend development", "web design", "custom websites", "web applications", "React", "Next.js"],
  authors: [{ name: "UIForge" }],
  openGraph: {
    title: "UIForge - Premium Frontend Development Services",
    description: "Transform your vision into stunning web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

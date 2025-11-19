import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suyog Magar - Backend-Focused Full Stack Developer",
  description: "Personal portfolio of Suyog Magar, a backend-focused full-stack developer specializing in Java, Spring Boot, and React. Showcase of projects, skills, and experience in building scalable web applications.",
  keywords: ["Suyog Magar", "Full Stack Developer", "Java", "Spring Boot", "React", "Portfolio", "Backend Developer"],
  authors: [{ name: "Suyog Magar" }],
  openGraph: {
    title: "Suyog Magar - Full Stack Developer",
    description: "Backend-focused full-stack developer specializing in Java, Spring Boot, and React",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suyog Magar - Full Stack Developer",
    description: "Backend-focused full-stack developer specializing in Java, Spring Boot, and React",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

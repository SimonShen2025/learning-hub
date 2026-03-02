import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Learning Hub",
  description:
    "Course notes and study materials, organised by course, section, and lecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950/20 dark:via-slate-950 dark:to-slate-950`}
      >
        <header className="sticky top-0 z-40 border-b border-violet-100 dark:border-violet-900/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
          <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-xs font-bold">
                L
              </div>
              <span className="text-sm font-semibold tracking-tight">
                Learning Hub
              </span>
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

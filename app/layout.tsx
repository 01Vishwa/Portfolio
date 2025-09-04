import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/ui/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Vishwa R - Fresh Grad | Data Science Enthusiast",
  description: "Fresh graduate with a passion for data science and a strong foundation in machine learning, statistics, and programming.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    return (
      <html lang="en" className={`${geist.variable}`}> 
        <body className="font-sans antialiased">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {/* Navbar at the top */}
            <div className="relative min-h-screen">
              <Navbar />
              <main className="pt-[64px]">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    )
}

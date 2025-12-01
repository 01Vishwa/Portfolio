import type React from "react"
import type { Metadata } from "next"
import { Turret_Road } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/ui/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
  display: "swap",
  variable: "--font-turret-road",
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
  <html lang="en" className={`${turretRoad.variable}`} suppressHydrationWarning>
        <body className="antialiased" style={{ fontFamily: 'var(--font-turret-road)' }}>
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

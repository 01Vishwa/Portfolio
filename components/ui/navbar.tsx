"use client"

import { useEffect, useState, useRef } from "react"
import { Home, Briefcase, FolderOpen, Sparkles, Mail, Sun, Moon, Award } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  {
    label: "Home",
    href: "#intro",
    icon: <Home className="h-5 w-5" />,
    sectionId: "intro",
  },
  {
    label: "Experience",
    href: "#work",
    icon: <Briefcase className="h-5 w-5" />,
    sectionId: "work",
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <FolderOpen className="h-5 w-5" />,
    sectionId: "projects",
  },
  {
    label: "Skills",
    href: "#skills",
    icon: <Sparkles className="h-5 w-5" />,
    sectionId: "skills",
  },
  {
    label: "Certificates",
    href: "#thoughts",
    icon: <Award className="h-5 w-5" />,
    sectionId: "thoughts",
  },
  {
    label: "Contact",
    href: "#connect",
    icon: <Mail className="h-5 w-5" />,
    sectionId: "connect",
  },
]

export function Navbar() {
  const [active, setActive] = useState<string>("")
  const navRef = useRef<HTMLElement>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll to section with offset for sticky navbar
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    const nav = navRef.current
    if (section && nav) {
      // Get navbar height
      const navHeight = nav.offsetHeight
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      // Scroll with offset
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: "smooth"
      })
      // Update hash
      window.history.replaceState(null, "", `#${id}`)
      // Accessibility: focus heading
      const heading = section.querySelector("h1, h2, h3, [tabindex], [role='heading']") as HTMLElement | null
      if (heading) {
        setTimeout(() => heading.focus(), 500)
      }
    }
  }

  // Handle click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
    setActive(id)
  }

  // Update active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = ""
      for (const item of navItems) {
        const section = document.getElementById(item.sectionId)
        if (section) {
          const nav = navRef.current
          const navHeight = nav ? nav.offsetHeight : 0
          const rect = section.getBoundingClientRect()
          if (rect.top - navHeight <= 10 && rect.bottom - navHeight > 10) {
            found = item.sectionId
            break
          }
        }
      }
      setActive(found)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // On initial load with hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      setTimeout(() => scrollToSection(id), 100)
      setActive(id)
    }
  }, [])

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      scrollToSection(id)
      setActive(id)
    }
  }

  return (
    <nav ref={navRef} className="w-full px-4 py-2 bg-transparent sticky top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <ul className="flex flex-row justify-center items-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                tabIndex={0}
                onClick={e => handleNavClick(e, item.sectionId)}
                onKeyDown={e => handleKeyDown(e, item.sectionId)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors duration-300 text-sm font-semibold hover:bg-accent/60 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 ${
                  active === item.sectionId ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
                aria-label={item.label}
                aria-current={active === item.sectionId ? "page" : undefined}
              >
                <span className={`transition-colors duration-300 ${active === item.sectionId ? "text-primary-foreground" : "text-muted-foreground"}`}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        {mounted && (
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 flex items-center justify-center rounded-md border border-border bg-transparent px-2 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-ring/40"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>
        )}
      </div>
    </nav>
  )
}

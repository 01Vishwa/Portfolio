"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import LoadingScreen from "@/components/ui/loading-screen"
import { useThrottle } from "@/lib/hooks/use-throttle"
import HeroSection from "@/components/sections/hero-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import CertificatesSection from "@/components/sections/certificates-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1250)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const handleScroll = useThrottle(() => {
    const scrollY = window.scrollY
    setShowBackToTop(scrollY > 400)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div 
        className={`min-h-screen bg-background text-foreground relative transition-colors duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-1000`}
      >
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-4">
            {["intro", "work", "projects", "skills", "thoughts", "connect"].map((section) => (
              <button
                key={section}
                onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
                className={`w-2 h-8 rounded-full transition-all duration-500 ${
                  activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Navigate to ${section}`}
              />
            ))}
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
          <HeroSection sectionRef={(el) => { sectionsRef.current[0] = el }} />
          <ExperienceSection sectionRef={(el) => { sectionsRef.current[1] = el }} />
          <ProjectsSection sectionRef={(el) => { sectionsRef.current[2] = el }} />
          <SkillsSection sectionRef={(el) => { sectionsRef.current[3] = el }} />
          <CertificatesSection sectionRef={(el) => { sectionsRef.current[4] = el }} />
          <ContactSection sectionRef={(el) => { sectionsRef.current[5] = el }} />
        </main>

        {showBackToTop && (
          <Button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background border border-border hover:border-muted-foreground/50 hover:scale-110 ${
              showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            size="sm"
            variant="outline"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        )}

        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      </div>
    </>
  )
}

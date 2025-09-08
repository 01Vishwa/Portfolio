"use client"

import React from "react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2, Server, Brain, Cog, FileText, Linkedin, ChevronUp } from "lucide-react"
import BeyondTheCode from "@/components/beyond-the-code"
import LoadingScreen from "@/components/ui/loading-screen"
import EducationDialog from "@/components/education-dialog"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeCategory, setActiveCategory] = useState<"Programming" | "Data Science" | "Web Dev" | "Tools">(
    "Programming",
  )
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowBackToTop(scrollY > 400) // Show button after scrolling 400px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Helper function to get gradient styles for category buttons
  const getCategoryStyles = (category: "Programming" | "Data Science" | "Web Dev" | "Tools", isActive: boolean) => {
    const baseStyles = "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] border-0"
    
    if (category === "Programming") {
      return isActive 
        ? `${baseStyles} bg-sky-500/20 dark:bg-sky-400/20 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500/30 shadow-[0_10px_30px_-10px_rgba(14,165,233,0.45)] dark:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.45)]`
        : `${baseStyles} bg-sky-500/10 dark:bg-sky-400/10 text-sky-600 dark:text-sky-400 ring-1 ring-sky-500/20 hover:bg-sky-500/15 hover:ring-sky-500/30 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.25)]`
    } else if (category === "Data Science") {
      return isActive 
        ? `${baseStyles} bg-emerald-500/20 dark:bg-emerald-400/20 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.45)] dark:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.45)]`
        : `${baseStyles} bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20 hover:bg-emerald-500/15 hover:ring-emerald-500/30 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.25)]`
    } else if (category === "Web Dev") {
      return isActive 
        ? `${baseStyles} bg-amber-500/20 dark:bg-amber-400/20 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.45)] dark:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.45)]`
        : `${baseStyles} bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/20 hover:bg-amber-500/15 hover:ring-amber-500/30 hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.25)]`
    } else { // Tools
      return isActive 
        ? `${baseStyles} bg-purple-500/20 dark:bg-purple-400/20 text-purple-700 dark:text-purple-300 ring-1 ring-purple-500/30 shadow-[0_10px_30px_-10px_rgba(168,85,247,0.45)] dark:shadow-[0_10px_30px_-10px_rgba(196,181,253,0.45)]`
        : `${baseStyles} bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20 hover:bg-purple-500/15 hover:ring-purple-500/30 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.25)]`
    }
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
          {["intro", "work", "projects", "skills", "beyond", "thoughts", "connect"].map((section) => (
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
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 w-full">
            {/* Left Column - 60% (3/5 columns) */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Vishwa R
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Data Science enthusiast crafting intelligent solutions at the intersection of
                  <span className="text-foreground"> machine learning</span>,
                  <span className="text-foreground"> computer vision</span>, and
                  <span className="text-foreground"> healthcare innovation</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Seeking full-time Data Science opportunities
                  </div>
                  <div>India</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Button
                      asChild
                      size="default"
                      variant="outline"
                      className="group gap-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-sm hover:border-muted-foreground/50 bg-transparent px-6 py-3"
                    >
                      <a href="/Vishwa_R.pdf" target="_blank" rel="noreferrer">
                        <FileText className="h-5 w-5" aria-hidden="true" />
                        <span>View Resume</span>
                      </a>
                    </Button>
                    {/* Education icon button/modal trigger */}
                    <div className="flex items-center">
                      {/* EducationDialog renders its own trigger button */}
                      <EducationDialog />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="group p-3 rounded-lg transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-blue-500/50 bg-transparent"
                    >
                      <a
                        href="https://www.linkedin.com/in/r-vishwa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-5 w-5 text-blue-600 group-hover:text-blue-500" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="group p-3 rounded-lg transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-gray-500/50 bg-transparent"
                    >
                      <a
                        href="https://github.com/01Vishwa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                      >
                        <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="group p-3 rounded-lg transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-teal-500/50 bg-transparent"
                    >
                      <a
                        href="https://www.kaggle.com/rv1922"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Kaggle Profile"
                      >
                        <svg
                          className="h-5 w-5 text-teal-600 group-hover:text-teal-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353C5.151.117 5.269 0 5.505 0h2.431c.234 0 .351.117.351.353v8.412l6.367-6.037c.117-.129.267-.199.45-.199h3.271c.234 0 .35.129.35.387 0 .047-.023.117-.07.211l-5.535 5.199 6.156 7.199c.047.070.07.164.07.234l-.071.105z" />
                        </svg>
                      </a>
                    </Button>
                      {/* WhatsApp Contact Icon */}
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="group p-3 rounded-lg transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-green-500/50 bg-transparent"
                      >
                        <a
                          href="https://wa.me/917708690518"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp Contact"
                        >
                          <svg
                            className="h-5 w-5 text-green-600 group-hover:text-green-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488" />
                          </svg>
                        </a>
                      </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 40% (2/5 columns) - Profile Panel */}
            <aside
              className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start"
              aria-label="Current role and focus areas"
            >
              <div className="mt-8 lg:mt-0 p-6 border border-border/60 rounded-lg bg-card/30 backdrop-blur-sm space-y-6 max-w-sm lg:max-w-none">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">Currently</h3>
                  <div className="space-y-2">
                    <div className="text-base font-medium text-foreground">Data Science Intern</div>
                    <div className="text-sm text-muted-foreground">
                      {" "}
                        Prediscan Medtech
                    </div>
                    <div className="text-xs text-muted-foreground/70 font-mono">2024 — 2025</div>
                  </div>
                </div>

                <div className="h-px bg-border/40"></div>

                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">Focus</h3>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {["Python", "PyTorch", "Computer Vision", "Machine Learning", "Deep Learning", "Data Analysis"].map((skill) => (
                      <li key={skill}>
                        <span
                          className="inline-block px-3 py-1.5 text-xs border border-border/60 rounded-full text-muted-foreground hover:border-muted-foreground/80 hover:text-foreground transition-all duration-200 cursor-default focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                          tabIndex={0}
                          role="button"
                          aria-label={`Skill: ${skill}`}
                        >
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              <div className="group py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="grid lg:grid-cols-12 gap-4 sm:gap-8">
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      2024 - 2025
                    </div>
                  </div>

                  <div className="lg:col-span-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      {/* Left: Job Title and Company */}
                      <div className="flex-1">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-lg sm:text-xl font-medium">Data Science Intern</h3>
                          <div className="text-muted-foreground">Prediscan Medtech, Chennai, India</div>
                        </div>
                        <div className="space-y-2 text-muted-foreground leading-relaxed max-w-lg mt-3">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Developed HDL cholesterol prediction models using computer vision on retinal imaging datasets, enhancing diagnostic capabilities.</li>
                            <li>Built AI-powered biomarker extraction solution achieving 98.5% R² accuracy and 99.9% correlation for cardiovascular risk assessment.</li>
                            <li>Designed automated preprocessing pipeline for 6,000+ retinal images with advanced augmentation techniques.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right: Skill Tags */}
                      <div className="flex flex-col gap-2 lg:items-end">
                        {/* First Row: Python and PyTorch */}
                        <div className="flex gap-2">
                          <span className="px-2 py-1 text-xs bg-background text-muted-foreground rounded border border-border transition-colors duration-500">
                            Python
                          </span>
                          <span className="px-2 py-1 text-xs bg-background text-muted-foreground rounded border border-border transition-colors duration-500">
                            PyTorch
                          </span>
                        </div>
                        
                        {/* Second Row: Computer Vision and Deep Learning */}
                        <div className="flex gap-2">
                          <span className="px-2 py-1 text-xs bg-background text-muted-foreground rounded border border-border transition-colors duration-500">
                            Computer Vision
                          </span>
                          <span className="px-2 py-1 text-xs bg-background text-muted-foreground rounded border border-border transition-colors duration-500">
                            Deep Learning
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">Selected Builds</div>
            </div>

            {/* Currently Working On */}
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-mono">Currently Working On</div>
              <Card className="border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-500">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <img
                      src="/project-logo.png"
                      alt="Active project logo"
                      className="h-12 w-12 sm:h-16 sm:w-16 rounded-md border border-border"
                    />
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium">SkillSync AI: Precision Hiring Powered by AI</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          RAG-powered framework to revolutionize résumé screening by harnessing multi-source candidate data, 
                          driving accuracy, fairness, and explainability in talent evaluation.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "GCP", "Lanchain", "Chat Bot", "Large Language Models"].map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project cards */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {[
                {
                  name: "HR Attrition Prediction System",
                  desc: "Predictive models using Logistic Regression and Random Forest achieving 87.75% accuracy on IBM's HR dataset.",
                  tech: ["Python", "Flask", "Plotly", "Dash"],
                  demo: "#",
                  code: "https://github.com/Sudeep1911/Hr-attrition-analysis",
                },
                {
                  name: "National Rail Performance Dashboard",
                  desc: "Interactive Power BI dashboard analyzing 31,653 railway records with 81% on-time performance insights.",
                  tech: ["Python", "Power BI", "Excel", "DAX"],
                  demo: "#",
                  code: "https://github.com/01Vishwa/Maven_Rail_Challenge",
                },
                {
                  name: "ZenDO - Task Management App",
                  desc: "A task management app that uses AI to help users organize and prioritize their tasks effectively.",
                  tech: ["React", "FastAPI", "MongoDB","TailwindCSS"],
                  demo: "https://zen-do-rosy.vercel.app/",
                  code: "https://github.com/01Vishwa/ZenDo-Task-Management-Application",
                },
                {
                  name: "Power Exchange simulation",
                  desc: "A task management app that uses AI to help users organize and prioritize their tasks effectively.",
                  tech: ["Python", "Django", "MongoDB","Plotly"],
                  demo: "#",
                  code: "https://github.com/01Vishwa/energy_trading_game",
                },
              ].map((p, i) => (
                <Card
                  key={i}
                  className="group border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{p.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="px-2 py-1 text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className={`flex items-center gap-3 ${p.name === "ZenDO - Task Management App" ? "justify-between" : "justify-end"}`}>
                    {p.name === "ZenDO - Task Management App" && (
                      <Button asChild size="sm" variant="secondary" className="group">
                        <a href={p.demo} target="_blank" rel="noreferrer">
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </Button>
                    )}
                    <Button asChild size="sm" variant="outline" className="group bg-transparent">
                      <a href={p.code} target="_blank" rel="noreferrer">
                        Code
                        <Github className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Skills Showcase</h2>
              <div className="flex flex-wrap gap-2">
                {(["Programming", "Data Science", "Web Dev", "Tools"] as const).map((cat) => (
                  <Button
                    key={cat}
                    size="sm"
                    variant="ghost"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={getCategoryStyles(cat, activeCategory === cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {[
                // Programming
                {
                  icon: <Code2 className="h-5 w-5" />,
                  name: "Python",
                  level: "Intermediate",
                  desc: "Data analysis, ML, web development.",
                  cat: "Programming",
                },
                {
                  icon: <Code2 className="h-5 w-5" />,
                  name: "R",
                  level: "Intermediate",
                  desc: "Statistical analysis, data visualization.",
                  cat: "Programming",
                },
                {
                  icon: <Server className="h-5 w-5" />,
                  name: "SQL",
                  level: "Intermediate",
                  desc: "Database queries, data manipulation.",
                  cat: "Programming",
                },
                {
                  icon: <Code2 className="h-5 w-5" />,
                  name: "NodeJS",
                  level: "Beginner",
                  desc: "Backend development, APIs.",
                  cat: "Programming",
                },
                // Data Science & ML
                {
                  icon: <Brain className="h-5 w-5" />,
                  name: "TensorFlow",
                  level: "Advanced",
                  desc: "Deep learning, neural networks.",
                  cat: "Data Science",
                },
                {
                  icon: <Brain className="h-5 w-5" />,
                  name: "PyTorch",
                  level: "Advanced",
                  desc: "Computer vision, model training.",
                  cat: "Data Science",
                },
                {
                  icon: <Brain className="h-5 w-5" />,
                  name: "Scikit-learn",
                  level: "Advanced",
                  desc: "ML algorithms, model evaluation.",
                  cat: "Data Science",
                },
                {
                  icon: <Brain className="h-5 w-5" />,
                  name: "Pandas & NumPy",
                  level: "Advanced",
                  desc: "Data manipulation, numerical computing.",
                  cat: "Data Science",
                },
                // Web Development
                {
                  icon: <Server className="h-5 w-5" />,
                  name: "Django",
                  level: "Intermediate",
                  desc: "Full-stack web applications.",
                  cat: "Web Dev",
                },
                {
                  icon: <Server className="h-5 w-5" />,
                  name: "Flask",
                  level: "Intermediate",
                  desc: "Lightweight web frameworks.",
                  cat: "Web Dev",
                },
                {
                  icon: <Server className="h-5 w-5" />,
                  name: "FastAPI",
                  level: "Beginner",
                  desc: "Modern API development.",
                  cat: "Web Dev",
                },
                // Tools & Platforms
                {
                  icon: <Cog className="h-5 w-5" />,
                  name: "Power BI",
                  level: "Advanced",
                  desc: "Business intelligence, dashboards.",
                  cat: "Tools",
                },
                {
                  icon: <Cog className="h-5 w-5" />,
                  name: "Tableau",
                  level: "Beginner",
                  desc: "Data visualization, analytics.",
                  cat: "Tools",
                },
                {
                  icon: <Cog className="h-5 w-5" />,
                  name: "Google Cloud",
                  level: "Beginner",
                  desc: "Cloud computing, ML services.",
                  cat: "Tools",
                },
                {
                  icon: <Cog className="h-5 w-5" />,
                  name: "Git & GitHub",
                  level: "Intermediate",
                  desc: "Version control, collaboration.",
                  cat: "Tools",
                },
              ]
                .filter((s) => s.cat === activeCategory)
                .map((s, i) => (
                  <Card
                    key={`${s.name}-${i}`}
                    className="group border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-md border border-border grid place-items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          {s.icon}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-medium">{s.name}</h3>
                            <Badge variant="secondary" className="text-xs px-2 py-0.5">
                              {s.level}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        <section
          id="beyond"
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <BeyondTheCode />
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[5] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Certificates</h2>

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Microsoft Power BI Desktop for Business Intelligence",
                  excerpt: "Comprehensive course covering Power BI fundamentals, data modeling, visualization techniques, and business intelligence dashboard creation.",
                  date: "Sept 2023",
                  link: "https://www.udemy.com/certificate/UC-cdda0577-14fd-4edd-a691-63beccf0b085/",
                },
                {
                  title: "Machine Learning A-Z: AI, Python & R",
                  excerpt: "Complete machine learning course covering algorithms, data preprocessing, regression, classification, clustering, and deep learning with Python & R.",
                  date: "Apr 2024",
                  link: "https://www.udemy.com/certificate/UC-d887c517-24a4-4b85-8cc2-564f0c76f508/",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <span>View Credential</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[6] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                {/* Profile Photo Avatar */}
                <div className="flex justify-center items-center">
                  <label htmlFor="profile-photo-upload" className="sr-only">Upload profile photo</label>
                  <input
                    id="profile-photo-upload"
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    style={{ display: 'none' }}
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          const img = document.getElementById('profile-photo-img');
                          if (img && ev.target?.result) {
                            img.setAttribute('src', ev.target.result as string);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <img
                    id="profile-photo-img"
                    src="/me.jpg"
                    alt="I'm Vishwa R"
                    width={160}
                    height={160}
                    className="rounded-full border border-border shadow-[0_0_0_2px_var(--accent)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
                    style={{ objectFit: 'cover', objectPosition: 'center', boxShadow: '0 0 8px 0 var(--accent), 0 0 0 1px var(--border)' }}
                    tabIndex={0}
                    loading="lazy"
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        document.getElementById('profile-photo-upload')?.click();
                      }
                    }}
                    onClick={() => document.getElementById('profile-photo-upload')?.click()}
                  />
                </div>
                {/* End Profile Photo Avatar */}

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about data science and AI.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:vishwa0r1@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">vishwa0r1@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "01Vishwa", url: "https://github.com/01Vishwa" },
                  { name: "LinkedIn", handle: "r-vishwa", url: "https://www.linkedin.com/in/r-vishwa/" },
                  { name: "Kaggle", handle: "rv1922", url: "https://www.kaggle.com/rv1922" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Vishwa R. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              {/* Add other footer buttons/links here if needed */}
              <Button asChild size="sm" variant="outline" className="group bg-transparent">
                <a href="/Vishwa_R.pdf" target="_blank" rel="noreferrer">
                  Resume
                  <FileText className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </main>

      {/* Back to Top Button */}
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

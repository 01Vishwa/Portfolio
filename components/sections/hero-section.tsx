"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Linkedin, Github } from "lucide-react"
import EducationDialog from "@/components/education-dialog"

const heroData = {
  name: "Vishwa R",
  location: "India",
  resumeUrl: "/Vishwa_R.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/r-vishwa/",
    github: "https://github.com/01Vishwa",
    kaggle: "https://www.kaggle.com/rv1922",
    whatsapp: "https://wa.me/917708690518"
  },
  currentRole: {
    title: "Data Science Intern",
    company: "Prediscan Medtech",
    period: "2024 — 2025"
  },
  focusSkills: ["Python", "PyTorch", "Computer Vision", "Machine Learning", "Deep Learning", "Data Analysis"]
}

export default function HeroSection({ sectionRef }: { sectionRef: (el: HTMLElement | null) => void }) {
  return (
    <header
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex items-center opacity-0"
    >
      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 w-full">
        {/* Left Column - 60% (3/5 columns) */}
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              {heroData.name}
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
                Transforming data into actionable insights
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="group gap-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-sm hover:border-muted-foreground/50 bg-transparent px-6 py-3"
                >
                  <a href={heroData.resumeUrl} target="_blank" rel="noreferrer">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                    <span>View Resume</span>
                  </a>
                </Button>
                <div className="flex items-center">
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
                    href={heroData.social.linkedin}
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
                    href={heroData.social.github}
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
                    href={heroData.social.kaggle}
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
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="group p-3 rounded-lg transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-green-500/50 bg-transparent"
                >
                  <a
                    href={heroData.social.whatsapp}
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
                <div className="text-base font-medium text-foreground">{heroData.currentRole.title}</div>
                <div className="text-sm text-muted-foreground">{heroData.currentRole.company}</div>
                <div className="text-xs text-muted-foreground/70 font-mono">{heroData.currentRole.period}</div>
              </div>
            </div>

            <div className="h-px bg-border/40"></div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">Focus</h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {heroData.focusSkills.map((skill: string) => (
                  <li key={skill}>
                    <span
                      className="inline-block px-3 py-1.5 text-xs border border-border/60 rounded-full text-muted-foreground hover:border-muted-foreground/80 hover:text-foreground transition-all duration-200 cursor-default focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background"
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
  )
}

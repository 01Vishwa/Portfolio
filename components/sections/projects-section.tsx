"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: "skillsync",
    title: "SkillSync AI: Precision Hiring Powered by AI",
    description: "RAG-powered framework to revolutionize résumé screening by harnessing multi-source candidate data, driving accuracy, fairness, and explainability in talent evaluation.",
    technologies: ["Python", "GCP", "Langchain", "Chat Bot", "Large Language Models"],
    status: "active" as const,
    githubUrl: undefined,
    liveUrl: undefined,
    imageUrl: "/project-logo.png"
  },
  {
    id: "PR-reviewer",
    title: "Automated GitHub Pull Request Review Agent",
    description: "Automates diff analysis, code-quality evaluation, and security checks through sequential agent processing.",
    technologies: ["Python", "Crew AI", "Next.js", "FastAPI", "GCP"],
    status: "completed" as const,
    githubUrl: "https://github.com/01Vishwa/Automated-GitHub-Pull-Request-Review-Agent",
    liveUrl: undefined,
    imageUrl: ""
  },
  {
    id: "hr-attrition",
    title: "HR Attrition Prediction System",
    description: "Predictive models using Logistic Regression and Random Forest achieving 87.75% accuracy on IBM's HR dataset.",
    technologies: ["Python", "Flask", "Plotly", "Dash"],
    status: "completed" as const,
    githubUrl: "https://github.com/Sudeep1911/Hr-attrition-analysis",
    liveUrl: undefined,
    imageUrl: ""
  },
  {
    id: "rail-dashboard",
    title: "National Rail Performance Dashboard",
    description: "Interactive Power BI dashboard analyzing 31,653 railway records with 81% on-time performance insights.",
    technologies: ["Python", "Power BI", "Excel", "DAX"],
    status: "completed" as const,
    githubUrl: "https://github.com/01Vishwa/Maven_Rail_Challenge",
    liveUrl: undefined,
    imageUrl: ""
  },
  {
    id: "zendo",
    title: "ZenDO - Task Management App",
    description: "A task management app that uses AI to help users organize and prioritize their tasks effectively.",
    technologies: ["React", "FastAPI", "MongoDB", "TailwindCSS"],
    status: "completed" as const,
    githubUrl: "https://github.com/01Vishwa/ZenDo-Task-Management-Application",
    liveUrl: "https://zen-do-rosy.vercel.app/",
    imageUrl: ""
  },
  {
    id: "power-exchange",
    title: "Power Exchange simulation",
    description: "A task management app that uses AI to help users organize and prioritize their tasks effectively.",
    technologies: ["Python", "Django", "MongoDB", "Plotly"],
    status: "completed" as const,
    githubUrl: "https://github.com/01Vishwa/energy_trading_game",
    liveUrl: undefined,
    imageUrl: ""
  }
]

const activeProject = projects.find(p => p.status === "active")
const completedProjects = projects.filter(p => p.status === "completed")

export default function ProjectsSection({ sectionRef }: { sectionRef: (el: HTMLElement | null) => void }) {
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
          <div className="text-sm text-muted-foreground font-mono">Selected Builds</div>
        </div>

        {/* Currently Working On */}
        {activeProject && (
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">Currently Working On</div>
            <Card className="border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-500">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <img
                    src={activeProject.imageUrl}
                    alt="Active project logo"
                    className="h-12 w-12 sm:h-16 sm:w-16 rounded-md border border-border"
                  />
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{activeProject.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{activeProject.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech: string) => (
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
        )}

        {/* Project cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {completedProjects.map((project) => (
            <Card
              key={project.id}
              className="group border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className={`flex items-center gap-3 ${project.liveUrl ? "justify-between" : "justify-end"}`}>
                {project.liveUrl && (
                  <Button asChild size="sm" variant="secondary" className="group">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild size="sm" variant="outline" className="group bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

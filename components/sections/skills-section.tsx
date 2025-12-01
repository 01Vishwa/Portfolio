"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Server, Brain, Cog } from "lucide-react"

const skills = [
  {name: "Python", category: "Programming" as const, icon: "Code2", level: 8},
  {name: "R", category: "Programming" as const, icon: "Code2", level: 7},
  {name: "SQL", category: "Programming" as const, icon: "Server", level: 7},
  {name: "NodeJS", category: "Programming" as const, icon: "Code2", level: 5},
  {name: "TensorFlow", category: "Data Science" as const, icon: "Brain", level: 6},
  {name: "PyTorch", category: "Data Science" as const, icon: "Brain", level: 7},
  {name: "Scikit-learn", category: "Data Science" as const, icon: "Brain", level: 9},
  {name: "Pandas & NumPy", category: "Data Science" as const, icon: "Brain", level: 9},
  {name: "Django", category: "Web Dev" as const, icon: "Server", level: 7},
  {name: "Flask", category: "Web Dev" as const, icon: "Server", level: 7},
  {name: "FastAPI", category: "Web Dev" as const, icon: "Server", level: 6},
  {name: "Power BI", category: "Tools" as const, icon: "Cog", level: 9},
  {name: "Tableau", category: "Tools" as const, icon: "Cog", level: 6},
  {name: "Google Cloud", category: "Tools" as const, icon: "Cog", level: 6},
  {name: "Git & GitHub", category: "Tools" as const, icon: "Cog", level: 8}
]

const iconMap: Record<string, React.ReactElement> = {
  Code2: <Code2 className="h-5 w-5" />,
  Server: <Server className="h-5 w-5" />,
  Brain: <Brain className="h-5 w-5" />,
  Cog: <Cog className="h-5 w-5" />,
}

export default function SkillsSection({ sectionRef }: { sectionRef: (el: HTMLElement | null) => void }) {
  const [activeCategory, setActiveCategory] = useState<"Programming" | "Data Science" | "Web Dev" | "Tools">("Programming")

  const getCategoryStyles = (category: string, isActive: boolean) => {
    const baseStyles = "text-xs font-medium transition-all duration-300 rounded-full"
    if (isActive) {
      return `${baseStyles} bg-foreground text-background hover:bg-foreground/90`
    }
    return `${baseStyles} text-muted-foreground hover:bg-muted hover:text-foreground`
  }

  const getGradientColor = (category: string) => {
    switch (category) {
      case "Programming":
        return "from-sky-500 to-blue-600"
      case "Data Science":
        return "from-emerald-500 to-green-600"
      case "Web Dev":
        return "from-amber-500 to-orange-600"
      case "Tools":
        return "from-purple-500 to-pink-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
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
          {skills
            .filter((s) => s.category === activeCategory)
            .map((skill, i: number) => (
              <Card
                key={`${skill.name}-${i}`}
                className="group border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
              >
                <CardContent className="p-4 sm:p-5">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-md border border-border grid place-items-center text-muted-foreground group-hover:text-foreground transition-colors">
                        {iconMap[skill.icon] || iconMap.Code2}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                        <div className="relative w-3/4 group/bar">
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${getGradientColor(skill.category)} transition-all duration-1000 ease-out rounded-full`}
                              style={{ width: `${(skill.level / 10) * 100}%` }}
                            />
                          </div>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                            <div className="bg-foreground text-background text-xs font-medium px-2 py-1 rounded whitespace-nowrap shadow-lg">
                              {skill.level}/10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}

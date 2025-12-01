"use client"

const experience = [
  {
    title: "Data Science Intern",
    company: "Prediscan Medtech",
    location: "Chennai, India",
    period: "2024 - 2025",
    responsibilities: [
      "Researched and worked computer vision models for predicting health biomarkers from retinal imaging datasets.",
      "Built AI-powered solutions for automated biomarker extraction to support cardiovascular risk assessment.",
      "Designed and implemented preprocessing pipelines with advanced augmentation techniques for large-scale medical imaging data."
    ],
    skills: ["Python", "PyTorch", "Computer Vision", "Deep Learning"]
  }
]

export default function ExperienceSection({ sectionRef }: { sectionRef: (el: HTMLElement | null) => void }) {
  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="group py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
              <div className="grid lg:grid-cols-12 gap-4 sm:gap-8">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {exp.period}
                  </div>
                </div>

                <div className="lg:col-span-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg sm:text-xl font-medium">{exp.title}</h3>
                        <div className="text-muted-foreground">{exp.company}, {exp.location}</div>
                      </div>
                      <div className="space-y-2 text-muted-foreground leading-relaxed max-w-lg mt-3">
                        <ul className="list-disc list-inside space-y-1">
                          {exp.responsibilities.map((resp: string, idx: number) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:items-end">
                      <div className="flex gap-2 flex-wrap">
                        {exp.skills.slice(0, 2).map((skill: string, idx: number) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-background text-muted-foreground rounded border border-border transition-colors duration-500">
                            {skill}
                          </span>
                        ))}
                      </div>
                      {exp.skills.length > 2 && (
                        <div className="flex gap-2 flex-wrap">
                          {exp.skills.slice(2).map((skill: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-background text-muted-foreground rounded border border-border transition-colors duration-500">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

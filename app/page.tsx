"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ExternalLink, Github, Code2, Server, Brain, Cog, FileText, Linkedin } from "lucide-react"
import BeyondTheCode from "../components/beyond-the-code"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const [activeCategory, setActiveCategory] = useState<"Programming" | "Data Science" | "Web Dev" | "Tools">(
    "Programming",
  )
  const sectionsRef = useRef<(HTMLElement | null)[]>([])


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


  return (
    <div className="min-h-screen bg-background text-foreground relative transition-colors duration-300">

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
                    Available for work
                  </div>
                  <div>India</div>
                </div>

                <div className="space-y-4">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="group gap-2 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-sm hover:border-muted-foreground/50 bg-transparent"
                  >
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      <span>View Resume</span>
                    </a>
                  </Button>

                  <div className="flex items-center gap-3">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="group p-2 rounded-full transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-blue-500/50 bg-transparent"
                    >
                      <a
                        href="https://www.linkedin.com/in/r-vishwa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-4 w-4 text-blue-600 group-hover:text-blue-500" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="group p-2 rounded-full transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-gray-500/50 bg-transparent"
                    >
                      <a
                        href="https://github.com/01Vishwa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                      >
                        <Github className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="group p-2 rounded-full transition-all duration-200 hover:scale-[1.05] hover:shadow-md hover:border-teal-500/50 bg-transparent"
                    >
                      <a
                        href="https://www.kaggle.com/rv1922"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Kaggle Profile"
                      >
                        <svg
                          className="h-4 w-4 text-teal-600 group-hover:text-teal-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353C5.151.117 5.269 0 5.505 0h2.431c.234 0 .351.117.351.353v8.412l6.367-6.037c.117-.129.267-.199.45-.199h3.271c.234 0 .35.129.35.387 0 .047-.023.117-.07.211l-5.535 5.199 6.156 7.199c.047.070.07.164.07.234l-.071.105z" />
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
                      @{" "}
                      <a
                        href="https://prediscan.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-muted-foreground transition-colors duration-200 underline decoration-1 underline-offset-2 hover:decoration-2 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                        aria-label="Prediscan Medtech company website"
                      >
                        Prediscan Medtech
                      </a>
                    </div>
                    <div className="text-xs text-muted-foreground/70 font-mono">2024 — 2025</div>
                  </div>
                </div>

                <div className="h-px bg-border/40"></div>

                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">Focus</h3>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {["Python", "PyTorch", "Computer Vision", "Machine Learning", "Data Analysis"].map((skill) => (
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
              <div className="text-sm text-muted-foreground font-mono">2024 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2024
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Data Science Intern</h3>
                    <div className="text-muted-foreground">Prediscan Medtech, Chennai, India</div>
                  </div>
                  <div className="space-y-2 text-muted-foreground leading-relaxed max-w-lg">
                    <p>
                      Led research initiative to develop HDL cholesterol prediction models using computer vision on
                      retinal imaging datasets, enhancing diagnostic capabilities.
                    </p>
                    <p>
                      Developed AI-powered clinical biomarker extraction solution achieving 98.5% R² accuracy and 99.9%
                      correlation coefficient for cardiovascular risk assessment.
                    </p>
                    <p>
                      Designed automated data preprocessing pipeline managing 6,000+ retinal images with sophisticated
                      augmentation techniques.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  {["Python", "PyTorch", "Computer Vision", "Deep Learning"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                    >
                      {tech}
                    </span>
                  ))}
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
              <div className="text-sm text-muted-foreground font-mono">CURRENTLY WORKING ON</div>
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
                        <h3 className="text-lg sm:text-xl font-medium">Skill Sync Ai - Ai Driven Insights Engine</h3>
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
                  code: "#",
                },
                {
                  name: "National Rail Performance Dashboard",
                  desc: "Interactive Power BI dashboard analyzing 31,653 railway records with 81% on-time performance insights.",
                  tech: ["Python", "Power BI", "Excel", "DAX"],
                  demo: "#",
                  code: "#",
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
                  <CardFooter className="flex items-center justify-between gap-3">
                    <Button asChild size="sm" variant="secondary" className="group">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </Button>
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
                    variant={activeCategory === cat ? "secondary" : "outline"}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className="transition-colors"
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
                    <CardContent className="p-6 sm:p-8">
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

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "AI in Healthcare: The Future is Now",
                  excerpt:
                    "Exploring how computer vision and machine learning are revolutionizing medical diagnostics.",
                  date: "Dec 2024",
                  readTime: "5 min",
                },
                {
                  title: "Data Science in Practice",
                  excerpt: "Lessons learned from building predictive models on real-world datasets.",
                  date: "Nov 2024",
                  readTime: "8 min",
                },
                {
                  title: "The Power of Visualization",
                  excerpt: "How effective data visualization can transform business decision-making.",
                  date: "Oct 2024",
                  readTime: "6 min",
                },
                {
                  title: "Machine Learning Ethics",
                  excerpt: "Considerations for responsible AI development in healthcare applications.",
                  date: "Sep 2024",
                  readTime: "4 min",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
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
                    </div>
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
                    src="/placeholder-user.jpg"
                    alt="Profile photo of Full Name"
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
                    href="mailto:your.email@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">your.email@example.com</span>
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
                  { name: "Google Scholar", handle: "@yourname", url: "#" },
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
              <div className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0.dev</div>
            </div>

            <div className="flex items-center gap-4">
              {/* Add other footer buttons/links here if needed */}
              <Button asChild size="sm" variant="outline" className="group bg-transparent">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                  <FileText className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}

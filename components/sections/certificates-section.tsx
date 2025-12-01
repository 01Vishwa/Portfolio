"use client"

const certificates = [
   {
    id: "Google-Data-Analytics",
    title: "Google Data Analytics Professional Certificate 8/9",
    issuer: "Coursera",
    date: "Nov 2025",
    credentialUrl: "https://coursera.org/share/1b174ce9671d05505a19c907ad6d4752"
  },
  {
    id: "ml-az",
    title: "Machine Learning A-Z: AI, Python & R",
    issuer: "Udemy",
    date: "Apr 2024",
    credentialUrl: "https://www.udemy.com/certificate/UC-d887c517-24a4-4b85-8cc2-564f0c76f508/"
  },
  {
    id: "powerbi",
    title: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Udemy",
    date: "Sept 2023",
    credentialUrl: "https://www.udemy.com/certificate/UC-cdda0577-14fd-4edd-a691-63beccf0b085/"
  }
]

export default function CertificatesSection({ sectionRef }: { sectionRef: (el: HTMLElement | null) => void }) {
  return (
    <section
      id="thoughts"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-bold">Certificates</h2>

        <div className="space-y-6 sm:space-y-8">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                  {cert.title}
                </h3>

                <a
                  href={cert.credentialUrl}
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
  )
}

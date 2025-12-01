"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function ContactSection({ sectionRef }: { sectionRef: (el: HTMLElement | null) => void }) {
  return (
    <>
      <section
        id="connect"
        ref={sectionRef}
        className="py-20 sm:py-32 opacity-0"
      >
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

            <div className="space-y-6">
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
            <div className="text-sm text-muted-foreground">© 2025 Vishwa R. All rights reserved.<br />Last Updated: December 2025</div>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild size="sm" variant="outline" className="group bg-transparent">
              <a href="/Vishwa_R.pdf" target="_blank" rel="noreferrer">
                Resume
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}

"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { BookOpen, Tv, Film, Gamepad2, Music } from "lucide-react"
import { cn } from "@/lib/utils"

// Color system (3-5 colors total):
// - Primary brand: sky (blue)
// - Accents: emerald, amber
// - Neutrals: background/foreground from theme (white/zinc variants)
// This satisfies contrast and dark/light themes via semantic tokens.

type Interest = {
  key: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  color: "sky" | "emerald" | "amber"
}

const interests: Interest[] = [
  { key: "reading", label: "Reading Novels", icon: BookOpen, color: "sky" },
  { key: "tv", label: "Watching TV Shows", icon: Tv, color: "emerald" },
  { key: "movies", label: "Watching Movies", icon: Film, color: "amber" },
  { key: "gaming", label: "Gaming", icon: Gamepad2, color: "sky" },
  { key: "music", label: "Listening to Music", icon: Music, color: "emerald" },
]

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...(options || {}) },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}

function TagCard({
  interest,
  index,
  inView,
}: {
  interest: Interest
  index: number
  inView: boolean
}) {
  const Icon = interest.icon
  const colors =
    interest.color === "sky"
      ? {
          bg: "bg-sky-500/10 dark:bg-sky-400/10",
          text: "text-sky-700 dark:text-sky-300",
          ring: "ring-sky-500/30",
          glow: "shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.45)] dark:hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.45)]",
        }
      : interest.color === "emerald"
        ? {
            bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
            text: "text-emerald-700 dark:text-emerald-300",
            ring: "ring-emerald-500/30",
            glow: "shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.45)] dark:hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.45)]",
          }
        : {
            bg: "bg-amber-500/10 dark:bg-amber-400/10",
            text: "text-amber-700 dark:text-amber-300",
            ring: "ring-amber-500/30",
            glow: "shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.45)] dark:hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.45)]",
          }

  return (
    <li
      className={cn(
        "group relative list-none rounded-xl border border-transparent",
        colors.bg,
        "ring-1",
        colors.ring,
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:scale-[1.02]",
        colors.glow,
        index % 2 === 0 ? "md:translate-y-0" : "md:-translate-y-1.5",
        // fade/slide-in on load
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${Math.min(index * 60, 240)}ms` }}
    >
      <div className={cn("flex items-center gap-3 rounded-xl px-4 py-3", "backdrop-blur-[2px]")}>
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg",
            colors.bg,
            colors.ring,
            "ring-1",
          )}
        >
          <Icon className={cn("h-5 w-5", colors.text)} />
        </span>
        <span className={cn("text-sm font-medium", colors.text)}>{interest.label}</span>
      </div>
    </li>
  )
}

export default function BeyondTheCode() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      aria-labelledby="beyond-the-code-title"
      className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 transition-colors"
    >
      <header className="mb-6 sm:mb-8">
        <h2
          id="beyond-the-code-title"
          className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Beyond the Code
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">My interests and hobbies</p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" aria-label="Interest tags">
        {interests.map((interest, i) => (
          <TagCard key={interest.key} interest={interest} index={i} inView={inView} />
        ))}
      </ul>
    </section>
  )
}

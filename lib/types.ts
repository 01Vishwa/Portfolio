export interface HeroData {
  name: string
  location: string
  resumeUrl: string
  social: {
    linkedin: string
    github: string
    kaggle: string
    whatsapp: string
  }
  currentRole: {
    title: string
    company: string
    period: string
  }
  focusSkills: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  status: "active" | "completed"
  githubUrl?: string
  liveUrl?: string
  imageUrl: string
}

export interface Skill {
  name: string
  category: "Programming" | "Data Science" | "Web Dev" | "Tools"
  icon: string
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  skills: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  cgpa: string
  description: string
}

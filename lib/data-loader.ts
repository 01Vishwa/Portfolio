import type { HeroData, Project, Skill, Experience, Certificate, Education } from "@/lib/types"

import heroData from "../public/data/hero.json"
import projectsData from "../public/data/projects.json"
import skillsData from "../public/data/skills.json"
import experienceData from "../public/data/experience.json"
import certificatesData from "../public/data/certificates.json"
import educationData from "../public/data/education.json"

export function getHeroData(): HeroData {
  return heroData as HeroData
}

export function getProjects(): Project[] {
  return projectsData as Project[]
}

export function getSkills(): Skill[] {
  return skillsData as Skill[]
}

export function getExperience(): Experience[] {
  return experienceData as Experience[]
}

export function getCertificates(): Certificate[] {
  return certificatesData as Certificate[]
}

export function getEducation(): Education[] {
  return educationData as Education[]
}

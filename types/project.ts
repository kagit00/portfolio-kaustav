export type ProjectKey =
  | "ScheduleX"
  |  "FlairBit"
  | "Chats"

 

export interface Metric {
  value: string
  label: string
}

export interface ProjectLinks {
  live?: string
  demo?: string
  docs?: string
  github: string
}

export interface ProjectData {
  year: number,
      category: String,
      description: ""
  title: string

  /** One-line recruiter-facing summary */
  tagline: string

  /** Your ownership / responsibility */
  role: string

  /** Why this project exists (problem it solves) */
  problemStatement: string

  /** Impact / scale numbers */
  metrics: Metric[]

  /** High-level explanation of what the system does */
  overview: string

  /** Architectural breakdown (system design level) */
  architecture: string

  /** Key engineering decisions worth highlighting */
  designHighlights?: string[]

  keyChallenges: string[]

  /** Tech stack used */
  stack: string[]

  /** Source code / docs / demo links */
  links: ProjectLinks
}

export type ProjectDatabase = Record<ProjectKey, ProjectData>

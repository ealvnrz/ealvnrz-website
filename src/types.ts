export type Site = {
  title: string
  description: string
  href: string
  author: string
  locale: string
  postsPerPage: number
}

export type SocialLink = {
  href: string
  label: string
}

export type IconMap = {
  [key: string]: string
}

export type Paper = {
  title: string
  authors: string[]
  venue: string
  year: number | string | null
  type: 'conference' | 'journal' | 'workshop' | 'preprint'
  status?: string
  publishedDate?: string
  abstract?: string
  links?: {
    pdf?: string
    arxiv?: string
    doi?: string
    code?: string
    website?: string
  }
}

export type Grant = {
  title: string
  agency: string
  period: string
  role: string
  status: 'active' | 'completed' | 'pending'
  description?: string
  links?: {
    website?: string
    report?: string
  }
}

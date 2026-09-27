import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Eloy Alvarado Narváez',
  description:
    'Assistant Professor in Statistics at Pontificia Universidad Católica de Chile. Research in spatial statistics, copula modeling, and statistical methods.',
  href: 'https://ealvnrz.vercel.app',
  author: 'Eloy Alvarado Narváez',
  locale: 'en-US',
  postsPerPage: 3,
}

// Blog posts live in src/content/blog. While disabled, these routes are not
// generated and are left out of the sitemap.
export const BLOG_ENABLED = false
export const BLOG_ROUTES = ['/blog', '/tags', '/authors', '/about']

// Author names highlighted in publication lists (compared case-insensitively)
export const AUTHOR_NAME_VARIANTS = [
  'Eloy Alvarado',
  'E. Alvarado',
  'Eloy Alvarado Narváez',
]

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/publications',
    label: 'Publications',
  },
  {
    href: '/grants',
    label: 'Grants',
  },
  {
    href: '/cv',
    label: 'CV',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ealvnrz',
    label: 'GitHub',
  },
  {
    href: 'https://scholar.google.cl/citations?user=iO2zYZoAAAAJ&hl=es',
    label: 'Google Scholar',
  },
  {
    href: 'mailto:eloy.alvarado@uc.cl',
    label: 'Email',
  },
  {
    href: 'https://orcid.org/0000-0001-7522-2327',
    label: 'ORCID',
  },
  {
    href: 'https://www.linkedin.com/in/ealvnrz/',
    label: 'LinkedIn',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  'Google Scholar': 'lucide:graduation-cap',
  ORCID: 'lucide:user',
}

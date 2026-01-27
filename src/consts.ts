import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Eloy Alvarado Narváez',
  description:
    'Assistant Professor in Statistics at Pontificia Universidad Católica de Chile. Research in spatial statistics, copula modeling, and statistical methods.',
  href: 'https://your-website.com',
  author: 'Eloy Alvarado Narváez',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

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

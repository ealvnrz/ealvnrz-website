import { SITE } from '@/consts'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  // RSS feed disabled for academic website
  // Return empty feed
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.href,
    items: [],
  })
}

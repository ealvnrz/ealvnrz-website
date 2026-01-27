# Academic Website

This is an academic personal website built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/), based on the [astro-erudite](https://github.com/jktrn/astro-erudite) template.

## Features

- **Home Page**: Academic introduction with research interests and quick links
- **Publications Page**: Display academic papers with metadata, abstracts, and links (PDF, arXiv, DOI, code)
- **CV Page**: Full academic CV with education, experience, publications, awards, and teaching
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Automatic theme switching based on system preferences
- **LaTeX Support**: Math rendering via KaTeX for papers and abstracts

| ![Preview 1](/public/static/preview-1.png) | ![Preview 2](/public/static/preview-2.png) |
| ------------------------------------------ | ------------------------------------------ |
| ![Preview 3](/public/static/preview-3.png) | ![Preview 4](/public/static/preview-4.png) |

> [!NOTE]
> To learn more about why this template exists, read [The State of Static Blogs in 2024](https://astro-erudite.vercel.app/blog/the-state-of-static-blogs), where I share my take on what constitutes a great blogging template and my goals while developing this one.

---

## Community examples

Below are some fantastic examples of websites based on this template. If you wish to add your site to this list, open a [pull request](https://github.com/jktrn/astro-erudite/pulls)!

| Site | Author | Tags | Source |
|-|-|-|-|
| [enscribe.dev](https://enscribe.dev) | [@jktrn](https://github.com/jktrn) | portfolio, interactive | [→](https://github.com/jktrn/enscribe.dev) |
| [emile.sh](https://emile.sh) | [@echoghi](https://github.com/echoghi) | minimal, flexoki | [→](https://github.com/echoghi/v5) |
| [decentparadox.me](https://decentparadox.me) | [@decentparadox](https://github.com/decentparadox) | portfolio, sci-fi | [→](https://github.com/decentparadox/decentparadox.me) |
| [flocto.github.io](https://flocto.github.io/) | [@flocto](https://github.com/flocto) | blog | [→](https://github.com/flocto/flocto.github.io) |
| [dumbprism.me](https://www.dumbprism.me/) | [@dumbprism](https://github.com/dumbprism) | portfolio, bento | [→](https://github.com/dumbprism/dumbprism-portfolio) |
| [hyuki.dev](https://hyuki.dev/) | [@snow0406](https://github.com/snow0406) | minimal, blog | [→](https://github.com/Snow0406/hyuki.dev) |
| [ldd.cc](https://ldd.cc/) | [@xJoyLu](https://github.com/xjoylu) | blog | [→](https://ldd.cc/) |
| [rezarezvan.com](https://rezarezvan.com/) | [@rezaarezvan](https://github.com/rezaarezvan) | academic, blog | [→](https://rezarezvan.com/) |
| [blog.z0x.ca](https://blog.z0x.ca/) | [@z0x](https://z0x.ca) | minimal | [→](https://git.z0x.ca/z0x/blog.z0x.ca/) |
| [angelaytchan.net](https://angelaytchan.net/) | [@wispyplant](https://github.com/wispyplant) | portfolio, art | [→](https://github.com/wispyplant/wispyplant.github.io) |
| [kaezr.xyz](https://kaezr.xyz/) | [@kaezrr](https://github.com/kaezrr) | minimal, portfolio | [→](https://github.com/kaezrr/webfolio) |
| [worldwidewong](https://worldwidewong.vercel.app) | [@brendanwong-web](https://github.com/brendanwong-web) | portfolio, gallery | [→](https://github.com/brendanwong-web/worldwidewong) |
| [bgajjala.dev](https://bgajjala.dev) | [@bgajjala8](https://github.com/bgajjala8) | minimal, blog | [→](https://github.com/bgajjala8/bgajjala.dev) |
| [ankitz007.vercel.app](https://ankitz007.vercel.app) | [@ankitz007](https://github.com/ankitz007) | blog | [→](https://github.com/ankitz007/webfolio) |
| [sadman.ca](https://sadman.ca) | [@sadmanca](https://github.com/sadmanca) | blog, media | [→](https://github.com/sadmanca/blogv3) |
| [marcel-to.vercel.app](https://marcel-to.vercel.app) | [@Marcel-TO](https://github.com/Marcel-TO) | portfolio, docs | [→](https://github.com/Marcel-TO/marcel-to-website) |
| [merox.dev](https://merox.dev) | [@meroxdotdev](https://github.com/meroxdotdev) | blog, devops, homelab | [→](https://github.com/meroxdotdev/merox) |
| [Off by One](https://justoffbyone.com) | [@cduruk](https://github.com/cduruk) | engineering, blog | [→](https://github.com/cduruk/offbyone) |
| [holywater.dev](https://holywater.dev) | [@holywater2372](https://github.com/holywater2372) | cybersecurity, blog | [→](https://github.com/holywater2372/holywater.dev) |
| [theinfinull.com](https://theinfinull.com) | [@theinfinull](https://github.com/theinfinull) | dev, portfolio, blog | [→](https://github.com/theinfinull/portfolio) |
## Features

- [Astro](https://astro.build/)'s [Islands](https://docs.astro.build/en/concepts/islands/) architecture for selective hydration and client-side interactivity while maintaining fast static site rendering.
- [shadcn/ui](https://ui.shadcn.com/) with [Tailwind](https://tailwindcss.com/) color conventions for automatic light and dark theme styling. Features accessible, theme-aware UI components for navigation, buttons, and more.
- [Expressive Code](https://expressive-code.com/) for enhanced code block styling, syntax highlighting, and code block titles.
- Blog authoring with [MDX](https://mdxjs.com/) for component-rich content and $\LaTeX$ math rendering via [KaTeX](https://katex.org/).
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/) in <abbr title="Single Page Application">SPA</abbr> mode for smooth route animations.
- SEO optimization with granular metadata and [Open Graph](https://ogp.me/) tag control for each post.
- [RSS](https://en.wikipedia.org/wiki/RSS) feed and sitemap generation.
- Subpost support for breaking long content into digestible parts and organizing related series.
- Author profiles with a dedicated authors page and multi-author post support.
- Project tags with a dedicated tags page for post categorization and discovery.
- Custom Callout component variants for enhanced technical writing.

### Technology stack

This is a list of the various technologies used to build this template:

| Category   | Technology Name                                                                            |
| ---------- | ------------------------------------------------------------------------------------------ |
| Framework  | [Astro](https://astro.build/)                                                              |
| Styling    | [Tailwind](https://tailwindcss.com)                                                        |
| Components | [shadcn/ui](https://ui.shadcn.com/)                                                        |
| Content    | [MDX](https://mdxjs.com/)                                                                  |
| Codeblocks | [Expressive Code](https://expressive-code.com/), [Shiki](https://github.com/shikijs/shiki) |
| Graphics   | [Figma](https://www.figma.com/)                                                            |
| Deployment | [Vercel](https://vercel.com)                                                               |

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:1234` to view your site.

The following commands are available:

   | Command            | Description                                                     |
   | ------------------ | --------------------------------------------------------------- |
   | `npm run start`    | Alias for `npm run dev`                                         |
   | `npm run build`    | Run type checking and build the project                         |
   | `npm run preview`  | Previews the built project                                      |
   | `npm run astro`    | Run Astro CLI commands                                          |
   | `npm run prettier` | Blanket format all files using [Prettier](https://prettier.io/) |

## Customization

### Site Configuration

Edit `src/consts.ts` to update your site's metadata, navigation, and social links:

```ts
export const SITE: Site = {
  title: 'Your Name - Academic Website',
  description: 'Your academic description',
  href: 'https://your-website.com',
  author: 'Your Name',
  // ...
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/', label: 'Home' },
  { href: '/publications', label: 'Publications' },
  { href: '/cv', label: 'CV' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/yourusername', label: 'GitHub' },
  { href: 'https://scholar.google.com/...', label: 'Google Scholar' },
  { href: 'mailto:your.email@university.edu', label: 'Email' },
  // ...
]
```

### Adding Publications

Edit `src/data/publications.json` to add your papers:

```json
{
  "papers": [
    {
      "title": "Your Paper Title",
      "authors": ["Your Name", "Co-Author"],
      "venue": "Conference/Journal Name",
      "year": 2024,
      "type": "conference",
      "abstract": "Paper abstract...",
      "links": {
        "pdf": "/papers/paper.pdf",
        "arxiv": "https://arxiv.org/abs/...",
        "doi": "https://doi.org/...",
        "code": "https://github.com/..."
      }
    }
  ]
}
```

Place PDF files in the `public/papers/` directory.

### Updating CV

Edit `src/data/cv.json` to update your CV information. Place your CV PDF file at `public/cv.pdf`.

### Homepage Content

Edit `src/pages/index.astro` to customize your homepage introduction and research interests.

### Color palette

Colors are defined in `src/styles/global.css` in [OKLCH format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch), using the [shadcn/ui](https://ui.shadcn.com/) convention:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

[data-theme='dark'] {
  /* ... */
}
```

### Favicons

Favicons are generated using [RealFaviconGenerator](https://realfavicongenerator.net/). To adjust the favicons, replace the files in the `public/` directory (such as `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, etc.) with your own. After updating the favicon files, you'll also need to adjust the references in `src/components/Favicons.astro` to match your new favicon filenames and paths:

```html
<!-- Replace these with the generated meta tags -->
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="astro-erudite" />
<link rel="manifest" href="/site.webmanifest" />
```

## Building for Production

Build the site for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static host**: Upload the `dist/` folder after running `npm run build`

## License

This project is based on [astro-erudite](https://github.com/jktrn/astro-erudite) and is open source under the [MIT License](LICENSE).

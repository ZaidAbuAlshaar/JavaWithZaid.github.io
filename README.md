# Zaid.java - تعلم جافا مع زيد

Interactive Java learning platform by **Zaid Abu Alshaar** (زيد أبو الشعر).

Live site: [https://java.zaiddev.com/](https://java.zaiddev.com/)

## Overview

A bilingual (Arabic/English) single-page application for learning Java programming from basics to advanced concepts. Features 10 progressive learning levels with interactive code examples, quizzes, and a built-in code editor.

## Tech Stack

- **HTML5** with semantic landmarks and RTL support
- **CSS3** with custom properties and Tailwind CSS (CDN)
- **Vanilla JavaScript** (no frameworks)
- **Google Fonts**: Tajawal (Arabic), Inter (English)
- **Font Awesome 6** icons (CDN)

## Folder Structure

```
/
├── index.html              # Main SPA (home, about, levels, FAQ, contact, intro)
├── about.html              # Standalone about page (SEO)
├── 404.html                # Custom error page
├── CNAME                   # Custom domain: java.zaiddev.com
├── robots.txt              # Search engine directives
├── sitemap.xml             # Sitemap for crawlers
├── site.webmanifest        # PWA manifest
├── favicon.ico             # Multi-size favicon (16/32/48)
├── README.md
├── css/
│   └── style.css           # All styles + CSS variables
├── js/
│   └── script.js           # App logic, translations, level data
└── assets/
    ├── img/
    │   ├── zaid-abu-alshaar.jpg   # Profile photo
    │   └── og-image.jpg           # Social preview image (1200x630)
    └── icons/
        ├── favicon.svg                # SVG favicon (Z)
        ├── favicon-32x32.png          # PNG favicon 32px
        ├── favicon-48x48.png          # PNG favicon 48px
        ├── apple-touch-icon.png       # Apple touch icon (180x180)
        ├── icon-192x192.png           # PWA icon (ZA)
        ├── icon-512x512.png           # PWA icon (ZA)
        ├── icon-192x192-maskable.png  # Maskable PWA icon
        └── icon-512x512-maskable.png  # Maskable PWA icon
```

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ZaidAbuAlshaar/JavaWithZaid.github.io.git
   cd JavaWithZaid.github.io
   ```

2. Serve with any static file server:
   ```bash
   # Python
   python3 -m http.server 8000

   # Node.js (npx)
   npx serve .
   ```

3. Open `http://localhost:8000` in your browser.

## Deployment

- Hosted on **GitHub Pages** with a custom domain.
- The `CNAME` file must contain exactly: `java.zaiddev.com`
- DNS must point to GitHub Pages IPs. Refer to [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
- Pushes to `main` trigger automatic deployment.

## SEO Checklist

- [x] Unique `<title>` and `<meta description>` per page
- [x] `<link rel="canonical">` on every page
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- [x] Twitter Card tags (summary_large_image)
- [x] JSON-LD structured data (Person, WebSite, WebPage schemas)
- [x] Arabic + English name variants in meta and visible content
- [x] `robots.txt` with sitemap reference
- [x] `sitemap.xml` with all public pages
- [x] Semantic HTML (single H1 per page, landmarks)
- [x] `<meta name="theme-color">` set
- [x] Skip-to-content link for accessibility

## How to Replace Icons

### OG Image (`assets/img/og-image.jpg`)
Replace with a 1200x630 JPEG. Update the `og:image` URL in all HTML `<head>` sections if the filename changes.

### Favicons & PWA Icons
1. Replace files in `assets/icons/` maintaining exact filenames and sizes.
2. **Maskable icons** (`*-maskable.png`) must have extra padding (~30%) so content isn't clipped when the OS crops into a circle or squircle. Test at [maskable.app](https://maskable.app/).
3. To regenerate `favicon.ico` from PNGs, use ImageMagick:
   ```bash
   convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico
   ```
4. Update `site.webmanifest` if you change icon paths or add new sizes.

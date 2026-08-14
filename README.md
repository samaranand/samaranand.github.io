# Samar Anand — Personal Website

This is the source for [samaranand.github.io](https://samaranand.github.io/), a static personal website for Samar Anand.

The site is intentionally simple: semantic HTML, modern CSS, and vanilla JavaScript. There is no framework, backend, bundler, or runtime dependency.

## Run Locally

From the repository root:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

No install step is required.

## Current Structure

```text
.
├── index.html
├── css/
│   └── main.css
├── js/
│   ├── app.js
│   └── content.js
├── img/
│   └── samar-anand.png
├── assets/
│   └── Samar-Anand-Resume.pdf
├── LICENSE
└── README.md
```

## Content Model

All editable website content lives in:

```text
js/content.js
```

Use this file to update:

- hero copy
- professional case studies
- experience entries
- personal projects
- smaller ideas
- notes section
- now section
- about copy
- contact links

The rendering logic lives in:

```text
js/app.js
```

In normal maintenance, you should not need to edit `index.html` or `js/app.js` to add content.

## Adding Content

Add one object to the relevant array in `js/content.js`.

### Professional Work

Add to `work`:

```js
{
  id: '05',
  area: 'Area / Company',
  title: 'Case study title',
  summary: 'Concrete engineering story.',
  impact: ['Specific supported impact'],
  tags: ['Java', 'Kafka']
}
```

### Experience

Add to `experience`:

```js
{
  period: 'Month YYYY - Month YYYY',
  role: 'Role',
  company: 'Company',
  location: 'City, Country',
  summary: 'Short factual summary.'
}
```

### Personal Project

Add to `projects`:

```js
{
  id: 'project-id',
  status: 'Active',
  title: 'Project name',
  subtitle: 'Short subtitle.',
  summary: 'What it is and why it exists.',
  tags: ['Python', 'SQLite'],
  link: null,
  image: null,
  longerDetails: [
    'Optional deeper technical detail.'
  ]
}
```

`link`, `image`, and `longerDetails` are optional. The renderer uses sensible defaults when they are missing.

### Now Item

Add to `now`:

```js
{
  label: 'Learning',
  text: 'AI fundamentals and system design.'
}
```

## Design Direction

The website is designed as Samar's digital workshop, not a generic resume site.

Core design choices:

- black / charcoal / off-white palette
- restrained lime accent
- editorial typography
- horizontal rules and asymmetric layouts
- no SaaS-style cards, logo walls, gradients, or heavy animation
- personal projects are treated as seriously as professional work

## Assets

Current required assets:

- `img/samar-anand.png` — portrait used in the About section
- `img/logo.png` — browser tab icon
- `assets/Samar-Anand-Resume.pdf` — downloadable resume

The favicon uses the older shield-style `img/logo.png` because it is recognizable from the previous site and keeps a small piece of continuity in the browser tab.

## Deployment

This repository is intended for GitHub Pages.

Push changes to the default branch and serve the repository root through Pages.

## Quality Notes

The site should remain:

- static
- lightweight
- keyboard accessible
- responsive
- readable on mobile and desktop
- respectful of `prefers-reduced-motion`
- easy to grow through `js/content.js`

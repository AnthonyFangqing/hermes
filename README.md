# Hermes Nexus

Agent workspace rendered as HTML. Each task gets a page.

## Structure

```
hermes-site/
├── index.html              # Nexus / portal page
├── static/
│   ├── nexus.css          # Portal styles
│   ├── nexus.js           # Portal renderer (data-driven cards)
│   └── project.css        # Shared styles for all project pages
└── projects/
    ├── project1/          # Deployable Site
    │   └── index.html
    └── project2/          # Discord Gateway Config
        └── index.html
```

## Adding a new project

1. Create `projects/projectN/index.html`
2. Add entry to `static/nexus.js` → `projects` array
3. Commit and push

## URL

https://anthonyfangqing.github.io/hermes/

# Clouder Website

Clouders marketing website.

## Local development

```sh
npm install
npm run dev
```

## Project Structure

```text
/
├── public/             public assets, not optimized
└── src/                the beef
    ├── assets/         local assets, optimized
    ├── components/     does what it says on the tin
    ├── content/        blog posts and their images
    ├── data/           yaml files
    ├── layouts/        layouts
    └── pages/          static pages
    │   └── news/       blog index and detail
    └── utils/          helpers
```

## Todo

- [ ] PaaS, Netlify?
- [ ] Page styles
- [ ] Forms styles & [tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [ ] Forms submissions
- [ ] Redirects
- [ ] Git based CMS
- [ ] Eslint?
- [x] Content
- [x] Navigation
- [x] OG/meta tags

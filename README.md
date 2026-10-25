# FutureFlow Investment

React, Vite, and Tailwind CSS website. Use npm, bundled with Node.js.
The local toolchain uses Node.js 22; Vite requires Node.js 22.12 or newer on that release line.

## Development

```sh
npm ci
npm run dev
```

Commit `package-lock.json` when dependencies change. Use `npm install` to add or update dependencies.

## Production build

```sh
npm run build
npm run preview
```

Vite generates the static website in `dist/`.

## Vercel

Import this project with these settings:

- Root directory: the directory containing `package.json`
- Framework preset: Vite
- Node.js version: 22.x
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

The current site requires no environment variables or backend services.
Navigation uses section anchors, so no client-side route rewrites are needed.
WhatsApp links open an external service, and fonts load from Google Fonts.

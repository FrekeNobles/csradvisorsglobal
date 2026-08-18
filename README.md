# CSR Global

A production-ready Next.js + TypeScript + Tailwind CSS starter for the redesigned CSR Global group website.

## Structure

- `/` — group-level homepage / gateway
- `/africa` — CSR Advisors Ltd: Social Performance & Development Advisory
- `/usa` — CSR Advisors LLC: Business, Tax & Financial Advisory

The architecture deliberately separates the two audiences after the group introduction rather than forcing both subsidiaries into one generic services/navigation experience.

## Key UX decisions

- Sticky glass-style header
- Group-first homepage with two clear practice entry points
- Separate subsidiary experiences and language
- Reusable expandable service cards with `Read more`
- Responsive mobile navigation
- Clear audience and industry positioning
- Reusable data-driven components so services/content can be edited centrally
- No invented client-count or award claims
- Accessibility-friendly focus states and semantic buttons/links
- Tailwind CSS with a restrained corporate visual system inspired by the supplied reference UIs

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Content

Core content is centralized in:

`src/data/site.ts`

This makes it straightforward to replace, expand or refine the existing website copy without restructuring the UI.

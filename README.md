# Resume

My CV as a one-page Astro site, styled with Tailwind and printable to A4.

The content lives in `resume/src/content/cv/no.yaml`, validated by a Zod schema (`resume/src/content.config.ts`). Each section type (contact, education, skills, entries, text) has its own component under `resume/src/components/sections/`.

## Run

```sh
cd resume
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output in resume/dist
```

The current CV is also published at [haugestol.com/cv](https://haugestol.com/cv).

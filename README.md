# Prose Fingerprint — Demo

A small Next.js demo that matches books by how they *feel* to read, not just by genre or topic. Every book gets a nine-dimension "style fingerprint" and two books are compared axis by axis, so you can see exactly where they match and where they don't.

This is a hand-crafted demo: the fingerprints for the books shown here were generated once, offline, by distilling what professional reviewers and thousands of reader reviews already say about each title. See [`HOW_IT_WORKS.md`](./HOW_IT_WORKS.md) for the full explanation, including how this would scale past a hand-picked shelf.

## The nine dimensions

Each book is scored 0–1 on:

humour, emotional depth, prose complexity, dialogue, pace, descriptiveness, introspection, lyricism, darkness.

## How matching works

For every pair of books and every dimension, we compute a 0–100 similarity on that single axis. Identical on an axis scores 100; a small gap scores around 80; a half-scale gap flatly scores 0 on that axis. The overall match score is the average of the nine per-axis scores, and each card surfaces both the axes where the books agree ("Similar on") and where they don't ("Differs on"). No black box — just arithmetic you can read off the page.

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Build for production with `npm run build && npm start`.

## Stack

- Next.js 16 (App Router, Webpack)
- React 19
- Tailwind CSS v4
- Recharts for the fingerprint visualisations
- TypeScript throughout

## Repo layout

```
src/              Next.js app source
public/           Static assets
hero page images/ Source images used on the landing hero
HOW_IT_WORKS.md   The full methodology writeup
```

## Status

Demo. The fingerprints, the book list, and the matching logic are all deliberately small-scope so the idea can be judged on its merits rather than the breadth of the catalogue. The three-tier plan for scaling to millions of books is described in `HOW_IT_WORKS.md`.

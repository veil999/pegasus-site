# pegasus-site

Frontend for pegasus.tech — React + Vite + Tailwind.

## dev

```
npm install
npm run dev
```

Runs on `localhost:5173` by default.

## structure

- `src/pages/` — page components
- `src/components/cheat/` — layout and shared UI bits specific to this project
- `src/components/ui/` — only what we actually use (accordion, toast, tooltip, sonner)
- `src/data/games.ts` — game list, update this when adding/removing titles

## notes

Login is disabled pending auth rewrite. Discord is the actual access point for now.

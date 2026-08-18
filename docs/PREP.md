# Prep Work

Everything you need to do (and have installed) before you walk in the door.

---

## Requirements

- **Node.js 20+** (`node -v` should print v20.x or higher)
- **npm** (ships with Node)
- A code editor you're comfortable with
- An **AI coding tool** of your choice, authed and ready (Cursor, Claude Code, Codex, Copilot, etc.)

---

## Setup (recommended path: this project)

From the project root:

```bash
npm install
npm run db:migrate    # creates prisma/dev.db and applies the initial migration
npm run db:seed       # loads the 50-therapist roster into the DB (you'll need it for matching)
npm run dev
```

Then open <http://localhost:3000>. You should see:

- **Landing page** with a "Get started" button.
- Clicking it takes you to **`/onboarding`**, which shows a "TODO — build me" callout.

If both pages render, you're set.

### Quick sanity check (optional but recommended)

```bash
npm run db:studio
```

Opens Prisma Studio at <http://localhost:5555>. You should see the `IntakeSubmission` and `Therapist` tables. If you ran the seed, `Therapist` will have 50 rows.

---

## Stack overview

| Layer | Tech | Where it lives |
|---|---|---|
| Framework | Next.js 15 (App Router) | `app/` |
| Language | TypeScript | everywhere |
| UI | Tailwind CSS + shadcn/ui | `components/ui/`, `app/globals.css` |
| Database | SQLite via Prisma | `prisma/schema.prisma`, `prisma/dev.db` |
| Server logic | Server Actions / Route Handlers | wire up in `app/` as needed |

Existing starter code:

- A landing page at `/` with a "Get started" CTA → `/onboarding`.
- `/onboarding` is **empty** — just a TODO callout.
- A Prisma client singleton at `lib/db.ts`. Import with `import { prisma } from "@/lib/db"`.
- The starter Prisma schema has an `IntakeSubmission` model (deliberately minimal — restructure & extend it) and a fully fleshed-out `Therapist` model.
- shadcn/ui primitives pre-installed in `components/ui/`: `Button`, `Card`, `Input`, `Label`, `RadioGroup`, and the `Form`/`FormField` stack. Need more? Browse the [shadcn catalog](https://ui.shadcn.com/docs/components) and install on the fly with `npx shadcn@latest add <component>`.
- `data/therapists.json` — the roster of 50 fake therapists your match will work with: specialties, ages served, insurances, session formats, languages, personality, availability, and more. Seeded into the DB via `npm run db:seed`. Worth reading through before the session — heads up that list-ish fields are stored in SQLite as JSON-encoded strings (see the schema comments).

---

## AI tool setup

Confirm before you arrive:

- [ ] Your tool is installed and signed in.
- [ ] It can open this repo, read and modify files.

---

## Bringing your own stack (optional)

This starter project is the fastest path in, but you're welcome to build on whatever you're most fluent with. **One hard requirement: a persistent data store** — any DB, any ORM, any language. Submissions must actually persist somewhere.

If you go this route:

- Have your environment fully installed and working before you arrive.
- Have a hello-world DB write working end-to-end (a route that inserts a row, with a way to inspect it).
- We won't help debug your local env on the day.

---

## Troubleshooting

**`Node version mismatch`** — Install Node 20+ via [nvm](https://github.com/nvm-sh/nvm), [volta](https://volta.sh/), or your package manager.

**`npm install` fails with peer-dep errors** — Run `npm install --legacy-peer-deps`.

**`Port 3000 is in use`** — Kill the other process or run `PORT=3001 npm run dev`.

**`prisma migrate dev` hangs or asks weird questions** — Delete `prisma/dev.db` and `prisma/migrations/`, then re-run.

**`Module not found: @prisma/client`** — Run `npm run db:migrate` (which also generates the client). If still broken, run `npx prisma generate`.

---

Questions before the day? Just email **steve@marblehealth.com**.

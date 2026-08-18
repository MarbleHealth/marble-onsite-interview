# Marble Intake Product — Onsite Interview

This repo is the starting point for a **2-hour, in-person onsite** where you'll be designing & building the MVP of Marble's patient intake & matching product.

_**Please read through this README and all referenced docs before your interview session.**_

> [!IMPORTANT]
> **Bring your own laptop.** This is a hands-on, in-person session where you'll be writing code on your own machine — we don't provide one. Have it charged, set up, and ready to go (see [`docs/PREP.md`](./docs/PREP.md)). Without your laptop, we won't be able to run the interview.

---

## The product you'll build

**The setup:** A kid has been referred to Marble — by their pediatrician, a school counselor, a guardian, or themselves. To get this kid into care, we need to collect information and then use that information to match the kid with the best therapist on our roster.

We've found that one of the biggest levers we have to delivering effective care is how connected a patient feels to their therapist, so this is an extremely important part of our product.

Some of what we need is logistics: insurance information and if the kid is a minor, their guardian's consent to treatment. The rest is **match signal**: who this kid is, what they're going through, and what they (and their family) need in a therapist.

Your job is to build as much as you can **end-to-end**:

1. **The intake experience** — how we collect everything we need from the family.
2. **The match** — take what intake gathered and surface the best match or matches for the user to pick from.

The therapist roster is given: **50 therapists** in `data/therapists.json` (seeded into the `Therapist` table) with structured attributes — specialties, ages served, insurances accepted, session formats, languages, personality, availability, and more. This is the data your match works with.


### Key metrics to optimize for

1. **Intake completion** — of families who start intake, what percentage get through everything we need to begin care?
2. **Match quality** — of kids we match, what percentage end up with a therapist who fits: one they stick with and who genuinely helps?

While we won't be measuring anything as part of this session, imagine we are and optimize for both. 

---

## 🤖 AI is required, not optional

Using AI coding tools throughout this session is **expected**. A meaningful part of what we're assessing is **how** you use AI to build a real product quickly and effectively.

Bring your preferred tool (Cursor, Claude Code, Codex, Copilot, etc. — anything you're fluent with), **authed and ready to go** before you arrive.

---

## Before you arrive

Please get the project running on your laptop and confirm everything works, then familiarize yourself with the below docs:

→ **[`docs/PREP.md`](./docs/PREP.md)** has the setup steps, stack overview, AI tool checklist, and troubleshooting.

→ **[`docs/INTERVIEW.md`](./docs/INTERVIEW.md)** has the interview agenda and what each phase looks like.

→ **[`docs/WHAT_WERE_LOOKING_FOR.md`](./docs/WHAT_WERE_LOOKING_FOR.md)** covers how the eng team operates and what we'll be looking for in this interview.

## Want to bring your own stack?

The starter project here is the **recommended** starting point — it's the fastest path in and it's already wired up. But if you'd rather build on a stack you're more fluent in, you're welcome to stand up your own project that mirrors the structure here. One hard requirement: **a persistent data store** (Postgres, SQLite, MySQL, Mongo — your call). Whatever you bring, please have your environment fully set up before you arrive.

## Please don't pre-build this

We want you to read the prompt, think about the product, and come in with ideas. We just ask that you **don't write any code before the session**.

---

If anything in setup is broken, email **steve@marblehealth.com**.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Linavi** is a constructed chat language designed for minimal complexity. This is a zero-dependency frontend web application. No build tools, package managers, or frameworks are used — open any `.html` file directly in a browser to run it. External dependency: Supabase (community word storage, REST API via `fetch`).

## Running the project

No build step. Open any `.html` file directly in a browser (e.g. `lernen.html`, `index.html`). There are no dev servers, package managers, or test runners.

## Architecture

All logic lives in a single `app.js` shared across 6 HTML pages. Each page sets `window.LINAVI_PAGE` (e.g. `"words"`, `"learn"`) and the `DOMContentLoaded` boot block at the bottom of `app.js` calls the matching `init*()` function.

**Data in `app.js`:**
- `WORDS` array — built-in vocabulary items, each `{ w, de, cat }`
- `PHRASES` array — chat phrases, each `{ sec, src, de }`
- `STYLE_GUIDE_HTML` — embedded HTML string for the grammar rules
- `deToLinavi(text)` — German-to-Linavi translator using regex pattern matching
- `SUPABASE_URL` / `SUPABASE_KEY` — Supabase project config (anon key, read/insert only)
- `sbFetch(path, options)` — thin `fetch` wrapper for Supabase REST API calls

**Pages and their roles:**
- `index.html` — introduction and navigation hub (nav cards grid)
- `woerter.html` — searchable/filterable word table; supports adding custom words (personal, localStorage) and submitting community words (Supabase); approved community words show a green "community" badge
- `phrasen.html` — phrasebook with section filter
- `stilguide.html` — grammar rules (renders `STYLE_GUIDE_HTML`)
- `translate.html` — German-to-Linavi translator (calls `deToLinavi`)
- `lernen.html` — Anki-style flashcard trainer; reads `WORDS`, approved community words from Supabase, custom words from localStorage, and `PHRASES`; supports mode filter (all/words/phrases); "Nochmal" cards are re-queued at the end of the deck

**Styling (`styles.css`):** Warm editorial theme — cream/terracotta palette (`--bg: #FAF5EC`, `--accent: #9E4C14`), dark header/footer (`--dk-bg: #1A1510`), serif headings (Cormorant Garamond), sans body (DM Sans), monospace badges (Fira Code). All colours are defined as CSS custom properties in `:root`.

## Key patterns

- **Page dispatch:** `window.LINAVI_PAGE = "<key>"` in a `<script>` tag after `app.js`; boot block calls the matching `init*()`.
- **Custom words (personal):** Stored as JSON array in `localStorage("linavi_custom_words")` with shape `{ w, de, cat, _id }`. Shown with a yellow "eigenes" badge; deletable by the user.
- **Community words (shared):** Submitted via the form on `woerter.html` → stored in Supabase table `words` with `approved = false`. Admin approves in the Supabase dashboard → `approved = true`. Both `initWords()` and `initLearn()` fetch approved words on load via `sbFetch` and merge them with `WORDS`. Shown with a green "community" badge.
- **No DOM manipulation before DOMContentLoaded** — all `init*()` functions are called from inside the listener.

## Language Conventions

The actual Linavi words used in the data:
- Pronouns: `Ai` (I/me), `ya` (you), `mii` (we), `yii` (you-plural), `eno`/`ena`/`eni` (he/she/they)
- Negation: `nai` before the verb — `Ai nai kumi.`
- Questions: `?` suffix or question word first — `vu ya kumi?`
- Time words: `nu` (now), `hodi` (today), `mora` (tomorrow), `gesi` (yesterday), `bali` (soon), `sapa` (later)

## Text Export Files

`Linavi_Words.txt`, `Linavi_Sentences.txt`, and `Linavi_Styleguide.txt` are static exports for sharing. Keep them in sync when data in `app.js` changes.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Linavi** (also called "Linavi") is a constructed chat language designed for minimal complexity. This is a zero-dependency, offline-first frontend web application. No build tools, package managers, or frameworks are used — open any `.html` file directly in a browser to run it.

## Architecture

All logic lives in a single `app.js` file (~667 lines) shared across 5 HTML pages. Pages declare `window.LINAVI_PAGE` to indicate which page-specific initialization code in `app.js` should run.

**Data in `app.js`:**
- `WORDS` array — 191 vocabulary items, each with `{ w, de, cat }`
- `PHRASES` array — 76 chat phrases, each with `{ sec, src, de }`
- `STYLE_GUIDE_HTML` — embedded HTML string for the 8 grammar rules
- `deToAiluv(text)` — German-to-Linavi translator using regex pattern matching

**Pages and their roles:**
- `Index.html` — introduction and navigation hub
- `woerter.html` — searchable/filterable word table (uses `WORDS`)
- `phrasen.html` — phrasebook with section filter (uses `PHRASES`)
- `stilguide.html` — grammar rules (renders `STYLE_GUIDE_HTML`)
- `translate.html` — German-to-Linavi translator (calls `deToAiluv`)

**Styling (`styles.css`):** Dark theme with cyan/green accents, CSS custom properties, glassmorphism effects.

## Language Conventions

The Linavi language has key rules relevant when editing content:
- No grammatical cases — only the pronoun `Ai` (first person), `Yu` (second), `Wi` (plural)
- No verb conjugation — tense is expressed through time words (e.g., `bifor`, `nau`, `leta`)
- Negation: add `nai` before the verb (e.g., `Ai nai wantu`)
- Questions: add `?` and optionally a question word (e.g., `yu oki?`)

## Text Export Files

`Linavi_Words.txt`, `Linavi_Sentences.txt`, and `Linavi_Styleguide.txt` are static exports of the data for sharing. When data in `app.js` changes, these files should be updated to stay in sync.

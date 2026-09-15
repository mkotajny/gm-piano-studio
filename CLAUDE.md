# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static one-page landing site for "GM Piano Studio", adapted from the "Tasty" Bootstrap restaurant HTML template (see `DOCUMENTATION/index.html` for the original template's docs). There is no build system, package manager, or test suite — it's plain HTML/CSS/JS served directly.

## Running locally

There is no dev server or build step. Open `index.html` directly in a browser, or serve the directory with any static file server, e.g.:

```
python -m http.server 8000
```

## Architecture

- `index.html` — the entire page. Sections are identified by anchor IDs matching the nav links: `#about`, `#services`, `#reservation`, `#gallery`, `#contact`. The nav (`js/smooth-scroll.js`) scrolls to these anchors.
- `css/` — `bootstrap.css` and `base.css` are vendored framework/reset styles; `main.css` holds the actual template/site styling; `fonts.css` declares the custom `@font-face` rules (fonts live in `font/`); `flexslider.css` styles the image sliders.
- `js/script.js` — all page behavior: preloader fade-out, hero slider height, header style swap on scroll, mobile nav toggle, `.background-img` → CSS background conversion (used for the parallax hero/gallery images), tab and hover interactions, jQuery Validate setup for the reservation form, and `initializeMap()` for the Google Maps contact section (styled map, marker at the studio's coordinates).
- `js/jquery-1.12.4.min.js`, `jquery.flexslider-min.js`, `jquery.validate.min.js`, `placeholders.min.js`, `smooth-scroll.js` — third-party vendored libraries; do not edit these.
- `img/` — photos used in the hero and gallery sliders (`1.jpg`–`13.jpg`), `marker.png` (map pin), `signature.png`, and `logo.jpg` (studio logo).
- Google Maps is loaded via a `<script>` tag at the bottom of `index.html` with an embedded API key and `callback=initializeMap`, matching `initializeMap()` in `js/script.js`.

## Komunikacja

- Wszystkie odpowiedzi na czacie (tekst kierowany do użytkownika, nie treść commitów/kodu/dokumentów) mają być pisane po polsku.

## Notes

- Content in `index.html` is a mix of the original English template text and real Polish content for the studio (contact info, address, hours) — when editing, match the existing language of the section you're in.
- The `<title>` and some template scaffolding (e.g. the DOCUMENTATION folder, `LICENSE/` files) still reference the original "Tasty" template; this is vendor documentation, not part of the live site.
- Do not attempt to automatically test the visual/functional effects of changes in a browser (e.g. launching headless Chrome, driving it via CDP/Playwright/Selenium, taking screenshots). The user always tests changes manually/visually themselves. Reason about CSS/HTML/JS statically instead, and let the user verify in-browser.
- Never create git commits in this repository, even if asked to summarize/finish work — the user handles all commits themselves. Only commit if the user explicitly asks you to commit.

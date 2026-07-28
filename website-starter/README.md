# Website Starter

A reusable base project for building simple, fast websites for clients.
Plain HTML, CSS, and JavaScript — no build step, no dependencies.

## What's included

- `index.html` — one-page layout with header, hero, about, services, and contact sections
- `css/style.css` — responsive stylesheet driven by CSS variables (change the colors at the top of the file to rebrand the whole site)
- `js/main.js` — mobile menu toggle and automatic footer year

## Starting a new client site

1. Copy this folder (or create a new repo from this template).
2. Search for `CLIENT_NAME` in `index.html` and replace it with the client's name.
3. Update the text in each section and the contact details.
4. Adjust the colors in the `:root` block of `css/style.css`.
5. Add a `favicon.ico` and any images to an `images/` folder.

## Previewing locally

Just open `index.html` in a browser, or run a tiny local server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

The site is static, so any static host works: GitHub Pages, Netlify,
Cloudflare Pages, or plain web hosting via FTP.

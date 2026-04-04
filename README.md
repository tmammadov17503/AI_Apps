# AI_Apps

Orbit Deck is a static GitHub Pages dashboard that pulls your daily tools into one fast home base. It groups your links into practical categories like AI, creator tools, build consoles, crypto signals, media, and personal apps.

## What is inside

- A responsive single-page dashboard built for GitHub Pages
- Category-based app lanes with search and quick filters
- Hover depth, cursor-reactive lighting, and 3D-style card motion
- Logo-backed cards for every saved site
- A simple code structure with no build step

## Project structure

- `index.html` - page structure and hero layout
- `styles.css` - visual system, responsive layout, and hover effects
- `script.js` - app data, category rendering, search, and interaction logic
- `assets/logo-mark.svg` - site logo
- `assets/favicon.svg` - site favicon

## Deploy on GitHub Pages

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Choose `Deploy from a branch`.
5. Select `main` and `/ (root)`.
6. Save and wait for GitHub Pages to publish.

If your repo stays named `AI_Apps`, the project page will usually publish at:

`https://tmammadov17503.github.io/AI_Apps/`

## How to update the links later

All app cards live in the `apps` array inside `script.js`.

To add a new tool:

1. Open `script.js`
2. Copy one app object in the `apps` array
3. Change the `name`, `url`, `category`, `role`, `description`, `detail`, `tags`, and `state`

## Notes

- The site is intentionally framework-free so it is easy to host and edit.
- Logos are loaded from each service domain through a favicon service with text fallback if an icon does not load.
- Some streaming or download portals were kept in their own media category so they stay separate from your main work stack.

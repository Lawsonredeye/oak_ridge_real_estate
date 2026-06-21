# Oakridge Real Estate

A monochrome, minimal real estate landing page and multi-page website built with HTML, CSS, and JavaScript. Features a strict black/white/grey palette with a restrained blue accent, Inter typeface, and flat outlined buttons with inversion hover states.

---

## Project Structure

```
oak_ridge_real_estate/
├── index.html          # Landing page
├── properties.html     # Property listings with filters
├── about.html          # About us, values & team
├── contact.html        # Contact form & info
├── vercel.json         # Vercel deployment config
├── css/
│   └── style.css       # Full stylesheet
├── js/
│   └── main.js         # Interactivity & filters
└── images/             # Local image assets (if any)
```

---

## Run Locally

This is a static site — no framework, no build tools, no `npm install`. Just serve the files.

### Option 1: Python (built-in, no install)

```bash
cd oak_ridge_real_estate
python3 -m http.server 8080
```

Open **http://localhost:8080**

### Option 2: Node.js

```bash
npx serve .
```

Open **http://localhost:3000**

### Option 3: VS Code Live Server

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**

### Option 4: PHP

```bash
php -S localhost:8000
```

### Option 5: Just open the file

Double-click `index.html` in your file explorer. Some features (like the newsletter form submission) still work fine — there's no backend dependency.

---

## Deploy to Vercel

Configured via `vercel.json` as a static site. No build step required.

```bash
vercel
```

- **Framework Preset**: `Other` (auto-detected as static)
- **Build Command**: leave blank
- **Output Directory**: leave blank

---

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, Intersection Observer)
- Vanilla JavaScript (no dependencies)
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- Images from [Unsplash](https://unsplash.com)

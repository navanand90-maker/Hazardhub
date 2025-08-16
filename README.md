# HazardHub (Netlify + Serverless)

This repo is pre-wired for Netlify with:
- Auto-scrolling live news banner (refreshes every 2 hours)
- Weather by visitor GPS (Open-Meteo, no API key)
- Global/Regional alerts
- Recent research feed
- Animated, modern UI

## Quick Start
1) Push this folder to GitHub (or upload as a ZIP).
2) In Netlify: **Add new site → Import from Git** → select this repo.
3) Build command: `npm run build` • Publish dir: `dist/`
4) Trigger the first data refresh in Netlify → Functions → Invoke:
   - `refresh_news`
   - `refresh_alerts`
   - `refresh_research`
5) Visit your site – ticker, weather, alerts & research should load.
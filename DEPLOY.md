# Deploy to Webflow Cloud

This project is configured for **Webflow Cloud** (Astro + Cloudflare Workers).

## Quick deploy

```bash
# 1. Authenticate (opens browser)
npx webflow auth login

# 2. Deploy as standalone app at root domain (recommended for landing)
npx webflow cloud deploy --mount / --project-name "TradeLive Landing" --auto-publish

# Or attach to existing Webflow site at subpath /app
npx webflow cloud deploy --mount /app --auto-publish
```

On first deploy, the CLI will ask you to:
- Choose **Existing site** or **New domain** (standalone app)
- Select your Webflow workspace/site
- Confirm mount path

After deploy, publish the site in Webflow if you used `--auto-publish` or publish manually from the dashboard.

## Alternative: GitHub one-click deploy

1. Push this repo to GitHub
2. Open Webflow Dashboard → **New Project → App → Import GitHub repository**
3. Framework: Astro, root path: `/`
4. Click **Deploy**

One-click URL pattern:
`https://webflow.com/dashboard/cloud/deploy?repo=YOUR_GITHUB_REPO_URL`

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # requires CLOUD_MOUNT_PATH=/ in astro.config for local build
```

## Configuration before go-live

Edit `src/pages/index.astro` → `CONFIG` object:
- `whatsappPhone` — real WhatsApp number
- `whatsappMessage` — pre-filled message
- `videoUrl` — client video URL

Uncomment Meta Pixel and GA4 in the `<head>` section.

## Project structure

```
public/assets/     Static images (hero, avatars, favicon)
src/pages/index.astro   Main landing page (RTL Hebrew)
webflow.json       Webflow Cloud config
astro.config.mjs   Astro + Cloudflare adapter
wrangler.json      Cloudflare Workers config
```

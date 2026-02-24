# Boojy — Project Context

Solo project by Tyr. This is the **marketing website** repo (`boojy`).

## Repos

| Repo | Path | Purpose |
|------|------|---------|
| `boojy` | This repo | Marketing website (boojy.org) |
| `boojy-notes` | `../2026/Boojy Notes/` | React 19 + Vite notes app (notes.boojy.org) |
| `boojy-cloud` | `../2026/Boojy Cloud/` | Supabase Edge Functions + migrations |

## Website Structure

```
website/
├── index.html          # Hub page (product cards)
├── audio/index.html    # Audio product page
├── notes/index.html    # Notes product page
├── cloud/index.html    # Cloud pricing/info page
├── account/index.html  # Auth + account dashboard
├── privacy.html
├── terms.html
├── subscribed.html     # Post-checkout success page
├── 404.html
├── css/
│   ├── shared.css      # Global styles (nav, footer, layout)
│   ├── hub.css         # Hub page styles
│   ├── audio.css
│   ├── notes.css
│   ├── cloud.css
│   └── account.css
├── js/
│   ├── shared.js       # Nav hamburger, common UI
│   ├── account.js      # Supabase auth + dashboard (type="module")
│   └── audio.js        # Audio page interactions
├── images/
├── _redirects          # Cloudflare Pages redirects
├── _headers            # Cloudflare Pages headers
├── robots.txt
└── sitemap.xml
```

## Tech Stack

- **Framework:** Plain HTML/CSS/JS (no build step)
- **Hosting:** Cloudflare Pages (auto-deploys from GitHub `master`)
- **Auth:** Supabase JS via CDN (pinned to v2.43.4)
- **Payments:** Stripe Checkout + Customer Portal
- **Backend:** Supabase Edge Functions (in boojy-cloud repo)
- **Storage:** Cloudflare R2 (S3-compatible, for note content)
- **Analytics:** Umami (self-hosted on Railway)

## Key Conventions

- All HTML pages share the same nav and footer structure
- `shared.css` and `shared.js` are loaded on every page
- Supabase CDN is pinned to `@2.43.4` (newer versions break global scope)
- Scripts using Supabase must use `type="module"` to avoid global property conflicts
- Edge Function calls need both `apikey` and `Authorization` headers
- All Edge Functions are deployed with `--no-verify-jwt`
- Use `.maybeSingle()` not `.single()` for Supabase queries that may return no rows

## Supabase

- **Project ref:** wupmcvhzstgsdrvcigtm
- **Key tables:** `profiles`, `storage_usage`, `notes_metadata`
- **Auth providers:** Email, Google, Apple
- **Edge Functions:** create-checkout, stripe-webhook, sync-push, sync-pull, sync-delete, storage-check, auth-webhook

## Stripe

- Currently in **test mode**
- Product: Boojy Cloud Orbit
- 4 PPP price tiers (test IDs — will change for live)
- Customer Portal active for subscription management

## Local Dev

```bash
cd website && python3 -m http.server
# Opens at http://localhost:8000
```

No build step needed. Edit HTML/CSS/JS directly.

## Deployment

Push to `master` branch → Cloudflare Pages auto-deploys.

## Git

- Branch: `master`
- `docs/private/` is gitignored (secrets reference, TODOs, archived docs)
- `docs/BUSINESS_PLAN.md` is gitignored

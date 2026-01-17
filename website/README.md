# Boojy Website

Source code for [boojy.org](https://boojy.org).

## Local Development

Open `index.html` in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000`

## Project Structure

```
website/
├── index.html          # Main landing page
├── subscribed.html     # Email subscription confirmation
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── 404.html            # Error page
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Interactivity & download logic
├── images/             # Logos and screenshots
├── netlify.toml        # Netlify config
├── robots.txt          # SEO
└── sitemap.xml         # SEO
```

## Deployment

Hosted on Netlify. Deploys automatically when pushing to `master`.

## Tech Stack

- HTML, CSS, JavaScript (no frameworks)
- Netlify hosting
- Umami analytics
- Mailchimp for email signups

## Links

- **Live site:** [boojy.org](https://boojy.org)
- **App repo:** [tyrbujac/boojy-audio](https://github.com/tyrbujac/boojy-audio)

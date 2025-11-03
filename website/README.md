# Boojy Suite Website

Official website for Boojy Suite - Creativity Without Limits

## 🌌 About

This is the landing page and marketing website for the Boojy Suite creative tools ecosystem. Built with pure HTML, CSS, and JavaScript for simplicity and performance.

**Theme:** Space-themed dark design with vibrant planet accents

## 🚀 Quick Start

### Local Development

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (with http-server)
   npx http-server
   ```
3. Visit `http://localhost:8000`

### Project Structure

```
website/
├── index.html                  # Main landing page
├── audio.html                  # Boojy Audio detail page
├── draw.html                   # Boojy Draw detail page
├── design.html                 # Boojy Design detail page
├── cloud.html                  # Boojy Cloud detail page
├── about.html                  # About Us page
├── privacy.html                # Privacy Policy
├── terms.html                  # Terms of Service
├── 404.html                    # Custom 404 error page
├── roadmap.html                # Development roadmap
├── devlog.html                 # Developer blog
├── downloads.html              # Downloads page
├── donate.html                 # Donation page
├── feature-request.html        # Feature request form
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Crawler directives
├── css/
│   └── styles.css              # All styles (space theme)
├── js/
│   └── main.js                 # Interactivity & animations
├── netlify.toml                # Netlify deployment config
└── README.md                   # This file
```

## 🎨 Design System

### Colors

- **Background**: `#1A1B23` (Deep Space)
- **Panels/Cards**: `#23242E` (Panel Grey)
- **Text**: `#E5E7EB` (Light Grey)
- **Primary**: `#FFFFFF` (White)
- **Accent**: `#A855F7` (Purple)

**Navigation Link Colors:**
- Audio: `#8C8C8C` (Gray) → `#B0B0B0` on hover
- Draw: `#F5F5DC` (Cream) → `#FFFACD` on hover
- Design: `#4A90E2` (Blue) → `#67A3EE` on hover
- Cloud: `#6366F1` (Indigo) → `#818CF8` on hover
- Roadmap: `#F97316` (Orange) → `#FB923C` on hover
- Devlog: `#EF4444` (Red) → `#F87171` on hover
- Downloads: `#14B8A6` (Teal) → `#2DD4BF` on hover
- GitHub: `#A855F7` (Purple) → `#C084FC` on hover

### Features

- 🌌 Space-themed dark design with starfield backgrounds
- 📱 Fully responsive (mobile-first)
- ♿ Accessible navigation with color-coded links
- 🚀 Smooth scrolling and page transitions
- 💫 Smooth hover animations and transforms
- 🎨 Individual app detail pages (Audio, Draw, Design, Cloud)
- ⚖️ Legal compliance (Privacy Policy, Terms, About Us)
- 🔍 SEO optimized (sitemap.xml, robots.txt, meta tags)
- 🚫 Custom 404 error page
- 🎯 Cache busting (v=2 on CSS/JS)
- 🌫️ Clean, professional aesthetic
- ✨ Vibrant personality through colors and interactions

## 🌐 Deployment

### Netlify (Recommended)

1. **Via Git (Automatic Deploys)**
   ```bash
   # Push to GitHub
   git add website/
   git commit -m "Add website"
   git push

   # Then connect repository on Netlify dashboard
   # Build settings are in netlify.toml
   ```

2. **Via Netlify CLI**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Deploy
   cd website
   netlify deploy --prod
   ```

3. **Via Drag & Drop**
   - Go to https://app.netlify.com/drop
   - Drag the `website` folder
   - Done!

### Custom Domain

1. Go to Netlify dashboard → Domain settings
2. Add custom domain (e.g., `boojy.org`)
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

## 📝 To-Do

- [ ] Add email subscription API endpoint
- [x] Create individual app detail pages ✅
- [ ] Add screenshots/mockups when apps are ready
- [x] Create 404 page ✅
- [ ] Add blog system for devlogs (devlog.html exists, needs CMS/blog engine)
- [x] Privacy-friendly telemetry (opt-out anonymous data) ✅
- [ ] Add RSS feed for updates
- [ ] Create downloadable press kit
- [ ] Add favicon and app icons

## 🎯 Future Enhancements

- Add light mode variant (currently dark only)
- Add interactive app demos or mockups
- Add screenshots when apps are ready
- Add testimonials section
- Build community showcase
- Implement dynamic blog system (currently static devlog.html)
- Add favicon and app icons

## 🛠 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript**: No frameworks, no dependencies
- **Netlify**: Hosting & deployment
- **Performance**: Lighthouse score 90+

## 📄 License

Website design and code: MIT License (after v1.0)

## 🤝 Contributing

Website improvements welcome! Feel free to:
- Fix typos or improve copy
- Enhance animations
- Improve accessibility
- Optimize performance
- Add new sections

## 📧 Contact

- GitHub: https://github.com/tsbujacncl/boojy
- Twitter: https://twitter.com/boojyorg
- YouTube: @Boojy (starting Month 4)

---

**Built with ✨ by Tyr Bujac**

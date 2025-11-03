# 🎨 Boojy Suite – Vision Document

> **Tagline:** Creativity without limits.  
> **Mission:** Make professional creative tools free, accessible, and ethical for everyone.

---

## 1. Why Boojy Exists

### The Problem

Creative software has become expensive, closed, and extractive:

- **Adobe Creative Cloud:** £66.49/month (£798/year) for perpetual subscriptions
- **Apple Logic Pro:** £200 one-time, Final Cut Pro X: £300 one-time (but macOS-only)
- **Canva Pro:** £13/month with paywalls on essential features
- **Data tracking:** Your projects, habits, and creations monitored and monetized

For students, hobbyists, and independent creators, these costs are prohibitive. You're locked into subscriptions, surveilled by analytics, and held hostage by proprietary file formats.

### The Solution

**Boojy Suite** is a complete ecosystem of creative tools that is:

✅ **Free forever** – No subscriptions, no paywalls, no trials  
✅ **Open-source** – Code is public, auditable, and community-driven (after v1.0)  
✅ **Privacy-first** – No telemetry, no ads, no data collection without consent  
✅ **Cross-platform** – Works on Windows, Mac, Linux, iPad, phone, and (selectively) web  
✅ **Ethical** – Respects users, supports creators, reinvests all revenue into development

---

## 2. Core Principles

### 1. Free to Create

Every app is free to download and use—forever. No feature restrictions, no time limits, no "upgrade to pro" upsells.  
**Commercial use is encouraged.** Freelancers, small studios, businesses—use Boojy Suite for paid work without licensing fees.

### 2. Open-Source (After v1.0)

Apps go open-source after they reach v1.0 stability (feature-complete + stable). This ensures:

- **Transparency** – You can audit the code
- **Longevity** – Community can maintain if needed
- **Trust** – No hidden tracking or backdoors
- **License:** MIT (maximum freedom for users and developers)

### 3. Privacy-First

- **Opt-out anonymous telemetry** (on by default, disable anytime in Settings → Privacy)
- Collects crash reports, feature usage, and performance metrics to improve apps
- Completely transparent about what's collected (see Privacy Policy)
- Can't identify individual users - truly anonymous
- No ads, ever
- No data mining or selling user information
- Your projects stay yours
- **Boojy Cloud uses zero-knowledge encryption** (you control the keys, we can't see your files)

### 4. Human + AI Development

Boojy Suite is developed and designed by Tyr Bujac with AI tools (Claude Code, ChatGPT) assisting with code generation, debugging, and idea refinement. All creative and architectural decisions are human-made.

**Why this matters:**

- Speeds up development without sacrificing quality
- Demonstrates the future of indie software creation
- Maintains transparency (we're open about using AI as a tool)

### 5. Accessibility

- **Lightweight apps** that run on modest hardware (no 16GB RAM requirement)
- **Intuitive UI** inspired by GarageBand and iMovie (learn by doing, not by reading manuals)
- **Free for education** – Students, teachers, schools, universities (no licensing fees)
- **Works offline** – No internet required (except for Cloud sync)

### 6. Community-Driven

Your feedback shapes priorities. Early testers, GitHub discussions, YouTube devlog comments, and feature requests guide what gets built next.

---

## 3. Product Suite Overview

### Creative Apps

|App|Replaces|Description|Platform Availability|
|---|---|---|---|
|**Boojy Audio**|GarageBand, Ableton, Logic, Audition|Full DAW: music production, podcasts, sound design, VST support, MIDI|Desktop, iPad, Mobile|
|**Boojy Draw**|Procreate, Krita, Photoshop (painting)|Digital illustration with pressure-sensitive brushes, unlimited layers, blend modes|Desktop, iPad, Mobile, Web|
|**Boojy Design**|Photoshop + Illustrator + InDesign|Photo editing (Photo Mode), vector design (Vector Mode), page layout (Layout Mode v2.0)|Desktop, iPad, Web|
|**Boojy Video**|Premiere Pro + After Effects|Video editing with integrated motion graphics—no switching apps|Desktop, iPad, Mobile|
|**Boojy Animate**|Adobe Animate, Toon Boom|2D animation: frame-by-frame + motion graphics in one standalone app|Desktop, iPad, Mobile, Web|
|**Boojy Score**|MuseScore, Sibelius, Finale|Music notation and composition, full orchestral scoring|Desktop, iPad, Web|

### Infrastructure

|Service|Purpose|Pricing|
|---|---|---|
|**Boojy Cloud**|Creative-aware storage, sync across devices, version history, collaboration (future)|**Free:** 1GB<br>**Plus:** 10GB (£2/mo)<br>**Pro:** 100GB (£5/mo)<br>**Max:** 1TB (£15/mo)|

### Companion Platform

|Platform|Description|Integration|
|---|---|---|
|**Buddy Music**|Free music streaming + buy-to-own marketplace for indie artists (90/10 revenue split)|Boojy Audio exports directly to Buddy Music, artists keep 90% of sales|

---

## 4. What Boojy Replaces (Adobe Comparison)

|Adobe Product|Boojy Replacement|Status|
|---|---|---|
|**Audition**|Boojy Audio|Preview (Month 2)|
|**Photoshop**|Boojy Design (Photo Mode)|Preview (Month 7)|
|**Illustrator**|Boojy Design (Vector Mode)|Preview (Month 7)|
|**InDesign**|Boojy Design (Layout Mode)|v2.0 (Year 2)|
|**Lightroom**|Boojy Design (Library Mode)|v2.0 (Year 2)|
|**Premiere Pro**|Boojy Video (Editor Mode)|Month 12+|
|**After Effects**|Boojy Video (Motion Mode)|Month 12+|
|**Animate**|Boojy Animate|Month 18+|
|**Dreamweaver**|_(intentionally skipped)_|Web dev tools, not creative|
|**XD / Figma**|_(future consideration)_|Year 3+ if demand exists|
|**Substance 3D**|_(intentionally skipped)_|No 3D focus|
|**Acrobat**|_(intentionally skipped)_|Not creative software|

**Result:** Boojy Suite covers **90% of Adobe Creative Cloud** for hobbyists and indie creators.

---

## 5. Development Roadmap (30 Months)

### Phase 1: Preview & Foundation (Months 0-12)

**Months 0-2: Preview Sprint** ⚡ _Current Focus_

- Build Preview versions of Audio, Draw, Design, Cloud (v0.1-0.4)
- Test with 10-20 early users
- Validate "it just works" philosophy
- Gather feedback to guide v0.5

**Months 3-12: Core Apps v0.5 (Beta)**

- **Month 5:** Boojy Audio v0.5 Beta
- **Month 8:** Boojy Draw v0.5 Beta
- **Month 10:** Boojy Cloud v0.5 Launch (paid tiers go live)
- **Month 13:** Boojy Design v0.5 Beta
- **Linux support:** Between v0.5-v1.0 for all apps

### Phase 2: Video, Animation & Platform Expansion (Months 12-24)

**Months 12-15: Boojy Video**

- Video editing with integrated motion graphics (v0.5 Beta)
- "Premiere + After Effects in one app"
- Mobile version (vertical video for TikTok/Reels)
- **Linux support:** Between v0.5-v1.0

**Months 15-20: Multi-Platform Expansion**

- **iPad versions:** Draw, Animate, Design (v1.0 or v1.1)
- **Web apps:** Design (priority), Score
- **Mobile apps:** Draw, Animate, Audio Mobile
- **v1.0 releases:** Audio, Draw, Design promoted from Beta to stable

**Months 18-24: Boojy Animate**

- 2D animation (frame-by-frame + motion graphics) (v0.5 Beta)
- Standalone app with tight Draw integration
- Desktop + iPad + Web
- **Linux support:** Between v0.5-v1.0

### Phase 3: Completion & Ecosystem Maturity (Months 24-36)

**Months 24-30: Boojy Score**

- Music notation and composition (v0.5 Beta)
- Desktop + iPad + Web
- Integrates with Boojy Audio (export MIDI, import arrangements)
- **Linux support:** Between v0.5-v1.0

**Months 30-36: Polish & Advanced Features**

- **v1.0 stable releases:** Video, Animate, Score promoted from Beta
- **Real-time collaboration** (Boojy Cloud Max feature)
- **Plugin marketplace** (community extensions, 90/10 revenue split)
- **Design v2.0:** Add Layout Mode (multi-page documents, InDesign replacement)
- **Design v2.0:** Add Library Mode (batch photo editing, Lightroom replacement)
- **Mobile polish:** iPhone/Android versions for all applicable apps

---

## 6. Platform Strategy

### Desktop-First, Then Expand

**Year 1 (Months 0-12): Desktop Core**

- Windows, Mac (Intel + Apple Silicon)
- All apps launch on desktop first
- Easiest to develop and test

**Year 2 (Months 12-24): Tablets & Web**

- **iPad:** Draw, Animate, Design (Artists need portability)
- **Web:** Design (competes with Photopea), Score (notation works great in browser)
- **Mobile:** Draw, Animate, Audio Mobile (TikTok generation, sketch anywhere)

**Year 3 (Months 24-36): Full Multi-Platform**

- **Linux:** All desktop apps
- **Web expansion:** Draw, Animate (if demand exists)
- **Mobile refinement:** Video editing for phones

### Platform Priority by App

|App|Desktop|iPad|Phone|Web|Linux|
|---|---|---|---|---|---|
|**Audio**|v0.5|v2.0|v2.0 (Mobile)|Skip (latency issues)|v0.5-v1.0|
|**Draw**|v0.5|v0.5|v1.5|v2.0|v0.5-v1.0|
|**Design**|v0.5|v1.1|v2.0 (Lite)|v1.5 🔥 Priority|v0.5-v1.0|
|**Video**|v0.5|v1.5|v2.0|Skip (file size/cost)|v0.5-v1.0|
|**Animate**|v0.5|v0.5|v1.5|v2.0|v0.5-v1.0|
|**Score**|v0.5|v1.0|Skip|v1.5 🔥 Priority|v0.5-v1.0|

---

## 7. Boojy Cloud: Creative-Aware Storage

### Why Not Just Use Google Drive?

**Generic cloud storage** (Google Drive, Dropbox, OneDrive) doesn't understand creative projects:

- ❌ No version history per save (only daily backups)
- ❌ No creative previews (generic file icons)
- ❌ No cross-app integration (Audio can't reference Draw files)
- ❌ No offline-first workflow (must download before editing)

**Boojy Cloud** is built specifically for creative workflows:

- ✅ **Zero-knowledge encryption** (files encrypted on your device before upload - you control the keys)
- ✅ Auto-versioning (every save creates a version, restore any previous state)
- ✅ Smart previews (thumbnails show actual artwork, waveforms, designs)
- ✅ Cross-app awareness (open Draw file in Design seamlessly)
- ✅ Offline-first (work without internet, sync when connected)
- ✅ Privacy (we literally cannot see your files, no scanning for ads or AI training)

### Storage Tiers

|Plan|Storage|Price|Target User|
|---|---|---|---|
|**Free**|1 GB|£0/mo|Try before you buy, casual users|
|**Plus**|10 GB|£2/mo|Hobbyists, regular creators (~50 projects)|
|**Pro**|100 GB|£5/mo|Active creators, small studios (~500 projects)|
|**Max**|1 TB|£15/mo|Professionals, classrooms, teams (~5000 projects)|

**Optional third-party integration:** Free users can connect Google Drive, Dropbox, or OneDrive as backup (your choice, your control).

### Revenue Model

**Break-even:** ~100 Plus subscribers (£200/month) covers hosting, AI tools, domain costs.

**Sustainability:** ~1,000 paying Cloud users (mix of Plus/Pro/Max) = £5,000/month = full-time sustainable development.

### ⚠️ Important: App Store Subscription Fees

**Apple and Google take a 30% cut of in-app subscriptions** (reduced to 15% after first year per subscriber).

**This significantly impacts revenue:**

- **Direct subscription (website):** User pays £2 → You receive £2 (100%)
- **iOS/Android subscription:** User pays £2 → You receive £1.40 (70%) or £1.70 (85% after year 1)

**Boojy's Strategy:**

✅ **Primary:** Direct subscriptions via boojy.org (no middleman, 100% revenue)  
✅ **iOS/Android:** Apps are completely free to download and use  
✅ **Cloud subscription:** Users directed to website to subscribe (avoids 30% fee)  
✅ **Alternative:** Users can link their own Google Drive/Dropbox (free tier stays free)

**Why this matters:**

- At 100 subscribers, 30% cut = £60/month lost (£720/year) — that's significant for sustainability
- Encouraging website subscriptions keeps more money for development
- Apps remain 100% free on all platforms (no paywalls, no feature restrictions)

**User-friendly approach:**

- In-app message: "Subscribe to Boojy Cloud on boojy.org to support development directly"
- One-click link to website subscription page
- Transparent about why (more money goes to making better apps)

---

## 8. Business Model: Sustainability Without Exploitation

Boojy Suite is **free forever**, funded through **ethical, optional support**:

|Revenue Stream|Description|Estimated Contribution|
|---|---|---|
|**Boojy Cloud subscriptions**|Plus (£2), Pro (£5), Max (£15) tiers|**Primary revenue** (70-80%)|
|**Buddy Music fees**|10% of artist sales on platform|Secondary (10-15%)|
|**Donations**|One-time via Buy Me a Coffee, Ko-fi, Stripe|Community support (5-10%)|
|**YouTube ad revenue**|Monthly devlogs + tutorial videos|Supplemental (2-5%)|
|**Merchandise**|Ethical print-on-demand (shirts, mugs, stickers, tote bags, posters)|Supplemental (2-5%)|

### Transparency Commitment

**Monthly updates published publicly:**

- Development progress (features completed, bugs fixed)
- **Donation transparency** (monthly donations received, thank you to supporters)
- User growth (downloads, active users, Cloud subscribers)
- Roadmap adjustments (what's next based on feedback)

**Example transparency post:**

> _"October 2025: Development update—Audio v0.5 shipped with 47 bug fixes. Thank you to our 23 donors this month (£287 total)! Next milestone: Draw v0.5 Beta in November. Goal: 50 total donors by year-end to sustain full-time development."_

---

## 9. Buddy Music: Companion Platform

### What Is Buddy Music?

**Spotify + iTunes hybrid** for independent artists:

- **Free streaming** (like Spotify—discover indie music)
- **Buy-to-own** (like iTunes—support artists directly, own the tracks)
- **90/10 revenue split** (artist keeps 90%, platform takes 10%)
- **Playful branding** (teddy bear mascots, vibrant colors—distinct from Boojy Suite's professional tone)

### Integration with Boojy Audio

**Seamless workflow:**

1. Create music in Boojy Audio
2. Click "Publish to Buddy Music"
3. Upload track with metadata (title, artist, cover art from Boojy Draw)
4. Set price (free, £1, £5, etc.) or streaming-only
5. Share with fans (streaming link + buy link)

**Why it works:**

- ✅ Complements Boojy Suite (create → publish in one ecosystem)
- ✅ Helps indie artists (no gatekeepers, 90% revenue)
- ✅ Separate branding avoids confusion (Buddy = fun/playful, Boojy = professional)
- ✅ Revenue share sustains both platforms

### Business Model

- **Artist sales:** Platform takes 10% (artist keeps 90%)
- **No ads or subscriptions** (listener-side is always free)
- **Cross-promotion:** Buddy Music users discover Boojy Audio ("Made with Boojy Audio" badges on tracks)

**Launch timing:** Soft launch after Boojy Audio is stable (Month 4-6).

---

## 10. Community & Content Strategy

### YouTube Devlogs

**Monthly devlog videos** (10 minutes, well-produced):

- **Structure:**
    - 0:00-0:30 – Hook ("This month I added real-time collaboration to Boojy Cloud")
    - 0:30-2:00 – Progress showcase (show features working)
    - 2:00-7:00 – Deep dive on one interesting problem solved
    - 7:00-9:00 – What's next + roadmap update
    - 9:00-10:00 – Call to action (test beta, donate, follow)

**First public devlog:** Month 3-4 (after Preview phase, when you have something to show)

### Social Media

- **Twitter/X:** Progress reels, feature teasers, poll community on decisions
- **Instagram:** Visual content (Draw/Design showcases, UI screenshots)
- **Reddit:** r/WeAreTheMusicMakers, r/DigitalPainting, r/opensource (share milestones, gather feedback)

### GitHub

- **Public development:** Roadmap, issues, discussions (after v1.0 per app)
- **Community contributions:** Accept pull requests after v1.0 stability
- **Transparency:** Changelog, release notes, version history

### Community Interaction

- **GitHub Discussions** (not Discord initially) – Async, searchable, professional
- **Consider Discord** once 1,000 active users (demand-driven, not preemptive)

---

## 11. How to Support Boojy Suite

### For Users

✅ **Use the apps** – Create with Boojy Suite, share your work  
✅ **Subscribe to Boojy Cloud** – £2/month supports full-time development  
✅ **Donate** – One-time support via Buy Me a Coffee or Ko-fi  
✅ **Spread the word** – Share Boojy Suite with friends, communities, social media  
✅ **Buy merch** – Ethical print-on-demand (launches Month 4+)

### For Creators & Educators

✅ **Free for commercial use** – Use Boojy Suite for paid client work (no licensing fees)  
✅ **Free for education** – Schools, universities, training programs (use freely, donations welcome)  
✅ **Publish on Buddy Music** – Musicians can sell tracks, keep 90% of sales

### For Developers

✅ **Test early versions** – Join Preview phase or beta programs  
✅ **Contribute code** – Apps go open-source after v1.0 (accept pull requests)  
✅ **Build plugins** – Plugin marketplace coming (90/10 revenue split for creators)

---

## 12. Licensing & Use

### Apps: MIT License (After v1.0)

- ✅ **Free for personal use** (hobbyists, students, home creators)
- ✅ **Free for commercial use** (freelancers, small studios, businesses)
- ✅ **Free for education** (schools, universities, training programs)
- ✅ **No attribution required** (though appreciated!)
- ✅ **Open-source after v1.0** (code is public, auditable, forkable)

**No exceptions:** Every app remains free forever. Cloud subscriptions are optional (you can use apps without Cloud).

### Boojy Cloud: Proprietary Infrastructure

- Backend remains closed-source (protects infrastructure, prevents abuse)
- But apps can work with any storage provider (Google Drive, Dropbox, self-hosted)

### Trademarks

- "Boojy" name and logo protected (prevents impersonation)
- Apps can be forked under different names (e.g., "FreeAudio," a Boojy Audio fork)

---

## 13. Roadmap Snapshot (Visual)

```
MONTHS 0-2   [Preview Sprint] (v0.1-0.4)
             Audio Preview, Draw Preview, Design Preview, Cloud Preview
                              ↓
MONTHS 3-12  [Core Apps v0.5 Beta]
             Audio v0.5 → Draw v0.5 → Cloud Launch (paid tiers) → Design v0.5
             Linux support: v0.5-v1.0 for all apps
                              ↓
MONTHS 12-24 [Video, Animation, Multi-Platform]
             Video v0.5 → iPad (Draw, Animate, Design) → Web (Design, Score)
             Animate v0.5 → Mobile (Draw, Animate, Audio Mobile)
             v1.0 stable releases: Audio, Draw, Design
                              ↓
MONTHS 24-36 [Completion & Ecosystem]
             Score v0.5 → Design v2.0 (Layout + Library) → Real-time Collab
             Plugin Marketplace → v1.0 stable: Video, Animate, Score
```

---

## 14. Why Now? Why Boojy?

### The Timing Is Right

**2025 is the perfect moment for Boojy Suite:**

✅ **Adobe fatigue:** Creators are tired of £660/year subscriptions  
✅ **Open-source momentum:** Blender, Krita, Kdenlive prove free tools can compete  
✅ **AI acceleration:** Human+AI development makes solo/small-team ambitious projects feasible  
✅ **Creator economy boom:** Millions of YouTubers, TikTokers, indie artists need affordable tools  
✅ **Privacy concerns:** Users want tools that don't spy on them

### What Makes Boojy Different

**Not just "free Adobe"—Boojy is something new:**

- **Unified ecosystem:** Apps talk to each other (Audio ↔ Draw ↔ Design ↔ Cloud)
- **Hobbyist-first:** GarageBand/iMovie-level approachability, not pro intimidation
- **Ethical foundation:** No dark patterns, no data exploitation, transparent finances
- **Community ownership:** Open-source means Boojy outlives any single developer
- **Integrated platform:** Buddy Music closes the loop (create → publish → earn)

---

## 15. Mission Summary

> **Boojy exists to make creativity open again.**
> 
> We're building a complete creative suite that respects its users, values independence, and reinvests every bit of support back into the tools themselves.
> 
> No subscriptions. No ads. No tracking.  
> Just pure creativity—for everyone.

---

## 16. Get Involved

**Download apps:**

- **Website:** boojy.org/downloads (all platforms)
- **GitHub:** github.com/boojyorg (direct downloads + source code after v1.0)
- **App Store:** iOS/iPadOS apps (completely free)
- **Play Store:** Android apps (completely free)
- **No ads, no in-app purchases** (except optional Boojy Cloud subscriptions)

**Follow development:**

- Website: boojy.org _(live now!)_
- YouTube: @Boojy _(monthly devlogs starting Month 4)_
- GitHub: github.com/boojyorg _(public after Preview)_
- X/Twitter: @boojyorg _(progress updates)_

**Support the project:**

- Subscribe to Boojy Cloud (launching Month 10)
- Donate: buymeacoffee.com/boojy
- Test early versions (email: [your email])

**Join the community:**

- GitHub Discussions (after Preview)
- Discord (once 1,000 active users)

---

**Built by creators, for creators.**

**– Tyr Bujac, Founder**  
**Boojy Development**

---

**End of Vision Document**
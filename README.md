# Dhakagency (ঢাকা এজেন্সি)
### *Purveyors of Bespoke Web Craftsmanship & Commerce*

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Site-black?style=for-the-badge&logo=vercel)](https://dhaka-agency.vercel.app)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Mirror-blue?style=for-the-badge&logo=github)](https://robin-ibn-nur.github.io/dhaka-agency/)
[![Next.js 14](https://img.shields.io/badge/Next.js%2014-App%20Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

Inspired by early 1900s Old Dacca letterpress printing houses, silent cinema nitrate picture houses, and vintage hand-cranked Bioscopes (বায়োস্কোপ).

---

## 🌐 Live Deployments

| Platform | Status | URL |
| :--- | :--- | :--- |
| ⚡ **Vercel (Primary Production)** | Active | **[https://dhaka-agency.vercel.app](https://dhaka-agency.vercel.app)** |
| 🌐 **GitHub Pages (Mirror)** | Active | **[https://robin-ibn-nur.github.io/dhaka-agency/](https://robin-ibn-nur.github.io/dhaka-agency/)** |
| 💻 **GitHub Repository** | Public | **[https://github.com/Robin-Ibn-Nur/dhaka-agency](https://github.com/Robin-Ibn-Nur/dhaka-agency)** |

---

## ✦ Aesthetic & Architectural Philosophy

* **Epoch Inspiration:** Old Dacca (Wiseghat, Victoria Park, Babubazar, Ahsan Manzil) circa 1904–1912 meets modern 2026 high-performance digital engineering.
* **Palette:**
  - **Cinema Crimson Red:** `#E31E24` (Wax seals, active states, rubber stamps)
  - **Deep Ink Black:** `#1A1A1A` and `#0E0E0E` (Letterpress typography, sprocket borders)
  - **Aged Parchment/Newsprint:** `#F3EFE6` (Base), `#FAF7EE` (Cards), `#E5DEC9` (Borders)
  - **Telegram Red Ink:** `#8B1E1E` (Postmark seals & telegraph lines)
  - **Brass Accents:** `#C5A059` (Metallic fixtures & bezels)

---

## ✦ Typography Stack & Ink Bleed Engine

- **Headlines, Titles & Masthead:** `Old Newspaper Font` by Martin Steiner — Authentic eroded vintage newspaper letterpress type.
- **Editorial Body Copy:** `EB_Garamond` (`font-body`) — Classical legible book typeset.
- **Bengali Accents & Mottos:** `Noto_Serif_Bengali` (`font-bengali`) — Editorial Old Dacca literary styling.
- **English Display Accent:** `IM_Fell_English` (`font-headline`) — 17th/18th-century antique Fell types with rough punch-cut borders.
- **Telegrams, Metadata & Ticket Stubs:** `Courier_Prime` (`font-mono`) — Strike typewriter mechanical styling.

### ✦ Ink Bleed Filters
- `.ink-bleed`: Uses SVG turbulence (`feTurbulence`) and displacement (`feDisplacementMap`) to realistically bleed ink into fibrous newsprint.
- `.ink-bleed-heavy`: High-intensity ink saturation and threshold transfer (`feComponentTransfer`) for authentic rubber postmarks, wax stamps, and ticket headers.

---

## ✦ Single-Page Journey & Components

1. **Vintage Masthead & Navigation (`Header.tsx`):**
   - Top Gazette Dateline: *"Old Dacca • Bengal Presidency • Est. Digital Era • Vol. XXIV No. 1"*.
   - Stylized **DA** letterpress monogram and official Dhaka Agency logo.
   - **Silent Film Mode Switch:** Real-time 1900s nitrate film flicker, amber sepia tint, scratches, and Web Audio API synthesized projector motor hum and shutter clicks.
   - Mobile fold-out dispatch drawer.

2. **Act I: The Grand Marquee Hero (`Hero.tsx`):**
   - Interactive 3D vintage globe with tactile drag controls and authentic marked Dhaka location.
   - Headline: *"Purveyors of Bespoke Web Craftsmanship & Commerce"*.
   - Primary Brass and Wax-Sealed Action Buttons (*"Examine Bioscope Reels"* & *"Send Telegraph"*).

3. **Act II: The Bioscope Reels of Digital Craft (`Services.tsx`):**
   - Interactive Splide carousel with silent film slide cards, perforation borders, and archival sepia photographs:
     1. **Antique Bioscope Experience** (*বায়োস্কোপ প্রদর্শনী*)
     2. **Letterpress Publications & WordPress** (*ছাপাখানা ও প্রকাশনা*)
     3. **Shopify Merchant Storefronts** (*বাণিজ্য ও বিপণনকেন্দ্র*)
     4. **Full-Stack Web Architecture** (*আধুনিক কারিগরি অবকাঠামো*)
     5. **Digital Telegraph & Growth Marketing** (*তারবার্তা ও সংযোগ*)
     6. **High-Speed Clockwork Optimization** (*গতি ও নির্ভুল পরিচালনা*)
     7. **Bespoke Artisan Engineering** (*নকশা ও শিল্পকর্ম*)
   - Detailed dossier inspection modal with full deliverables and specifications.

4. **Act III: The Picture Gallery / Now Showing (`Portfolio.tsx`):**
   - 20th-century exhibition lobby cards with ornate double-line borders (`border-double border-4 border-[#1A1A1A]`).
   - Monospaced client metadata (`Courier_Prime`) and verified telemetry metrics.
   - **Archival Dossier Modal (`CaseStudyModal.tsx`):** Detailed Challenge, Craftsmanship, Outcome breakdown, verified telemetry badges, and rubber stamp: *"VERIFIED ARCHIVE / সত্যায়িত"*.

5. **Act IV: The Telegraph Office & Box Office (`Contact.tsx`):**
   - **The Royal Telegram Form:** Aged yellow dispatch form with red postal lines (`telegram-lines`). Transmitting provides a stamped dispatch receipt (`№ TEL-XXXX-DACCA`).
   - **Perforated Admit-One Ticket Stub:** Circular perforated cutouts, dashed fold line, serial `№ 1904-DA`, and 1-on-1 strategy call booking.
   - **Ticket Booking Modal (`TicketModal.tsx`):** Instant seat reservation, time slot selection, and confetti-stamped confirmation.
   - **Quick Wire Dispatches:** Direct email, WhatsApp cable, and physical Wiseghat postmarker.

6. **Colophon & Footer (`Footer.tsx`):**
   - Ornamental divider (`❖ ✦ ❖`).
   - Newspaper copyright and colophon notes.
   - *"Return to Top of the Reel ↑"* brass button.

---

## ✦ Getting Started

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To create an optimized production build:

```bash
npm run build
npm run start
```

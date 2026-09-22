# Dhakagency (ঢাকা এজেন্সি)
### *Purveyors of Bespoke Web Craftsmanship & Commerce*

Inspired by early 1900s Old Dacca, silent cinema picture houses, and vintage hand-cranked Bioscopes (বায়োস্কোপ).

---

## ✦ Aesthetic & Architectural Philosophy

* **Epoch Inspiration:** Old Dacca (Wiseghat, Victoria Park, Babubazar, Ahsan Manzil) circa 1904–1912 meets modern 2026 digital engineering.
* **Palette:**
  - **Cinema Crimson Red:** `#E31E24` (Wax seals, active states, rubber stamps)
  - **Deep Ink Black:** `#1A1A1A` and `#0E0E0E` (Letterpress typography, sprocket borders)
  - **Aged Parchment/Newsprint:** `#F3EFE6` (Base), `#FAF7EE` (Cards), `#E5DEC9` (Borders)
  - **Telegram Red Ink:** `#8B1E1E` (Postmark seals & telegraph lines)
  - **Brass Accents:** `#C5A059` (Metallic fixtures & bezels)

---

## ✦ Typography Stack (`next/font/google`) & Ink Bleed Engine

- **Distressed Ink Bleed Font:** `Special_Elite` (`font-inkbleed`) — Authentic weathered type with microscopic edge spread and ink traps.
- **Organic Ink-Soaked Serif:** `Averia_Serif_Libre` (`font-inkbleed-serif`) — Softened letterpress serifs with natural fluid ink absorption.
- **English Display/Headings:** `IM_Fell_English` (`font-headline`) — 17th/18th-century antique Fell types with rough punch-cut borders.
- **Bengali Accents & Mottos:** `Noto_Serif_Bengali` (`font-bengali`) — Editorial Old Dacca literary styling.
- **Editorial Body:** `EB_Garamond` (`font-body`) — Classical book types.
- **Telegrams, Metadata & Ticket Stubs:** `Courier_Prime` (`font-mono`) — Strike typewriter mechanical styling.

### ✦ Ink Bleed Filters
- `.ink-bleed`: Uses SVG turbulence (`feTurbulence`) and displacement (`feDisplacementMap`) to realistically bleed ink into the fibrous newsprint background.
- `.ink-bleed-heavy`: High-intensity ink saturation and threshold transfer (`feComponentTransfer`) for authentic rubber postmarks, wax stamps, and ticket headers.

---

## ✦ Single-Page Journey & Components

1. **Vintage Masthead & Navigation (`Header.tsx`):**
   - Top Gazette Dateline: *"Old Dacca • Bengal Presidency • Est. Digital Era • Vol. XXIV No. 1"*.
   - Stylized **DA** letterpress monogram and bilingual logotype.
   - **Silent Film Mode Switch:** Real-time 1900s nitrate film flicker, amber sepia tint, scratches, and Web Audio API synthesized projector motor hum and shutter clicks.
   - Mobile fold-out dispatch drawer.

2. **Act I: The Grand Marquee Hero (`Hero.tsx`):**
   - Bengali Lead Motto: *"ডিজিটাল কারিগরির আধুনিক বায়োস্কোপ"*.
   - Headline: *"Purveyors of Bespoke Web Craftsmanship & Commerce"*.
   - **Interactive Bioscope Viewer:** Hand-cranked clockwork mechanism with interlocking animated SVG gears. Click *"Crank Bioscope Reel ↻"* to rotate the clockwork gears and transition vintage glass slides with audio feedback.
   - Primary Brass and Wax-Sealed Action Buttons.
   - Antique hand-drawn pointing manicule (*☞ Crank the Reel to Scroll ☜*).

3. **Act II: The Bioscope Reels (`Services.tsx`):**
   - Four vintage silent film slide cards with sprocket perforation borders:
     1. **Shopify Storefronts** (*মুদ্রণ ও বাণিজ্য*)
     2. **WordPress Mastery** (*ওয়েব প্রকাশনা*)
     3. **Custom Web Architecture** (*আধুনিক কারিগরি*)
     4. **Digital Marketing & Growth** (*জনসংযোগ ও প্রচার*)
   - Interactive hover reveals animated antique stamp: *"FINE CRAFT • প্রথম শ্রেণী"*.
   - Clicking *"Commission This Reel"* pre-populates the telegram dispatch form.

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
   - *"Return to Top of the Reel ↑"* crank button.

---

## ✦ Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To create an optimized production build:

```bash
npm run build
npm run start
```

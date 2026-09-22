import { ServiceItem, PortfolioItem } from "@/types";

export const GAZETTE_HEADER = {
  dateline: "Old Dacca • Bengal Presidency • Est. Digital Era • Vol. XXIV No. 1",
  taglineBengali: "ডিজিটাল কারিগরির আধুনিক বায়োস্কোপ",
  taglineEnglish: "Purveyors of Bespoke Web Craftsmanship & Commerce",
  subtext:
    "Hand-crafting custom Shopify storefronts, editorial WordPress publications, and robust web applications for ambitious modern merchants.",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "shopify-storefronts",
    reelNumber: "REEL 01",
    categoryBengali: "মুদ্রণ ও বাণিজ্য",
    categoryEnglish: "Commerce",
    title: "Shopify Storefronts",
    subtitleBengali: "উচ্চ রূপান্তরশীল কাস্টম ই-কমার্স কারিগরি",
    description:
      "High-converting custom theme engineering, bespoke Liquid craftsmanship, checkout optimization, and tailored storefront architecture engineered to turn curious voyeurs into lifelong patrons.",
    deliverables: [
      "Bespoke Liquid & Hydrogen Theme Engineering",
      "Cart Drawer & Checkout Conversion Funnels",
      "High-Volume Catalog Optimization (<700ms LCP)",
      "Omnichannel ERP & Inventory Integrations",
    ],
    icon: "ShoppingBag",
    badge: {
      bengali: "প্রথম শ্রেণী",
      english: "FINE CRAFT",
    },
    actQuote: "“Like the finest silk weavers of Babubazar, every line of Liquid code is tightly spun for royal commerce.”",
  },
  {
    id: "wordpress-mastery",
    reelNumber: "REEL 02",
    categoryBengali: "ওয়েব প্রকাশনা",
    categoryEnglish: "Publishing",
    title: "WordPress Mastery",
    subtitleBengali: "সম্পাদকীয় শ্রেষ্ঠত্ব ও উচ্চগতি প্রকাশনা পরিকাঠামো",
    description:
      "Bespoke headless and traditional WordPress architecture, editorial publication engines, speed optimization, and custom plugins tailored for literary journals, high-volume news presses, and modern enterprises.",
    deliverables: [
      "Custom Gutenberg Blocks & Editorial Workflows",
      "Headless WP via WPGraphQL & Next.js Frontends",
      "High-Concurrency Edge Caching (Redis/Varnish)",
      "Strict Security Hardening & Zero-Bloat Plugins",
    ],
    icon: "Feather",
    badge: {
      bengali: "অভিজাত মুদ্রণ",
      english: "PRESS ROYAL",
    },
    actQuote: "“From the woodblock letterpress to the headless cloud — editorial power restored to the publisher's inkwell.”",
  },
  {
    id: "custom-web-architecture",
    reelNumber: "REEL 03",
    categoryBengali: "আধুনিক কারিগরি",
    categoryEnglish: "Engineering",
    title: "Custom Web Architecture",
    subtitleBengali: "দৃঢ় পূর্ণাঙ্গ ওয়েব ফ্রেমওয়ার্ক ও জটিল অ্যাপ্লিকেশন",
    description:
      "Tailored full-stack applications (Next.js/React/Node), resilient API integrations, relational schema design, and cloud architectures built for speed, durability, and mission-critical reliability.",
    deliverables: [
      "Next.js App Router & TypeScript Architecture",
      "Robust Serverless APIs & Database Schema (Postgres/Redis)",
      "Real-time Dashboards & Interactive Interfaces",
      "Automated CI/CD Test & Deployment Pipelines",
    ],
    icon: "Cpu",
    badge: {
      bengali: "কারিগরির নিখুঁত মান",
      english: "PRECISION ENGINE",
    },
    actQuote: "“Gears, sprockets, and asynchronous workers interlocking with Swiss-watch precision beneath the chassis.”",
  },
  {
    id: "digital-marketing-growth",
    reelNumber: "REEL 04",
    categoryBengali: "জনসংযোগ ও প্রচার",
    categoryEnglish: "Growth",
    title: "Digital Marketing & Growth",
    subtitleBengali: "বিজ্ঞাপন, অনুসন্ধান কৌশল ও রূপান্তর পরিবর্ধন",
    description:
      "Technical search engine optimization (SEO), performance marketing across modern telegraphic corridors, revenue attribution modeling, and conversion funnel calibration.",
    deliverables: [
      "Technical SEO & Structured Schema Architecture",
      "High-ROAS Paid Acquisition (Search & Social)",
      "Conversion Rate Optimization (CRO) & Heatmap Auditing",
      "Server-Side Google Analytics 4 & CAPI Attribution",
    ],
    icon: "TrendingUp",
    badge: {
      bengali: "সর্বব্যাপী প্রচার",
      english: "IMPERIAL REACH",
    },
    actQuote: "“Sounding the brass bugle across every riverport and trading post until your marquee is overflowing.”",
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "retenser-commerce",
    reelNumber: "REEL 01",
    title: "The Bengal Silk Merchant Emporium",
    bengaliTitle: "রেশম সওদাগরের ডিজিটাল মহাফেজখানা",
    client: "Retenser / Heyva Co.",
    spec: "Shopify Plus • Custom Liquid • Hydrogen Cache • Tailwind",
    period: "Exhibition 1904 / Digital Edition 2026",
    category: "Shopify E-Commerce Flagship",
    summary:
      "A high-volume lifestyle & apparel flagship store engineered with bespoke multi-currency checkouts, bespoke lookbook grids, and sub-600ms load times across five continents.",
    detailedCase: {
      challenge:
        "The merchant was trapped under sluggish third-party Shopify apps, suffering a 4.8s mobile load time and a severe checkout abandonment rate on mobile devices.",
      craftsmanship:
        "We ripped out 16 bloated scripts, engineered a clean, hand-crafted Liquid theme with vanilla JavaScript web components, and implemented a headless drawer with optimistic cart updates.",
      outcome:
        "Mobile conversion leaped by +184%, average order value expanded by 26%, and server response dropped to 420ms globally.",
    },
    metrics: [
      { label: "Conversion Lift", value: "+184%" },
      { label: "First Contentful Paint", value: "580ms" },
      { label: "Quarterly Volume", value: "$4.2M+" },
    ],
    stampLabel: "VERIFIED ARCHIVE",
    badgeBengali: "সত্যায়িত মহাফেজখানা",
    accentQuote: "“Sales surged like floodwaters on the Buriganga once the new storefront cast off its moorings.”",
  },
  {
    id: "dacca-gazette-editorial",
    reelNumber: "REEL 02",
    title: "The Old Dacca Chronicle & Gazetteers",
    bengaliTitle: "ঢাকা সমাচার ও সাহিত্য দর্পণ",
    client: "Bengal Literary Syndicate",
    spec: "Headless WordPress • Next.js App Router • GraphQL • Edge Redis",
    period: "Daily Gazette Edition",
    category: "WordPress Editorial Portal",
    summary:
      "A high-traffic cultural publication handling 1.2M monthly dispatches with instant typography rendering, dual-script search, and an interactive historical archive.",
    detailedCase: {
      challenge:
        "A legacy media archive containing 40,000 digitized articles was collapsing under viral spikes, causing database lockups during evening breaking dispatches.",
      craftsmanship:
        "Constructed a headless decoupling: WordPress serving strictly as the editorial cockpit via WPGraphQL, paired with a Next.js edge-rendered reader experience cached on global CDN points.",
      outcome:
        "The site achieved a 99.99% uptime during breaking news dispatches with 99 Lighthouse performance and zero editorial friction.",
    },
    metrics: [
      { label: "Monthly Readers", value: "1.2M" },
      { label: "Lighthouse Score", value: "99 / 100" },
      { label: "Cache Hit Ratio", value: "97.4%" },
    ],
    stampLabel: "EXHIBITION HONOUR",
    badgeBengali: "বিদ্যোৎসাহিনী পুরস্কার",
    accentQuote: "“A publication as swift as the royal telegraph wire, preserving editorial dignity for the ages.”",
  },
  {
    id: "delta-fleet-system",
    reelNumber: "REEL 03",
    title: "Delta Riverway Cargo & Transit Terminal",
    bengaliTitle: "বুড়িগঙ্গা নদীপথ পণ্য পরিভ্রমণ ব্যবস্থা",
    client: "Dacca Riverway Logistics Co.",
    spec: "Full-Stack TypeScript • React 18 • Node.js • PostgreSQL • WebSockets",
    period: "Maritime Commercial Registry",
    category: "Custom Web Architecture",
    summary:
      "An industrial logistics management platform tracking vessel waybills, wharf manifests, and automated river customs clearance in real time.",
    detailedCase: {
      challenge:
        "Wharf administrators were operating on paper registers and fragile spreadsheets, leading to dispatch delays and missing cargo reconciliation.",
      craftsmanship:
        "Developed a bespoke mission-critical web application featuring offline-ready service workers, WebSocket telemetry, and an ironclad PostgreSQL ledger with audit trails.",
      outcome:
        "Vessel clearance time diminished from 4 hours to 8 minutes; 42,000 manifests processed seamlessly per quarter without a single lost transmission.",
    },
    metrics: [
      { label: "Daily Transits", value: "42,000" },
      { label: "Clearance Speed", value: "8 Minutes" },
      { label: "Data Integrity", value: "100.00%" },
    ],
    stampLabel: "PATENTED SYSTEM",
    badgeBengali: "সরকারি সনদপ্রাপ্ত",
    accentQuote: "“Built with the steel of an ocean steamer and the precision of a Swiss chronometer.”",
  },
];

export const BIOSCOPE_SLIDES = [
  {
    id: 1,
    titleBengali: "আহসান মঞ্জিলের প্রাঙ্গণে প্রথম আলোকচ্ছটা",
    titleEnglish: "Buriganga Riverfront & Ahsan Manzil",
    year: "Circa 1904",
    caption:
      "Steam launches and bajra boats docking at Wiseghat while the city prepares for the electric era.",
    detail: "Hand-painted glass slide • Plate No. 04",
  },
  {
    id: 2,
    titleBengali: "নবাব স্টেটসম্যান বায়োস্কোপ প্রদর্শনী",
    titleEnglish: "The Travelling Bioscope Comes to Dacca",
    year: "Circa 1908",
    caption:
      "Enraptured crowds gather in Victoria Park as the brass-cranked bioscope brings moving pictures to the populace.",
    detail: "35mm Nitrate Negative • Reel Registry No. 12",
  },
  {
    id: 3,
    titleBengali: "ওয়াইজঘাট ইলেকট্রিক প্রেস ও টেলিগ্রাফ",
    titleEnglish: "The Electric Press House of Wiseghat",
    year: "Circa 1912",
    caption:
      "Lead types, heavy linotypes, and telegraph cables sending trade dispatches across the British Commonwealth.",
    detail: "Letterpress Specimen • Type Foundry Dacca",
  },
  {
    id: 4,
    titleBengali: "একবিংশ শতাব্দীর আধুনিক ডিজিটাল সওদাগর",
    titleEnglish: "The Modern Merchant Fleet of Dhakagency",
    year: "Anno 2026",
    caption:
      "Carrying the proud letterpress ethos of Old Dacca into world-class Shopify, WordPress, and custom digital vessels.",
    detail: "Full-Stack Precision • Ready for Global Commerce",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dhakagency restored both grandeur and speed to our online catalog. The Shopify rebuild reduced our bounce rate by half on day one.",
    author: "K. R. Chowdhury",
    title: "Managing Director, Chowdhury Fine Silks",
    location: "Sadarghat & London",
  },
  {
    quote:
      "Their WordPress architecture withstood two million visitors during our centenary announcement without a flicker of downtime.",
    author: "Syed M. Ahsan",
    title: "Chief Editor, The Bengal Chronicle",
    location: "Old Dacca",
  },
  {
    quote:
      "The custom telemetry platform they built replaced months of manual wharf tallying with instantaneous digital precision.",
    author: "Captain A. T. Haque",
    title: "Harbour Master, Delta Freight Lines",
    location: "Narayanganj Wharves",
  },
];

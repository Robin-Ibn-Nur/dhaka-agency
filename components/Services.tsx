"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Splide from "@splidejs/splide";
import { motion, AnimatePresence } from "framer-motion";
import { Film, CheckCircle2, X } from "lucide-react";
import { playStampThud, playTelegraphClick } from "@/lib/sound";
import { assetUrl } from "@/lib/assets";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export interface ReelSlideItem {
  id: string;
  reelNumber: string;
  reelBengali: string;
  title: string;
  titleBengali: string;
  category: string;
  year: string;
  image: string;
  caption: string;
  description: string;
  serviceKey: string;
  spec: string;
  deliverables: string[];
  quote: string;
}

const SLIDER_REELS: ReelSlideItem[] = [
  {
    id: "reel-01",
    reelNumber: "REEL 01",
    reelBengali: "বায়োস্কোপ প্রদর্শনী",
    title: "Antique Bioscope Experience",
    titleBengali: "সিনেটোগ্রাফ বায়োস্কোপ ১৯০৪",
    category: "Interaction & Motion Physics",
    year: "১৯০৪",
    image: "/images/slider/slide-1.jpg",
    caption: "Cinematograph projectionist at Old Dacca celluloid theater",
    description:
      "Immersive animated web storytelling, bespoke drag mechanics, and tactile early cinema motion physics engineered for memorable brand theatre.",
    serviceKey: "Antique Bioscope Experience",
    spec: "60FPS Physics • Framer Motion • SVG Ink Bleed",
    deliverables: [
      "Custom 3D WebGL Spheres & Astrolabe Gauges",
      "Tactile Mouse Velocity & Momentum Physics",
      "Auditory Telegraph Feedback & Sound Synthesis",
      "Responsive Hardware-Accelerated Animation Pipelines",
    ],
    quote: "“The brass crank turns, the lamp ignites, and digital visitors are captivated by living motion picture art.”",
  },
  {
    id: "reel-02",
    reelNumber: "REEL 02",
    reelBengali: "ছাপাখানা ও প্রকাশনা",
    title: "Letterpress Publications & WordPress",
    titleBengali: "পুরাতন ঢাকা মুদ্রণযন্ত্র ও ছাপাখানা",
    category: "Editorial CMS & Headless WP",
    year: "১৮৬৮",
    image: "/images/slider/slide-2.jpg",
    caption: "Master typesetters composing lead movable metal type at Dacca Press",
    description:
      "High-velocity editorial publication engines, bespoke Gutenberg typography systems, and robust headless WordPress backends for modern pressrooms.",
    serviceKey: "WordPress Mastery",
    spec: "Custom Gutenberg • Headless WPGraphQL • Edge Caching",
    deliverables: [
      "Bespoke Gutenberg Editorial Block Systems",
      "Headless WP via Next.js & WPGraphQL Engines",
      "High-Concurrency Edge Caching (Redis/Varnish)",
      "Strict Security Hardening & Zero-Bloat Plugins",
    ],
    quote: "“From the lead woodblock letterpress to the headless cloud — editorial supremacy restored to the publisher's inkwell.”",
  },
  {
    id: "reel-03",
    reelNumber: "REEL 03",
    reelBengali: "বাণিজ্য ও নদীবন্দর",
    title: "Shopify Storefronts & Commerce",
    titleBengali: "বুড়িগঙ্গা বন্দর ও বাণিজ্য মহাফেজখানা",
    category: "E-Commerce & High Conversion",
    year: "১৯০৪",
    image: "/images/slider/slide-3.jpg",
    caption: "Merchants logging ledger transactions along the Sadarghat riverbank",
    description:
      "High-converting bespoke Shopify Plus theme engineering, custom Liquid templates, and frictionless global checkout pipelines built for high transaction volume.",
    serviceKey: "Shopify Storefronts",
    spec: "Sub-700ms LCP • Bespoke Liquid • Hydrogen Architecture",
    deliverables: [
      "Bespoke Liquid & Hydrogen Theme Engineering",
      "Slide-Out Cart Drawer & Upsell Conversion Funnels",
      "High-Volume Catalog Optimization (<700ms LCP)",
      "Omnichannel ERP, Warehouse & Inventory Integrations",
    ],
    quote: "“Like the storied merchant barges of the Buriganga, every line of Liquid code carries heavy cargo with supreme ease.”",
  },
  {
    id: "reel-04",
    reelNumber: "REEL 04",
    reelBengali: "টেলিগ্রাফ ও ডিসপ্যাচ",
    title: "Telegraphic Web Applications",
    titleBengali: "টেলিগ্রাফ বার্তা ও যোগাযোগ অফিস",
    category: "Full-Stack Web Architecture",
    year: "১৯০৪",
    image: "/images/slider/slide-4.jpg",
    caption: "Posts & Telegraphs dispatch room with Morse code switchboards",
    description:
      "Resilient Next.js App Router applications, secure transactional databases, real-time message pipes, and mission-critical cloud backends.",
    serviceKey: "Custom Web Architecture",
    spec: "Next.js 14 • Server Actions • TypeScript • PostgreSQL",
    deliverables: [
      "Next.js App Router & Full-Stack TypeScript Architecture",
      "Resilient Serverless APIs & Relational Database Schemas",
      "Real-Time Dashboards & Interactive Admin Interfaces",
      "Automated CI/CD Test & Zero-Downtime Deployment Pipelines",
    ],
    quote: "“Gears, sprockets, and asynchronous workers interlocking with Swiss-watch precision beneath the chassis.”",
  },
  {
    id: "reel-05",
    reelNumber: "REEL 05",
    reelBengali: "ঘড়ি নির্মাতা ও গতি",
    title: "Chronometer Speed & Performance",
    titleBengali: "সূক্ষ্ম ঘড়ি কারিগরি ও গতি অপ্টিমাইজেশন",
    category: "Core Web Vitals & SEO Tuning",
    year: "১৯০৪",
    image: "/images/slider/slide-5.jpg",
    caption: "Master horologist inspecting intricate brass chronometer escapement",
    description:
      "Sub-second load times, 99+ Google Lighthouse scores, server-side asset tree shaking, and precision database query optimizations.",
    serviceKey: "Digital Marketing & Growth",
    spec: "100/100 Core Web Vitals • Asset Tree-Shaking • Redis",
    deliverables: [
      "Technical Core Web Vitals Auditing & Optimization",
      "Edge-Cached API Responses & Static Generation",
      "Advanced Schema Markup & Technical Search Architecture",
      "Zero Cumulative Layout Shift (CLS) Guarantee",
    ],
    quote: "“Calibrated down to the millisecond — every escapement tooth polished for instant, effortless velocity.”",
  },
  {
    id: "reel-06",
    reelNumber: "REEL 06",
    reelBengali: "মসলিন ও জামদানি বয়ন",
    title: "Bespoke Jamdani Craft & Design",
    titleBengali: "ঐতিহ্যবাহী জামদানি ও মসলিন শিল্প",
    category: "Design System & Stencil Identity",
    year: "১৯০৪",
    image: "/images/slider/slide-6.jpg",
    caption: "Master weavers at antique wooden loom creating legendary Dhakai Muslin",
    description:
      "Bespoke typographic identities, custom stencil brand designs, tactile vintage UI components, and complete royal design systems.",
    serviceKey: "Custom Web Architecture",
    spec: "Shock Surgent Typography • Stencil Brand Identity • Tailored UI",
    deliverables: [
      "Complete Brand Design System & Component Library",
      "Tailored Typographic Hierarchies & Bengali Type Pairings",
      "Tactile Paper Grain, Wax Seal & Stamped Visual Assets",
      "Design-to-Code Precision with Strict Accessibility Standards",
    ],
    quote: "“Woven with the mythical thread of Bengal — subtle, delicate, yet enduring through centuries of scrutiny.”",
  },
  {
    id: "reel-07",
    reelNumber: "REEL 07",
    reelBengali: "নকশা ও মানচিত্রায়ন",
    title: "Architectural Blueprint & UX Strategy",
    titleBengali: "ঢাকা নগর মানচিত্র ও স্থাপত্য নকশা",
    category: "Information Architecture & Wireframes",
    year: "১৯০৪",
    image: "/images/slider/slide-7.jpg",
    caption: "Architectural draftsman surveying city grid and river routes in Old Dacca",
    description:
      "Rigorous customer journey mapping, structural wireframing, high-intent conversion rate audits, and strategic digital roadmaps.",
    serviceKey: "Shopify Storefronts",
    spec: "Customer Journey Mapping • CRO Audits • Wireframe Blueprints",
    deliverables: [
      "Comprehensive Digital Blueprint & Product Roadmap",
      "Conversion Rate Optimization (CRO) & Heatmap Auditing",
      "Information Architecture & High-Fidelity Wireframes",
      "Merchant User Testing & Usability Validation",
    ],
    quote: "“Before laying the first stone, the master architect surveys the terrain so the structure endures all tides.”",
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  const splideRef = useRef<HTMLDivElement | null>(null);
  const splideInstanceRef = useRef<Splide | null>(null);

  const [activeReelIndex, setActiveReelIndex] = useState<number>(0);
  const [selectedDossier, setSelectedDossier] = useState<ReelSlideItem | null>(null);

  // Initialize Splide Carousel with Ultra-Smooth Autoplay
  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      focus: "center",
      gap: "1.25rem",
      arrows: false,
      pagination: false,
      drag: true,
      keyboard: true,
      autoplay: true,
      interval: 3000,
      speed: 950,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      pauseOnHover: true,
      pauseOnFocus: true,
      resetProgress: false,
      breakpoints: {
        1380: {
          perPage: 3,
          gap: "1.1rem",
        },
        1100: {
          perPage: 2,
          focus: "center",
          gap: "1rem",
        },
        768: {
          perPage: 1,
          focus: "center",
          gap: "0.75rem",
          padding: { left: "10%", right: "10%" },
        },
        520: {
          perPage: 1,
          focus: "center",
          gap: "0.5rem",
          padding: { left: "5%", right: "5%" },
        },
      },
    });

    splide.on("mounted move", () => {
      setActiveReelIndex(splide.index);
    });

    splide.mount();
    splideInstanceRef.current = splide;

    return () => {
      try {
        splide.destroy();
      } catch (e) {
        // ignore on unmount
      }
    };
  }, []);

  // Controls Navigation
  const handlePrev = useCallback(() => {
    playTelegraphClick();
    splideInstanceRef.current?.go("<");
  }, []);

  const handleNext = useCallback(() => {
    playTelegraphClick();
    splideInstanceRef.current?.go(">");
  }, []);

  const handleCardClick = (reel: ReelSlideItem) => {
    playStampThud();
    setSelectedDossier(reel);
  };

  const handleSelectAndScroll = (serviceKey: string) => {
    playStampThud();
    onSelectService(serviceKey);
    setSelectedDossier(null);
  };

  return (
    <section
      id="services"
      className="section is--slider relative py-16 md:py-24 bg-[#14100C] text-[#FAF7EE] border-b-4 border-ink scroll-mt-12 overflow-hidden"
    >
      {/* Background Vintage Paper Grain & Film Haze */}
      <div className="absolute inset-0 parchment-grain-dense pointer-events-none opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(227, 30, 36, 0.08) 0%, rgba(0, 0, 0, 0.75) 85%)",
        }}
      />

      {/* Top Theatrical Proscenium Wave Arch */}
      <div className="slider__wave select-none pointer-events-none -mt-1 sm:-mt-2">
        <svg
          viewBox="0 0 804 50.167"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 text-[#F3EFE6]"
        >
          <path
            fill="currentColor"
            d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z"
          />
          {/* Authentic 1904 Engraved Arch Double-Rule */}
          <path
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1.8"
            d="M0,16.671c0,0,204.974,33.496,401.995,33.496C599.026,50.167,804,16.671,804,16.671"
          />
          <path
            fill="none"
            stroke="#DFBA74"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            d="M0,18.8c0,0,204.974,33.496,401.995,33.496C599.026,52.296,804,18.8,804,18.8"
          />
        </svg>
      </div>

      {/* Section Header */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center space-x-3 mb-2.5">
          <span className="h-0.5 w-10 bg-crimson" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-crimson font-bold">
            ACT II • দ্বিতীয় অঙ্ক
          </span>
          <span className="h-0.5 w-10 bg-crimson" />
        </div>

        <h2 className="font-newspaper old-newspaper-headline text-3xl sm:text-5xl md:text-6xl font-black text-[#FAF7EE] mb-3 tracking-tight letterpress-text">
          The Bioscope Reels of Digital Craft
        </h2>

        <p className="font-bengali text-lg sm:text-xl text-crimson font-bold mb-3 tracking-wide">
          বাণিজ্য, প্রকাশনা ও আধুনিক ওয়েব প্রযুক্তির সাতটি স্তম্ভ
        </p>

        <p className="font-body text-base sm:text-lg text-[#FAF7EE]/75 italic max-w-2xl mx-auto mb-5">
          Early 20th-century craftsmanship translated into high-conversion modern digital assets.
          Auto-sliding through the reels, or drag and use the brass controls below to inspect each reel.
        </p>

        {/* Live Reel Tracker Plaque */}
        <div className="inline-flex items-center space-x-3 bg-[#1A1A1A]/90 border border-[#DFBA74]/40 px-4 py-1.5 rounded text-xs font-mono">
          <Film className="w-3.5 h-3.5 text-crimson animate-pulse" />
          <span className="text-[#DFBA74] font-bold">
            SHOWING REEL {activeReelIndex + 1} OF {SLIDER_REELS.length}
          </span>
          <span className="text-[#FAF7EE]/40">•</span>
          <span className="text-[#FAF7EE]/80">
            {SLIDER_REELS[activeReelIndex]?.title}
          </span>
        </div>
      </div>

      {/* Main Splide Carousel Track Container */}
      <div className="container is--slider relative z-10 w-full px-0 sm:px-4 mb-8 sm:mb-12">
        <div ref={splideRef} className="splide">
          <div className="splide__track">
            <div className="splide__list">
              {SLIDER_REELS.map((reel, index) => {
                const isActive = activeReelIndex === index;

                return (
                  <div
                    key={reel.id}
                    className="splide__slide flex-shrink-0 cursor-pointer"
                    onClick={() => handleCardClick(reel)}
                  >
                    <div
                      className={`relative w-full h-[520px] sm:h-[580px] md:h-[620px] lg:h-[660px] xl:h-[700px] rounded-sm overflow-hidden border-4 transition-all duration-400 ease-out group ${
                        isActive
                          ? "border-crimson shadow-[0_0_25px_rgba(227,30,36,0.35),8px_8px_0px_0px_#1A1A1A]"
                          : "border-ink shadow-[6px_6px_0px_0px_#1A1A1A]"
                      }`}
                    >
                      {/* Top Silent Film Perforation Strip */}
                      <div className="absolute top-0 left-0 right-0 h-6 z-20 bg-[#0E0E0E] filmstrip-sprockets-x border-b-2 border-ink/80 opacity-90" />

                      {/* Archival 1904 Sepia Photograph */}
                      <div className="relative w-full h-full overflow-hidden bg-[#18130E]">
                        <img
                          src={assetUrl(reel.image)}
                          alt={reel.title}
                          loading={index < 3 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Film Haze & Sepia Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
                      </div>

                      {/* Vintage Brass Corner Filigree Marks */}
                      <span className="absolute top-8 left-3 text-xs text-[#DFBA74] font-mono pointer-events-none select-none">
                        ⌜
                      </span>
                      <span className="absolute top-8 right-3 text-xs text-[#DFBA74] font-mono pointer-events-none select-none">
                        ⌝
                      </span>
                      <span className="absolute bottom-3 left-3 text-xs text-[#DFBA74] font-mono pointer-events-none select-none z-20">
                        ⌞
                      </span>
                      <span className="absolute bottom-3 right-3 text-xs text-[#DFBA74] font-mono pointer-events-none select-none z-20">
                        ⌟
                      </span>

                      {/* Top Badges Row */}
                      <div className="absolute top-8 left-4 right-4 z-20 flex items-center justify-between">
                        {/* Reel Badge */}
                        <div className="flex items-center space-x-1.5 bg-[#0E0E0E]/90 border border-crimson/80 px-2.5 py-1 rounded shadow-md">
                          <span className="w-2 h-2 rounded-full bg-crimson animate-ping" />
                          <span className="font-mono text-xs font-bold text-crimson uppercase tracking-wider">
                            {reel.reelNumber}
                          </span>
                          <span className="text-[#DFBA74] text-xs font-bengali font-bold">
                            • {reel.reelBengali}
                          </span>
                        </div>

                        {/* Year & Classification Tag */}
                        <span className="font-mono text-[10px] sm:text-xs text-[#FAF7EE] bg-ink/80 px-2 py-0.5 border border-[#DFBA74]/40 font-bold uppercase tracking-wider">
                          № {reel.year}
                        </span>
                      </div>

                      {/* Bottom Parchment Caption Plaque */}
                      <div className="absolute bottom-6 left-0 right-0 z-20 p-4 sm:p-5 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/95 to-transparent text-[#FAF7EE]">
                        <div className="flex items-center space-x-2 text-[#DFBA74] font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-1.5">
                          <span className="px-1.5 py-0.2 bg-crimson text-white rounded font-bold text-[9px]">
                            ACT II
                          </span>
                          <span className="truncate">{reel.category}</span>
                        </div>

                        {/* Bengali Headline */}
                        <h4 className="font-bengali text-base sm:text-lg text-crimson font-bold leading-tight mb-1">
                          {reel.titleBengali}
                        </h4>

                        {/* English Title in Shock Surgent */}
                        <h3 className="font-newspaper text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7EE] leading-snug mb-2 group-hover:text-[#DFBA74] transition-colors">
                          {reel.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="font-body text-xs sm:text-sm text-[#FAF7EE]/80 italic line-clamp-2 mb-3">
                          {reel.description}
                        </p>

                        {/* Card Action Row */}
                        <div className="flex items-center justify-between pt-2 border-t border-[#FAF7EE]/15">
                          <span className="font-mono text-[10px] text-[#DFBA74]/90 truncate max-w-[65%]">
                            ⚙ {reel.spec}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(reel);
                            }}
                            className="font-mono text-xs font-bold uppercase tracking-wider text-crimson group-hover:text-white flex items-center space-x-1 hover:underline"
                          >
                            <span>Inspect Dossier</span>
                            <span className="font-headline text-sm">☞</span>
                          </button>
                        </div>
                      </div>

                      {/* Bottom Silent Film Perforation Strip */}
                      <div className="absolute bottom-0 left-0 right-0 h-6 z-20 bg-[#0E0E0E] filmstrip-sprockets-x border-t-2 border-ink/80 opacity-90" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Theatrical Proscenium Wave Arch (Rotated 180deg) */}
      <div className="slider__wave is--bottom select-none pointer-events-none -mb-1 sm:-mb-2">
        <svg
          viewBox="0 0 804 50.167"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 text-[#F3EFE6]"
        >
          <path
            fill="currentColor"
            d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z"
          />
          <path
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1.8"
            d="M0,16.671c0,0,204.974,33.496,401.995,33.496C599.026,50.167,804,16.671,804,16.671"
          />
          <path
            fill="none"
            stroke="#DFBA74"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            d="M0,18.8c0,0,204.974,33.496,401.995,33.496C599.026,52.296,804,18.8,804,18.8"
          />
        </svg>
      </div>

      {/* Circular Vintage Controls (Webflow T.Ricks Signature Prev/Next Arrows) */}
      <div className="controls-wrap mt-4 sm:mt-6 mb-2">
        {/* Prev Slide Control */}
        <button
          type="button"
          onClick={handlePrev}
          className="control-btn group mx-3.5 focus:outline-none"
          title="Previous Bioscope Reel"
          aria-label="Previous Slide"
        >
          <div className="control-btn__fill" />
          <svg viewBox="0 0 24 18" className="w-5 h-4">
            <path
              fill="currentColor"
              d="M23.999,8H5.481c5.009-2.91,6.349-7.311,6.416-7.548L9.976-0.102C9.9,0.156,8.03,6.213-0.073,8.024L0.146,9 l-0.218,0.976C8.03,11.787,9.9,17.844,9.976,18.101l1.922-0.554C11.83,17.31,10.49,12.91,5.481,10h18.518V8z"
            />
          </svg>
        </button>

        {/* Center Vintage Indicator Stamp */}
        <div className="font-mono text-xs text-[#DFBA74] border border-[#DFBA74]/30 px-3 py-1 rounded bg-[#1A1A1A]/80 flex items-center space-x-2">
          <span>{activeReelIndex + 1}</span>
          <span className="text-crimson font-bold">/</span>
          <span>{SLIDER_REELS.length}</span>
        </div>

        {/* Next Slide Control (Flipped 180deg) */}
        <button
          type="button"
          onClick={handleNext}
          className="control-btn group mx-3.5 focus:outline-none"
          title="Next Bioscope Reel"
          aria-label="Next Slide"
        >
          <div className="control-btn__fill" />
          <svg viewBox="0 0 24 18" className="w-5 h-4 rotate-180">
            <path
              fill="currentColor"
              d="M23.999,8H5.481c5.009-2.91,6.349-7.311,6.416-7.548L9.976-0.102C9.9,0.156,8.03,6.213-0.073,8.024L0.146,9 l-0.218,0.976C8.03,11.787,9.9,17.844,9.976,18.101l1.922-0.554C11.83,17.31,10.49,12.91,5.481,10h18.518V8z"
            />
          </svg>
        </button>
      </div>

      {/* Reel Specification Dossier Modal (Detailed Inspection) */}
      <AnimatePresence>
        {selectedDossier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#FAF7EE] text-[#1A1A1A] border-4 border-ink p-6 sm:p-8 shadow-[10px_10px_0px_0px_#1A1A1A] rounded-sm max-h-[90vh] overflow-y-auto"
            >
              {/* Top Perforation Header */}
              <div className="h-5 w-full filmstrip-sprockets-x bg-[#1A1A1A] mb-5 rounded-t" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedDossier(null)}
                className="absolute top-8 right-8 p-1.5 border border-ink hover:bg-crimson hover:text-white transition-colors"
                title="Close Dossier"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dossier Header */}
              <div className="border-b-2 border-ink pb-4 mb-5">
                <div className="flex items-center space-x-2 font-mono text-xs text-crimson font-bold uppercase tracking-wider mb-1">
                  <span>{selectedDossier.reelNumber}</span>
                  <span>•</span>
                  <span>{selectedDossier.category}</span>
                  <span>•</span>
                  <span>ESTD {selectedDossier.year}</span>
                </div>
                <h3 className="font-newspaper text-2xl sm:text-3xl font-bold text-ink">
                  {selectedDossier.title}
                </h3>
                <p className="font-bengali text-lg text-crimson font-bold mt-1">
                  {selectedDossier.titleBengali}
                </p>
              </div>

              {/* Photo & Caption */}
              <div className="relative mb-5 border-2 border-ink overflow-hidden max-h-56">
                <img
                  src={assetUrl(selectedDossier.image)}
                  alt={selectedDossier.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-2 bg-[#1A1A1A] text-[#FAF7EE] font-mono text-[11px] italic">
                  Photograph: {selectedDossier.caption}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-crimson pl-4 py-1 italic font-body text-base text-ink/80 mb-5 bg-crimson/5">
                {selectedDossier.quote}
              </blockquote>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink mb-3">
                  Verified Deliverables & Specifications:
                </h4>
                <div className="space-y-2">
                  {selectedDossier.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm font-body">
                      <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                      <span className="text-ink/90">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-ink">
                <button
                  onClick={() => setSelectedDossier(null)}
                  className="px-4 py-2 border border-ink font-mono text-xs font-bold uppercase tracking-wider hover:bg-ink/10"
                >
                  Return to Reels
                </button>
                <button
                  onClick={() => handleSelectAndScroll(selectedDossier.serviceKey)}
                  className="wax-seal-button px-6 py-2.5 border-2 border-ink font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2"
                >
                  <span>Commission this Craft</span>
                  <span className="font-headline text-base">☞</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

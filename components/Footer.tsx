"use client";

import React from "react";
import { ArrowUp, Film, Sparkles, Compass } from "lucide-react";
import { playTelegraphClick, playStampThud } from "@/lib/sound";
import { assetUrl } from "@/lib/assets";

export default function Footer() {
  const scrollToTop = () => {
    playStampThud();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0E0E0E] text-[#FAF7EE] border-t-4 border-ink pt-14 pb-12 overflow-hidden">
      {/* Background Subtle Woodblock Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none parchment-grain-dense" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Antique Ornamental Border Divider */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className="h-px w-16 sm:w-32 bg-stone-700" />
          <span className="text-crimson font-mono text-base tracking-widest uppercase">
            ❖ ✦ ❖
          </span>
          <span className="h-px w-16 sm:w-32 bg-stone-700" />
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Monogram Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              {/* Official Dhaka Agency Logo */}
              <div className="h-16 sm:h-20 w-auto flex items-center border-2 border-[#DFBA74] bg-white p-1 shadow-[2px_2px_0px_0px_#E31E24] rounded-sm overflow-hidden flex-shrink-0">
                <img
                  src={assetUrl("/dhaka-agency-logo.jpg")}
                  alt="Dhaka Agency Logo"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div>
                <span className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF7EE] block">
                  Dhakagency
                </span>
                <span className="font-bengali text-xs text-crimson font-semibold">
                  ঢাকা এজেন্সি • পুরান ঢাকার ডিজিটাল বায়োস্কোপ
                </span>
              </div>
            </div>

            <p className="font-body text-base text-stone-300 italic max-w-md leading-relaxed">
              Crafting bespoke digital storefronts, publication engines, and full-stack web
              architectures for modern merchants who refuse to look like everyone else.
            </p>

            <div className="font-mono text-xs text-stone-400 space-y-1 pt-1">
              <div>
                <span className="text-[#DFBA74]">STATION:</span> Wiseghat Riverfront, Old Dacca
              </div>
              <div>
                <span className="text-[#DFBA74]">CABLE WIRE:</span> wire@dhakagency.com
              </div>
            </div>
          </div>

          {/* Quick Reels Navigation */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-[#DFBA74] uppercase tracking-wider text-sm border-b border-stone-800 pb-2">
              The Reels (সূচিপত্র)
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={playTelegraphClick}
                  className="text-stone-300 hover:text-crimson transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-crimson">›</span>
                  <span>Reel I: Shopify Storefronts</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={playTelegraphClick}
                  className="text-stone-300 hover:text-crimson transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-crimson">›</span>
                  <span>Reel II: WordPress Mastery</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={playTelegraphClick}
                  className="text-stone-300 hover:text-crimson transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-crimson">›</span>
                  <span>Reel III: Custom Web Architecture</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={playTelegraphClick}
                  className="text-stone-300 hover:text-crimson transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-crimson">›</span>
                  <span>Reel IV: Digital Marketing & Growth</span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={playTelegraphClick}
                  className="text-stone-300 hover:text-crimson transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-crimson">›</span>
                  <span>Now Showing: Verified Case Studies</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Colophon & Architectural Standards */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-[#DFBA74] uppercase tracking-wider text-sm border-b border-stone-800 pb-2">
              Colophon & Technical Rigor
            </h4>
            <p className="text-stone-400 font-body text-sm leading-relaxed">
              Composed in modern TypeScript and Next.js App Router, styled with Tailwind CSS, and
              orchestrated via Framer Motion. Set in types cut by IM Fell, EB Garamond, Noto Serif
              Bengali, and Courier Prime.
            </p>
            <div className="p-3 bg-stone-900 border border-stone-800 text-[11px] text-stone-300">
              <span className="text-crimson font-bold block mb-0.5">PRESSHOUSE SEAL:</span>
              <span>Zero-compromise performance, semantic cleanliness, and sub-second execution.</span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-stone-400">
          {/* Newspaper Copyright */}
          <div className="text-center md:text-left">
            <p className="font-bold text-[#FAF7EE]">
              Printed and Published at the Dhakagency Electric Press.
            </p>
            <p className="text-stone-400 mt-0.5">
              All Rights Reserved, 1900–Present. Hand-cranked with pride in Bengal.
            </p>
          </div>

          {/* Back to Top Crank Button */}
          <button
            onClick={scrollToTop}
            className="group brass-metal px-4 py-2 border-2 border-black font-bold uppercase tracking-wider text-xs flex items-center space-x-2 shrink-0 transition-transform active:translate-y-0.5"
          >
            <span>Return to Top of the Reel</span>
            <ArrowUp className="w-3.5 h-3.5 text-ink group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

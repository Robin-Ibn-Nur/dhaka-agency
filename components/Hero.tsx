"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { playStampThud } from "@/lib/sound";
import VintageGlobe from "./VintageGlobe";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToServices = () => {
    playStampThud();
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative pt-8 pb-12 md:pt-14 md:pb-16 border-b-4 border-ink overflow-hidden bg-parchment"
    >
      {/* Background Decorative Newspaper/Gazette Filigree */}
      <div className="absolute inset-0 parchment-grain pointer-events-none opacity-80" />

      {/* Background Vintage Watermarks */}
      <div className="absolute top-1 sm:top-2 left-2 sm:left-4 opacity-[0.03] select-none pointer-events-none font-headline text-[130px] sm:text-[160px] md:text-[190px] leading-none text-ink z-0">
        DACCA
      </div>
      <div className="absolute -right-10 bottom-10 opacity-[0.03] select-none pointer-events-none font-bengali text-[180px] leading-none text-crimson">
        বায়োস্কোপ
      </div>

      {/* 3D Rotating Globe: On Mobile acts as a faint vintage watermark (জলছাপ) behind text; on Desktop acts as full prominent interactive centerpiece on the right */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-8 opacity-15 sm:opacity-20 pointer-events-none lg:opacity-100 lg:pointer-events-auto lg:left-auto lg:translate-x-0 lg:right-[2%] xl:right-[4%] 2xl:right-[6%] lg:top-4 z-0 lg:z-10 transition-opacity duration-300">
        <VintageGlobe />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pointer-events-none">
        {/* Left Side Content Column (Constrained to 52% width so globe is 100% visible on right on desktop, full width on mobile) */}
        <div className="relative z-10 max-w-full lg:max-w-[55%] xl:max-w-[52%] 2xl:max-w-[50%] mb-4 sm:mb-6 pr-2 sm:pr-4">
          {/* Grand Dhaka Agency Press Rubber Stamp (Top Right of Left Text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 25 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 18,
              delay: 0.25,
            }}
            whileHover={{
              scale: 1.07,
              rotate: 7,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.94 }}
            onClick={() => playStampThud()}
            className="absolute -top-2 right-0 sm:right-2 z-20 cursor-pointer select-none group pointer-events-auto"
            title="Official Dhaka Agency Press Stamp — Click to Stamp"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 filter drop-shadow-[3px_4px_0px_rgba(0,0,0,0.18)]">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-crimson-stamp group-hover:text-crimson transition-colors"
                style={{ filter: "url(#ink-bleed-heavy)" }}
              >
                <defs>
                  {/* Top curved path for outer text */}
                  <path
                    id="hero-stamp-curve-top"
                    d="M 24,100 A 76,76 0 0,1 176,100"
                    fill="none"
                  />
                  {/* Bottom curved path for outer text */}
                  <path
                    id="hero-stamp-curve-bottom"
                    d="M 176,100 A 76,76 0 0,1 24,100"
                    fill="none"
                  />
                </defs>

                {/* Outer serrated dashed ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />

                {/* Outer heavy stamped ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="89"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />

                {/* Inner ring boundary */}
                <circle
                  cx="100"
                  cy="100"
                  r="67"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                {/* Curved Text: Top Arc */}
                <text
                  fill="currentColor"
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="2.2"
                  className="font-inkbleed uppercase"
                >
                  <textPath
                    href="#hero-stamp-curve-top"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    DHAKA AGENCY PRESS
                  </textPath>
                </text>

                {/* Curved Text: Bottom Arc */}
                <text
                  fill="currentColor"
                  fontSize="10"
                  fontWeight="bold"
                  letterSpacing="2"
                  className="font-inkbleed uppercase"
                >
                  <textPath
                    href="#hero-stamp-curve-bottom"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    ESTABLISHED 1904
                  </textPath>
                </text>

                {/* Star / Ornament Dividers */}
                <text
                  x="20"
                  y="104"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                >
                  ★
                </text>
                <text
                  x="180"
                  y="104"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                >
                  ★
                </text>

                {/* Center Bengali Brand Emblem */}
                <text
                  x="100"
                  y="86"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="15"
                  fontWeight="bold"
                  className="font-bengali"
                >
                  ঢাকা এজেন্সি
                </text>

                {/* Center Stamped Banner */}
                <rect
                  x="50"
                  y="99"
                  width="100"
                  height="15"
                  fill="currentColor"
                  rx="2"
                />
                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  fill="#FAF7EE"
                  fontSize="8"
                  fontWeight="bold"
                  letterSpacing="1.2"
                  className="font-inkbleed uppercase"
                >
                  SEAL OF EXCELLENCE
                </text>

                {/* Classification & Number */}
                <text
                  x="100"
                  y="126"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="8.5"
                  fontWeight="bold"
                  letterSpacing="1.2"
                  className="font-inkbleed uppercase"
                >
                  № 1904 • ১ম শ্রেণী
                </text>
              </svg>

              {/* Subtle vintage stamp ink bleed / distress effect */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-full opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, transparent 65%, rgba(139, 30, 30, 0.35) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Top Filigree Announcement (Left Aligned) */}
          <div className="flex items-center justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4 pr-24 sm:pr-32">
            <span className="h-px w-6 sm:w-12 bg-ink/40" />
            <span className="text-crimson font-mono text-xs sm:text-sm tracking-widest uppercase">✦ ❖ ✦</span>
            <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-ink uppercase font-bold">
              Grand Digital Exhibition • Old Dacca 1904
            </span>
            <span className="text-crimson font-mono text-xs sm:text-sm tracking-widest uppercase">✦ ❖ ✦</span>
            <span className="h-px w-6 sm:w-12 bg-ink/40" />
          </div>

          {/* Bengali Lead Motto (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-3 sm:mb-4"
          >
            <span className="inline-block font-bengali text-base sm:text-xl lg:text-2xl text-crimson font-bold tracking-wider px-3.5 py-1 border-y-2 border-crimson/50 bg-crimson/5 shadow-[2px_2px_0px_0px_rgba(227,30,36,0.15)]">
              ডিজিটাল কারিগরির আধুনিক বায়োস্কোপ
            </span>
          </motion.div>

          {/* English Main Headline (Harmonious & Perfectly Proportioned) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-left mb-4 sm:mb-6"
          >
            <h1 className="font-newspaper old-newspaper-headline text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[56px] 2xl:text-[66px] font-black text-ink tracking-tight leading-[1.08] sm:leading-[1.04] lg:leading-[1.02] xl:leading-[0.98] letterpress-text">
              Purveyors of Bespoke Web Craftsmanship & <span className="text-crimson font-black tracking-normal underline decoration-crimson/40 decoration-wavy decoration-2 underline-offset-8">Commerce</span>
            </h1>
          </motion.div>

          {/* Subtitle (Left Aligned, Elegant & Readable) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left mb-6 sm:mb-8 max-w-xl lg:max-w-2xl"
          >
            <p className="font-body text-sm sm:text-lg lg:text-xl text-ink/80 leading-relaxed italic border-l-4 border-crimson/60 pl-3.5 py-0.5">
              Hand-crafting custom Shopify storefronts, editorial WordPress publications, and robust
              web applications for ambitious modern merchants.
            </p>
          </motion.div>

          {/* Call to Action Buttons — Strictly on 1 Single Line (flex-nowrap whitespace-nowrap) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row flex-nowrap items-center justify-start gap-2 sm:gap-4 mb-4 sm:mb-6 pointer-events-auto overflow-x-visible whitespace-nowrap"
          >
            {/* Primary CTA: Vintage Brass Button */}
            <button
              onClick={scrollToServices}
              className="brass-metal flex-shrink-0 px-3 sm:px-5 md:px-6 py-2 sm:py-3 lg:py-3.5 border-2 border-ink font-mono text-[11px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider flex items-center space-x-1 sm:space-x-2 whitespace-nowrap shadow-[2px_2px_0px_0px_#1A1A1A] sm:shadow-[3px_3px_0px_0px_#1A1A1A] active:translate-x-0.5 active:translate-y-0.5"
            >
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink flex-shrink-0" />
              <span>Examine the Reels</span>
              <span className="font-headline text-sm sm:text-base lg:text-lg">☞</span>
            </button>

            {/* Secondary CTA: Crimson Wax-Sealed Button */}
            <button
              onClick={() => {
                playStampThud();
                onOpenBooking();
              }}
              className="wax-seal-button flex-shrink-0 px-3 sm:px-5 md:px-6 py-2 sm:py-3 lg:py-3.5 border-2 border-ink font-mono text-[11px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider flex items-center space-x-1 sm:space-x-2 whitespace-nowrap shadow-[2px_2px_0px_0px_#1A1A1A] sm:shadow-[3px_3px_0px_0px_#1A1A1A] active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
              <span>Book Strategy Call</span>
              <span className="text-[9px] sm:text-xs bg-white/20 px-1 sm:px-1.5 py-0.5 rounded font-mono font-bold flex-shrink-0">№ 1904</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Quick Indicator pointing down to Act II */}
        <div className="mt-4 sm:mt-6 text-left pointer-events-auto">
          <button
            onClick={scrollToServices}
            className="inline-flex items-center space-x-2 text-ink/75 hover:text-crimson transition-colors group font-mono text-xs uppercase tracking-wider font-bold"
          >
            <span className="text-crimson font-headline text-base group-hover:translate-x-1 transition-transform">
              ☞
            </span>
            <span>Examine Act II: The Bioscope Reels</span>
            <span className="text-crimson font-headline text-base group-hover:translate-y-0.5 transition-transform">
              ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

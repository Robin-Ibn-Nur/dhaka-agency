"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Award, Sparkles, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";
import { PortfolioItem } from "@/types";
import CaseStudyModal from "./CaseStudyModal";
import { playStampThud, playTelegraphClick } from "@/lib/sound";

interface PortfolioProps {
  onOpenBooking: () => void;
}

export default function Portfolio({ onOpenBooking }: PortfolioProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleOpenCase = (item: PortfolioItem) => {
    playStampThud();
    setSelectedItem(item);
  };

  return (
    <section
      id="portfolio"
      className="relative py-16 md:py-24 bg-[#FAF7EE] border-b-4 border-ink scroll-mt-12"
    >
      <div className="absolute inset-0 parchment-grain-dense pointer-events-none opacity-40" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header: The Picture Gallery */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="h-0.5 w-10 bg-crimson" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold">
              ACT III • তৃতীয় অঙ্ক
            </span>
            <span className="h-0.5 w-10 bg-crimson" />
          </div>

          <h2 className="font-newspaper old-newspaper-headline text-3xl sm:text-5xl md:text-6xl font-bold text-ink mb-4 letterpress-text">
            Now Showing at the Picture Gallery
          </h2>

          <p className="font-bengali text-lg sm:text-xl text-crimson font-semibold mb-3">
            নির্বাচিত নিদর্শন ও ডিজিটাল মহাফেজখানা
          </p>

          <p className="font-body text-lg text-ink/80 italic max-w-2xl mx-auto">
            Early 20th-century exhibition lobby cards presenting verified case studies of commercial,
            editorial, and full-stack digital architectures.
          </p>

          <div className="mt-4 flex items-center justify-center space-x-2 text-ink/40 font-mono text-xs">
            <span>✦ ❖ ✦</span>
          </div>
        </div>

        {/* Exhibition Lobby Cards (3 Showcase Items) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between bg-[#F3EFE6] border-double border-4 border-ink p-6 sm:p-7 shadow-[6px_6px_0px_0px_#1A1A1A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#1A1A1A]"
            >
              {/* Card Corner Filigree Marks */}
              <span className="absolute top-1.5 left-1.5 text-xs text-ink/30 font-mono pointer-events-none">
                ⌜
              </span>
              <span className="absolute top-1.5 right-1.5 text-xs text-ink/30 font-mono pointer-events-none">
                ⌝
              </span>
              <span className="absolute bottom-1.5 left-1.5 text-xs text-ink/30 font-mono pointer-events-none">
                ⌞
              </span>
              <span className="absolute bottom-1.5 right-1.5 text-xs text-ink/30 font-mono pointer-events-none">
                ⌟
              </span>

              <div>
                {/* Lobby Card Metadata Header */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-4 font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 bg-ink text-[#FAF7EE] font-bold tracking-widest uppercase">
                      {item.reelNumber}
                    </span>
                    <span className="text-crimson font-bold uppercase">{item.category}</span>
                  </div>
                  <span className="text-ink/60">{item.period.split("/")[0]}</span>
                </div>

                {/* Monospaced Client & Spec Bar (Courier Prime) */}
                <div className="bg-[#FAF7EE] border border-ink p-3 mb-5 font-mono text-xs space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-ink/60 uppercase">CLIENT:</span>
                    <span className="font-bold text-ink truncate ml-2">{item.client}</span>
                  </div>
                  <div className="flex items-baseline justify-between border-t border-parchment-border pt-1">
                    <span className="text-ink/60 uppercase">SPEC:</span>
                    <span className="text-crimson font-semibold truncate ml-2">{item.spec}</span>
                  </div>
                </div>

                {/* Main Titles */}
                <h3 className="font-inkbleed ink-bleed text-2xl sm:text-3xl font-bold text-ink group-hover:text-crimson transition-colors mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="font-bengali text-sm text-crimson/90 font-semibold mb-4">
                  {item.bengaliTitle}
                </p>

                {/* Summary */}
                <p className="font-body text-base text-ink/80 leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Telemetry Metric Highlights */}
                <div className="grid grid-cols-3 gap-2 border-y border-dashed border-ink/40 py-3 mb-6 bg-parchment/60">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-headline font-bold text-lg sm:text-xl text-ink">
                        {m.value}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-ink/60">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Interactive Rubber Stamp Badge & Trigger */}
              <div className="pt-4 border-t-2 border-ink flex items-center justify-between">
                {/* Verified Archive Stamp Badge */}
                <div className="transform -rotate-6">
                  <div className="rubber-stamp px-2.5 py-1 border-2 border-crimson-stamp text-crimson-stamp bg-white/60">
                    <div className="text-[10px] font-mono font-bold tracking-widest">
                      {item.stampLabel}
                    </div>
                    <div className="font-bengali text-[9px] font-bold">
                      {item.badgeBengali}
                    </div>
                  </div>
                </div>

                {/* Inspect Case Study Button */}
                <button
                  onClick={() => handleOpenCase(item)}
                  className="px-3.5 py-2 brass-metal border border-ink font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-[2px_2px_0px_0px_#1A1A1A]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Dossier</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Gallery Marquee Footer CTA */}
        <div className="mt-16 bg-[#1A1A1A] text-[#FAF7EE] border-4 border-ink p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_0px_#E31E24]">
          <div className="text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#DFBA74] font-bold">
              ✦ ARCHIVE VAULT ADMISSION ✦
            </span>
            <h4 className="font-headline text-2xl sm:text-3xl font-bold mt-1 text-[#FAF7EE]">
              Commission a Bespoke Project for Your Modern Enterprise
            </h4>
            <p className="font-bengali text-sm text-amber-200/80 mt-1">
              আমাদের কারিগররা আপনার ডিজিটাল প্ল্যাটফর্মকে অনন্য মাত্রায় পৌঁছে দিতে প্রস্তুত
            </p>
          </div>

          <button
            onClick={() => {
              playStampThud();
              onOpenBooking();
            }}
            className="wax-seal-button shrink-0 px-6 py-3.5 border-2 border-white/40 font-mono text-xs sm:text-sm uppercase font-bold tracking-wider flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Secure Production Slot ➔</span>
          </button>
        </div>
      </div>

      {/* Case Study Modal Popup */}
      <CaseStudyModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}

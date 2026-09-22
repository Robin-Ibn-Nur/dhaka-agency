"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowUpRight, Award } from "lucide-react";
import { PortfolioItem } from "@/types";
import { playStampThud, playTelegraphClick } from "@/lib/sound";

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function CaseStudyModal({ item, onClose, onOpenBooking }: CaseStudyModalProps) {
  useEffect(() => {
    if (item) {
      playStampThud();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/70 backdrop-blur-xs"
        />

        {/* Modal Window Styled as Vintage Archive Dossier */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#FAF7EE] border-double border-4 border-ink rounded-sm shadow-[10px_10px_0px_0px_#1A1A1A] z-10 overflow-hidden my-8"
        >
          {/* Top Dossier Header Bar */}
          <div className="bg-[#1A1A1A] text-[#FAF7EE] px-4 sm:px-6 py-3 flex items-center justify-between font-mono text-xs border-b-2 border-ink">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-crimson inline-block animate-ping" />
              <span className="tracking-widest uppercase font-bold text-amber-300">
                OFFICIAL EXHIBITION DOSSIER • {item.reelNumber}
              </span>
            </div>
            <button
              onClick={() => {
                playTelegraphClick();
                onClose();
              }}
              className="p-1 hover:bg-stone-800 text-stone-300 hover:text-white rounded transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dossier Body Content */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto parchment-grain">
            {/* Top Row: Meta and Official Stamp */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-ink pb-6 mb-6">
              <div>
                <div className="font-mono text-xs text-crimson font-bold uppercase tracking-wider mb-1">
                  {item.category} • {item.period}
                </div>
                <h3 className="font-inkbleed ink-bleed text-2xl sm:text-4xl font-bold text-ink mb-1">
                  {item.title}
                </h3>
                <p className="font-bengali text-base sm:text-lg text-crimson font-semibold">
                  {item.bengaliTitle}
                </p>
              </div>

              {/* Verified Archive Stamp */}
              <div className="transform -rotate-6 shrink-0">
                <div className="rubber-stamp px-4 py-2 border-2 border-crimson-stamp text-crimson-stamp bg-parchment shadow-sm">
                  <div className="text-center font-mono font-bold text-xs tracking-widest uppercase">
                    {item.stampLabel}
                  </div>
                  <div className="font-bengali text-[11px] font-bold text-center mt-0.5">
                    {item.badgeBengali}
                  </div>
                </div>
              </div>
            </div>

            {/* Client & Technical Specifications */}
            <div className="bg-parchment border-2 border-ink p-4 mb-6 font-mono text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-ink/60 uppercase block text-[10px]">Client / Syndicate:</span>
                  <span className="font-bold text-ink">{item.client}</span>
                </div>
                <div>
                  <span className="text-ink/60 uppercase block text-[10px]">Technical Spec:</span>
                  <span className="font-bold text-crimson">{item.spec}</span>
                </div>
              </div>
            </div>

            {/* Three Pillar Breakdown */}
            <div className="space-y-5 mb-8">
              {/* Challenge */}
              <div className="border-l-4 border-ink pl-4 py-1">
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink mb-1">
                  1. The Archival Bottleneck (The Challenge)
                </h4>
                <p className="font-body text-base text-ink/85 leading-relaxed">
                  {item.detailedCase.challenge}
                </p>
              </div>

              {/* Craftsmanship */}
              <div className="border-l-4 border-crimson pl-4 py-1 bg-crimson/5 pr-3">
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-crimson mb-1">
                  2. The Craftsmanship Applied (The Solution)
                </h4>
                <p className="font-body text-base text-ink/85 leading-relaxed">
                  {item.detailedCase.craftsmanship}
                </p>
              </div>

              {/* Outcome */}
              <div className="border-l-4 border-brass-dark pl-4 py-1">
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink mb-1">
                  3. The Measured Triumph (The Outcome)
                </h4>
                <p className="font-body text-base text-ink/85 leading-relaxed">
                  {item.detailedCase.outcome}
                </p>
              </div>
            </div>

            {/* Verified Performance Metrics */}
            <div className="border-2 border-ink bg-parchment-surface p-4 sm:p-5 mb-6">
              <span className="block font-mono text-xs uppercase tracking-wider font-bold text-ink/70 mb-3 text-center">
                ✦ Verified Telemetry & Commercial Metrics ✦
              </span>
              <div className="grid grid-cols-3 gap-3 text-center">
                {item.metrics.map((m, idx) => (
                  <div key={idx} className="p-2 border border-parchment-border bg-parchment rounded">
                    <div className="font-headline font-bold text-xl sm:text-3xl text-crimson">
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] sm:text-xs text-ink/70 uppercase mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-4 bg-parchment-border/40 border border-ink/40 text-center italic font-body text-sm sm:text-base text-ink/90 mb-6">
              {item.accentQuote}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-ink">
              <button
                onClick={onClose}
                className="px-4 py-2 border-2 border-ink font-mono text-xs uppercase font-bold text-ink hover:bg-parchment transition-colors"
              >
                Close Archive View
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="wax-seal-button px-5 py-2 border-2 border-ink font-mono text-xs uppercase font-bold flex items-center space-x-2"
              >
                <span>Commission Similar Build</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

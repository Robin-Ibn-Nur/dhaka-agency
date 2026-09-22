"use client";

import React, { useState } from "react";
import { Film, Volume2, VolumeX, Menu, X, Sparkles } from "lucide-react";
import { playTelegraphClick } from "@/lib/sound";
import { assetUrl } from "@/lib/assets";

interface HeaderProps {
  filmMode: boolean;
  setFilmMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenBooking: () => void;
}

export default function Header({
  filmMode,
  setFilmMode,
  soundEnabled,
  setSoundEnabled,
  onOpenBooking,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    playTelegraphClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFilmMode = () => {
    playTelegraphClick();
    setFilmMode((prev) => !prev);
  };

  const toggleSound = () => {
    playTelegraphClick();
    setSoundEnabled((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F3EFE6] border-b-2 border-ink shadow-sm">
      {/* Top Gazette Dateline Banner */}
      <div className="bg-[#1A1A1A] text-[#FAF7EE] text-[11px] sm:text-xs tracking-[0.18em] uppercase py-1 px-4 font-mono flex flex-wrap items-center justify-between border-b border-[#3A3A3A]">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-crimson animate-pulse" />
          <span>Old Dacca • Bengal Presidency • Est. Digital Era • Vol. XXIV No. 1</span>
        </div>
        <div className="hidden md:flex items-center space-x-3 text-[#DFBA74]">
          <span>✧ WISEGHAT RIVERFRONT DISPATCH</span>
          <span>✦</span>
          <span>HIGH TIDE AT BURIGANGA 14:30</span>
        </div>
      </div>

      {/* Main Masthead Navigation Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between flex-nowrap gap-4">
          {/* Brand Display: Official Logo + Typography */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="group flex items-center space-x-3 focus:outline-none flex-shrink-0"
          >
            {/* Official Dhaka Agency Logo (Larger & Prominent) */}
            <div className="relative h-16 sm:h-20 w-auto flex items-center border-2 border-ink bg-white p-1 shadow-[3px_3px_0px_0px_#1A1A1A] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_0px_#1A1A1A] rounded-sm overflow-hidden flex-shrink-0">
              <img
                src={assetUrl("/dhaka-agency-logo.jpg")}
                alt="Dhaka Agency Logo"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Brand Title (Reduced Font Size) */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-headline text-lg sm:text-xl font-bold tracking-tight text-ink letterpress-text">
                  Dhakagency
                </span>
                <span className="hidden sm:inline text-[10px] font-mono px-1 py-0.2 border border-ink text-ink bg-parchment-border font-bold">
                  ১৯০৪
                </span>
              </div>
              <span className="font-bengali text-[10px] sm:text-xs text-crimson font-medium tracking-wide -mt-0.5">
                ঢাকা এজেন্সি • ডিজিটাল বায়োস্কোপ
              </span>
            </div>
          </a>

          {/* Desktop Nav Links — English on top, Bengali underneath to save horizontal space */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 flex-nowrap whitespace-nowrap">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="group relative flex flex-col items-start py-0.5 whitespace-nowrap focus:outline-none"
            >
              <span className="font-headline text-sm xl:text-[15px] font-bold tracking-wider text-ink group-hover:text-crimson transition-colors leading-tight">
                Reel I: Services
              </span>
              <span className="font-bengali text-[11px] xl:text-xs text-crimson font-medium -mt-0.5 group-hover:text-crimson transition-colors leading-tight">
                সেবাসমূহ
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-crimson transition-all duration-200 group-hover:w-full" />
            </a>

            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "#portfolio")}
              className="group relative flex flex-col items-start py-0.5 whitespace-nowrap focus:outline-none"
            >
              <span className="font-headline text-sm xl:text-[15px] font-bold tracking-wider text-ink group-hover:text-crimson transition-colors leading-tight">
                Reel II: Now Showing
              </span>
              <span className="font-bengali text-[11px] xl:text-xs text-crimson font-medium -mt-0.5 group-hover:text-crimson transition-colors leading-tight">
                প্রেক্ষাগৃহ
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-crimson transition-all duration-200 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group relative flex flex-col items-start py-0.5 whitespace-nowrap focus:outline-none"
            >
              <span className="font-headline text-sm xl:text-[15px] font-bold tracking-wider text-ink group-hover:text-crimson transition-colors leading-tight">
                Reel III: The Dispatch
              </span>
              <span className="font-bengali text-[11px] xl:text-xs text-crimson font-medium -mt-0.5 group-hover:text-crimson transition-colors leading-tight">
                যোগাযোগ
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-crimson transition-all duration-200 group-hover:w-full" />
            </a>
          </nav>

          {/* Interactive Vintage Controls & CTA */}
          <div className="flex items-center space-x-3">
            {/* Silent Film Mode Toggle */}
            <button
              onClick={toggleFilmMode}
              title={filmMode ? "Exit Silent Film Mode" : "Enter Silent Film Mode (1900s Flicker & Sepia)"}
              className={`flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-mono border-2 border-ink transition-all ${
                filmMode
                  ? "bg-crimson text-white shadow-none translate-x-0.5 translate-y-0.5"
                  : "bg-parchment-surface text-ink shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-[#EDE6D4]"
              }`}
            >
              <Film className={`w-3.5 h-3.5 ${filmMode ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline font-bold">
                {filmMode ? "FILM MODE: ON" : "SILENT FILM"}
              </span>
            </button>

            {/* Sound Toggle (Projector Hum) */}
            {filmMode && (
              <button
                onClick={toggleSound}
                title={soundEnabled ? "Mute Projector Audio" : "Play Vintage Projector Audio"}
                className="p-1.5 border-2 border-ink bg-parchment-surface text-ink hover:bg-parchment-border shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                {soundEnabled ? (
                  <Volume2 className="w-3.5 h-3.5 text-crimson" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-ink-faint" />
                )}
              </button>
            )}

            {/* Strategy Call Ticket Trigger Button */}
            <button
              onClick={() => {
                playTelegraphClick();
                onOpenBooking();
              }}
              className="hidden md:inline-flex items-center space-x-1.5 wax-seal-button px-3.5 py-1.5 border-2 border-ink font-mono text-xs font-bold tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admit One Ticket</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                playTelegraphClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 border-2 border-ink bg-[#FAF7EE] shadow-[2px_2px_0px_0px_#1A1A1A] text-ink hover:bg-parchment-border"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7EE] border-t-2 border-ink px-4 py-6 shadow-inner animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="flex items-center justify-between border-b border-parchment-border pb-2 font-headline text-xl text-ink"
            >
              <span>Reel I: Services</span>
              <span className="font-bengali text-xs text-crimson">মুদ্রণ ও বাণিজ্য</span>
            </a>

            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "#portfolio")}
              className="flex items-center justify-between border-b border-parchment-border pb-2 font-headline text-xl text-ink"
            >
              <span>Reel II: Now Showing</span>
              <span className="font-bengali text-xs text-crimson">বর্তমান প্রেক্ষাগৃহ</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-between border-b border-parchment-border pb-2 font-headline text-xl text-ink"
            >
              <span>Reel III: The Dispatch</span>
              <span className="font-bengali text-xs text-crimson">টেলিগ্রাফ অফিস</span>
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full wax-seal-button py-2.5 border-2 border-ink font-mono text-xs font-bold tracking-widest text-center"
              >
                🎟 ADMIT ONE — BOOK STRATEGY CALL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ornate Woodblock Border Strip */}
      <div className="h-1 bg-repeat-x bg-center" style={{
        backgroundImage: "linear-gradient(90deg, #1A1A1A 0%, #1A1A1A 50%, #E31E24 50%, #E31E24 100%)",
        backgroundSize: "16px 2px"
      }} />
    </header>
  );
}

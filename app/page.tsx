"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SilentFilmEffect from "@/components/SilentFilmEffect";
import TicketModal from "@/components/TicketModal";

export default function HomePage() {
  const [filmMode, setFilmMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedCraft, setSelectedCraft] = useState<string>("Shopify Storefronts");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedCraft(serviceTitle);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-parchment text-ink relative">
      {/* Silent Film Overlay (Flicker, Sepia, Scratches & Audio Hum) */}
      <SilentFilmEffect enabled={filmMode} soundEnabled={soundEnabled} />

      {/* Header & Vintage Masthead Navigation */}
      <Header
        filmMode={filmMode}
        setFilmMode={setFilmMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenBooking={() => setIsTicketModalOpen(true)}
      />

      {/* Act I: The Grand Marquee Hero */}
      <Hero onOpenBooking={() => setIsTicketModalOpen(true)} />

      {/* Act II: The Bioscope Reels (Services) */}
      <Services onSelectService={handleSelectService} />

      {/* Act III: The Picture Gallery / Now Showing (Portfolio) */}
      <Portfolio onOpenBooking={() => setIsTicketModalOpen(true)} />

      {/* Act IV: The Telegraph Office & Box Office (Contact) */}
      <Contact
        onOpenBooking={() => setIsTicketModalOpen(true)}
        selectedCraft={selectedCraft}
      />

      {/* Colophon & Footer */}
      <Footer />

      {/* Strategy Reel Admit-One Ticket Modal */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        preselectedService={selectedCraft}
      />
    </main>
  );
}

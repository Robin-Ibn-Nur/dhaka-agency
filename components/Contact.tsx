"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Ticket,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { TelegramFormData } from "@/types";
import { playStampThud, playTelegraphClick } from "@/lib/sound";
import confetti from "canvas-confetti";

interface ContactProps {
  onOpenBooking: () => void;
  selectedCraft?: string;
}

export default function Contact({ onOpenBooking, selectedCraft }: ContactProps) {
  const [formData, setFormData] = useState<TelegramFormData>({
    senderName: "",
    email: "",
    craft: selectedCraft || "Shopify Storefronts",
    budget: "$3,000 – $7,000",
    message: "",
  });

  const [isTransmitted, setIsTransmitted] = useState(false);
  const [wireTimestamp, setWireTimestamp] = useState("");
  const [wireCode, setWireCode] = useState("");

  const craftOptions = [
    "Shopify Storefronts (মুদ্রণ ও বাণিজ্য)",
    "WordPress Mastery (ওয়েব প্রকাশনা)",
    "Custom Web Architecture (আধুনিক কারিগরি)",
    "Digital Marketing & Growth (জনসংযোগ ও প্রচার)",
    "Full Enterprise Transformation",
  ];

  const budgetOptions = [
    "$1,500 – $3,000",
    "$3,000 – $7,000",
    "$7,000 – $15,000",
    "$15,000+ (Imperial Enterprise)",
  ];

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    playStampThud();

    const now = new Date();
    const formatted = now.toUTCString().replace("GMT", "BST (Dacca Local)");
    const code = `TEL-${Math.floor(1000 + Math.random() * 9000)}-DACCA`;

    setWireTimestamp(formatted);
    setWireCode(code);
    setIsTransmitted(true);

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
        colors: ["#E31E24", "#8B1E1E", "#C5A059", "#1A1A1A"],
      });
    } catch {}
  };

  const handleResetTelegram = () => {
    setIsTransmitted(false);
    setFormData({
      senderName: "",
      email: "",
      craft: "Shopify Storefronts",
      budget: "$3,000 – $7,000",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-[#F3EFE6] border-b-4 border-ink scroll-mt-12"
    >
      <div className="absolute inset-0 parchment-grain pointer-events-none opacity-60" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header: The Telegraph Office & Box Office */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="h-0.5 w-10 bg-crimson" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-crimson font-bold">
              ACT IV • চতুর্থ অঙ্ক
            </span>
            <span className="h-0.5 w-10 bg-crimson" />
          </div>

          <h2 className="font-newspaper old-newspaper-headline text-3xl sm:text-5xl md:text-6xl font-bold text-ink mb-4 letterpress-text">
            The Telegraph Office & Box Office
          </h2>

          <p className="font-bengali text-lg sm:text-xl text-crimson font-semibold mb-3">
            রয়্যাল টেলিগ্রাফে বার্তা প্রেরণ ও কৌশল নির্ধারণী টিকিট সংরক্ষণ
          </p>

          <p className="font-body text-lg text-ink/80 italic max-w-2xl mx-auto">
            Whether transmitting urgent commercial specifications or reserving your audience with
            our chief technologist, the wire operator stands attentive at the terminal.
          </p>

          <div className="mt-4 flex items-center justify-center text-ink/40 font-mono text-xs">
            <span>❖ ✦ ❖</span>
          </div>
        </div>

        {/* Two-Column Vintage Desk Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* LEFT COLUMN: The Royal Telegram Form */}
          <div className="lg:col-span-7 bg-[#FAF3DE] border-4 border-ink p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1A1A1A] relative">
            {/* Telegram Form Top Header Banner */}
            <div className="border-b-2 border-crimson pb-4 mb-6">
              <div className="flex items-center justify-between font-mono text-xs mb-1">
                <span className="font-bold text-crimson tracking-widest uppercase font-inkbleed">
                  BENGAL POST & TELEGRAPHS DEPARTMENT
                </span>
                <span className="text-ink/60 font-bold font-inkbleed">FORM № 44-B</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="font-inkbleed ink-bleed text-2xl sm:text-3xl font-bold text-ink">
                  Royal Dispatch Cablegram
                </h3>
                <span className="font-bengali text-xs text-crimson font-semibold">
                  তারবার্তা ও প্রাতিষ্ঠানিক পত্র
                </span>
              </div>
            </div>

            {!isTransmitted ? (
              <form onSubmit={handleTransmit} className="telegram-lines space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sender's Moniker (Name) */}
                  <div className="bg-[#FAF3DE]/90 p-1">
                    <label className="block font-mono text-xs uppercase font-bold tracking-wider text-ink mb-1">
                      Sender&apos;s Moniker (Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.senderName}
                      onChange={(e) =>
                        setFormData({ ...formData, senderName: e.target.value })
                      }
                      placeholder="e.g. Nawab S. K. Rahman"
                      className="w-full px-3 py-2 bg-parchment border-2 border-ink font-body text-base text-ink focus:outline-none focus:border-crimson"
                    />
                  </div>

                  {/* Telegraphic Address (Email) */}
                  <div className="bg-[#FAF3DE]/90 p-1">
                    <label className="block font-mono text-xs uppercase font-bold tracking-wider text-ink mb-1">
                      Telegraphic Address (Email) *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. merchant@company.com"
                      className="w-full px-3 py-2 bg-parchment border-2 border-ink font-body text-base text-ink focus:outline-none focus:border-crimson"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Craft Required Dropdown */}
                  <div className="bg-[#FAF3DE]/90 p-1">
                    <label className="block font-mono text-xs uppercase font-bold tracking-wider text-ink mb-1">
                      Craft Required (Service)
                    </label>
                    <select
                      value={formData.craft}
                      onChange={(e) =>
                        setFormData({ ...formData, craft: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-parchment border-2 border-ink font-mono text-xs text-ink focus:outline-none focus:border-crimson"
                    >
                      {craftOptions.map((c, idx) => (
                        <option key={idx} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budgetary Allocation */}
                  <div className="bg-[#FAF3DE]/90 p-1">
                    <label className="block font-mono text-xs uppercase font-bold tracking-wider text-ink mb-1">
                      Budgetary Allocation
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-parchment border-2 border-ink font-mono text-xs text-ink focus:outline-none focus:border-crimson"
                    >
                      {budgetOptions.map((b, idx) => (
                        <option key={idx} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Cabled Dispatches (Message) */}
                <div className="bg-[#FAF3DE]/90 p-1">
                  <label className="block font-mono text-xs uppercase font-bold tracking-wider text-ink mb-1">
                    Cabled Dispatches (Project Brief & Objectives) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Provide details regarding your current storefront, readership numbers, timeline, and architectural ambitions..."
                    className="w-full px-3 py-2 bg-parchment border-2 border-ink font-body text-base text-ink focus:outline-none focus:border-crimson"
                  />
                </div>

                {/* Submit Button (Cast-Iron Telegraph Key) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-ink/70">
                    Priority telegraph dispatched directly to Wiseghat desk.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto wax-seal-button px-8 py-3 border-2 border-ink font-mono text-xs sm:text-sm uppercase font-bold tracking-widest flex items-center justify-center space-x-2 shadow-[4px_4px_0px_0px_#1A1A1A]"
                  >
                    <span>TRANSMIT TELEGRAM ➔</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* Stamped Telegram Receipt View */
              <div className="bg-parchment border-2 border-ink p-6 relative overflow-hidden">
                <div className="flex items-start justify-between border-b-2 border-ink pb-4 mb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-crimson uppercase tracking-widest block">
                      TELEGRAPH DISPATCH RECEIPT
                    </span>
                    <div className="font-headline text-2xl font-bold text-ink">
                      Transmission Confirmed
                    </div>
                    <div className="font-mono text-xs text-ink/70 mt-0.5">
                      WIRE CODE: {wireCode}
                    </div>
                  </div>

                  <div className="transform -rotate-12">
                    <div className="rubber-stamp px-3 py-1.5 border-2 border-crimson text-crimson bg-white/70">
                      <div className="font-mono text-xs font-bold tracking-widest">TRANSMITTED</div>
                      <div className="font-bengali text-[10px] font-bold">তারবার্তা গৃহীত</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs text-ink mb-6">
                  <div>
                    <span className="text-ink/60 uppercase">SENDER:</span> {formData.senderName}
                  </div>
                  <div>
                    <span className="text-ink/60 uppercase">ADDRESS:</span> {formData.email}
                  </div>
                  <div>
                    <span className="text-ink/60 uppercase">CRAFT:</span> {formData.craft}
                  </div>
                  <div>
                    <span className="text-ink/60 uppercase">BUDGET:</span> {formData.budget}
                  </div>
                  <div>
                    <span className="text-ink/60 uppercase">TIMESTAMP:</span> {wireTimestamp}
                  </div>
                </div>

                <div className="p-3 bg-parchment-border/40 border-l-2 border-crimson font-body text-sm text-ink/90 italic mb-6">
                  “The wire has hummed across the delta. A chief technologist shall formulate your
                  dossier and reply within twenty-four hours.”
                </div>

                <button
                  onClick={handleResetTelegram}
                  className="brass-metal px-4 py-2 border-2 border-ink font-mono text-xs uppercase font-bold flex items-center space-x-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Transmit Another Telegram</span>
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: The Perforated Admit-One Ticket Stub */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="ticket-perforation-v bg-[#FAF7EE] border-4 border-ink p-6 sm:p-8 shadow-[8px_8px_0px_0px_#E31E24] relative flex flex-col justify-between"
            >
              {/* Ticket Top Notch Bar */}
              <div>
                <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-4 font-mono text-xs">
                  <span className="px-2 py-0.5 bg-crimson text-[#FAF7EE] font-bold uppercase tracking-wider">
                    RESERVED SEAT
                  </span>
                  <span className="text-ink font-bold tracking-widest">№ 1904-DA</span>
                </div>

                {/* Ticket Headline */}
                <div className="text-center py-4 border-b-2 border-dashed border-ink mb-5">
                  <div className="font-mono text-xs uppercase tracking-widest text-crimson font-bold">
                    ★ BIoscope PRIVATE AUDIENCE ★
                  </div>
                  <h3 className="font-inkbleed ink-bleed-heavy text-3xl sm:text-4xl font-bold text-ink mt-1 tracking-wider">
                    ADMIT ONE
                  </h3>
                  <div className="font-inkbleed-serif ink-bleed text-lg sm:text-xl text-ink/90 italic">
                    Strategy Reel & Commercial Review
                  </div>
                  <p className="font-bengali text-sm text-crimson font-semibold mt-1">
                    ৩০ মিনিটের একক কৌশল ও প্রযুক্তি বিশ্লেষণ অধিবেশন
                  </p>
                </div>

                {/* Ticket Body Specifications */}
                <div className="space-y-3 font-mono text-xs mb-6">
                  <div className="flex justify-between items-center py-1 border-b border-parchment-border">
                    <span className="text-ink/60 uppercase">VENUE:</span>
                    <span className="font-bold text-ink">Wiseghat Digital Terminal / Google Meet</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-parchment-border">
                    <span className="text-ink/60 uppercase">DURATION:</span>
                    <span className="font-bold text-ink">30 Minutes (Bespoke)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-parchment-border">
                    <span className="text-ink/60 uppercase">ADMISSION FEE:</span>
                    <span className="font-bold text-crimson">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-ink/60 uppercase">REEL SPEC:</span>
                    <span className="font-bold text-ink">Direct with Lead Architect</span>
                  </div>
                </div>
              </div>

              {/* Perforation Divider Line */}
              <div className="my-2 border-t-2 border-dashed border-ink relative" />

              {/* Ticket Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    playStampThud();
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 px-4 brass-metal border-2 border-ink font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <Ticket className="w-4 h-4 text-ink" />
                  <span>CLAIM STRATEGY REEL TICKET ➔</span>
                </button>
                <span className="block text-center font-mono text-[10px] text-ink/50 mt-2 uppercase">
                  Perforated ticket stub will be issued instantaneously
                </span>
              </div>
            </motion.div>

            {/* Testimonial Snippet Under Ticket */}
            <div className="mt-6 bg-[#FAF7EE] border-2 border-ink p-4 text-xs font-mono">
              <span className="text-crimson font-bold block mb-1">
                ✦ MERCHANT TESTIMONY • প্রামাণ্য প্রশংসা ✦
              </span>
              <p className="font-body text-sm text-ink/80 italic">
                “A single 30-minute strategy session reshaped our entire Shopify roadmap, saving us
                three months of engineering drift.”
              </p>
              <span className="block text-right text-[11px] text-ink/60 mt-1">
                — Managing Director, Bengal Silk
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Quick Wire Dispatches */}
        <div className="bg-[#1A1A1A] text-[#FAF7EE] border-4 border-ink p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left font-mono text-xs">
            {/* Email Wire */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="p-2.5 bg-crimson text-white rounded shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#DFBA74] uppercase tracking-wider font-bold block text-[11px]">
                  Telegram Wire (Direct Email)
                </span>
                <a
                  href="mailto:wire@dhakagency.com"
                  className="text-[#FAF7EE] hover:text-crimson transition-colors font-bold text-sm"
                >
                  wire@dhakagency.com
                </a>
                <span className="block text-stone-400 text-[10px] mt-0.5">
                  Encryption: TLS 1.3 / High-Speed Transit
                </span>
              </div>
            </div>

            {/* WhatsApp Cable */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="p-2.5 bg-crimson text-white rounded shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#DFBA74] uppercase tracking-wider font-bold block text-[11px]">
                  Direct Cable (WhatsApp)
                </span>
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF7EE] hover:text-crimson transition-colors font-bold text-sm"
                >
                  +880 1700-000000
                </a>
                <span className="block text-stone-400 text-[10px] mt-0.5">
                  Instant Dispatch Available (09:00 - 20:00 BST)
                </span>
              </div>
            </div>

            {/* Physical Postmarker */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="p-2.5 bg-crimson text-white rounded shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#DFBA74] uppercase tracking-wider font-bold block text-[11px]">
                  Physical Postmarker
                </span>
                <span className="text-[#FAF7EE] font-bold text-sm block">
                  Wiseghat Riverfront, Old Dacca
                </span>
                <span className="block text-stone-400 text-[10px] mt-0.5 font-bengali">
                  ওয়াইজঘাট, সদরঘাট, পুরান ঢাকা, বঙ্গ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

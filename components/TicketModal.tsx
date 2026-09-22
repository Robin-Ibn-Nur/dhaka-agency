"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Sparkles, Check, Ticket, User, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import { playStampThud, playTelegraphClick } from "@/lib/sound";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function TicketModal({ isOpen, onClose, preselectedService }: TicketModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("Tomorrow, 3:00 PM (BST)");
  const [isBooked, setIsBooked] = useState(false);

  const dates = [
    "Tomorrow, 11:00 AM (BST)",
    "Tomorrow, 3:00 PM (BST)",
    "Thursday, 2:00 PM (BST)",
    "Friday, 4:30 PM (BST)",
    "Next Monday, 10:00 AM (BST)",
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    playStampThud();
    setIsBooked(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#E31E24", "#1A1A1A", "#DFBA74", "#FAF7EE"],
      });
    } catch {}
  };

  const handleReset = () => {
    setIsBooked(false);
    setName("");
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/75 backdrop-blur-xs"
        />

        {/* Perforated Admit One Ticket Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl bg-[#FAF7EE] border-4 border-ink rounded-sm shadow-[10px_10px_0px_0px_#E31E24] z-10 overflow-hidden"
        >
          {/* Header Marquee Strip */}
          <div className="bg-[#1A1A1A] text-[#FAF7EE] px-4 py-2.5 flex items-center justify-between font-mono text-xs border-b-2 border-ink">
            <div className="flex items-center space-x-2">
              <Ticket className="w-4 h-4 text-crimson" />
              <span className="font-bold tracking-widest text-amber-300 uppercase">
                BOX OFFICE ADMIT-ONE STUB • № 1904-DA
              </span>
            </div>
            <button
              onClick={() => {
                playTelegraphClick();
                onClose();
              }}
              className="p-1 hover:bg-stone-800 text-stone-300 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8 ticket-perforation-v relative">
            {!isBooked ? (
              <form onSubmit={handleBooking} className="space-y-5">
                <div className="text-center border-b-2 border-dashed border-ink pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-crimson font-bold block">
                    ★ OLD DACCA ELECTRIC THEATRE ★
                  </span>
                  <h3 className="font-inkbleed ink-bleed text-3xl font-bold text-ink mt-1">
                    Strategy Reel: 1-on-1 Consultation
                  </h3>
                  <p className="font-bengali text-sm text-ink/80 mt-0.5">
                    আপনার ডিজিটাল প্রকল্পের রূপরেখা ও কারিগরি পর্যালোচনা
                  </p>
                  {preselectedService && (
                    <div className="mt-2 inline-block font-mono text-xs px-2.5 py-1 bg-crimson/10 border border-crimson text-crimson font-bold">
                      Subject: {preselectedService}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider font-bold text-ink mb-1">
                      Merchant Moniker (Your Name) *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 w-4 h-4 text-ink/50" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nawab / Founder / Merchant"
                        className="w-full pl-9 pr-3 py-2 bg-parchment border-2 border-ink font-body text-base text-ink focus:outline-none focus:border-crimson"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider font-bold text-ink mb-1">
                      Telegraphic Address (Email) *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-ink/50" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="merchant@empire.com"
                        className="w-full pl-9 pr-3 py-2 bg-parchment border-2 border-ink font-body text-base text-ink focus:outline-none focus:border-crimson"
                      />
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider font-bold text-ink mb-1">
                      Preferred Exhibition Bell (Date & Time)
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 w-4 h-4 text-ink/50" />
                      <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-parchment border-2 border-ink font-mono text-xs text-ink focus:outline-none focus:border-crimson"
                      >
                        {dates.map((d, idx) => (
                          <option key={idx} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-ink flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-ink/60">
                    Complimentary 30-min strategy review
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto wax-seal-button px-6 py-2.5 border-2 border-ink font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center space-x-2"
                  >
                    <span>Punch Ticket & Confirm</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* Ticket Confirmed Stamped View */
              <div className="text-center py-4 space-y-4">
                <div className="inline-block transform -rotate-3 mb-2">
                  <div className="rubber-stamp-crimson px-5 py-2.5 border-4 bg-parchment shadow-md">
                    <div className="font-mono text-sm font-bold tracking-widest">
                      SEAT RESERVED • আসন সংরক্ষিত
                    </div>
                    <div className="font-mono text-[11px] font-bold text-ink mt-0.5">
                      PASS № 1904-VIP-CONFIRMED
                    </div>
                  </div>
                </div>

                <h3 className="font-inkbleed ink-bleed text-3xl font-bold text-ink">
                  Your Box Office Stub is Verified!
                </h3>
                <p className="font-body text-base text-ink/80 max-w-md mx-auto">
                  A cable dispatch has been forwarded to <strong>{email || "your address"}</strong>{" "}
                  for <strong>{selectedDate}</strong>. Our senior technologist shall prepare the
                  exhibition reel accordingly.
                </p>

                <div className="bg-parchment border-2 border-ink p-4 font-mono text-xs text-left max-w-sm mx-auto space-y-1">
                  <div>
                    <span className="text-ink/60 uppercase">PASS HOLDER:</span> {name || "Merchant"}
                  </div>
                  <div>
                    <span className="text-ink/60 uppercase">TELEGRAPH:</span> {email}
                  </div>
                  <div>
                    <span className="text-ink/60 uppercase">DATE:</span> {selectedDate}
                  </div>
                  <div>
                    <span className="text-ink/60 uppercase">STATION:</span> Old Dacca Cinema Desk
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="brass-metal px-6 py-2 border-2 border-ink font-mono text-xs uppercase font-bold"
                >
                  Return to Main Stage
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

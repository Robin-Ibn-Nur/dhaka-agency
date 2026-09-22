"use client";

import React, { useEffect } from "react";
import { setProjectorSound } from "@/lib/sound";

interface SilentFilmEffectProps {
  enabled: boolean;
  soundEnabled: boolean;
}

export default function SilentFilmEffect({ enabled, soundEnabled }: SilentFilmEffectProps) {
  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("silent-film-mode");
      document.body.classList.add("silent-film-flicker");
    } else {
      document.documentElement.classList.remove("silent-film-mode");
      document.body.classList.remove("silent-film-flicker");
    }

    return () => {
      document.documentElement.classList.remove("silent-film-mode");
      document.body.classList.remove("silent-film-flicker");
    };
  }, [enabled]);

  useEffect(() => {
    if (enabled && soundEnabled) {
      setProjectorSound(true);
    } else {
      setProjectorSound(false);
    }

    return () => {
      setProjectorSound(false);
    };
  }, [enabled, soundEnabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="film-scratches fixed inset-0 pointer-events-none z-[999]"
      style={{
        boxShadow: "inset 0 0 120px rgba(0,0,0,0.5), inset 0 0 200px rgba(60,20,10,0.35)",
      }}
    />
  );
}

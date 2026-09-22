"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import createGlobe, { Globe } from "cobe";
import { Compass, RotateCw, MapPin } from "lucide-react";
import { playTelegraphClick } from "@/lib/sound";

// Dhaka Coordinates: 23.8103° N, 90.4125° E
const DHAKA_LAT = 23.8103;
const DHAKA_LNG = 90.4125;

// Crimson color from Dhaka Agency theme: #E31E24 -> RGB normalized
const CRIMSON_RGB: [number, number, number] = [227 / 255, 30 / 255, 36 / 255]; // [0.890, 0.118, 0.141]
const BRASS_RGB: [number, number, number] = [197 / 255, 160 / 255, 89 / 255]; // [0.772, 0.627, 0.349]

// Helper: Calculate 3D unit vector for spherical coordinates (matching COBE's formula)
function getVector(lat: number, lng: number): [number, number, number] {
  const r = (lat * Math.PI) / 180;
  const a = (lng * Math.PI) / 180 - Math.PI;
  const o = Math.cos(r);
  return [-o * Math.cos(a), Math.sin(r), o * Math.sin(a)];
}

const dhakaVector = getVector(DHAKA_LAT, DHAKA_LNG);

// Calculate optimal phi so Dhaka faces directly toward camera
// In COBE: c = cos(phi)*x + sin(phi)*z. When facing front center: c = 0, zCam > 0.
// vector: [-cos(lat)*cos(lng - PI), sin(lat), cos(lat)*sin(lng - PI)]
// For Dhaka (lat ~23.8, lng ~90.4), lng - PI = -89.6 deg.
// Center facing phi is roughly 4.75 rad (~272 deg)
const DHAKA_TARGET_PHI = 4.75;
const DHAKA_TARGET_THETA = 0.25;

export default function VintageGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<Globe | null>(null);

  // Dhaka Pin overlay DOM ref for 60fps zero-re-render tracking
  const dhakaPinRef = useRef<HTMLDivElement | null>(null);

  // Rotation angles (phi: longitude spin, theta: latitude tilt)
  const phiRef = useRef<number>(DHAKA_TARGET_PHI);
  const thetaRef = useRef<number>(DHAKA_TARGET_THETA);

  // Interaction tracking
  const isDraggingRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocityRef = useRef<{ phi: number; theta: number }>({ phi: 0, theta: 0 });
  const lastSoundTimeRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [dhakaVisible, setDhakaVisible] = useState<boolean>(true);

  // Reset/Focus on Dhaka animation
  const focusAnimationRef = useRef<{
    active: boolean;
    startPhi: number;
    startTheta: number;
    startTime: number;
    duration: number;
  }>({
    active: false,
    startPhi: 0,
    startTheta: 0,
    startTime: 0,
    duration: 1000,
  });

  const handleFocusDhaka = useCallback(() => {
    playTelegraphClick();
    focusAnimationRef.current = {
      active: true,
      startPhi: phiRef.current,
      startTheta: thetaRef.current,
      startTime: performance.now(),
      duration: 1200,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let width = container.clientWidth || 560;
    let height = container.clientHeight || 560;

    // Initialize COBE Globe
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 1, // Deep vintage celestial ink sphere
      diffuse: 1.15,
      mapSamples: 22000,
      mapBrightness: 3.8,
      mapBaseBrightness: 0.05,
      baseColor: [0.82, 0.74, 0.58], // Antique parchment & brass landmass tint
      markerColor: CRIMSON_RGB, // Dhaka Agency Crimson (#E31E24)
      glowColor: [0.89, 0.12, 0.14], // Crimson atmospheric fringe
      opacity: 0.96,
      scale: 1,
      markerElevation: 0.08,
      markers: [
        // Primary Focus: DHAKA AGENCY, BENGAL
        {
          id: "dhaka-agency-main",
          location: [DHAKA_LAT, DHAKA_LNG],
          size: 0.16,
          color: CRIMSON_RGB,
        },
      ],
      // Spider-web lines (arcs) removed as requested
      arcs: [],
    });

    globeRef.current = globe;

    let animationFrameId: number;

    const animate = () => {
      // 1. Check if Focus Dhaka animation is playing
      if (focusAnimationRef.current.active) {
        const now = performance.now();
        const elapsed = now - focusAnimationRef.current.startTime;
        const progress = Math.min(1, elapsed / focusAnimationRef.current.duration);
        // Smooth ease-in-out cubic
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        // Shortest angular distance to target phi
        const currentPhi = focusAnimationRef.current.startPhi;
        let deltaPhi = (DHAKA_TARGET_PHI - (currentPhi % (2 * Math.PI))) % (2 * Math.PI);
        if (deltaPhi > Math.PI) deltaPhi -= 2 * Math.PI;
        if (deltaPhi < -Math.PI) deltaPhi += 2 * Math.PI;

        phiRef.current = currentPhi + deltaPhi * ease;
        thetaRef.current =
          focusAnimationRef.current.startTheta +
          (DHAKA_TARGET_THETA - focusAnimationRef.current.startTheta) * ease;

        if (progress >= 1) {
          focusAnimationRef.current.active = false;
        }
      } else if (!isDraggingRef.current) {
        // 2. Momentum / Auto-rotation
        if (Math.abs(velocityRef.current.phi) > 0.0002) {
          phiRef.current += velocityRef.current.phi;
          velocityRef.current.phi *= 0.94; // Deceleration damping
        } else {
          // Continuous gentle auto-spin
          phiRef.current += 0.0028;
        }

        if (Math.abs(velocityRef.current.theta) > 0.0002) {
          thetaRef.current += velocityRef.current.theta;
          velocityRef.current.theta *= 0.94;
          // Clamp latitude tilt
          thetaRef.current = Math.max(-0.6, Math.min(0.7, thetaRef.current));
        }
      }

      // 3. Update Globe WebGL state
      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
      });

      // 4. Calculate Dhaka's 3D projected screen position for DOM overlay
      const phi = phiRef.current;
      const theta = thetaRef.current;

      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);
      const cosPhi = Math.cos(phi);
      const sinPhi = Math.sin(phi);

      // Sphere radius + elevation factor (~0.88)
      const radius = 0.88;
      const tX = dhakaVector[0] * radius;
      const tY = dhakaVector[1] * radius;
      const tZ = dhakaVector[2] * radius;

      // Coordinate rotation
      const c = cosPhi * tX + sinPhi * tZ;
      const s = sinPhi * sinTheta * tX + cosTheta * tY - cosPhi * sinTheta * tZ;
      const zCam = -sinPhi * cosTheta * tX + sinTheta * tY + cosPhi * cosTheta * tZ;

      // Dhaka is facing the camera when zCam > 0
      const isVisible = zCam > -0.05;
      const screenX = ((c + 1) / 2) * width;
      const screenY = ((-s + 1) / 2) * height;

      if (dhakaPinRef.current) {
        // Calculate visibility fade (fade smoothly as it turns towards the edge)
        const opacity = Math.max(0, Math.min(1, (zCam + 0.05) * 4));
        const scale = 0.85 + Math.max(0, zCam) * 0.25;

        dhakaPinRef.current.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) scale(${scale})`;
        dhakaPinRef.current.style.opacity = opacity.toFixed(3);
        dhakaPinRef.current.style.pointerEvents = opacity > 0.3 ? "auto" : "none";
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle container resize
    const handleResize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      globe.update({
        width: width * 2,
        height: height * 2,
      });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      globe.destroy();
    };
  }, []);

  // Pointer Interaction Handlers for rotating the globe
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsInteracting(true);
    focusAnimationRef.current.active = false;
    velocityRef.current = { phi: 0, theta: 0 };
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - pointerStartRef.current.x;
    const deltaY = e.clientY - pointerStartRef.current.y;

    // Drag sensitivity
    const phiDelta = deltaX * 0.0055;
    const thetaDelta = -deltaY * 0.0045;

    phiRef.current += phiDelta;
    thetaRef.current = Math.max(-0.6, Math.min(0.7, thetaRef.current + thetaDelta));

    // Store velocity for momentum when released
    velocityRef.current = {
      phi: phiDelta * 0.7,
      theta: thetaDelta * 0.7,
    };

    pointerStartRef.current = { x: e.clientX, y: e.clientY };

    // Play subtle telegraph clicks during drag at throttle intervals
    const now = Date.now();
    if (now - lastSoundTimeRef.current > 180 && (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2)) {
      playTelegraphClick();
      lastSoundTimeRef.current = now;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsInteracting(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      className="relative select-none flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Vintage Astrolabe / Armillary Outer Rings (SVG) */}
      <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[620px] lg:h-[620px] xl:w-[680px] xl:h-[680px] flex items-center justify-center">
        {/* Outer Brass Astrolabe Calibration Ring */}
        <div className="absolute inset-0 rounded-full border border-brass/30 pointer-events-none" />
        <div className="absolute inset-2 sm:inset-3 rounded-full border-2 border-dashed border-ink/20 pointer-events-none animate-crank-slow" />

        {/* Vintage Astrolabe Cardinal Points — All 4 sides in Crimson Red matching Logo */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[11px] font-bold text-crimson tracking-widest pointer-events-none drop-shadow-sm">
          N • উত্তর
        </div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[11px] font-bold text-crimson tracking-widest pointer-events-none drop-shadow-sm">
          S • দক্ষিণ
        </div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[11px] font-bold text-crimson tracking-widest pointer-events-none drop-shadow-sm">
          W • পশ্চিম
        </div>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 font-mono text-[11px] font-bold text-crimson tracking-widest pointer-events-none drop-shadow-sm">
          E • পূর্ব
        </div>

        {/* Canvas & Interactive Container */}
        <div
          ref={containerRef}
          className={`relative w-[92%] h-[92%] rounded-full overflow-visible ${
            isInteracting ? "cursor-grabbing" : "cursor-grab"
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          role="region"
          aria-label="Interactive 3D Vintage Globe with Dhaka marked in crimson"
          title="Drag mouse or swipe to rotate the globe"
        >
          {/* Subtle celestial sphere background aura */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(14, 14, 14, 0.95) 0%, rgba(20, 16, 12, 0.9) 65%, rgba(227, 30, 36, 0.18) 100%)",
              boxShadow:
                "0 0 50px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(227, 30, 36, 0.15), 0 0 0 3px #1A1A1A",
            }}
          />

          {/* WebGL Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-full block rounded-full"
            style={{ contain: "layout paint size" }}
          />

          {/* Dhaka Prominent Red Marker & Callout Overlay — Clean Red Marker Pin + DHAKA AGENCY Plaque */}
          <div
            ref={dhakaPinRef}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-150 z-20"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative flex items-center justify-center">
              {/* Clean Red Marker Dot on Dhaka */}
              <span className="relative z-10 block w-3.5 h-3.5 rounded-full bg-crimson border-2 border-white shadow-[0_0_10px_#E31E24]" />

              {/* Vintage Callout Plaque — Marked with DHAKA AGENCY (Desktop Only, on mobile globe acts as pure watermark) */}
              <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 pointer-events-auto bg-[#0E0E0E]/95 text-[#FAF7EE] border-2 border-crimson px-3 py-2 rounded-sm shadow-[4px_4px_0px_0px_rgba(227,30,36,0.7)] backdrop-blur-sm whitespace-nowrap group-hover:scale-105 transition-transform">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-ping" />
                  <span className="font-bengali font-bold text-sm text-crimson">ঢাকা এজেন্সি</span>
                  <span className="font-mono text-xs font-bold text-[#FAF7EE] tracking-wider uppercase">
                    DHAKA AGENCY
                  </span>
                  <span className="text-[10px] bg-crimson text-white px-1.5 py-0.2 rounded font-mono font-bold">
                    HQ
                  </span>
                </div>
                <div className="font-mono text-[10px] text-amber-300/90 mt-0.5 flex items-center space-x-1.5">
                  <span>23.8103° N, 90.4125° E</span>
                  <span className="text-crimson font-bold">•</span>
                  <span>ESTD 1904</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Globe Control & Information Badge (Desktop Only) */}
      <div className="mt-2 hidden lg:flex items-center space-x-2.5 bg-parchment-surface/90 border border-ink/40 px-3.5 py-1.5 rounded shadow-sm text-xs font-mono">
        <button
          onClick={handleFocusDhaka}
          className="flex items-center space-x-1.5 text-crimson hover:text-crimson-hover font-bold uppercase transition-colors"
          title="Click to orient globe directly to Dhaka Agency"
        >
          <MapPin className="w-3.5 h-3.5 text-crimson animate-bounce" />
          <span>Focus Dhaka Agency</span>
        </button>
        <span className="text-ink/30">•</span>
        <span className="text-ink/70 flex items-center space-x-1">
          <RotateCw className="w-3 h-3 text-ink/50 inline" />
          <span className="hidden sm:inline">Drag to rotate globe</span>
          <span className="sm:hidden">Drag to spin</span>
        </span>
      </div>
    </div>
  );
}

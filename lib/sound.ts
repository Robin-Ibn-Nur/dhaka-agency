// Vintage sound synthesizer using native Web Audio API (no external asset dependencies)

let audioCtx: AudioContext | null = null;
let projectorOsc: OscillatorNode | null = null;
let projectorGain: GainNode | null = null;
let projectorNoiseInterval: number | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play heavy rubber stamp thud
export function playStampThud() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(32, ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.7, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch {
    // Gracefully handle browser autoplay policies
  }
}

// Play telegraph click / morse pip
export function playTelegraphClick() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(750, ctx.currentTime);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch {
    // Silent fallback
  }
}

// Start or stop silent film projector hum & shutter clicking
export function setProjectorSound(enabled: boolean) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (!enabled) {
      if (projectorGain) {
        projectorGain.gain.setTargetAtTime(0, ctx.currentTime, 0.2);
        setTimeout(() => {
          if (projectorOsc) {
            try {
              projectorOsc.stop();
              projectorOsc.disconnect();
            } catch {}
            projectorOsc = null;
          }
          projectorGain = null;
        }, 300);
      }
      if (projectorNoiseInterval) {
        window.clearInterval(projectorNoiseInterval);
        projectorNoiseInterval = null;
      }
      return;
    }

    if (projectorOsc) return; // already playing

    // Motor rumble
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(45, ctx.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(160, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.setTargetAtTime(0.07, ctx.currentTime, 0.3);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    projectorOsc = osc;
    projectorGain = gain;

    // Rhythmic shutter clicks (approx 16 fps vintage crank rate)
    projectorNoiseInterval = window.setInterval(() => {
      try {
        if (!audioCtx || audioCtx.state !== "running") return;
        const clickOsc = audioCtx.createOscillator();
        const clickGain = audioCtx.createGain();
        clickOsc.type = "square";
        clickOsc.frequency.setValueAtTime(220 + Math.random() * 40, audioCtx.currentTime);
        clickGain.gain.setValueAtTime(0.025, audioCtx.currentTime);
        clickGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);
        clickOsc.connect(clickGain);
        clickGain.connect(audioCtx.destination);
        clickOsc.start();
        clickOsc.stop(audioCtx.currentTime + 0.035);
      } catch {}
    }, 62);
  } catch {
    // Autoplay restrictions
  }
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  IM_Fell_English,
  Noto_Serif_Bengali,
  EB_Garamond,
  Courier_Prime,
  Special_Elite,
  Averia_Serif_Libre,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const shockSurgent = localFont({
  src: "../public/fonts/shock-surgent/shock-surgent.otf",
  variable: "--font-shock-surgent",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-newspaper",
  display: "swap",
  adjustFontFallback: false,
});

const imFellEnglish = IM_Fell_English({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  adjustFontFallback: false,
});

const notoSerifBengali = Noto_Serif_Bengali({
  weight: ["400", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-bengali",
  display: "swap",
  adjustFontFallback: false,
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: false,
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inkbleed",
  display: "swap",
  adjustFontFallback: false,
});

const averiaSerif = Averia_Serif_Libre({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inkbleed-serif",
  display: "swap",
  adjustFontFallback: false,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dhakagency (ঢাকা এজেন্সি) — Purveyors of Bespoke Web Craftsmanship & Commerce",
  description:
    "Early 1900s Old Dacca letterpress & silent cinema picture house aesthetic. Hand-crafting custom Shopify storefronts, editorial WordPress publications, and robust web applications for ambitious modern merchants.",
  keywords: [
    "Dhaka Agency",
    "Dhakagency",
    "Shopify Storefronts",
    "WordPress Mastery",
    "Custom Web Architecture",
    "Digital Marketing",
    "Old Dacca Bioscope",
  ],
  authors: [{ name: "Dhakagency Electric Press" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${shockSurgent.variable} ${playfairDisplay.variable} ${imFellEnglish.variable} ${notoSerifBengali.variable} ${ebGaramond.variable} ${courierPrime.variable} ${specialElite.variable} ${averiaSerif.variable}`}
    >
      <body className="bg-parchment text-ink antialiased selection:bg-crimson selection:text-parchment-surface">
        {/* SVG Filter Definitions for Authentic Letterpress Ink Bleed */}
        <svg
          className="sr-only absolute -top-96 -left-96 w-0 h-0 pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            {/* Subtle natural ink bleed for headlines & titles */}
            <filter id="ink-bleed" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.045"
                numOctaves="2"
                result="paperGrain"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="paperGrain"
                scale="1.2"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacedInk"
              />
              <feGaussianBlur in="displacedInk" stdDeviation="0.3" result="softInk" />
              <feMerge>
                <feMergeNode in="softInk" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Heavy pressed ink bleed for stamps, tickets, and masthead */}
            <filter id="ink-bleed-heavy" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.065"
                numOctaves="3"
                result="stampNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="stampNoise"
                scale="2.2"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacedStamp"
              />
              <feGaussianBlur in="displacedStamp" stdDeviation="0.5" result="bleedBlur" />
              <feComponentTransfer in="bleedBlur" result="inkThreshold">
                <feFuncA type="linear" slope="10" intercept="-1.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="inkThreshold" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {children}
      </body>
    </html>
  );
}

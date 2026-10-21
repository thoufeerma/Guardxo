"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

export default function InCanHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  return (
    <section className="w-full bg-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2F7C5] text-[#101E10] text-xs font-bold uppercase tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-[#101E10]" />
              <span>WET-STATE PRESERVATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#101E10] leading-[1.12] tracking-tight">
              In–Can Preservatives for<br className="hidden sm:inline" /> Water–Based Products
            </h1>

            <div className="flex flex-col gap-2.5">
              <p className="text-base sm:text-lg text-[#101E10] font-semibold leading-relaxed">
                Stop spoilage, gassing, odour and viscosity loss — from the production line to the customer&apos;s shelf.
              </p>

              <p className="text-xs sm:text-sm text-black/75 font-medium leading-relaxed">
                Every water–based product is a place where microbes can grow. GuardExo in-can preservatives keep
                paints, polymer emulsions, adhesives, mineral slurries and other water–based products fresh during
                production and storage. Our range covers the most trusted isothiazolinone chemistries — BIT, MIT and
                CMIT/MIT, on their own and in blends — so you can pick the right protection for your formula, your process
                and your market.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href="#products-range"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1c331c] text-[#C6F19D] py-3.5 px-7 rounded-xl font-bold text-sm sm:text-base transition-all active:scale-98"
              >
                Explore Products
              </a>

              <a
                href="#inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-[#101E10] border border-neutral-300 py-3.5 px-7 rounded-xl font-bold text-sm sm:text-base transition-all shadow-2xs"
              >
                Talk to a Technical Expert
              </a>
            </div>
          </div>

          {/* Right Column: Dark Video Box with White BIT · MIT · CMIT/MIT label matching Figma */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#101E10] shadow-xl border border-neutral-200">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source
                src="/in-can-preservatives/incan preservative wet state preservative.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* White BIT · MIT · CMIT/MIT Badge at bottom-left matching Figma */}
            <div className="absolute bottom-5 left-5 z-10">
              <span className="bg-white text-[#101E10] px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-sm">
                BIT · MIT · CMIT/MIT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

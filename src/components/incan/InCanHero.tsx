"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C6F19D] text-[#101E10] text-xs font-bold uppercase tracking-wider w-fit">
              WET-STATE PRESERVATION
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#101E10] leading-[1.12] tracking-tight">
              In–Can Preservatives
            </h1>

            <p className="text-xl sm:text-2xl text-[#101E10] font-bold leading-snug">
              Stop spoilage, gassing, odour and viscosity loss before products leave the factory.
            </p>

            <p className="text-base sm:text-lg text-black/75 font-normal leading-relaxed max-w-2xl">
              Water-based paints, coatings, adhesives, and polymer emulsions are vulnerable to
              bacterial and fungal contamination during manufacture, packaging, and shelf life.
              Our in-can preservatives provide long-term wet-state stability across a wide pH and
              temperature range.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <a
                href="#products-range"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 px-8 rounded-xl font-bold text-base transition-all shadow-md active:scale-98"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>

              <a
                href="#inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#101E10] border border-neutral-300 py-3.5 px-8 rounded-xl font-bold text-base transition-all shadow-xs"
              >
                Talk to a Technical Expert
              </a>
            </div>
          </div>

          {/* Right Column: Dark Video Box with BIT · MIT · CMIT/MIT label */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-[28px] overflow-hidden bg-[#101E10] shadow-xl border border-neutral-200">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* BIT · MIT · CMIT/MIT Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="bg-[#101E10]/90 backdrop-blur-md border border-white/20 text-[#C6F19D] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md">
                BIT · MIT · CMIT/MIT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

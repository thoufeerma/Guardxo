"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function CustomInquiryBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser requires interaction
        });
      }
    }
  }, []);

  return (
    <section className="w-full bg-white py-10 lg:py-14">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#EDF9DF] p-8 sm:p-12 lg:p-16 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] flex items-center">
          {/* Background Rotating Molecule Video matching Figma */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/4 lg:w-[65%] h-full z-0 pointer-events-none overflow-hidden flex items-center justify-end [mask-image:linear-gradient(to_right,transparent_0%,black_15%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%)]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/custom-inquiry-figma-bg.png"
              className="w-full h-full object-cover object-right pointer-events-none"
            >
              <source src="/Home-page/inquiry-molecule.mp4" type="video/mp4" />
            </video>

            {/* Fading overlay at the left edge of the video to ensure 100% seamless color continuity */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#EDF9DF] to-transparent pointer-events-none" />
          </div>

          {/* Foreground Narrative */}
          <div className="relative z-10 flex flex-col gap-6 sm:gap-7 max-w-full">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#101E10] leading-[1.15] tracking-tight">
                Have an inquiry or a<br className="hidden sm:inline" /> custom requirement?
              </h2>
              <p className="text-sm sm:text-base text-[#101E10]/80 font-normal leading-relaxed whitespace-normal sm:whitespace-nowrap">
                Tell us about your formulation — our technical team responds within one working day.
              </p>
            </div>

            <div>
              <Link
                href="#inquiry"
                className="inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1a301a] text-[#C2EC9A] px-7 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-xs active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

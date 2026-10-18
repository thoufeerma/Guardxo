import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CustomInquiryBanner() {
  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="relative w-full rounded-[28px] overflow-hidden bg-[#DFF4C8]/50 p-8 sm:p-12 lg:p-14 border border-[#C6F19D]/60 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Subtitle, and Contact Us Button below matching Figma */}
          <div className="lg:col-span-7 flex flex-col gap-6 z-10">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#101E10] leading-snug">
                Have an inquiry or a custom requirement?
              </h2>
              <p className="text-sm sm:text-base text-black/80 font-normal leading-relaxed">
                Tell us about your formulation — our technical team responds within one working day.
              </p>
            </div>

            <div>
              <Link
                href="#inquiry"
                className="inline-flex items-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-7 py-3.5 rounded-xl font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Video Loop */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10">
            <div className="relative w-[280px] h-[220px] sm:w-[360px] sm:h-[260px] rounded-2xl overflow-hidden bg-white/80 shadow-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Home-page/Home-hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

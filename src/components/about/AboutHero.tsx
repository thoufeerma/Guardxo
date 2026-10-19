import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="w-full bg-white pt-12 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Top Header & CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C4EF9C]/40 border border-[#B9AEFF]/30 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#101E10] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#101E10]">
                ABOUT GUARDEXO
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#101E10] leading-[1.12] tracking-tight">
              Protecting products and materials from microbial threats.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-[18px] text-black/80 font-normal leading-relaxed">
              GuardExo is the biocides and preservatives brand of Chemtiver Speciality Pvt. Ltd. We develop
              reliable, technically supported solutions that keep paints, coatings, construction
              chemicals, adhesives, inks, agriculture products and water systems performing as
              formulated.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 flex-none pb-2">
            <Link
              href="/#featured-products"
              className="inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-7 py-3.5 rounded-xl font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#211A2B] border border-[#DFD7DD] px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-sm hover:shadow"
            >
              <PhoneCall size={18} className="text-[#101E10]/70" />
              Talk to Technical Team
            </Link>
          </div>
        </div>

        {/* Large Facility Photography / Video Banner */}
        <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[544px] rounded-[24px] overflow-hidden shadow-xl bg-[#101E10]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/About/under the proteting .mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

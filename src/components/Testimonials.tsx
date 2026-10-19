"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "GuardExo CMT 15 completely resolved the severe headspace mold issues we encountered during humid monsoon production cycles. Their technical team conducted on-site testing and dialed in our dosage down to parts-per-million accuracy, saving us substantial cost while upholding complete batch sterility.",
    initials: "VK",
    author: "Head of Manufacturing & Quality Assurance",
    company: "Leading Industrial Coatings Corporation, Gujarat Plant",
  },
  {
    quote:
      "Switching to GuardExo BT 20P allowed our exterior emulsions to pass zero-VOC certifications ahead of schedule. The microbiological testing reports and certificate of analysis provided with every lot gave our European export auditors zero objections.",
    initials: "RS",
    author: "Chief Formulation Scientist",
    company: "Premier Construction Chemicals Ltd., Mumbai",
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            What Our Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
            Trusted on the shop floor
          </h2>
        </div>

        {/* 2-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Testimonial Main Card */}
          <div className="lg:col-span-7 bg-[#C6F19D] rounded-[32px] p-8 sm:p-12 flex flex-col justify-between gap-10 shadow-sm">
            <div className="flex flex-col gap-6">
              {/* Removed quote icon matching Figma */}
              <p className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#211A2B] leading-relaxed pt-2">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-black/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#211A2B] text-white flex items-center justify-center font-bold text-sm">
                  {current.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#211A2B] text-base leading-snug">
                    {current.author}
                  </span>
                  <span className="text-xs sm:text-sm text-black/75">
                    {current.company}
                  </span>
                </div>
              </div>

              {/* Slider Arrows: filled dark circles matching Figma */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-[#101E10] hover:bg-[#1c331c] text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-[#101E10] hover:bg-[#1c331c] text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Chemtiver Speciality Profile Card */}
          <div className="relative overflow-hidden lg:col-span-5 bg-[#101E10] text-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between gap-8 shadow-xl">
            {/* Background Image provided by user */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/Home-page/manufacturing partner.png"
                alt="Manufacturing Partner Background"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-wider text-[#C6F19D] uppercase">
                MANUFACTURING PARTNER
              </span>
              <h3 className="text-2xl sm:text-[28px] font-bold text-white leading-tight">
                Chemtiver Speciality Pvt. Ltd.
              </h3>
              <p className="text-sm text-white/75 font-normal leading-relaxed">
                Speciality biocide manufacturers supplying chemical formulators across Asia-Pacific and
                the Middle East with uncompromising QA/QC integrity.
              </p>

              {/* Reliability Stats Strip */}
              <div className="py-4 my-2 border-y border-[#B9AEFF]/15 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Delivery On-Time</span>
                  <span className="font-bold text-[#C6F19D] text-base">99.4%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">COA Certificate Reliability</span>
                  <span className="font-bold text-[#C6F19D] text-base">100%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Regulatory Acceptance</span>
                  <span className="font-bold text-[#C6F19D] text-base">ISO & REACH Ready</span>
                </div>
              </div>
            </div>

            <Link
              href="#inquiry"
              className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-[#C6F19D] hover:underline group"
            >
              Read all report
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

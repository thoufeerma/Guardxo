import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CustomInquiryBanner() {
  return (
    <section className="w-full bg-[#F5F4F2] py-8 lg:py-12">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="relative w-full rounded-[24px] overflow-hidden bg-[#DFF4C8]/50 p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 border border-[#C6F19D]/60 shadow-sm">
          {/* Background image overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none mix-blend-multiply">
            <Image
              src="/images/custom-requirement-bg.png"
              alt="Custom requirement technical formulation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-right"
            />
          </div>

          {/* Left Text */}
          <div className="relative z-10 flex flex-col gap-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#101E10] leading-snug">
              Have an inquiry or a custom requirement?
            </h2>
            <p className="text-sm sm:text-base text-black/80 font-normal leading-relaxed">
              Tell us about your formulation — our technical team responds within one working day.
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 flex-none">
            <Link
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-7 py-3.5 rounded-xl font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

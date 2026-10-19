import React from "react";
import Image from "next/image";
import {
  FlaskConical,
  LifeBuoy,
  ShieldCheck,
  Clock,
  Lightbulb,
} from "lucide-react";

export default function AboutWhyUs() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            WHY GUARDEXO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#101E10] leading-tight">
            Why manufacturers choose to work with us.
          </h2>
        </div>

        {/* Bento Grid Layout (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Large Card (Spans 2 columns on lg) matching Figma */}
          <div className="lg:col-span-2 bg-[#101E10] text-white rounded-[24px] p-8 sm:p-12 flex flex-col justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center font-bold">
                <FlaskConical size={24} strokeWidth={2} />
              </div>
              <span className="text-xs font-bold tracking-widest text-[#C6F19D] uppercase">
                CORE VALUE
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight">
                Technical depth
              </h3>
              <p className="text-base text-gray-300 font-normal leading-relaxed">
                Chemists who understand your formulation, process and constraints from the ground up,
                guaranteeing optimal dosage and protection without formulation drift.
              </p>
            </div>

            {/* Honeycomb Hexagon Graphic matching Figma */}
            <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0 translate-x-4 translate-y-4 sm:translate-x-0 sm:translate-y-0">
              <Image
                src="/images/why-us-hexagons.svg"
                alt="Chemistry Hexagons"
                width={360}
                height={230}
                className="w-[260px] sm:w-[320px] lg:w-[360px] h-auto object-contain opacity-95"
              />
            </div>
          </div>

          {/* Card 2: Customer Support (LifeBuoy icon matching Figma) */}
          <div className="bg-[#EEFBE2] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center">
              <LifeBuoy size={24} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10]">
                Customer support
              </h4>
              <p className="text-sm text-black/80 font-normal leading-relaxed">
                One-on-one guidance from initial batch screening and plant trials through to recurring
                production and after-sales support.
              </p>
            </div>
          </div>

          {/* Card 3: Regulatory Expertise (ShieldCheck icon matching Figma) */}
          <div className="bg-[#EEFBE2] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center">
              <ShieldCheck size={24} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10]">
                Regulatory expertise
              </h4>
              <p className="text-sm text-black/80 font-normal leading-relaxed">
                Complete documentation, SDS, and compliance assistance aligned for both domestic
                requirements and strict export regulations.
              </p>
            </div>
          </div>

          {/* Card 4: Supply Reliability (Clock icon matching Figma) */}
          <div className="bg-[#EEFBE2] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center">
              <Clock size={24} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10]">
                Supply reliability
              </h4>
              <p className="text-sm text-black/80 font-normal leading-relaxed">
                Dependable supply planning, verified safety stock, and seamless logistics along major
                industrial corridors.
              </p>
            </div>
          </div>

          {/* Card 5: Innovation Capability (Lightbulb icon matching Figma) */}
          <div className="bg-[#EEFBE2] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center">
              <Lightbulb size={24} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10]">
                Innovation capability
              </h4>
              <p className="text-sm text-black/80 font-normal leading-relaxed">
                Continuous active molecule research and synergism development for lower-toxicity,
                high-potency preservative systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

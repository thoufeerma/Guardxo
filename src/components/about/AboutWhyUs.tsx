import React from "react";
import {
  FlaskConical,
  Headphones,
  FileCheck,
  Truck,
  Lightbulb,
} from "lucide-react";

export default function AboutWhyUs() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            WHY GUARDEXO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
            Why manufacturers choose to work with us.
          </h2>
        </div>

        {/* Bento Grid Layout (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Large Card (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 bg-[#101E10] text-white rounded-[24px] p-8 sm:p-12 flex flex-col justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center font-bold">
                <FlaskConical size={24} />
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

            {/* Subtle glow accent */}
            <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[#5AB900]/10 blur-3xl pointer-events-none" />
          </div>

          {/* Card 2: Customer Support */}
          <div className="bg-[#C6F19D]/20 border border-[#C6F19D]/40 rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-white shadow-xs text-[#101E10] flex items-center justify-center">
              <Headphones size={24} />
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

          {/* Card 3: Regulatory Expertise */}
          <div className="bg-[#C6F19D]/20 border border-[#C6F19D]/40 rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-white shadow-xs text-[#101E10] flex items-center justify-center">
              <FileCheck size={24} />
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

          {/* Card 4: Supply Reliability */}
          <div className="bg-[#C6F19D]/20 border border-[#C6F19D]/40 rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-white shadow-xs text-[#101E10] flex items-center justify-center">
              <Truck size={24} />
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

          {/* Card 5: Innovation Capability */}
          <div className="bg-[#C6F19D]/20 border border-[#C6F19D]/40 rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-white shadow-xs text-[#101E10] flex items-center justify-center">
              <Lightbulb size={24} />
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

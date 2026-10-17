import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    num: "01",
    title: "Microbiology",
    text: "Understanding how bacteria, fungi and algae attack wet-state products and applied films under extreme tropical conditions.",
  },
  {
    num: "02",
    title: "Chemistry",
    text: "Selecting the right active chemistry for the system, from isothiazolinones to BIT and CMIT/MIT based synergistic grades.",
  },
  {
    num: "03",
    title: "Formulation Science",
    text: "Compatibility, pH range, dosage calibration and format guidance specifically tailored for your precise plant matrices.",
  },
  {
    num: "04",
    title: "Application Problem Solving",
    text: "Trial protocols, microbiological headspace troubleshooting, and direct on-ground technical support at your plant.",
  },
];

export default function AboutTechnicalExpertise() {
  return (
    <section className="relative w-full bg-[#101E10] text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Molecular Watermark */}
      <div className="absolute -left-20 bottom-10 w-[500px] h-[500px] rounded-full bg-[#5AB900]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-white/90">
              TECHNICAL EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight">
              Chemistry that understands real production conditions.
            </h2>
            <p className="text-base text-gray-300 font-normal leading-relaxed">
              Every grade is developed, tested and supported by a technically driven team that understands
              dosing, compatibility, climate and shelf-life targets.
            </p>
            <div className="pt-2">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 bg-[#C2EC9A] hover:bg-[#b0e67e] text-[#101E10] px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95"
              >
                Explore Solutions & Expertise
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column 4 Technical Pillar Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {PILLARS.map((p) => (
              <div
                key={p.num}
                className="bg-white text-[#101E10] rounded-2xl p-6 sm:p-7 flex flex-col gap-3 shadow-md border border-neutral-200 transition-transform duration-200 hover:-translate-x-1"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#101E10] text-white text-xs font-semibold font-sans flex-none">
                    {p.num}
                  </span>
                  <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10]">
                    {p.title}
                  </h4>
                </div>
                <p className="text-sm sm:text-[15px] text-black/80 font-normal leading-relaxed pl-0 sm:pl-9">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

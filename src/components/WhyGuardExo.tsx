import React from "react";

const REASONS = [
  {
    num: "01",
    title: "Comprehensive Product Range",
    text: "In-can, dry-film and industrial biocide chemistries — all under one roof.",
  },
  {
    num: "02",
    title: "Expertise & Experience",
    text: "Years of hands-on formulation knowledge and plant-level problem solving.",
  },
  {
    num: "03",
    title: "Quality Assurance",
    text: "Every batch tested and released with a Certificate of Analysis.",
  },
  {
    num: "04",
    title: "Reliability & Trust",
    text: "Consistent quality, dependable supply and transparent communication.",
  },
  {
    num: "05",
    title: "Industry-Focused Solutions",
    text: "Grades engineered for the realities of each application and climate.",
  },
  {
    num: "06",
    title: "Customer-Centric Approach",
    text: "Responsive technical and commercial support at every stage.",
  },
];

export default function WhyGuardExo() {
  return (
    <section className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            COMPETITIVE VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight uppercase">
            WHY GUARDEXO
          </h2>
        </div>

        {/* 6 Numbered Editorial Cards (2x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason) => (
            <div
              key={reason.num}
              className="bg-white rounded-[24px] p-7 sm:p-8 border border-neutral-200/70 shadow-xs flex flex-col gap-3.5 hover:shadow-md transition-shadow"
            >
              {/* Dark rounded rectangle number badge placed inline with the card title in regular font */}
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#101E10] text-white text-xs font-semibold font-sans mt-1 flex-none">
                  {reason.num}
                </span>
                <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10] leading-snug">
                  {reason.title}
                </h4>
              </div>

              <p className="text-[15px] sm:text-base text-neutral-600 font-normal leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10 lg:gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            COMPETITIVE VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#101E10] leading-tight tracking-tight uppercase">
            WHY GUARDEXO
          </h2>
        </div>

        {/* 6 Numbered Editorial Cards (3x2 Grid) matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.num}
              className="bg-white rounded-[24px] p-6 sm:p-7 lg:p-8 border-0 shadow-none flex flex-col justify-between gap-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              {/* Dark rounded rectangle number badge with light green text placed inline with title */}
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-[6px] bg-[#101E10] text-[#C6F19D] text-xs font-bold font-[family-name:var(--font-heading)] mt-0.5 sm:mt-1 flex-none">
                  {reason.num}
                </span>
                <h4 className="text-[19px] sm:text-[20px] lg:text-[21px] font-bold text-[#101E10] leading-snug tracking-tight">
                  {reason.title}
                </h4>
              </div>

              <p className="text-[14px] sm:text-[14.5px] text-neutral-600 font-normal leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

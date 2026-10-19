import React from "react";

const MILESTONES = [
  {
    num: "01",
    tag: "MILESTONE",
    title: "Founded as Chemtiver Speciality",
    year: "2018", // Client to confirm year
    highlight: false,
  },
  {
    num: "02",
    tag: "MILESTONE",
    title: "Entry into Biocides & Preservatives",
    year: "2020", // Client to confirm year
    highlight: false,
  },
  {
    num: "03",
    tag: "MILESTONE",
    title: "GuardExo Brand Launched",
    year: "2022", // Client to confirm year
    highlight: false,
  },
  {
    num: "04",
    tag: "MILESTONE",
    title: "Expansion into Export Markets",
    year: "2024", // Client to confirm year
    highlight: false,
  },
  {
    num: "05",
    tag: "MILESTONE",
    title: "Proven Market Leadership",
    year: "ACTIVE OPERATIONS",
    highlight: true,
  },
];

export default function OurJourney() {
  return (
    <section id="journey" className="w-full bg-[#F5F4F2] py-20 lg:py-28 border-t border-neutral-200/60">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
            From a chemicals manufacturer to a specialised biocides partner.
          </h2>
        </div>

        {/* 5 Milestone Columns with Badges above cards matching Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {MILESTONES.map((m) => (
            <div key={m.num} className="flex flex-col gap-3.5">
              {/* Dark rounded rectangle number badge with green number text matching Figma */}
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-[#101E10] text-[#C6F19D] text-xs font-bold font-[family-name:var(--font-heading)] w-fit">
                {m.num}
              </span>

              {/* Milestone Card */}
              <div
                className={`flex-1 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-md min-h-[190px] sm:min-h-[210px] ${
                  m.highlight
                    ? "bg-[#C6F19D] text-[#101E10] shadow-sm border border-[#5AB900]/40"
                    : "bg-white text-[#101E10] border border-neutral-200/80 shadow-2xs"
                }`}
              >
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] font-bold tracking-widest text-[#5AB900] uppercase">
                    {m.tag}
                  </span>
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#101E10] leading-snug">
                    {m.title}
                  </h4>
                </div>

                {/* Bottom line: year for 01-04 with divider line, card 05 as plain text without divider line or black badge */}
                {m.num === "05" ? (
                  <div className="pt-2">
                    <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#101E10]">
                      {m.year}
                    </span>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-black/10">
                    <span className="text-xs sm:text-[13px] font-semibold text-black/60 tracking-wider">
                      {m.year}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

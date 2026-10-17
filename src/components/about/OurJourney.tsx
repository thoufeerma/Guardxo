import React from "react";

const MILESTONES = [
  {
    num: "01",
    tag: "MILESTONE",
    title: "Founded as Chemtiver Speciality",
    detail: "Established core chemical synthesis facility in Gurugram.",
    highlight: false,
  },
  {
    num: "02",
    tag: "MILESTONE",
    title: "Entry into Biocides & Preservatives",
    detail: "Developed initial isothiazolinone & BIT formulations.",
    highlight: false,
  },
  {
    num: "03",
    tag: "MILESTONE",
    title: "GuardExo Brand Launched",
    detail: "Dedicated brand engineered for industrial preservation.",
    highlight: false,
  },
  {
    num: "04",
    tag: "MILESTONE",
    title: "Expansion into Export Markets",
    detail: "Certified REACH-ready grades dispatched to 12+ countries.",
    highlight: false,
  },
  {
    num: "05",
    tag: "MILESTONE",
    title: "Proven Market Leadership",
    detail: "Active Operations across 7 demanding manufacturing sectors.",
    statusBadge: "Active Operations",
    highlight: true,
  },
];

export default function OurJourney() {
  return (
    <section id="journey" className="w-full bg-white py-20 lg:py-28 border-t border-[#EDE7EC]">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Header with dark rounded rectangle number badge inline */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-[#101E10] text-[#C6F19D] text-xs font-semibold font-sans">
              01
            </span>
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              OUR JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
            From a chemicals manufacturer to a specialised biocides partner.
          </h2>
        </div>

        {/* 5 Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {MILESTONES.map((m) => (
            <div
              key={m.num}
              className={`rounded-2xl p-6 flex flex-col justify-between gap-8 transition-all duration-300 hover:shadow-md ${
                m.highlight
                  ? "bg-[#C6F19D] text-[#101E10] shadow-sm border border-[#5AB900]/40"
                  : "bg-white text-[#101E10] border border-neutral-200"
              }`}
            >
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-bold tracking-widest text-[#5AB900] uppercase">
                  {m.tag}
                </span>

                {/* Dark rounded rectangle number badge placed inline with the card title */}
                <h4 className="text-lg sm:text-[19px] font-bold text-[#101E10] leading-snug flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-[#101E10] text-white text-xs font-semibold font-sans flex-none">
                    {m.num}
                  </span>
                  <span>{m.title}</span>
                </h4>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-black/10">
                <p className="text-xs text-black/75 leading-relaxed font-normal">
                  {m.detail}
                </p>
                {m.statusBadge && (
                  <span className="w-fit text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#101E10] text-[#C6F19D] font-sans">
                    {m.statusBadge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

const ABOUT_STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "30+", label: "Team Members" },
  { value: "20+", label: "Active Products" },
  { value: "07", label: "Industries Served" },
  { value: "12+", label: "Export Markets" },
];

export default function AboutStatsStrip() {
  return (
    <section className="w-full bg-[#F5F4F2] border-y border-[#EDE7EC]">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EDE7EC]">
          {ABOUT_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1.5 pt-4 sm:pt-0 ${
                idx !== 0 ? "sm:pl-6 lg:pl-8" : ""
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#101E10] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-black/80 font-normal leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

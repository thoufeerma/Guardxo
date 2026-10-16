import React from "react";

const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "20+", label: "Biocide & Preservative Grades" },
  { value: "07", label: "Industries Served" },
  { value: "12+", label: "Export Markets" },
];

export default function StatsStrip() {
  return (
    <section className="w-full bg-[#F5F4F2] border-t border-[#EDE7EC]">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EDE7EC]">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 py-4 md:py-0 ${
                idx === 0
                  ? "md:pr-8"
                  : idx === STATS.length - 1
                  ? "md:pl-8"
                  : "md:px-8"
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-[#101E10] tracking-tight">
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

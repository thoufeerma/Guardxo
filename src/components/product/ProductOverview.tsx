"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Wind,
  Droplet,
  CheckCircle2,
} from "lucide-react";

function Dots3x3Icon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <circle cx="3" cy="3" r="1.3" />
      <circle cx="8" cy="3" r="1.3" />
      <circle cx="13" cy="3" r="1.3" />
      <circle cx="3" cy="8" r="1.3" />
      <circle cx="8" cy="8" r="1.3" />
      <circle cx="13" cy="8" r="1.3" />
      <circle cx="3" cy="13" r="1.3" />
      <circle cx="8" cy="13" r="1.3" />
      <circle cx="13" cy="13" r="1.3" />
    </svg>
  );
}

export default function ProductOverview() {
  const [activeTab, setActiveTab] = useState<"how-it-works" | "why-20">("how-it-works");

  const issues = [
    { label: "Go sour", icon: AlertTriangle },
    { label: "Smell bad", icon: Wind },
    { label: "Lose thickness", icon: Droplet },
    { label: "Grow surface mould", icon: Dots3x3Icon },
    { label: "Container gas pressure", icon: AlertTriangle },
  ];

  const steps = [
    {
      step: "01",
      title: "Enters the cell",
      description:
        "BIT molecules penetrate the microbial cellular barrier rapidly and react specifically with vital sulphur–containing (thiol) protein linkages.",
    },
    {
      step: "02",
      title: "Blocks the enzymes",
      description:
        "These sensitive groups are critical for respiratory metabolism and ATP synthesis. Deactivation halts cellular reproduction immediately, inducing cell death.",
    },
    {
      step: "03",
      title: "Hard to resist",
      description:
        "Because BIT neutralizes multiple metabolic enzyme cascades at once, cross–resistance among bacterial strains is virtually non–existent, ensuring uniform batch protection.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F4F2] py-16 sm:py-20 lg:py-24 border-y border-neutral-200/60">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Overview Narrative & Unprotected Risks */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#5AB900]">
                OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#101E10] leading-[1.12] tracking-tight">
                What is GuardExo BT 20?
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-[15px] text-neutral-700 font-medium leading-relaxed">
              <p>
                GuardExo BT 20 is an in–can preservative engineered for long–term liquid stabilization. That
                means it shields a water–based product during critical warehouse shelf time before
                application. Any aqueous formula—such as paint, glue, or polymer latex—is prime fertile
                territory for ambient microbes.
              </p>
              <p>
                The active substance is 1,2-benzisothiazolin–3–one (BIT), one of the world&apos;s most trusted
                preservation chemistries. GuardExo BT 20 delivers this in a stable 20% solution in
                dipropylene glycol and water, eliminating cumbersome solid handling, powder dust
                inhalation risks, or complex dissolutions.
              </p>
            </div>

            {/* Unprotected Issues: Directly on background without grey box */}
            <div className="flex flex-col gap-3 pt-2">
              <p className="text-[15px] sm:text-base font-bold text-[#101E10]">
                Water–based batches can face these issues when left unprotected:
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {issues.map((issue, idx) => {
                  const Icon = issue.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-xs sm:text-[13px] font-medium bg-[#C6F19D] text-[#101E10] transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#101E10] flex-none" />
                      <span>{issue.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: White Card with Segmented Tabs & 3-Step Mechanism */}
          <div className="lg:col-span-6 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-9 shadow-sm border border-neutral-200/40 flex flex-col gap-7">
            {/* Tab Selector */}
            <div className="flex items-center bg-[#F5F4F2] p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveTab("how-it-works")}
                className={`flex-1 py-2 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  activeTab === "how-it-works"
                    ? "bg-white text-[#101E10] shadow-xs"
                    : "text-[#101E10]/70 hover:text-[#101E10]"
                }`}
              >
                How BIT works
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("why-20")}
                className={`flex-1 py-2 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  activeTab === "why-20"
                    ? "bg-white text-[#101E10] shadow-xs"
                    : "text-[#101E10]/70 hover:text-[#101E10]"
                }`}
              >
                Why a 20% solution?
              </button>
            </div>

            {/* Tab 1 Content: Three Numbered Steps with Inline Badges */}
            {activeTab === "how-it-works" && (
              <div className="flex flex-col gap-6 pt-1 animate-in fade-in duration-200">
                {steps.map((st, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#101E10] text-[#C6F19D] text-xs font-bold px-2 py-0.5 rounded-[5px] flex items-center justify-center leading-none">
                        {st.step}
                      </span>
                      <h3 className="text-xl sm:text-[22px] font-bold text-[#101E10] tracking-tight">
                        {st.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13.5px] text-neutral-600 font-medium leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2 Content */}
            {activeTab === "why-20" && (
              <div className="flex flex-col gap-5 pt-1 animate-in fade-in duration-200">
                <div className="bg-[#EEFBE2] rounded-xl p-4 border border-[#C6F19D]">
                  <span className="text-xs font-bold text-[#101E10] uppercase tracking-wider block mb-1">
                    Ready-To-Use Liquid Formulation
                  </span>
                  <p className="text-xs sm:text-[13.5px] text-neutral-700 font-medium leading-relaxed">
                    Pure BIT is a difficult solid crystalline powder. Our 20% solution in dipropylene glycol guarantees zero dust hazard and instant homogeneous dispersion.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#5AB900] flex-none" />
                    <span className="text-sm font-semibold text-[#101E10]">No heating or pre-dissolution required</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#5AB900] flex-none" />
                    <span className="text-sm font-semibold text-[#101E10]">Pumpable and meterable in automated dosing loops</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#5AB900] flex-none" />
                    <span className="text-sm font-semibold text-[#101E10]">Freeze-thaw stable across industrial seasons</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

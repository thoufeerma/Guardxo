"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Biohazard,
  Droplets,
  Bug,
  Gauge,
  CheckCircle2,
} from "lucide-react";

export default function ProductOverview() {
  const [activeTab, setActiveTab] = useState<"how-it-works" | "why-20">("how-it-works");

  const issues = [
    { label: "Go sour", icon: AlertTriangle },
    { label: "Smell bad", icon: Biohazard },
    { label: "Lose thickness", icon: Droplets },
    { label: "Grow surface mould", icon: Bug },
    { label: "Container gas pressure", icon: Gauge },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Issue Chips */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
                OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
                What is GuardExo BT 20?
              </h2>
              <p className="text-base sm:text-lg text-black/85 font-medium leading-relaxed">
                GuardExo BT 20 is an in-can preservative engineered for long-term liquid stabilization.
                It acts as an impenetrable shield for water-based products during critical warehouse shelf
                time and distribution logistics before application.
              </p>
              <p className="text-base sm:text-lg text-black/80 font-medium leading-relaxed">
                The active substance is <span className="font-bold text-[#101E10]">1,2-benzisothiazolin-3-one (BIT)</span>,
                one of the world&apos;s most proven preservation chemistries. GuardExo BT 20 delivers this
                in an ultra-stable 20% liquid solution in dipropylene glycol and water, eliminating cumbersome
                solid powder handling, toxic dust inhalation risks, or complex plant dissolving steps.
              </p>
            </div>

            {/* Unprotected Risks Strip: All 5 issue chips in light green */}
            <div className="bg-[#F5F4F2] rounded-[24px] p-6 sm:p-8 flex flex-col gap-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black/70">
                Water-based batches face these failure risks when left unprotected:
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                {issues.map((issue, idx) => {
                  const Icon = issue.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#EEFBE2] text-[#101E10] border border-[#C6F19D]"
                    >
                      <Icon size={16} className="text-[#5AB900]" />
                      {issue.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive White Card with Two Tabs */}
          <div className="lg:col-span-5 bg-white rounded-[28px] p-6 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col gap-6">
            {/* Tab Selector */}
            <div className="flex items-center bg-[#F5F4F2] p-1.5 rounded-2xl gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("how-it-works")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  activeTab === "how-it-works"
                    ? "bg-white text-[#101E10] shadow-2xs"
                    : "text-black/60 hover:text-[#101E10]"
                }`}
              >
                How BIT Works
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("why-20")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                  activeTab === "why-20"
                    ? "bg-white text-[#101E10] shadow-2xs"
                    : "text-black/60 hover:text-[#101E10]"
                }`}
              >
                Why a 20% Solution?
              </button>
            </div>

            {/* Tab 1 Content: Three Numbered Steps */}
            {activeTab === "how-it-works" && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                <div className="flex flex-col gap-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#101E10] text-[#C6F19D] text-xs font-bold flex items-center justify-center flex-none">
                      01
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-bold text-[#101E10]">
                        Enters the Cell
                      </h4>
                      <p className="text-sm text-black/75 font-medium leading-relaxed">
                        Penetrates microbial cell walls and cytoplasmic membranes swiftly, reaching interior organelle structures.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#101E10] text-[#C6F19D] text-xs font-bold flex items-center justify-center flex-none">
                      02
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-bold text-[#101E10]">
                        Blocks the Enzymes
                      </h4>
                      <p className="text-sm text-black/75 font-medium leading-relaxed">
                        Reacts covalently with critical thiol (-SH) enzyme centers, permanently terminating metabolic respiration and energy synthesis.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#101E10] text-[#C6F19D] text-xs font-bold flex items-center justify-center flex-none">
                      03
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-bold text-[#101E10]">
                        Hard to Resist
                      </h4>
                      <p className="text-sm text-black/75 font-medium leading-relaxed">
                        Multi-site intracellular biocidal attack prevents bacteria from evolving physiological tolerance or enzymatic immunity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 Content */}
            {activeTab === "why-20" && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                <div className="bg-[#EEFBE2] rounded-xl p-4 border border-[#C6F19D]">
                  <span className="text-xs font-bold text-[#101E10] uppercase tracking-wider block mb-1">
                    Ready-To-Use Liquid Formulation
                  </span>
                  <p className="text-sm text-black/80 font-medium leading-relaxed">
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

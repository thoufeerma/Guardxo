"use client";

import React, { useState } from "react";
import { MessageSquare, Plus, Minus } from "lucide-react";

export const INCAN_FAQS = [
  {
    question: "How do I choose between BIT (GuardExo BT Series) and CMIT/MIT (GuardExo CMT Series)?",
    answer:
      "BIT (GuardExo BT 20) is best suited for long-term storage in alkaline formulations (pH 4.0 to 12.0) such as architectural paints and polymer emulsions, where heat stability and zero formaldehyde are essential. CMIT/MIT (GuardExo CMT 15) provides ultra-fast kill kinetics for rapid plant line decontamination at lower cost-in-use, but is sensitive to high pH above 8.5.",
  },
  {
    question: "What causes in-can preservative failure during hot or humid storage?",
    answer:
      "Temperature swings cause water to evaporate from the bulk liquid and condense on the container lid and headspace. This condensed water dilutes the biocide on the top layer, allowing fungal spores and yeasts to bloom. Formulations using GuardExo DUAL 25 or optimized BIT carriers provide volatile-phase biostatic activity to protect the headspace.",
  },
  {
    question: "Can GuardExo in-can biocides be added during the high-speed pigment dispersion stage?",
    answer:
      "Yes. GuardExo BT 20 exhibits thermal resilience up to 100°C and tolerates high-shear dissolvers and bead mills. Adding it early in the grind stage ensures immediate protection of contaminated slurry minerals and process water.",
  },
  {
    question: "Are testing samples and batch-specific COA documents provided for plant evaluation?",
    answer:
      "Yes. We dispatch 500g and 1kg evaluation samples within 48 hours from our Gurugram facility, accompanied by complete technical dossiers, TDS, SDS, and lot-specific Certificates of Analysis.",
  },
];

export default function InCanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
                In–can preservation questions answered
              </h2>
              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                Key questions formulators ask when selecting wet-state biocides for water-based products.
              </p>
            </div>

            {/* Closed questions: no background box, no border, simple plus icon */}
            {/* Open question: inside light grey box */}
            <div className="flex flex-col gap-3">
              {INCAN_FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`transition-all duration-200 ${
                      isOpen
                        ? "bg-neutral-50 rounded-2xl p-6 border border-neutral-200/60"
                        : "bg-transparent border-0 p-4 sm:p-5"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between gap-4 text-left font-bold text-lg sm:text-xl text-[#101E10] hover:text-[#5AB900] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="flex-none text-[#101E10]">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 text-sm sm:text-base text-black/75 font-normal leading-relaxed animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Support Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-[#101E10] text-white rounded-[28px] p-7 sm:p-8 flex flex-col gap-6 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
              <MessageSquare size={24} />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">
                Need dosing advice for your batch?
              </h3>
              <p className="text-sm text-gray-300 font-normal leading-relaxed">
                Our Gurugram microbiology laboratory conducts Minimum Inhibitory Concentration (MIC)
                and challenge tests tailored to your exact raw material matrix.
              </p>
            </div>

            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#C6F19D] hover:bg-[#b0df82] text-[#101E10] py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
            >
              Consult a Chemist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

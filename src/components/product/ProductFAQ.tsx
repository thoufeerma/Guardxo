"use client";

import React, { useState } from "react";
import { MessageSquare, Plus, Minus } from "lucide-react";

export const PRODUCT_FAQS = [
  {
    question: "What is the shelf life of GuardExo BT 20?",
    answer:
      "GuardExo BT 20 has a guaranteed shelf life of 24 months from the date of manufacture when stored in original, unopened containers between 5°C and 40°C away from direct sunlight.",
  },
  {
    question: "Can GuardExo BT 20 be added during the high-temperature pigment dispersion stage?",
    answer:
      "Yes. GuardExo BT 20 exhibits superior thermal stability up to 100°C (and brief exposures up to 120°C). It can be safely incorporated at the high-shear mill-base stage without thermal breakdown or loss of active assay.",
  },
  {
    question: "How does GuardExo BT 20 differ from CMIT/MIT complexes?",
    answer:
      "BIT (1,2-benzisothiazolin-3-one) provides longer-term residual stability in alkaline systems (up to pH 12) and does not sensitize skin at standard in-use dosages. CMIT/MIT offers faster kill at low doses but undergoes rapid alkaline hydrolysis above pH 8.5.",
  },
  {
    question: "Is GuardExo BT 20 compliant with REACH and BIS standards?",
    answer:
      "Yes, GuardExo BT 20 is manufactured strictly under certified chemical production protocols, meets Indian BIS formulation benchmarks, and is SVHC-free with full global regulatory dossiers.",
  },
  {
    question: "Can I request a sample kit and batch-specific Certificate of Analysis (COA)?",
    answer:
      "Absolutely. We provide 500g and 1kg testing sample bottles dispatched within 48 hours from our Gurugram plant, accompanied by a technical dossier, TDS, SDS, and lot-specific Certificate of Analysis.",
  },
];

export default function ProductFAQ() {
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
                FIND OUR ANSWER
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                Everything buyers usually ask before their first order — and if it isn&apos;t covered
                here, we&apos;re one message away.
              </p>
            </div>

            {/* Closed questions: no background box, no border, simple plus icon */}
            {/* Open question: inside light grey box */}
            <div className="flex flex-col gap-3">
              {PRODUCT_FAQS.map((faq, idx) => {
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

          {/* Right Column: Support Box */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-[#101E10] text-white rounded-[28px] p-7 sm:p-8 flex flex-col gap-6 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
              <MessageSquare size={24} />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">
                Still have a question?
              </h3>
              <p className="text-sm text-gray-300 font-normal leading-relaxed">
                Our technical team is happy to help with product selection, dosing calculations,
                compatibility assays, and documentation.
              </p>
            </div>

            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#C6F19D] hover:bg-[#b0df82] text-[#101E10] py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

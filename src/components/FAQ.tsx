"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What products does Chemtiver Speciality manufacture?",
    answer:
      "Under the GuardExo brand, Chemtiver Speciality manufactures a complete range of biocides and preservatives — in-can preservatives, dry-film preservatives and industrial biocides — for paints, coatings, construction chemicals, adhesives, inks, agriculture and water treatment.",
  },
  {
    question: "Which industries do your biocides and preservatives serve?",
    answer:
      "Our formulations protect products across 7 core industries: paints & coatings, construction materials, construction chemicals, adhesives, agriculture, printing inks, and industrial water treatment.",
  },
  {
    question: "Do you offer technical support for product selection?",
    answer:
      "Yes. Our laboratory provides comprehensive microbial challenge testing, compatibility assays, and dosing recommendations tailored to your exact formulations and environmental targets.",
  },
  {
    question: "Can you supply custom chemical solutions?",
    answer:
      "Yes. We formulate customized blends with specific active ingredient percentages, solvent carriers, and pH buffers to suit proprietary production processes.",
  },
  {
    question: "How do I place an order or request a sample quote?",
    answer:
      "You can submit a technical inquiry form below or email us directly at info@chemtiver.com. We provide technical evaluation samples with complete COA documentation within 48 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default matching Figma

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Support Info & Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              FIND OUR ANSWER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-base text-black/80 font-normal leading-relaxed">
              Everything buyers usually ask before their first order — and if it isn&apos;t covered here, we&apos;re one
              message away.
            </p>

            {/* Dark Support Box */}
            <div className="mt-4 bg-[#101E10] text-white rounded-[24px] p-8 flex flex-col gap-6 shadow-xl">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-bold text-white">Still have a question?</h4>
                <p className="text-sm text-white/80 font-normal leading-relaxed">
                  Our technical team is happy to help with product selection, dosing and documentation.
                </p>
              </div>
              <Link
                href="#inquiry"
                className="w-fit inline-flex items-center justify-center bg-[#C2EC9A] hover:bg-[#b0e67e] text-[#101E10] px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[#F5F4F2] border border-neutral-300/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg sm:text-[20px] text-[#101E10] hover:text-[#5AB900] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="flex-none w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101E10] shadow-xs">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-black/80 font-normal leading-relaxed border-t border-neutral-200/50 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

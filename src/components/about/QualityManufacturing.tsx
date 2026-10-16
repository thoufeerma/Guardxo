import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const QA_POINTS = [
  "Batch-to-batch chemical and biological consistency",
  "Documented testing procedures for active concentration",
  "COA, TDS and SDS support for regulatory clearance",
  "Safe handling and plant storage guidance for every product",
];

export default function QualityManufacturing() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Laboratory Quality Photo */}
          <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] rounded-[24px] overflow-hidden shadow-xl bg-[#101E10]">
            <Image
              src="/images/about-quality-lab.png"
              alt="Quality Control Testing and Active Concentration Assay Lab"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right QA Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              QUALITY & MANUFACTURING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
              Consistency you can verify, batch after batch.
            </h2>
            <p className="text-base sm:text-lg text-black/80 font-medium">
              Rigorous Quality Assurance Standards
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-4 pt-2">
              {QA_POINTS.map((pt) => (
                <div key={pt} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#C6F19D] flex items-center justify-center flex-none mt-0.5">
                    <CheckCircle2 size={16} className="text-[#101E10]" />
                  </div>
                  <span className="text-sm sm:text-base text-black/85 font-medium leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

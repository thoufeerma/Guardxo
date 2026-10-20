"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Check,
  Info,
  AlertTriangle,
  Quote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ArticleBody() {
  const [feedbackSent, setFeedbackSent] = useState(false);

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Article Content (8 Cols) */}
          <article className="lg:col-span-8 flex flex-col gap-12 text-[#101E10]">
            {/* Lead Intro Paragraph */}
            <p className="text-[15px] sm:text-[16px] text-black/85 font-normal leading-[1.65]">
              Industrial water-borne emulsions, architectural wall paints, and composite
              construction chemicals operate under continuous microbiological vulnerability.
              Specifying the wrong preservative mechanism—or conflating wet-state protection with
              cured film durability—routinely results in premature batch foul-outs, container bloat,
              or disfiguring fungal and algal outbreaks upon application.
            </p>

            {/* 01. Fundamental Difference */}
            <div id="section-01" className="flex flex-col gap-5 scroll-mt-28">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#101E10] leading-tight tracking-tight">
                01. Fundamental Difference: Wet–State vs Applied Film
              </h2>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                In-can biocides (pot preservation) preserve the physical and microbiological
                integrity of aqueous formulations within closed shipping and storage vessels. Their
                kinetic duty focuses strictly on eliminating vegetative bacterial colonies
                introduced via contaminated process water, minerals, starches, or packaging lines
                before the product reaches the end contractor.
              </p>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                Conversely, dry-film preservatives (fungicides and algaecides) remain intentionally
                inert until the coating or sealant is applied, the volatile solvents evaporate, and
                atmospheric weathering commences. They must withstand UV degradation, continuous
                precipitation leaching, and severe environmental fungal spore pressures across
                multi-year cycles.
              </p>

              {/* Checkpoint Items - light green circle with dark checkmark, bold text, exact Figma spacing */}
              <div className="flex flex-col gap-5 sm:gap-6 my-2 sm:my-3">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none mt-0.5">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <p className="text-[15px] sm:text-[16px] font-bold text-[#101E10] leading-snug">
                    <span className="font-extrabold">In–Can Duty Cycle:</span> Rapid bacterial kill
                    kinetic, high water solubility, broad pH tolerance (6.0 to 11.5).
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none mt-0.5">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <p className="text-[15px] sm:text-[16px] font-bold text-[#101E10] leading-snug">
                    <span className="font-extrabold">Dry–Film Duty Cycle:</span> Controlled low leaching
                    rate, UV photostability, specific antimycotic and antialgal spectrum.
                  </p>
                </div>
              </div>

              {/* Pull Quote - Plain grey background with upright text and double quote mark */}
              <div className="bg-[#F5F4F2] rounded-[24px] p-6 sm:p-8 flex items-start gap-4 mt-2">
                <svg
                  className="w-6 h-6 text-[#101E10] flex-none mt-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base sm:text-lg font-bold text-[#101E10] leading-snug">
                  &ldquo;Preservation is not merely a biocidal barrier; it is an active kinetic
                  equilibrium tailored to the vessel headspace, binder chemistry, and long-term film
                  exposure.&rdquo;
                </p>
              </div>
            </div>

            {/* 02. Microbial Attack Vectors & In-Can Spoilage */}
            <div id="section-02" className="flex flex-col gap-5 scroll-mt-28">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#101E10] leading-tight tracking-tight">
                02. Microbial Attack Vectors & In–Can Spoilage
              </h2>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                Bacterial contamination in wet formulations predominantly originates from
                Gram-negative species such as Pseudomonas aeruginosa, Burkholderia cepacia, and
                Enterobacter. In conditions of poor ventilation or fluctuating ambient storage
                temperatures, moisture condenses on the container ceiling, producing an
                unpreserved aqueous micro-zone.
              </p>

              {/* Technical Note Alert - Plain grey background without border */}
              <div className="bg-[#F5F4F2] rounded-2xl p-6 sm:p-7 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-[#101E10]">
                  <Info size={18} strokeWidth={2.5} className="flex-none" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    TECHNICAL NOTE: HEADSPACE PROTECTION
                  </span>
                </div>
                <p className="text-[13px] sm:text-[14px] text-black/80 font-normal leading-relaxed">
                  When ambient warehouse temperature fluctuates past ±12°C, condensed water
                  droplets in the drum headspace dilute the protective biocide concentration.
                  Formulations integrating slight volatile-phase biostatic activity (such as
                  formulated bronopol or specialized triazine matrices) mitigate top-layer fungal
                  blooms.
                </p>
              </div>

              {/* Safe Handling Alert - Plain grey background without border */}
              <div className="bg-[#F5F4F2] rounded-2xl p-6 sm:p-7 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-[#101E10]">
                  <AlertTriangle size={18} strokeWidth={2.5} className="flex-none" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    SAFE HANDLING & STORAGE
                  </span>
                </div>
                <p className="text-[13px] sm:text-[14px] text-black/80 font-normal leading-relaxed">
                  Liquid isothiazolinones (specifically CMIT/MIT complexes) are concentrated
                  sensitizers. Ensure automated closed-loop metering pumps are utilized in paint
                  tinting and base synthesis halls to keep operator dermal exposure at zero ppm.
                </p>
              </div>

              {/* Microbiology Image without border */}
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden bg-[#101E10] mt-2">
                <Image
                  src="/article/mobility attack.jpg"
                  alt="Microbial challenge test and bacterial culture assay"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* 03. Dry-Film Protection */}
            <div id="section-03" className="flex flex-col gap-5 scroll-mt-28">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#101E10] leading-tight tracking-tight">
                03. Dry–Film Protection Under Extreme Humidity
              </h2>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                In exterior architectural finishes, coastal facade mortars, and elastomer roof
                coatings across monsoon belts, the cured polymer matrix is attacked by filamentous
                fungi (Aspergillus niger, Penicillium funiculosum) and single-celled algae
                (Chlorella vulgaris). Biocidal release kinetics must be chemically metered through
                controlled-release carrier technology.
              </p>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                If the dry-film active possesses excessive water solubility, torrential rainfall
                leaches 80% of the active fraction within 90 days. Encapsulated Octylisothiazolinone
                (OIT) and Diuron complexes provide calibrated micro-diffusion, protecting facades for
                up to 60 months.
              </p>
            </div>

            {/* 04. Regulatory Thresholds & Matrix Table */}
            <div id="section-04" className="flex flex-col gap-5 scroll-mt-28">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#101E10] leading-tight tracking-tight">
                04. Regulatory Thresholds & Matrix Compatibility
              </h2>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                Global regulatory shifts under EU BPR Regulation 528/2012 and BIS national
                guidelines mandate stringent classification thresholds for sensitisers like MIT
                (&lt;15 ppm requires H317 hazard warnings). Formulators must pivot toward
                synergistic combinations:
              </p>

              {/* Table matching Figma */}
              <div className="w-full overflow-x-auto rounded-2xl border border-neutral-300">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#101E10] text-white uppercase text-[11px] sm:text-xs font-bold tracking-wider">
                    <tr>
                      <th className="py-4 px-5">CHEMISTRY ACTIVE</th>
                      <th className="py-4 px-5">TARGETMICROORGANISMS</th>
                      <th className="py-4 px-5">RECOMMENDEDPHASE</th>
                      <th className="py-4 px-5">REGULATORY STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#101E10]">
                        BIT (1,2-Benzisothiazolin-3-one)
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Gram+ and Gram- Bacteria
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Wet In-Can (Bulk)
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Approved PT 6, PT 13
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#101E10]">
                        CMIT/MIT (3:1 blend)
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Broad Spectrum Shock Kill
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Wet In-Can / Process
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        &lt;15 ppm sens. limit
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#101E10]">
                        OIT (2-n-Octyl-4-isothiazolin-3-one)
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Fungi, Moulds, Mildew
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Cured Dry-Film
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Approved PT 7, PT 9, PT 10
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#101E10]">
                        IPBC + Terbutryn
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Deep Fungal & Green Algae
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Exterior Dry-Film
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Low VOC compliant
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 05. Selection Matrix & Dosage Guide */}
            <div id="section-05" className="flex flex-col gap-5 scroll-mt-28">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#101E10] leading-tight tracking-tight">
                05. Selection Matrix & Dosage Formulation Guide
              </h2>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                When establishing dosage boundaries for an architectural emulsion, formulators must
                never overdose in-can agents in the hope of conferring dry-film efficacy. In-can
                actives migrate to the air–paint interface and evaporate or wash out during film
                cure, leaving the binder defenseless within weeks.
              </p>

              <p className="text-[14px] sm:text-[15px] text-black/80 font-normal leading-[1.65]">
                A balanced regime combines 0.10% – 0.20% GuardExo BT 20P for vessel stability,
                alongside 0.40% – 0.80% GuardExo BT 10 MW micro-dispersion for long-term dry film
                resilience. Always confirm compatibility via 14-day oven aging (54°C) to monitor
                viscosity stability and active retention.
              </p>
            </div>

            {/* Helpful Feedback Widget - Sitting cleanly on page without enclosing box/border */}
            <div className="flex flex-col gap-3.5 pt-4">
              <span className="text-base sm:text-lg font-bold text-[#101E10]">
                Was this article helpful to your formulation work?
              </span>

              <div className="flex items-center gap-4">
                {feedbackSent ? (
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#5AB900] bg-[#C6F19D]/50 px-4 py-2 rounded-xl">
                    <CheckCircle2 size={16} />
                    Thank you for your feedback!
                  </span>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setFeedbackSent(true)}
                      className="inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1c331c] text-[#C6F19D] px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-xs"
                    >
                      Very Helpful
                    </button>
                    <a
                      href="#inquiry"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors"
                    >
                      Needs help
                      <ArrowRight size={15} />
                    </a>
                  </>
                )}
              </div>
            </div>
          </article>

          {/* Sticky Sidebar (4 Cols) - "Have a question" card only, no TOC box */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
            {/* Ask to Team Card matching Figma */}
            <div className="bg-[#F5F4F2] rounded-[24px] p-6 sm:p-8 flex flex-col gap-5 border-0 shadow-none">
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#101E10] leading-tight">
                Have a question about this topic?
              </h3>

              <p className="text-sm sm:text-base text-black/75 font-normal leading-relaxed">
                Submit your active system details for direct input from our analytical microbiology
                lab.
              </p>

              <a
                href="#inquiry"
                className="w-full inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1c331c] text-[#C6F19D] py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer active:scale-98"
              >
                Ask to team
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

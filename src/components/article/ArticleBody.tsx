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
  HelpCircle,
} from "lucide-react";

export default function ArticleBody() {
  const [feedbackSent, setFeedbackSent] = useState(false);

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Article Content (8 Cols) */}
          <article className="lg:col-span-8 flex flex-col gap-14 text-[#101E10]">
            {/* Lead Intro Paragraph */}
            <p className="text-lg sm:text-xl text-black/85 font-normal leading-relaxed">
              Industrial water-borne emulsions, architectural wall paints, and composite
              construction chemicals operate under continuous microbiological vulnerability.
              Specifying the wrong preservative mechanism—or conflating wet-state protection with
              cured film durability—routinely results in premature batch foul-outs, container bloat,
              or disfiguring fungal and algal outbreaks upon application.
            </p>

            {/* 01. Fundamental Difference */}
            <div id="section-01" className="flex flex-col gap-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#101E10] leading-snug">
                01. Fundamental Difference: Wet–State vs Applied Film
              </h2>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                In-can biocides (pot preservation) preserve the physical and microbiological
                integrity of aqueous formulations within closed shipping and storage vessels. Their
                kinetic duty focuses strictly on eliminating vegetative bacterial colonies
                introduced via contaminated process water, minerals, starches, or packaging lines
                before the product reaches the end contractor.
              </p>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                Conversely, dry-film preservatives (fungicides and algaecides) remain intentionally
                inert until the coating or sealant is applied, the volatile solvents evaporate, and
                atmospheric weathering commences. They must withstand UV degradation, continuous
                precipitation leaching, and severe environmental fungal spore pressures across
                multi-year exterior cycles.
              </p>

              {/* Checkpoint Items */}
              <div className="flex flex-col gap-3.5 py-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#101E10]">
                    <span className="font-bold">In-Can Duty Cycle:</span> Rapid bacterial kill
                    kinetic, high water solubility, broad pH tolerance (6.0 to 11.5).
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#101E10]">
                    <span className="font-bold">Dry-Film Duty Cycle:</span> Controlled low leaching
                    rate, UV photostability, specific antimycotic and antialgal spectrum.
                  </p>
                </div>
              </div>

              {/* Pull Quote */}
              <div className="bg-[#F5F4F2] rounded-2xl p-6 sm:p-8 flex items-start gap-4">
                <Quote size={24} className="text-[#101E10]/50 flex-none mt-1" />
                <p className="text-base sm:text-lg font-bold text-[#101E10] leading-relaxed">
                  &ldquo;Preservation is not merely a biocidal barrier; it is an active kinetic
                  equilibrium tailored to the vessel headspace, binder chemistry, and long-term film
                  exposure.&rdquo;
                </p>
              </div>
            </div>

            {/* 02. Microbial Attack Vectors & In-Can Spoilage */}
            <div id="section-02" className="flex flex-col gap-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#101E10] leading-snug">
                02. Microbial Attack Vectors & In-Can Spoilage
              </h2>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                Bacterial contamination in wet formulations predominantly originates from
                Gram-negative species such as <span className="italic font-semibold">Pseudomonas aeruginosa</span>,{" "}
                <span className="italic font-semibold">Burkholderia cepacia</span>, and{" "}
                <span className="italic font-semibold">Enterobacter</span>. In conditions of poor
                ventilation or fluctuating ambient storage temperatures, moisture condenses on the
                container ceiling, producing an unpreserved aqueous micro-zone.
              </p>

              {/* Technical Note Alert */}
              <div className="bg-neutral-50 border border-neutral-300 rounded-xl p-5 flex items-start gap-3.5">
                <Info size={20} className="text-[#5AB900] flex-none mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                    TECHNICAL NOTE: HEADSPACE PROTECTION
                  </span>
                  <p className="text-sm text-black/80 font-normal leading-relaxed">
                    When ambient warehouse temperature fluctuates past ±12°C, condensed water
                    droplets in the drum headspace dilute the protective biocide concentration.
                    Formulations integrating slight volatile-phase biostatic activity (such as
                    formulated bronopol or specialized triazine matrices) mitigate top-layer fungal
                    blooms.
                  </p>
                </div>
              </div>

              {/* Safe Handling Alert */}
              <div className="bg-neutral-50 border border-neutral-300 rounded-xl p-5 flex items-start gap-3.5">
                <AlertTriangle size={20} className="text-amber-600 flex-none mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                    SAFE HANDLING & STORAGE
                  </span>
                  <p className="text-sm text-black/80 font-normal leading-relaxed">
                    Liquid isothiazolinones (specifically CMIT/MIT complexes) are concentrated
                    sensitizers. Ensure automated closed-loop metering pumps are utilized in paint
                    tinting and base synthesis halls to keep operator dermal exposure at zero ppm.
                  </p>
                </div>
              </div>

              {/* Microbiology Image */}
              <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md bg-[#101E10] border border-neutral-200 mt-2">
                <Image
                  src="/article/mobility attack.jpg"
                  alt="Microbial challenge test and bacterial culture assay"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-black/60 italic text-center -mt-2">
                Figure 1: Bacterial agar challenge plate testing preservative efficacy against environmental microbial strains.
              </p>
            </div>

            {/* 03. Dry-Film Protection */}
            <div id="section-03" className="flex flex-col gap-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#101E10] leading-snug">
                03. Dry–Film Protection Under Extreme Humidity
              </h2>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                In exterior architectural finishes, coastal facade mortars, and elastomer roof
                coatings across monsoon belts, the cured polymer matrix is attacked by filamentous
                fungi (<span className="italic font-semibold">Aspergillus niger</span>,{" "}
                <span className="italic font-semibold">Penicillium funiculosum</span>) and
                single-celled algae (<span className="italic font-semibold">Chlorella vulgaris</span>).
                Biocidal release kinetics must be chemically metered through controlled-release
                carrier technology.
              </p>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                If the dry-film active possesses excessive water solubility, torrential rainfall
                leaches 80% of the active fraction within 90 days. Encapsulated Octylisothiazolinone
                (OIT) and Diuron complexes provide calibrated micro-diffusion, protecting facades for
                up to 60 months.
              </p>
            </div>

            {/* 04. Regulatory Thresholds & Matrix Table */}
            <div id="section-04" className="flex flex-col gap-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#101E10] leading-snug">
                04. Regulatory Thresholds & Matrix Compatibility
              </h2>

              <p className="text-base text-black/80 font-normal leading-relaxed">
                Global regulatory shifts under EU BPR Regulation 528/2012 and BIS national
                guidelines mandate stringent classification thresholds for sensitisers like MIT
                (&lt;15 ppm requires H317 hazard warnings). Formulators must pivot toward
                synergistic combinations:
              </p>

              {/* Table matching Figma */}
              <div className="w-full overflow-x-auto rounded-2xl border border-neutral-200/80 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#101E10] text-[#C6F19D] uppercase text-[11px] font-bold tracking-wider">
                    <tr>
                      <th className="py-4 px-5">CHEMISTRY ACTIVE</th>
                      <th className="py-4 px-5">TARGET MICROORGANISMS</th>
                      <th className="py-4 px-5">RECOMMENDED PHASE</th>
                      <th className="py-4 px-5">REGULATORY STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-bold text-[#101E10]">
                        BIT (1,2-Benzisothiazolin-3-one)
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Gram+ and Gram- Bacteria
                      </td>
                      <td className="py-4 px-5">
                        <span className="bg-[#C6F19D]/60 text-[#101E10] font-semibold px-2.5 py-1 rounded text-xs">
                          Wet In-Can (Bulk)
                        </span>
                      </td>
                      <td className="py-4 px-5 text-black/75">
                        Approved PT 6, PT 13
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-bold text-[#101E10]">
                        CMIT/MIT (3:1 blend)
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Broad Spectrum Shock Kill
                      </td>
                      <td className="py-4 px-5">
                        <span className="bg-[#C6F19D]/60 text-[#101E10] font-semibold px-2.5 py-1 rounded text-xs">
                          Wet In-Can / Process
                        </span>
                      </td>
                      <td className="py-4 px-5 text-black/75">
                        &lt;15 ppm sens. limit
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-bold text-[#101E10]">
                        OIT (2-n-Octyl-4-isothiazolin-3-one)
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Fungi, Moulds, Mildew
                      </td>
                      <td className="py-4 px-5">
                        <span className="bg-[#DFF4C8] text-[#101E10] font-semibold px-2.5 py-1 rounded text-xs">
                          Cured Dry-Film
                        </span>
                      </td>
                      <td className="py-4 px-5 text-black/75">
                        Approved PT 7, PT 9, PT 10
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F5F4F2] transition-colors">
                      <td className="py-4 px-5 font-bold text-[#101E10]">
                        IPBC + Terbutryn
                      </td>
                      <td className="py-4 px-5 text-black/80">
                        Deep Fungal & Green Algae
                      </td>
                      <td className="py-4 px-5">
                        <span className="bg-[#DFF4C8] text-[#101E10] font-semibold px-2.5 py-1 rounded text-xs">
                          Exterior Dry-Film
                        </span>
                      </td>
                      <td className="py-4 px-5 text-black/75">
                        Low VOC compliant
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 05. Selection Matrix & Dosage Guide */}
            <div id="section-05" className="flex flex-col gap-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#101E10] leading-snug">
                05. Selection Matrix & Dosage Formulation Guide
              </h2>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                When establishing dosage boundaries for an architectural emulsion, formulators must
                never overdose in-can agents in the hope of conferring dry-film efficacy. In-can
                actives migrate to the air–paint interface and evaporate or wash out during film
                cure, leaving the binder defenseless within weeks.
              </p>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
                A balanced regime combines <span className="font-bold text-[#101E10]">0.10% – 0.20% GuardExo BT 20P</span> for
                vessel stability, alongside <span className="font-bold text-[#101E10]">0.40% – 0.80% GuardExo BT 10 MW</span> micro-dispersion
                for long-term dry film resilience. Always confirm compatibility via 14-day oven
                aging (54°C) to monitor viscosity stability and active retention.
              </p>
            </div>

            {/* Helpful Feedback Widget */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-t border-neutral-200 mt-4">
              <span className="text-sm sm:text-base font-bold text-[#101E10]">
                Was this article helpful to your formulation work?
              </span>

              <div className="flex items-center gap-3">
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
                      className="inline-flex items-center gap-1.5 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-xs"
                    >
                      Very Helpful
                    </button>
                    <a
                      href="#inquiry"
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors"
                    >
                      Needs help
                      <ArrowRight size={14} />
                    </a>
                  </>
                )}
              </div>
            </div>
          </article>

          {/* Sticky Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
            {/* Ask to Team Card */}
            <div className="bg-white border border-neutral-200 rounded-[24px] p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center flex-none">
                <HelpCircle size={22} />
              </div>

              <h3 className="text-xl font-bold text-[#101E10] leading-tight">
                Have a question about this topic?
              </h3>

              <p className="text-sm text-black/75 font-normal leading-relaxed">
                Submit your active system details for direct input from our analytical microbiology
                lab in Gurugram.
              </p>

              <a
                href="#inquiry"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
              >
                Ask to team
                <ArrowRight size={16} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

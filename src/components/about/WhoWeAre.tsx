import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Globe } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {/* Top 2-Column Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight tracking-tight">
              A focused manufacturer of biocides and preservatives.
            </h2>
            <p className="text-base sm:text-[16px] text-black/80 font-normal leading-relaxed">
              GuardExo, owned by Chemtiver, develops high-performance biocides and preservatives for
              modern industrial needs. Our portfolio spans in-can preservatives, dry-film preservatives
              and industrial biocides for paints and coatings, construction materials, construction
              chemicals, adhesives, agriculture, inks and water treatment.
            </p>
            <p className="text-base sm:text-[16px] text-black/80 font-normal leading-relaxed">
              Quality, consistency and compliance guide every formulation. Backed by technical expertise
              and controlled manufacturing, we help partners extend shelf life, maintain performance and
              meet regulatory expectations with confidence.
            </p>
            <div className="pt-2">
              <Link
                href="/#featured-products"
                className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
              >
                See our product range
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Right QA Manager Photo */}
          <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] rounded-[24px] overflow-hidden shadow-xl bg-[#101E10]">
            <Image
              src="/About/who we are.jpg"
              alt="Chemical Plant Quality Assurance Manager in Gurugram Synthesis Plant"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#C6F19D]/50 rounded-[20px] p-8 sm:p-10 flex flex-col gap-4 border border-[#C6F19D] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center">
              <Shield size={24} />
            </div>
            <h3 className="text-2xl sm:text-[32px] font-bold text-[#0B2B12] leading-tight">
              Our Mission
            </h3>
            <p className="text-base text-black/80 leading-relaxed font-normal">
              To develop reliable biocide and preservative solutions that protect products, processes
              and environments, through consistent quality, responsible chemistry and strict
              compliance.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#C6F19D]/50 rounded-[20px] p-8 sm:p-10 flex flex-col gap-4 border border-[#C6F19D] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center">
              <Globe size={24} />
            </div>
            <h3 className="text-2xl sm:text-[32px] font-bold text-[#0B2B12] leading-tight">
              Our Vision
            </h3>
            <p className="text-base text-black/80 leading-relaxed font-normal">
              To be a trusted global name in biocide and preservative technology, delivering
              value-driven solutions that balance performance with environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Globe2,
  FileText,
  ShieldCheck,
  PlaneTakeoff,
  BadgeCheck,
} from "lucide-react";

const CERTIFICATES = [
  { icon: Award, title: "ISO Certification" },
  { icon: Globe2, title: "REACH Readiness" },
  { icon: FileText, title: "Documentation" },
  { icon: ShieldCheck, title: "Quality Management" },
  { icon: PlaneTakeoff, title: "Export Documentation" },
  { icon: BadgeCheck, title: "Other Accreditations" },
];

export default function CertificationsCompliance() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="bg-[#DFF4C8]/50 rounded-[32px] p-8 sm:p-12 lg:p-14 border border-[#C6F19D]/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Narrative */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
                CERTIFICATIONS & COMPLIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
                Built to meet regulatory expectations.
              </h2>
              <p className="text-base text-black/80 font-normal leading-relaxed">
                Our documentation and processes support domestic and export compliance for the markets
                we serve across India, Asia-Pacific, and the Middle East.
              </p>
              <div className="pt-2">
                <Link
                  href="/#featured-products"
                  className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
                >
                  Browse technical resources
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Right Column 3x2 Grid of 6 Tiles */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {CERTIFICATES.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3.5 shadow-sm border border-neutral-200/60 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#101E10]/5 text-[#101E10] flex items-center justify-center">
                      <Icon size={24} className="text-[#101E10]" />
                    </div>
                    <span className="text-sm font-bold text-[#0B2B12] leading-snug">
                      {cert.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

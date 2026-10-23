import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  FlaskConical,
  FileText,
  BadgeCheck,
  Globe,
  CheckCircle2,
} from "lucide-react";

const CERTIFICATES = [
  { icon: Award, line1: "ISO", line2: "Certification" },
  { icon: FlaskConical, line1: "REACH", line2: "Readiness" },
  { icon: FileText, line1: "Documentation", line2: "" },
  { icon: BadgeCheck, line1: "Quality", line2: "Management" },
  { icon: Globe, line1: "Export", line2: "Documentation" },
  { icon: CheckCircle2, line1: "Other", line2: "Accreditations" },
];

export default function CertificationsCompliance() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="bg-[#EAF6DA] rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 lg:p-16 border border-[#D4EEB3] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Narrative */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
                CERTIFICATIONS & COMPLIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#101E10] leading-[1.2]">
                Built to meet regulatory expectations.
              </h2>
              <p className="text-base text-black/80 font-normal leading-relaxed">
                Our documentation and processes support domestic and export compliance for the markets
                we serve across India, Asia–Pacific, and the Middle East.
              </p>
              <div className="pt-2">
                <Link
                  href="/#featured-products"
                  className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
                >
                  Browse technical resources
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
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
                    key={cert.line1 + cert.line2}
                    className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3.5 shadow-xs border border-transparent hover:shadow-md transition-shadow min-h-[140px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center flex-none">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#101E10] leading-snug">
                      {cert.line1}
                      {cert.line2 && (
                        <>
                          <br />
                          {cert.line2}
                        </>
                      )}
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

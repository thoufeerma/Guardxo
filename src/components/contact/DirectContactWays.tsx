import React from "react";
import { Mail, Smartphone, Phone, Clock, ArrowRight } from "lucide-react";

const CONTACT_WAYS = [
  {
    num: "01",
    label: "SALES & INQUIRIES EMAIL",
    value: "sales@chemtiver.com",
    action: "Send email",
    href: "mailto:sales@chemtiver.com",
    icon: Mail,
  },
  {
    num: "02",
    label: "DIRECT MOBILE LINE",
    value: "+91 8130016160",
    action: "Call now",
    href: "tel:+918130016160",
    icon: Smartphone,
  },
  {
    num: "03",
    label: "GURUGRAM OFFICE LANDLINE",
    value: "0124–2292222",
    action: "Call now",
    href: "tel:01242292222",
    icon: Phone,
  },
  {
    num: "04",
    label: "OPERATING BUSINESS HOURS",
    value: "09:00 – 18:30 IST",
    action: "Monday To Saturday",
    href: "#",
    icon: Clock,
  },
];

export default function DirectContactWays() {
  return (
    <section id="direct-contact" className="w-full bg-white py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[13px] font-bold tracking-wider uppercase text-[#5AB900]">
              DIRECT CONTACT
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#101E10] leading-[1.08] tracking-tight">
              Prefer to reach<br />us directly?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-sm">
              Call or email our team. We are happy to help<br className="hidden sm:inline" /> you choose the right chemistry.
            </p>
          </div>

          {/* Right Column: 4 Stacked Rows matching Figma */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {CONTACT_WAYS.map((way) => {
              const Icon = way.icon;
              return (
                <div
                  key={way.num}
                  className="bg-[#F5F4F2] rounded-[24px] py-4.5 px-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-0 shadow-none hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <span className="text-sm sm:text-base font-medium text-neutral-400 flex-none w-6 sm:w-7 text-center">
                      {way.num}
                    </span>
                    <div className="w-12 h-12 rounded-[16px] bg-[#C6F19D] flex items-center justify-center text-[#101E10] flex-none">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] sm:text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                        {way.label}
                      </span>
                      <span className="text-lg sm:text-[22px] font-bold text-[#101E10] leading-snug tracking-tight">
                        {way.value}
                      </span>
                    </div>
                  </div>

                  {way.href !== "#" ? (
                    <a
                      href={way.href}
                      className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold text-[#101E10] hover:text-[#5AB900] group w-fit transition-colors flex-none"
                    >
                      <span>{way.action}</span>
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </a>
                  ) : (
                    <span className="text-sm sm:text-[15px] font-bold text-[#101E10] w-fit flex-none">
                      {way.action}
                    </span>
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

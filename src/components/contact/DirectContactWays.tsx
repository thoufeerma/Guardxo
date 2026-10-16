import React from "react";
import { Mail, Phone, Building2, Clock, ArrowUpRight } from "lucide-react";

const CONTACT_WAYS = [
  {
    num: "01",
    label: "Sales & Inquiries Email",
    value: "sales@chemtiver.com",
    action: "Send email",
    href: "mailto:sales@chemtiver.com",
    icon: Mail,
  },
  {
    num: "02",
    label: "Direct Mobile Line",
    value: "+91 8130016160",
    action: "Call now",
    href: "tel:+918130016160",
    icon: Phone,
  },
  {
    num: "03",
    label: "Gurugram Office Landline",
    value: "0124-2292222",
    action: "Call now",
    href: "tel:01242292222",
    icon: Building2,
  },
  {
    num: "04",
    label: "Operating Business Hours",
    value: "09:00 - 18:30 IST",
    action: "Monday To Saturday",
    href: "#",
    icon: Clock,
  },
];

export default function DirectContactWays() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 border-t border-[#EDE7EC]">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              DIRECT CONTACT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
              Prefer to reach us directly?
            </h2>
            <p className="text-base text-black/80 font-normal leading-relaxed max-w-sm">
              Call or email our team. We are happy to help you choose the right chemistry.
            </p>
          </div>

          {/* Right Column: 4 Stacked Rows */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {CONTACT_WAYS.map((way) => {
              const Icon = way.icon;
              return (
                <div
                  key={way.num}
                  className="bg-[#F5F4F2] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-neutral-200/80 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <span className="text-sm font-mono font-bold text-black/50">
                      {way.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#C6F19D] flex items-center justify-center text-[#101E10] flex-none">
                      <Icon size={22} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-black/70 uppercase tracking-wide">
                        {way.label}
                      </span>
                      <span className="text-lg sm:text-[22px] font-bold text-[#101E10] leading-snug">
                        {way.value}
                      </span>
                    </div>
                  </div>

                  {way.href !== "#" ? (
                    <a
                      href={way.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group w-fit"
                    >
                      {way.action}
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101E10] bg-white px-3 py-1.5 rounded-lg border border-neutral-200 w-fit">
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

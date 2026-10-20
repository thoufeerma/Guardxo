import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ContactLocationMap() {
  return (
    <section id="our-location" className="w-full bg-white py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11 items-stretch">
          {/* Left Column: Header + Info Card */}
          <div className="flex flex-col gap-6 sm:gap-7 justify-between">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-bold tracking-wider uppercase text-[#5AB900]">
                OUR LOCATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#101E10] leading-tight tracking-tight">
                Visit us in Gurugram
              </h2>
            </div>

            {/* Info Card */}
            <div className="bg-[#F5F4F2] rounded-[24px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between gap-6 flex-1 border-0 shadow-none">
              <div className="flex flex-col gap-5">
                {/* Facility Badge */}
                <div className="w-fit bg-white px-3 py-1.5 rounded-[6px] text-[11px] font-semibold text-neutral-800 uppercase tracking-wider">
                  REGISTERED / MANUFACTURING & CORPORATE OFFICE
                </div>

                {/* Company & Address */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl sm:text-[28px] font-bold text-[#101E10] leading-snug tracking-tight">
                    Chemtiver Speciality Pvt. Ltd.
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed">
                    90B, Delhi–Jaipur Expressway, Sector 18, Gurugram, Haryana 122018, India
                  </p>
                </div>

                {/* Logistics & Freight Connectivity Box */}
                <div className="bg-white rounded-[16px] p-4 sm:p-5 flex items-start gap-3 border-0 shadow-none">
                  <MapPin size={18} className="text-[#101E10] flex-none mt-0.5" />
                  <p className="text-xs sm:text-[13px] text-neutral-700 font-normal leading-relaxed">
                    Prominently positioned on the Delhi–Jaipur Expressway arterial industrial corridor with freight connectivity to Nhava Sheva &amp; Mundra.
                  </p>
                </div>
              </div>

              {/* Get Direction Button */}
              <a
                href="https://maps.google.com/?q=Sector+18+Gurugram+Delhi+Jaipur+Expressway"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1a2e1a] text-[#C6F19D] px-6 py-3 rounded-[12px] font-bold text-xs sm:text-[13px] tracking-wide transition-all active:scale-95"
              >
                Get Direction
              </a>
            </div>
          </div>

          {/* Right Column: Map (Spans from top of header to bottom of card) */}
          <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full min-h-[380px] lg:min-h-full rounded-[24px] overflow-hidden bg-[#101E10]">
            <Image
              src="/images/contact-gurugram-map.png"
              alt="Chemtiver Speciality Location on Delhi-Jaipur Expressway Gurugram"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

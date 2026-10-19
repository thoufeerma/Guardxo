import React from "react";
import Image from "next/image";
import { Truck, MapPin, Navigation } from "lucide-react";

export default function ContactLocationMap() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 border-t border-[#EDE7EC]">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            OUR LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
            Visit us in Gurugram
          </h2>
        </div>

        {/* 2-Column Location Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column Address & Logistics Details */}
          <div className="lg:col-span-6 bg-[#F5F4F2] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              {/* Facility Badge */}
              <div className="w-fit bg-[#C6F19D]/50 border border-[#C6F19D] px-3 py-1 rounded-md text-xs font-bold text-[#101E10] uppercase tracking-wider">
                Registered / Manufacturing & Corporate Office
              </div>

              {/* Company & Address */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-[28px] font-bold text-[#101E10] leading-snug">
                  Chemtiver Speciality Pvt. Ltd.
                </h3>
                <div className="flex items-start gap-2.5 text-black/80 text-base leading-relaxed pt-1">
                  <MapPin size={20} className="text-[#5AB900] flex-none mt-1" />
                  <span>
                    90B, Delhi–Jaipur Expressway, Sector 18, Gurugram, Haryana 122018, India
                  </span>
                </div>
              </div>

              {/* Logistics & Freight Connectivity Box */}
              <div className="bg-white rounded-xl p-5 flex items-start gap-3.5 border border-neutral-200/60">
                <div className="w-8 h-8 rounded-lg bg-[#101E10] text-[#C6F19D] flex items-center justify-center flex-none">
                  <Truck size={18} />
                </div>
                <p className="text-sm text-black/80 font-normal leading-relaxed">
                  Prominently positioned on the Delhi–Jaipur Expressway arterial industrial corridor with
                  seamless heavy freight connectivity directly to Nhava Sheva & Mundra commercial export ports.
                </p>
              </div>
            </div>

            {/* Google Maps Direction Button */}
            <a
              href="https://maps.google.com/?q=Sector+18+Gurugram+Delhi+Jaipur+Expressway"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit inline-flex items-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95"
            >
              Get Direction
              <Navigation size={18} />
            </a>
          </div>

          {/* Right Column Map Photography with Location Marker */}
          <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] rounded-[24px] overflow-hidden shadow-xl bg-[#101E10]">
            <Image
              src="/images/contact-gurugram-map.png"
              alt="Chemtiver Speciality Location on Delhi-Jaipur Expressway Gurugram"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

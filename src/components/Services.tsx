"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Headphones,
} from "lucide-react";

// White line icons matching Figma specifications
function MonitorIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="2" x2="22" y1="13" y2="13" />
      <line x1="12" x2="12" y1="17" y2="21" />
      <line x1="8" x2="16" y1="21" y2="21" />
    </svg>
  );
}

function FlaskIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      <path d="M8.5 2h7" />
      <path d="M6.5 16c2-1 4.5 1.5 6.5 0.5s3.5-0.5 4.5 0.5" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function DocumentIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

const SERVICES = [
  {
    icon: MonitorIcon,
    title: "Technical Consultation",
    description:
      "One-on-one guidance from chemists who understand your formulation, process and constraints.",
    isFirst: true,
  },
  {
    icon: FlaskIcon,
    title: "Product Recommendation",
    description:
      "The right grade and dosage for your system, climate and target shelf life.",
    isFirst: false,
  },
  {
    icon: ShieldCheckIcon,
    title: "Application Support",
    description:
      "Trial protocols, compatibility checks and on-ground troubleshooting at your plant.",
    isFirst: false,
  },
  {
    icon: DocumentIcon,
    title: "Regulatory Guidance",
    description:
      "Complete documentation — TDS, SDS and COA — for domestic and export compliance.",
    isFirst: false,
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Responsive follow-up on performance, reorders and every technical query.",
    isFirst: false,
  },
];

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -345, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 345, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
              Support that starts before the sale and continues after it
            </h2>
            <p className="text-base text-black/80 font-normal leading-relaxed max-w-2xl">
              Comprehensive technical and microbial diagnostic support throughout your product development
              cycle.
            </p>
          </div>

          <Link
            href="#inquiry"
            className="hidden sm:inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
          >
            View all services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Service Cards Carousel Track */}
        <div
          id="services-carousel-track"
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-2 pt-2 snap-x snap-mandatory scroll-smooth"
        >
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className={`flex-none w-[275px] sm:w-[295px] lg:w-[305px] min-h-[360px] sm:min-h-[380px] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between gap-8 snap-start transition-transform duration-300 hover:-translate-y-1 border-0 shadow-none ${
                  srv.isFirst
                    ? "bg-[#C6F19D] text-[#101E10]"
                    : "bg-[#EEFBE2] text-[#101E10]"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {/* White line icon inside black square */}
                  <div className="w-12 h-12 rounded-[14px] bg-[#101E10] flex items-center justify-center text-white flex-none">
                    <Icon size={22} className="text-white" />
                  </div>

                  <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10] leading-snug">
                    {srv.title}
                  </h4>

                  <p className="text-sm text-black/80 font-normal leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href="#inquiry"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group pt-2"
                >
                  View details
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Carousel arrows moved to bottom-right below the cards as filled dark circles matching Figma */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            id="services-carousel-prev"
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full bg-[#101E10] hover:bg-[#1c331c] text-[#C6F19D] flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            id="services-carousel-next"
            onClick={scrollRight}
            className="w-11 h-11 rounded-full bg-[#101E10] hover:bg-[#1c331c] text-[#C6F19D] flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  FlaskConical,
  ChevronsUpDown,
  Droplet,
  LayoutGrid,
  Palette,
  AlertTriangle,
  MapPin,
} from "lucide-react";

export default function WhatIsInCan() {
  const signs = [
    {
      title: "Bad smell",
      description: "A sour, rotten–egg or musty odour when the can is opened.",
      icon: FlaskConical,
    },
    {
      title: "Gassing",
      description: "Swollen or bulging containers, or lids that pop.",
      icon: ChevronsUpDown,
    },
    {
      title: "Viscosity loss",
      description: "Paint or glue becomes thin and watery as microbes break down the thickener.",
      icon: Droplet,
    },
    {
      title: "Surface mould",
      description: "Fungal growth on the top of the product or under the lid.",
      icon: LayoutGrid,
    },
    {
      title: "pH drift & colour change",
      description: "The product slowly turns more acidic or changes shade.",
      icon: Palette,
    },
    {
      title: "Customer complaints",
      description: "Batches that pass QC but spoil later in the market.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: The Basics Narrative & Pin Note Box */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8 sm:gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-[#5AB900]">
                THE BASICS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight tracking-tight mt-1">
                What is an in–can preservative?
              </h2>
              <p className="text-sm sm:text-[15px] lg:text-base text-black/75 font-normal leading-relaxed mt-2">
                An in–can preservative is a biocide added in small amounts to a water–based product. It stops bacteria, yeast and fungi from growing while the product sits in the can, drum or storage tank. It is sometimes called a wet–state preservative, because it protects the product while it is still liquid.
              </p>
            </div>

            {/* White note box with pin icon matching Figma exactly */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs">
              <MapPin size={22} className="text-[#101E10] flex-none" />
              <p className="text-xs sm:text-[13px] lg:text-[13.5px] text-neutral-800 font-normal leading-relaxed">
                It is different from a dry–film preservative, which protects the coating after it has been applied and dried on a wall or surface.
              </p>
            </div>
          </div>

          {/* Right Column: Signs your product needs better preservation 2-Column Card */}
          <div className="lg:col-span-6 bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col gap-6 sm:gap-7 shadow-sm border border-neutral-100">
            <h3 className="text-3xl sm:text-[32px] lg:text-[34px] font-bold text-[#101E10] leading-tight tracking-tight">
              Signs your product needs better preservation
            </h3>

            {/* 2-Column Grid of 6 Failure Signs matching Figma */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-8">
              {signs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    {/* Soft lime-green rounded square icon container */}
                    <div className="w-12 h-12 rounded-xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none mt-0.5">
                      <Icon size={22} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] sm:text-base font-bold text-[#101E10]">
                        {item.title}
                      </span>
                      <span className="text-xs sm:text-[13px] text-neutral-700 font-medium leading-snug">
                        {item.description}
                      </span>
                    </div>
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

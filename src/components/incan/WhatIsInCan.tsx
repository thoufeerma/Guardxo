"use client";

import React from "react";
import {
  Pin,
  Biohazard,
  Gauge,
  Droplets,
  Bug,
  FlaskConical,
  MessageSquareWarning,
} from "lucide-react";

export default function WhatIsInCan() {
  const signs = [
    { title: "Bad Smell", description: "Foul odor, souring or hydrogen sulfide gas release", icon: Biohazard },
    { title: "Gassing", description: "Container bloating, bulging lids or package leaks", icon: Gauge },
    { title: "Viscosity Loss", description: "Enzymatic thinning and emulsion breakdown", icon: Droplets },
    { title: "Surface Mould", description: "Fungal skin or yeast colonies in the headspace", icon: Bug },
    { title: "pH Drift & Colour Change", description: "Destabilization and chemical discoloration", icon: FlaskConical },
    { title: "Customer Complaints", description: "Batches failing customer shelf-life audits", icon: MessageSquareWarning },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: The Basics & Pin Note Box */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
                THE BASICS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
                What is an in–can preservative?
              </h2>
              <p className="text-lg sm:text-xl text-black/85 font-normal leading-relaxed pt-1">
                An in-can preservative protects water-based products — paints, adhesives, emulsions,
                and industrial fluids — from microbial contamination while they sit in the container,
                throughout manufacturing, transport, and warehouse shelf life.
              </p>
            </div>

            {/* White note box with pin icon explaining the difference between in-can and dry-film */}
            <div className="bg-[#F5F4F2] rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-2xs flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-white text-[#5AB900] border border-neutral-200 flex items-center justify-center flex-none mt-0.5 shadow-2xs">
                <Pin size={18} className="rotate-45" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                  IN-CAN VS DRY-FILM PRESERVATIVES
                </span>
                <p className="text-sm sm:text-base text-black/80 font-normal leading-relaxed">
                  <span className="font-bold text-[#101E10]">In-can preservatives</span> protect the wet product inside the closed container before application.{" "}
                  <span className="font-bold text-[#101E10]">Dry-film preservatives</span> protect the applied coating after it has dried, resisting exterior weather, rain leaching, fungal spores, and algae.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Signs your product needs better preservation */}
          <div className="lg:col-span-5 bg-white rounded-[28px] p-6 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101E10] leading-tight">
              Signs your product needs better preservation
            </h3>

            <div className="flex flex-col gap-4">
              {signs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    {/* Green icon square */}
                    <div className="w-9 h-9 rounded-xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none mt-0.5 shadow-2xs">
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base font-bold text-[#101E10]">
                        {item.title}
                      </span>
                      <span className="text-xs text-black/70 font-normal">
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

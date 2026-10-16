"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industrySector: "Paints & Coatings",
    targetGrade: "",
    formulationDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit technical inquiry.");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your technical inquiry has been recorded. Our team will contact you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        industrySector: "Paints & Coatings",
        targetGrade: "",
        formulationDetails: "",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="w-full bg-[#C6F19D] rounded-[36px] lg:rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Narrative & Commitments */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[14px] font-semibold tracking-wider uppercase text-[#101E10]">
                CONNECT WITH CHEMTIVER SPECIALITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
                Let&apos;s Discuss Your Requirement
              </h2>
              <p className="text-base text-black/80 font-normal leading-relaxed">
                Connect directly with our technical team to schedule compatibility screening,
                sample evaluation kits, or bulk quote requests. We reply within 24 business hours.
              </p>

              {/* Checkpoints */}
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#101E10]" />
                  <span className="text-sm sm:text-base font-semibold text-[#101E10]">
                    48-Hour Technical Sample Dispatch
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#101E10]" />
                  <span className="text-sm sm:text-base font-semibold text-[#101E10]">
                    Comprehensive COA & SDS Dossier Included
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#101E10]" />
                  <span className="text-sm sm:text-base font-semibold text-[#101E10]">
                    Non-Disclosure Agreement (NDA) Protected Consultation
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Inquiry Form */}
            <div className="lg:col-span-6 bg-[#F5F4F2] rounded-[24px] p-8 sm:p-10 shadow-lg border border-[#EDE7EC]">
              {status.type === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-600 flex-none mt-0.5" />
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              {status.type === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
                  <AlertCircle size={20} className="text-rose-600 flex-none mt-0.5" />
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-black/5 border border-black/15 focus:border-[#5AB900] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5AB900]/30 transition-all text-[#101E10]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="corporate@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-black/5 border border-black/15 focus:border-[#5AB900] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5AB900]/30 transition-all text-[#101E10]"
                    />
                  </div>
                </div>

                {/* Industry Sector & Target Grade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                      INDUSTRY SECTOR
                    </label>
                    <select
                      name="industrySector"
                      value={formData.industrySector}
                      onChange={handleChange}
                      className="bg-black/5 border border-black/15 focus:border-[#5AB900] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5AB900]/30 transition-all text-[#101E10] cursor-pointer"
                    >
                      <option value="Paints & Coatings">Paints & Coatings</option>
                      <option value="Construction Materials">Construction Materials</option>
                      <option value="Construction Chemicals">Construction Chemicals</option>
                      <option value="Adhesives & Sealants">Adhesives & Sealants</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Printing Inks">Printing Inks</option>
                      <option value="Water Treatment">Water Treatment</option>
                      <option value="Other Application">Other Application</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                      TARGET PRODUCT GRADE
                    </label>
                    <input
                      type="text"
                      name="targetGrade"
                      placeholder="e.g. GuardExo CMT 15"
                      value={formData.targetGrade}
                      onChange={handleChange}
                      className="bg-black/5 border border-black/15 focus:border-[#5AB900] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5AB900]/30 transition-all text-[#101E10]"
                    />
                  </div>
                </div>

                {/* Formulation Details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                    FORMULATION DETAILS / CHALLENGE DESCRIPTION
                  </label>
                  <textarea
                    rows={4}
                    name="formulationDetails"
                    placeholder="Describe substrate, pH range, current challenges, or required sample quantity..."
                    value={formData.formulationDetails}
                    onChange={handleChange}
                    className="bg-black/5 border border-black/15 focus:border-[#5AB900] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5AB900]/30 transition-all text-[#101E10] resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-4 rounded-xl font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Connecting to Server...
                    </>
                  ) : (
                    <>
                      Submit Technical Inquiry
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-black/60 pt-1">
                  Protected by Chemtiver Technical Integrity Protocols • PostgreSQL Database Synchronized
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

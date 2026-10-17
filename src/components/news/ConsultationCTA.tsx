"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "Paints & Coatings",
    productGrade: "GuardExo CMT 15",
    message: "",
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `${formData.industry} - ${formData.productGrade}`,
          message: formData.message || "Consultation requested from News / Insights page.",
          phone: "Not provided",
          company: formData.industry,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit technical inquiry.");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your technical inquiry has been submitted. Our team will reply within 24 business hours.",
      });

      setFormData({
        name: "",
        email: "",
        industry: "Paints & Coatings",
        productGrade: "GuardExo CMT 15",
        message: "",
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
    <section id="inquiry" className="w-full bg-white py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        {/* Green panel without shadow matching Figma */}
        <div className="bg-[#C6F19D] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border-0 shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#101E10]/80">
                CONNECT WITH CHEMTIVER SPECIALITY
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#101E10] leading-tight">
                Let&apos;s Discuss Your Requirement
              </h2>

              <p className="text-base sm:text-lg text-[#101E10]/85 font-normal leading-relaxed">
                Connect directly with our technical team to schedule compatibility screening,
                sample evaluation kits, or bulk quote requests. We reply within 24 business hours.
              </p>

              {/* 3 Value Checkpoints with regular font weight matching Figma */}
              <div className="flex flex-col gap-3.5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#101E10] flex-none" />
                  <span className="text-sm sm:text-base font-normal text-[#101E10]">
                    48-Hour Technical Sample Dispatch
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#101E10] flex-none" />
                  <span className="text-sm sm:text-base font-normal text-[#101E10]">
                    Comprehensive COA & SDS Dossier Included
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#101E10] flex-none" />
                  <span className="text-sm sm:text-base font-normal text-[#101E10]">
                    Non-Disclosure Agreement (NDA) Protected Consultation
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form Card without drop shadows */}
            <div className="lg:col-span-6 bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 border-0 shadow-none">
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

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="JOHN DOE"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#F0EFEA] border-0 focus:outline-none focus:ring-1 focus:ring-[#5AB900] rounded-xl px-4 py-3 text-sm text-[#101E10] placeholder:text-neutral-400 placeholder:uppercase"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="CORPORATE@COMPANY.COM"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#F0EFEA] border-0 focus:outline-none focus:ring-1 focus:ring-[#5AB900] rounded-xl px-4 py-3 text-sm text-[#101E10] placeholder:text-neutral-400 placeholder:uppercase"
                    />
                  </div>
                </div>

                {/* Row 2: Industry and Target Product */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                      INDUSTRY SECTOR
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="bg-[#F0EFEA] border-0 focus:outline-none focus:ring-1 focus:ring-[#5AB900] rounded-xl px-4 py-3 text-sm text-[#101E10] cursor-pointer"
                    >
                      <option value="Paints & Coatings">Paints & Coatings</option>
                      <option value="Construction Materials">Construction Materials</option>
                      <option value="Construction Chemicals">Construction Chemicals</option>
                      <option value="Adhesives & Sealants">Adhesives & Sealants</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Printing Inks">Printing Inks</option>
                      <option value="Water Treatment">Water Treatment</option>
                      <option value="Other Applications">Other Applications</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                      TARGET PRODUCT GRADE
                    </label>
                    <input
                      type="text"
                      name="productGrade"
                      placeholder="E.G. GUARDEXO CMT 15"
                      value={formData.productGrade}
                      onChange={handleChange}
                      className="bg-[#F0EFEA] border-0 focus:outline-none focus:ring-1 focus:ring-[#5AB900] rounded-xl px-4 py-3 text-sm text-[#101E10] placeholder:text-neutral-400 placeholder:uppercase"
                    />
                  </div>
                </div>

                {/* Row 3: Challenge Details Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                    FORMULATION DETAILS / CHALLENGE DESCRIPTION
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="DESCRIBE SUBSTRATE, PH RANGE, CURRENT CHALLENGES, OR REQUIRED SAMPLE QUANTITY..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#F0EFEA] border-0 focus:outline-none focus:ring-1 focus:ring-[#5AB900] rounded-xl p-4 text-sm text-[#101E10] resize-none placeholder:text-neutral-400 placeholder:uppercase"
                  />
                </div>

                {/* Row 4: Submit Button without paper plane icon matching Figma */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 rounded-xl font-bold text-base transition-all active:scale-98 cursor-pointer disabled:opacity-50 shadow-none"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin mr-2" />
                      Submitting Requirement...
                    </>
                  ) : (
                    "Submit Requirement"
                  )}
                </button>

                {/* Removed • PostgreSQL Database Synchronized matching Figma */}
                <p className="text-center text-[11px] text-black/60 pt-1">
                  Protected by Chemtiver Technical Integrity Protocols
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

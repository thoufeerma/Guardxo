"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, Check } from "lucide-react";

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

  const checkpoints = [
    "48-Hour Technical Sample Dispatch",
    "Comprehensive COA & SDS Dossier Included",
    "Non-Disclosure Agreement (NDA) Protected Consultation",
  ];

  return (
    <section id="inquiry" className="w-full bg-[#F5F4F2] py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="bg-[#C6F19D] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#B1E483] shadow-md">
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

              {/* 3 Value Checkpoints */}
              <div className="flex flex-col gap-3.5 pt-2">
                {checkpoints.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#101E10] text-[#C6F19D] flex items-center justify-center flex-none">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-[#101E10]">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-[#F5F4F2] rounded-[24px] p-6 sm:p-8 lg:p-10 border border-neutral-300 shadow-xl">
              {status.type === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-[#C6F19D]/50 border border-[#5AB900] flex items-start gap-3 text-[#101E10]">
                  <CheckCircle2 size={20} className="text-[#5AB900] flex-none mt-0.5" />
                  <p className="text-sm font-semibold">{status.message}</p>
                </div>
              )}

              {status.type === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 flex items-start gap-3 text-red-900">
                  <AlertCircle size={20} className="text-red-600 flex-none mt-0.5" />
                  <p className="text-sm font-semibold">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1: Name & Corporate Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white border border-black/20 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10]"
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
                      placeholder="corporate@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white border border-black/20 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10]"
                    />
                  </div>
                </div>

                {/* Row 2: Industry Sector & Product Grade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                      INDUSTRY SECTOR
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="bg-white border border-black/20 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10] cursor-pointer"
                    >
                      <option value="Paints & Coatings">Paints & Coatings</option>
                      <option value="Construction Chemicals">Construction Chemicals</option>
                      <option value="Adhesives & Emulsions">Adhesives & Emulsions</option>
                      <option value="Cooling Water Loops">Cooling Water Loops</option>
                      <option value="Agricultural Actives">Agricultural Actives</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#101E10]">
                      TARGET PRODUCT GRADE
                    </label>
                    <input
                      type="text"
                      name="productGrade"
                      placeholder="e.g. GuardExo CMT 15"
                      value={formData.productGrade}
                      onChange={handleChange}
                      className="bg-white border border-black/20 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10]"
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
                    placeholder="Describe substrate, pH range, current challenges, or required sample quantity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white border border-black/20 focus:border-[#101E10] rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10] resize-none"
                  />
                </div>

                {/* Row 4: Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting Inquiry...
                    </>
                  ) : (
                    <>
                      Submit Technical Inquiry
                      <Send size={18} />
                    </>
                  )}
                </button>

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

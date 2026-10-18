"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus({
        type: "error",
        message: "Please agree to the processing of your technical information.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          industrySector: formData.company ? `Company: ${formData.company}` : "Direct Contact",
          targetGrade: formData.subject,
          formulationDetails: `Phone: ${formData.phone}\nMessage: ${formData.message}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been received. Our team will respond within one working day.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
        consent: true,
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
    <section id="inquiry" className="w-full bg-white pt-12 pb-20 lg:pt-16 lg:pb-28 scroll-mt-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Header Ribbon */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C4EF9C]/40 border border-[#B9AEFF]/30 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#101E10] animate-pulse" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#101E10]">
              Contact Guardxo
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#101E10] leading-[1.12] tracking-tight">
            Let’s talk about protecting your formulation.
          </h1>

          <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
            Have a question, need information or just want to get in touch? Send us a message and our team
            will respond within one working day.
          </p>
        </div>

        {/* 2-Column Grid: Contact Cards on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info Card & Chemist Image Card */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Info Box */}
            <div className="bg-white rounded-[24px] p-6 sm:p-8 flex flex-col gap-6 border border-neutral-200 shadow-xs">
              {/* Telephone */}
              <a
                href="tel:+918130016160"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C6F19D] flex items-center justify-center text-[#101E10] group-hover:scale-105 transition-transform flex-none">
                  <Phone size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#4C6359]">
                    TELEPHONE
                  </span>
                  <span className="text-lg font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors">
                    +91 8130016160
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sales@chemtiver.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C6F19D] flex items-center justify-center text-[#101E10] group-hover:scale-105 transition-transform flex-none">
                  <Mail size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#4C6359]">
                    DIRECT INQUIRIES
                  </span>
                  <span className="text-lg font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors">
                    sales@chemtiver.com
                  </span>
                </div>
              </a>

              {/* Commitment */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#101E10] flex items-center justify-center text-[#C6F19D] flex-none">
                  <Clock size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#4C6359]">
                    RESPONSE COMMITMENT
                  </span>
                  <span className="text-base font-bold text-[#101E10]">
                    Verified response within one working day
                  </span>
                </div>
              </div>
            </div>

            {/* Chemist Photography Card */}
            <div className="relative w-full h-[280px] sm:h-[320px] rounded-[24px] overflow-hidden shadow-md bg-[#101E10]">
              <Image
                src="/Contact/contact image.jpg"
                alt="Professional Chemist in Laboratory Office Setting"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="w-fit bg-[#101E10] text-[#F5F4F2] px-4 py-2 rounded-full shadow-md text-xs sm:text-[13px] font-bold tracking-wide">
                  OUR TEAM REPLIES WITHIN ONE WORKING DAY
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#C6F19D] rounded-[32px] p-8 sm:p-10 shadow-lg border border-[#B9E98B] flex flex-col justify-between">
            {status.type === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-white border border-emerald-300 text-emerald-900 flex items-start gap-3 shadow-xs">
                <CheckCircle2 size={20} className="text-emerald-600 flex-none mt-0.5" />
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            {status.type === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-white border border-rose-300 text-rose-900 flex items-start gap-3 shadow-xs">
                <AlertCircle size={20} className="text-rose-600 flex-none mt-0.5" />
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                    Full name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white border border-neutral-300 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Apex Polymer Coatings"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white border border-neutral-300 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                    Email address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="r.sharma@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border border-neutral-300 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 81300 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white border border-neutral-300 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10]"
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white border border-neutral-300 focus:border-[#101E10] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10] cursor-pointer"
                >
                  <option value="General Question">General Question</option>
                  <option value="Product Formulation Inquiry">Product Formulation Inquiry</option>
                  <option value="Sample Request (48h Dispatch)">Sample Request (48h Dispatch)</option>
                  <option value="Bulk Order Quotation">Bulk Order Quotation</option>
                  <option value="Regulatory / TDS / SDS Document">Regulatory / TDS / SDS Document</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wider uppercase text-[#101E10]">
                  Message *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Outline your inquiry, volume requirements or regulatory queries..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white border border-neutral-300 focus:border-[#101E10] rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#101E10]/20 text-[#101E10] resize-none"
                />
              </div>

              {/* Row 5: Consent Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-4 h-4 mt-0.5 rounded border-black/30 text-[#101E10] focus:ring-[#101E10] cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-black/80 cursor-pointer leading-relaxed">
                  I agree to be contacted about my enquiry and acknowledge the processing of my technical information. *
                </label>
              </div>

              {/* Row 6: Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 rounded-xl font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-md active:translate-y-0 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-black/70 pt-1">
                We never share your details. Typical response time: one working day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

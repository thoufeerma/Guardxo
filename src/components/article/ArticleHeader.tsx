"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Link as LinkIcon,
  MessageCircle,
  Mail,
  Check,
  Share2,
} from "lucide-react";

export default function ArticleHeader() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full bg-white pt-10 pb-8 sm:pt-14 sm:pb-12">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
        {/* Centered Column with Left and Right Margins matching Figma */}
        <div className="max-w-[1160px] mx-auto w-full flex flex-col items-start text-left gap-6">
          {/* Back Link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors group w-fit"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to all insights
          </Link>

          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFAE0] text-[#101E10] text-xs font-bold uppercase tracking-wider w-fit">
            TECHNICAL INSIGHTS
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold text-[#101E10] leading-[1.1] tracking-tight">
            Choosing between in–can and dry–<br className="hidden sm:inline" />
            film preservatives
          </h1>

          {/* Introduction: Exactly 2 lines */}
          <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed max-w-full">
            How to assess wet–state bacterial risks versus applied film fungal/algal threats in demanding climates. A comprehensive guide for paint<br className="hidden sm:inline" />
            {" "}and construction chemical formulators.
          </p>

          {/* Author/share box: centered with generous margins matching Figma */}
          <div className="w-full bg-[#ECFAE0] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left border-0 shadow-2xs">
            {/* Author Details */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-2xl overflow-hidden border border-black/10 flex-none bg-[#C6F19D]">
                <Image
                  src="/images/news-author-avatar.png"
                  alt="GuardExo Technical Team"
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-base sm:text-[17px] font-bold text-[#101E10]">
                  GuardExo Technical Team
                </span>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-[13px] font-semibold text-black/60">
                  <span>18 MAR 2025</span>
                  <span>UPDATED: 22 MAR 2025</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-[#101E10] shadow-2xs">
                    6 MIN READ
                  </span>
                </div>
              </div>
            </div>

            {/* Share Actions: share icons in light-green rounded squares */}
            <div className="flex items-center gap-3 sm:gap-3.5 pt-2 sm:pt-0">
              <button
                type="button"
                onClick={handleCopyLink}
                title="Copy link"
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-2xl bg-[#C6F19D] hover:bg-[#b5e783] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
              >
                {copied ? <Check size={22} className="text-[#5AB900]" /> : <LinkIcon size={22} className="transition-transform group-hover:scale-110" />}
              </button>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://guardxo.com/news/choosing-between-in-can-and-dry-film-preservatives"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-2xl bg-[#C6F19D] hover:bg-[#b5e783] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.65 1.65 0 0 0-1.66 1.65 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.75Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Choosing%20between%20in-can%20and%20dry-film%20preservatives&url=https://guardxo.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X"
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-2xl bg-[#C6F19D] hover:bg-[#b5e783] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Choosing%20between%20in-can%20and%20dry-film%20preservatives%20https://guardxo.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on WhatsApp"
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-2xl bg-[#C6F19D] hover:bg-[#b5e783] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
              >
                <MessageCircle size={22} className="transition-transform group-hover:scale-110" />
              </a>
              <a
                href="mailto:?subject=Choosing between in-can and dry-film preservatives&body=Read this technical article from GuardExo"
                title="Email article"
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-2xl bg-[#C6F19D] hover:bg-[#b5e783] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
              >
                <Mail size={22} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image - Painted silos image without border */}
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl bg-[#101E10]">
          <Image
            src="/article/hero article.jpg"
            alt="Painted industrial silos"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

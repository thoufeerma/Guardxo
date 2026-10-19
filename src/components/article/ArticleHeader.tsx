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
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10 items-center">
        {/* Centered Narrow Column */}
        <div className="max-w-3xl w-full flex flex-col items-center text-center gap-6">
          {/* Back Link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to all insights
          </Link>

          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#C6F19D] text-[#101E10] text-xs font-bold uppercase tracking-wider">
            TECHNICAL INSIGHTS
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#101E10] leading-[1.14] tracking-tight">
            Choosing between in–can and dry–film preservatives
          </h1>

          {/* Introduction */}
          <p className="text-base sm:text-xl text-black/80 font-normal leading-relaxed">
            How to assess wet–state bacterial risks versus applied film fungal/algal threats in
            demanding climates. A comprehensive guide for paint and construction chemical formulators.
          </p>

          {/* Author/share box: light green background without border */}
          <div className="w-full bg-[#EEFBE2] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left mt-2">
            {/* Author Details */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-none bg-[#C6F19D]">
                <Image
                  src="/images/news-author-avatar.png"
                  alt="GuardExo Technical Team"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#101E10]">
                  GuardExo Technical Team
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold text-black/60 pt-0.5">
                  <span>18 MAR 2025</span>
                  <span>•</span>
                  <span>UPDATED: 22 MAR 2025</span>
                  <span>•</span>
                  <span className="bg-white px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#101E10] shadow-xs">
                    6 MIN READ
                  </span>
                </div>
              </div>
            </div>

            {/* Share Actions: share icons in light-green rounded squares */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-black/10">
              <button
                type="button"
                onClick={handleCopyLink}
                title="Copy link"
                className="w-10 h-10 rounded-xl bg-[#C6F19D] hover:bg-[#101E10] hover:text-[#C6F19D] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                {copied ? <Check size={18} className="text-[#5AB900]" /> : <LinkIcon size={18} />}
              </button>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://guardxo.com/news/choosing-between-in-can-and-dry-film-preservatives"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#C6F19D] hover:bg-[#101E10] hover:text-[#C6F19D] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.65 1.65 0 0 0-1.66 1.65 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.75Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Choosing%20between%20in-can%20and%20dry-film%20preservatives&url=https://guardxo.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X"
                className="w-10 h-10 rounded-xl bg-[#C6F19D] hover:bg-[#101E10] hover:text-[#C6F19D] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Choosing%20between%20in-can%20and%20dry-film%20preservatives%20https://guardxo.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#C6F19D] hover:bg-[#101E10] hover:text-[#C6F19D] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:?subject=Choosing between in-can and dry-film preservatives&body=Read this technical article from GuardExo"
                title="Email article"
                className="w-10 h-10 rounded-xl bg-[#C6F19D] hover:bg-[#101E10] hover:text-[#C6F19D] text-[#101E10] flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <Mail size={18} />
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

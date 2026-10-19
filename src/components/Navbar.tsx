"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Database } from "lucide-react";

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine whether a link is currently active
  const isLinkActive = (name: string, href: string) => {
    if (activePage) {
      if (activePage === name) return true;
      if (name === "News & Insights" && (activePage === "News" || activePage === "Resources")) return true;
      if (name === "Product Detail" && (activePage === "Products" || activePage === "Product Detail")) return true;
    }
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (name === "In-Can Preservatives") return pathname === "/in-can-preservatives";
    if (name === "Product Detail") return pathname.startsWith("/products") || pathname === "/product-detail";
    if (name === "News & Insights") return pathname === "/news" || pathname === "/resources";
    if (name === "Article") return pathname.startsWith("/news/") || pathname === "/article";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Nav links matching reference design exactly
  const navLinks = [
    { name: "Home", href: "/", active: isLinkActive("Home", "/") },
    {
      name: "In-Can Preservatives",
      href: "/in-can-preservatives",
      active: isLinkActive("In-Can Preservatives", "/in-can-preservatives"),
    },
    { name: "Biocides", href: "/#featured-products", active: false },
    {
      name: "Dry-Film",
      href: "/news/choosing-between-in-can-and-dry-film-preservatives",
      active: isLinkActive("Article", "/news/choosing-between-in-can-and-dry-film-preservatives"),
    },
    { name: "Industries", href: "/#industries", active: false },
    { name: "Applications", href: "/#categories", active: false },
    { name: "Solutions/Expertise", href: "/#services", active: false },
    {
      name: "Resources",
      href: "/news",
      active: isLinkActive("News & Insights", "/news") || isLinkActive("Resources", "/news"),
    },
    { name: "About", href: "/about", active: isLinkActive("About", "/about") },
    { name: "Contact", href: "/contact", active: isLinkActive("Contact", "/contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-200">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group flex-none">
          <div className="relative flex items-center">
            <Image
              src="/logo/Link - Logo.svg"
              alt="GuardXO by Chemtiver Speciality"
              width={143}
              height={22}
              priority
              className="object-contain h-[23px] sm:h-[25px] md:h-[27px] w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links - exactly matching reference design */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium text-[#101E10]">
          {navLinks.map((link) => (
            <div key={link.name} className="relative flex flex-col items-center py-2">
              <Link
                href={link.href}
                className={`transition-colors hover:text-[#5AB900] whitespace-nowrap ${
                  link.active ? "text-[#101E10] font-semibold" : "text-[#101E10]/80"
                }`}
              >
                {link.name}
              </Link>
              {link.active && (
                <div className="absolute bottom-0 w-full min-w-[24px] h-[2px] bg-[#101E10]" />
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Action - GET ENQUIRY only matching reference image */}
        <div className="hidden sm:flex items-center flex-none">
          <Link
            href="/contact#inquiry"
            className="inline-flex items-center justify-center bg-[#C2EC9A] hover:bg-[#b0e67e] text-[#101E10] px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all active:scale-95 shadow-xs whitespace-nowrap"
          >
            GET ENQUIRY
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#101E10] hover:bg-[#101E10]/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EDE7EC] px-6 py-6 shadow-xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-1 ${
                  link.active ? "font-bold text-[#101E10]" : "text-[#101E10]/80"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/admin/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-[#5AB900] flex items-center gap-2 py-1 pt-2 border-t border-[#EDE7EC]"
            >
              <Database size={14} />
              <span>Manage Products & Categories (DB)</span>
            </Link>

            <div className="pt-2">
              <Link
                href="/contact#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center bg-[#C2EC9A] text-[#101E10] px-6 py-3 rounded-xl font-bold text-sm shadow-sm"
              >
                GET ENQUIRY
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

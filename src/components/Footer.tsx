import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#101E10] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative h-10 w-44 flex items-center">
              <Image
                src="/images/guardxo-logo.png"
                alt="GuardExo"
                width={170}
                height={38}
                className="object-contain brightness-0 invert"
                style={{ width: "auto", height: "38px" }}
              />
            </div>
            <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed max-w-sm">
              GuardExo is a registered product brand of Chemtiver Speciality Pvt. Ltd., dedicated to
              pioneering industrial biocide formulations, preservation technologies, and sustainable
              microbiological control systems.
            </p>
            <div className="text-xs font-semibold tracking-wider text-[#C6F19D] uppercase pt-1">
              ISO 9001:2015 | ISO 14001:2015 Registered Facility
            </div>
          </div>

          {/* Col 2: Company (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#C6F19D]">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Chemtiver
                </Link>
              </li>
              <li>
                <Link href="/about#journey" className="hover:text-white transition-colors">
                  Our Journey
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link href="/news/choosing-between-in-can-and-dry-film-preservatives" className="hover:text-white transition-colors">
                  Technical Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/products"
                  className="text-[#C6F19D] hover:underline transition-colors flex items-center gap-1.5 font-semibold pt-1"
                >
                  <span>Product Operations</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/90 font-mono">
                    PostgreSQL
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#C6F19D]">
              PRODUCTS
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-white/80">
              <li>
                <Link href="/in-can-preservatives" className="hover:text-white transition-colors">
                  In-Can Preservatives
                </Link>
              </li>
              <li>
                <Link href="/products/guardexo-bt-20" className="hover:text-white transition-colors">
                  GuardExo BT-20
                </Link>
              </li>
              <li>
                <Link href="/in-can-preservatives#portfolio" className="hover:text-white transition-colors">
                  Product Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact#inquiry" className="hover:text-white transition-colors">
                  Request Samples
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Applications (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#C6F19D]">
              APPLICATIONS
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-white/80">
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Paints & Coatings
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Construction Chemicals
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Adhesives & Emulsions
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Cooling Water Loops
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Agricultural Actives
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#C6F19D]">
              CONTACT
            </h4>
            <div className="flex flex-col gap-1.5 text-xs sm:text-[13px] text-white/80 leading-relaxed">
              <span className="font-semibold text-white">Chemtiver Speciality Pvt. Ltd.</span>
              <span>Corporate Synthetics Hub,</span>
              <span>Gurugram, Haryana, India</span>
              <a
                href="mailto:info@chemtiver.com"
                className="text-[#C6F19D] hover:underline pt-2 font-medium"
              >
                info@chemtiver.com
              </a>
              <span className="text-white/90 font-medium">+91 (0124) 490-8800</span>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2025 Chemtiver Speciality Pvt. Ltd. All rights reserved. GuardExo™ is an intellectual trademark.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Technical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

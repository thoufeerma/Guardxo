import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GuardXO — Protection Engineered at the Molecular Level | Chemtiver Speciality",
  description:
    "GuardExo is the biocides and preservatives brand of Chemtiver Speciality — safeguarding paints, coatings, construction chemicals, and industrial water systems against microbial attack.",
  keywords: [
    "GuardXO",
    "biocides",
    "in-can preservatives",
    "dry-film preservatives",
    "industrial biocides",
    "microbial control",
    "Chemtiver Speciality",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-[#F5F4F2] text-[#101E10] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

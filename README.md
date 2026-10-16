# GuardXO — Molecular Preservation & Industrial Biocides

A full-stack, enterprise chemical biocide showcase and product management application for **GuardExo™ by Chemtiver Speciality Pvt. Ltd.** Engineered with **Next.js 16 (App Router & Turbopack)**, **Node.js REST API**, **Tailwind CSS**, and **PostgreSQL**.

---

## ✨ Features

- **Molecular Chemical Showcase**: Pixel-perfect implementation from Figma design specifications with responsive layout, custom typography (Plus Jakarta Sans & DM Sans), and bespoke color palette.
- **Node.js + PostgreSQL Backend**:
  - Relational schema for products and categories with automatic migrations and resilient offline fallbacks.
  - Dedicated REST APIs for product CRUD, category management, and multipart file uploads.
- **Product Operations Management Hub (`/admin/products`)**:
  - Live PostgreSQL connection monitor.
  - Interactive view mode toggle: **Cards Grid View** and **Tabular List View**.
  - Form for uploading and managing product grades, CAS numbers, chemistry specs, dosage guides, and packaging options.
  - Direct local image file upload saving to `/public/uploads/products/`.
- **Dynamic Customer-Facing Product Pages (`/products/[slug]`)**:
  - Real-time page generation querying PostgreSQL for any uploaded chemical grade.
  - Complete technical assay specifications, formulation highlights, and sample consultation request triggers.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+
- **PostgreSQL**: v14+ running locally or in cloud (Supabase, Neon, etc.)

### 2. Installation
```bash
git clone https://github.com/thoufeerma/Guardxo.git
cd Guardxo
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env.local` and configure your PostgreSQL database connection:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/guardxo"
DATABASE_SSL="false"
```

### 4. Running Locally
```bash
npm run dev
```

Visit:
- Public Website: [http://localhost:3000](http://localhost:3000)
- Product Operations Hub: [http://localhost:3000/admin/products](http://localhost:3000/admin/products)

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (Turbopack, Server Actions, App Router)
- **Database**: PostgreSQL with `pg` connection pool
- **Styling**: Tailwind CSS & Lucide Icons
- **Language**: TypeScript (Strict Mode)

---

## 📄 License
Proprietary & Confidential — Chemtiver Speciality Pvt. Ltd. All rights reserved.

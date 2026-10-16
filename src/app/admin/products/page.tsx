"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  ExternalLink,
  Upload,
  Database,
  CheckCircle2,
  AlertCircle,
  X,
  Layers,
  FileText,
  ShieldCheck,
  Tag,
  ArrowRight,
  RefreshCw,
  FolderPlus,
  SlidersHorizontal,
  LayoutGrid,
  List,
} from "lucide-react";

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  display_order: number;
  product_count?: number;
}

interface Product {
  id: string;
  num: string;
  grade: string;
  slug: string;
  family: string;
  category_id?: number | null;
  active_ingredient?: string;
  cas_number?: string;
  target_application: string;
  description: string;
  features?: string[] | string;
  dosage_guide?: string;
  ph_stability?: string;
  temperature_limit?: string;
  appearance?: string;
  packaging?: string;
  image_url?: string;
  tds_url?: string;
  msds_url?: string;
  badge?: string;
  is_featured: boolean;
  status: string;
  created_at?: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [dbStatus, setDbStatus] = useState<"connected" | "fallback">("connected");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("guardxo_admin_view_mode");
      if (saved === "cards" || saved === "list") {
        setViewMode(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleToggleViewMode = (mode: "cards" | "list") => {
    setViewMode(mode);
    try {
      localStorage.setItem("guardxo_admin_view_mode", mode);
    } catch {
      // ignore
    }
  };

  // Modals state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Uploading state
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Product Form state
  const [formGrade, setFormGrade] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formActiveIngredient, setFormActiveIngredient] = useState("");
  const [formCasNumber, setFormCasNumber] = useState("");
  const [formTargetApplication, setFormTargetApplication] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formFeatures, setFormFeatures] = useState<string[]>([""]);
  const [formDosageGuide, setFormDosageGuide] = useState("0.10% – 0.25% w/w");
  const [formPhStability, setFormPhStability] = useState("pH 2.0 – 12.0");
  const [formTempLimit, setFormTempLimit] = useState("Up to 80°C");
  const [formAppearance, setFormAppearance] = useState("Clear amber liquid");
  const [formPackaging, setFormPackaging] = useState("25kg carboys / 200kg drums / 1,000kg IBCs");
  const [formImageUrl, setFormImageUrl] = useState("/images/product-bt20-canister.jpg");
  const [formBadge, setFormBadge] = useState("");
  const [formStatus, setFormStatus] = useState("active");
  const [formSubmitting, setFormSubmitting] = useState(false);

  // New Category Form state
  const [newCatName, setNewCatName] = useState("");
  const [newCatDescription, setNewCatDescription] = useState("");
  const [newCatSubmitting, setNewCatSubmitting] = useState(false);

  // Fetch initial data
  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Fetch categories
      const catRes = await fetch("/api/categories");
      const catData = await catRes.json();
      if (catData.categories) {
        setCategories(catData.categories);
        if (catData.warning) setDbStatus("fallback");
        else setDbStatus("connected");
      }

      // 2. Fetch products
      const prodRes = await fetch("/api/products");
      const prodData = await prodRes.json();
      if (prodData.products) {
        setProducts(prodData.products);
      }
    } catch (err) {
      console.error("Fetch data error:", err);
      setDbStatus("fallback");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showToast = (type: "success" | "error", message: string) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback(null), 4500);
  };

  // Open Product Modal for Create or Edit
  const handleOpenProductModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormGrade(product.grade || "");
      setFormCategory(product.family || (categories[0]?.name ?? "In-Can Preservatives"));
      setFormActiveIngredient(product.active_ingredient || "");
      setFormCasNumber(product.cas_number || "");
      setFormTargetApplication(product.target_application || "");
      setFormDescription(product.description || "");
      
      let parsedFeats: string[] = [];
      if (Array.isArray(product.features)) {
        parsedFeats = product.features;
      } else if (typeof product.features === "string") {
        try {
          parsedFeats = JSON.parse(product.features);
        } catch {
          parsedFeats = [product.features];
        }
      }
      setFormFeatures(parsedFeats.length > 0 ? parsedFeats : [""]);
      setFormDosageGuide(product.dosage_guide || "0.10% – 0.25% w/w");
      setFormPhStability(product.ph_stability || "pH 2.0 – 12.0");
      setFormTempLimit(product.temperature_limit || "Up to 80°C");
      setFormAppearance(product.appearance || "Clear liquid");
      setFormPackaging(product.packaging || "25kg carboys / 200kg drums / 1,000kg IBCs");
      setFormImageUrl(product.image_url || "/images/product-bt20-canister.jpg");
      setFormBadge(product.badge || "");
      setFormStatus(product.status || "active");
    } else {
      setEditingProduct(null);
      setFormGrade("");
      setFormCategory(categories[0]?.name || "In-Can Preservatives");
      setFormActiveIngredient("");
      setFormCasNumber("");
      setFormTargetApplication("");
      setFormDescription("");
      setFormFeatures(["Broad spectrum biocidal efficacy", "Formaldehyde-free and zero VOC", "Long-term alkaline pH stability"]);
      setFormDosageGuide("0.08% – 0.25% w/w");
      setFormPhStability("pH 2.5 – 12.5");
      setFormTempLimit("Up to 100°C");
      setFormAppearance("Clear amber solution");
      setFormPackaging("25kg carboys / 200kg drums / 1,000kg IBC");
      setFormImageUrl("/images/product-bt20-canister.jpg");
      setFormBadge("New Formulation");
      setFormStatus("active");
    }
    setIsProductModalOpen(true);
  };

  // Handle Image File Upload to /api/upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setFormImageUrl(data.url);
        showToast("success", "Product image uploaded successfully!");
      } else {
        showToast("error", data.error || "Image upload failed");
      }
    } catch (err) {
      showToast("error", "Error uploading image");
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Submit Product Form
  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formGrade.trim()) {
      showToast("error", "Product Grade name is required.");
      return;
    }

    setFormSubmitting(true);
    const selectedCatObj = categories.find((c) => c.name === formCategory);

    const payload = {
      grade: formGrade.trim(),
      family: formCategory,
      category_id: selectedCatObj?.id || null,
      active_ingredient: formActiveIngredient.trim(),
      cas_number: formCasNumber.trim(),
      target_application: formTargetApplication.trim(),
      description: formDescription.trim(),
      features: formFeatures.filter((f) => f.trim().length > 0),
      dosage_guide: formDosageGuide.trim(),
      ph_stability: formPhStability.trim(),
      temperature_limit: formTempLimit.trim(),
      appearance: formAppearance.trim(),
      packaging: formPackaging.trim(),
      image_url: formImageUrl.trim(),
      badge: formBadge.trim(),
      status: formStatus,
    };

    try {
      if (editingProduct) {
        // Update product
        const res = await fetch(`/api/products/${editingProduct.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok) {
          showToast("success", `Product "${payload.grade}" updated successfully in PostgreSQL!`);
          setIsProductModalOpen(false);
          fetchData();
        } else {
          showToast("error", data.error || "Failed to update product");
        }
      } else {
        // Create new product
        const res = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok) {
          showToast("success", `New product "${payload.grade}" uploaded and saved to PostgreSQL!`);
          setIsProductModalOpen(false);
          fetchData();
        } else {
          showToast("error", data.error || "Failed to create product");
        }
      }
    } catch (err) {
      showToast("error", "Failed to communicate with PostgreSQL API");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        showToast("success", "Product successfully removed from database.");
        setDeleteConfirmId(null);
        fetchData();
      } else {
        showToast("error", data.error || "Could not delete product");
      }
    } catch (err) {
      showToast("error", "Failed to delete product");
    }
  };

  // Submit New Category
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) {
      showToast("error", "Category name is required");
      return;
    }

    setNewCatSubmitting(true);
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newCatName.trim(),
          description: newCatDescription.trim(),
          display_order: categories.length + 1,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        showToast("success", `Category "${newCatName}" created successfully!`);
        setNewCatName("");
        setNewCatDescription("");
        fetchData();
      } else {
        showToast("error", data.error || "Failed to create category");
      }
    } catch (err) {
      showToast("error", "Failed to communicate with categories API");
    } finally {
      setNewCatSubmitting(false);
    }
  };

  // Delete category
  const handleDeleteCategory = async (id: number) => {
    try {
      const res = await fetch(`/api/categories/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        showToast("success", "Category deleted.");
        fetchData();
      } else {
        showToast("error", data.error || "Failed to delete category");
      }
    } catch (err) {
      showToast("error", "Failed to delete category");
    }
  };

  // Filter products by selected category and search
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      p.family.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      p.grade.toLowerCase().includes(query) ||
      (p.active_ingredient && p.active_ingredient.toLowerCase().includes(query)) ||
      (p.cas_number && p.cas_number.toLowerCase().includes(query)) ||
      p.target_application.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F4F2] text-[#101E10]">
      {/* Toast Notification */}
      {feedback && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom ${
            feedback.type === "success"
              ? "bg-[#101E10] text-[#C6F19D] border border-[#5AB900]/40"
              : "bg-red-900 text-white border border-red-700"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 size={20} className="text-[#5AB900] flex-none" />
          ) : (
            <AlertCircle size={20} className="text-red-400 flex-none" />
          )}
          <span className="text-sm font-semibold">{feedback.message}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#101E10] text-white border-b border-white/10 shadow-md">
        <div className="max-w-[1520px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-8 w-36 flex items-center">
                <Image
                  src="/images/guardxo-logo.png"
                  alt="GuardExo"
                  width={150}
                  height={32}
                  className="object-contain brightness-0 invert"
                  style={{ width: "auto", height: "32px" }}
                />
              </div>
            </Link>
            <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-[#C6F19D] bg-white/10 px-2.5 py-1 rounded">
              Product Operations
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium">
              <Database
                size={14}
                className={dbStatus === "connected" ? "text-[#5AB900]" : "text-amber-400"}
              />
              <span className="hidden md:inline">Node.js + PostgreSQL:</span>
              <span
                className={`font-semibold ${
                  dbStatus === "connected" ? "text-[#C6F19D]" : "text-amber-400"
                }`}
              >
                {dbStatus === "connected" ? "guardxo (Active)" : "Fallback Mode"}
              </span>
            </div>

            <Link
              href="/"
              className="text-xs text-white/70 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-white/10"
            >
              Public Site
            </Link>

            <button
              onClick={() => handleOpenProductModal()}
              className="inline-flex items-center gap-2 bg-[#C2EC9A] hover:bg-[#b0e67e] text-[#101E10] px-4 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-transform active:scale-95"
            >
              <Plus size={16} />
              <span>Upload New Product</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1520px] mx-auto px-6 lg:px-12 py-10 flex flex-col gap-8">
        {/* Banner & Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#101E10]/60">
              Total Products in DB
            </span>
            <span className="text-3xl font-extrabold text-[#101E10]">{products.length}</span>
            <span className="text-xs text-[#5AB900] font-medium pt-1">
              ✓ Managed via Node.js API
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#101E10]/60">
              Product Categories
            </span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-extrabold text-[#101E10]">
                {categories.length}
              </span>
              <button
                onClick={() => setIsCategoryModalOpen(true)}
                className="text-xs text-[#5AB900] hover:underline font-semibold flex items-center gap-1"
              >
                <Layers size={13} />
                Manage
              </button>
            </div>
            <span className="text-xs text-[#101E10]/50 pt-1">
              PostgreSQL relational categories
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#101E10]/60">
              In-Can Preservatives
            </span>
            <span className="text-3xl font-extrabold text-[#101E10]">
              {products.filter((p) => p.family === "In-Can Preservatives").length}
            </span>
            <span className="text-xs text-[#101E10]/50 pt-1">BIT, CMIT/MIT, Formulations</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#101E10]/60">
              Industrial Biocides & Dry Film
            </span>
            <span className="text-3xl font-extrabold text-[#101E10]">
              {
                products.filter(
                  (p) =>
                    p.family === "Industrial Biocides" ||
                    p.family === "Dry Film Preservatives"
                ).length
              }
            </span>
            <span className="text-xs text-[#101E10]/50 pt-1">Water treatment & exterior paint</span>
          </div>
        </div>

        {/* Action Bar & Filtering Tabs */}
        <div className="bg-white p-5 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-[#101E10] text-[#C6F19D]"
                  : "bg-[#F5F4F2] text-[#101E10]/80 hover:bg-[#EDE7EC]"
              }`}
            >
              All Categories ({products.length})
            </button>
            {categories.map((cat) => {
              const count = products.filter((p) => p.family === cat.name).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.name
                      ? "bg-[#101E10] text-[#C6F19D]"
                      : "bg-[#F5F4F2] text-[#101E10]/80 hover:bg-[#EDE7EC]"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
            <button
              onClick={() => setIsCategoryModalOpen(true)}
              className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#5AB900] hover:bg-[#5AB900]/10 border border-dashed border-[#5AB900]/40 flex items-center gap-1.5 whitespace-nowrap"
            >
              <FolderPlus size={15} />
              <span>+ Category</span>
            </button>
          </div>

          {/* Search Box, View Toggle & Refresh */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#101E10]/40"
              />
              <input
                type="text"
                placeholder="Search chemistry, CAS, grade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-[#101E10] placeholder-[#101E10]/40 focus:outline-none focus:border-[#5AB900]"
              />
            </div>

            {/* View Mode Toggle Button Group */}
            <div className="flex items-center bg-[#F5F4F2] p-1 rounded-xl border border-[#EDE7EC]">
              <button
                type="button"
                onClick={() => handleToggleViewMode("cards")}
                title="Cards Grid View"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "cards"
                    ? "bg-white text-[#101E10] shadow-xs"
                    : "text-[#101E10]/60 hover:text-[#101E10]"
                }`}
              >
                <LayoutGrid size={15} />
                <span className="hidden sm:inline">Cards</span>
              </button>
              <button
                type="button"
                onClick={() => handleToggleViewMode("list")}
                title="List Table View"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "list"
                    ? "bg-white text-[#101E10] shadow-xs"
                    : "text-[#101E10]/60 hover:text-[#101E10]"
                }`}
              >
                <List size={15} />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>

            <button
              onClick={fetchData}
              title="Refresh from PostgreSQL"
              className="p-2 rounded-xl bg-[#F5F4F2] hover:bg-[#EDE7EC] text-[#101E10] transition-colors"
            >
              <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        </div>

        {/* Products Table / Cards */}
        {loading ? (
          <div className="bg-white rounded-2xl p-16 flex flex-col items-center justify-center gap-3 border border-[#EDE7EC]">
            <RefreshCw size={28} className="animate-spin text-[#5AB900]" />
            <p className="text-sm font-medium text-[#101E10]/70">
              Querying PostgreSQL database...
            </p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 flex flex-col items-center justify-center gap-4 border border-[#EDE7EC] text-center">
            <div className="w-14 h-14 rounded-full bg-[#F5F4F2] flex items-center justify-center text-[#101E10]/40">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#101E10]">No products found</h3>
            <p className="text-sm text-[#101E10]/60 max-w-sm">
              No products matched your search or category filter. You can upload a new product
              using the button above.
            </p>
            <button
              onClick={() => handleOpenProductModal()}
              className="inline-flex items-center gap-2 bg-[#C2EC9A] text-[#101E10] px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm"
            >
              <Plus size={16} />
              Upload Product Now
            </button>
          </div>
        ) : viewMode === "list" ? (
          /* ========================================================= */
          /* 01. LIST / TABLE VIEW FOR EASIER MANAGEMENT               */
          /* ========================================================= */
          <div className="bg-white rounded-2xl border border-[#EDE7EC] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F7] border-b border-[#EDE7EC] text-[11px] font-bold uppercase tracking-wider text-[#101E10]/70">
                    <th className="py-4 px-5">Code / Grade Name</th>
                    <th className="py-4 px-4">Category</th>
                    <th className="py-4 px-4">Active Chemistry & CAS</th>
                    <th className="py-4 px-4">Target Applications</th>
                    <th className="py-4 px-4">Dosage / pH</th>
                    <th className="py-4 px-3 text-center">Status</th>
                    <th className="py-4 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDE7EC] text-xs">
                  {filteredProducts.map((prod) => (
                    <tr
                      key={prod.id}
                      className="hover:bg-[#F5F4F2]/60 transition-colors group"
                    >
                      {/* Grade Name & Visual */}
                      <td className="py-3.5 px-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 relative rounded-lg bg-[#F5F4F2] border border-[#EDE7EC] flex-none overflow-hidden flex items-center justify-center p-1">
                            <Image
                              src={prod.image_url || "/images/product-bt20-canister.jpg"}
                              alt={prod.grade}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-[11px] font-extrabold text-[#5AB900]">
                                #{prod.num}
                              </span>
                              <span className="font-bold text-sm text-[#101E10] group-hover:text-[#5AB900] transition-colors whitespace-nowrap">
                                {prod.grade}
                              </span>
                              {prod.badge && (
                                <span className="text-[10px] font-bold text-[#101E10] bg-[#C2EC9A] px-1.5 py-0.5 rounded whitespace-nowrap">
                                  {prod.badge}
                                </span>
                              )}
                            </div>
                            <span className="font-mono text-[11px] text-[#101E10]/40 truncate max-w-[180px]">
                              {prod.slug}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="text-[11px] font-semibold text-[#101E10]/80 bg-[#F5F4F2] px-2.5 py-1 rounded-md border border-[#EDE7EC]">
                          {prod.family}
                        </span>
                      </td>

                      {/* Chemistry & CAS */}
                      <td className="py-3.5 px-4 max-w-[220px]">
                        <div className="flex flex-col">
                          <span
                            className="font-medium text-[#101E10] truncate"
                            title={prod.active_ingredient}
                          >
                            {prod.active_ingredient || "—"}
                          </span>
                          {prod.cas_number && (
                            <span className="font-mono text-[11px] text-[#101E10]/50">
                              CAS: {prod.cas_number}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Target Applications */}
                      <td className="py-3.5 px-4 max-w-[260px]">
                        <p
                          className="text-xs text-[#101E10]/70 line-clamp-2"
                          title={prod.target_application}
                        >
                          {prod.target_application || prod.description || "—"}
                        </p>
                      </td>

                      {/* Dosage & pH */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-[#101E10]">
                            {prod.dosage_guide || "Standard"}
                          </span>
                          <span className="text-[11px] text-[#101E10]/50 font-mono">
                            {prod.ph_stability || "pH 2.0-12.0"}
                          </span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            prod.status === "draft"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              prod.status === "draft" ? "bg-amber-500" : "bg-emerald-500"
                            }`}
                          />
                          {prod.status === "draft" ? "Draft" : "Active"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/products/${prod.slug}`}
                            target="_blank"
                            className="p-1.5 rounded-lg text-[#101E10]/70 hover:text-[#5AB900] hover:bg-[#F5F4F2] transition-colors"
                            title="View live product page"
                          >
                            <ExternalLink size={15} />
                          </Link>
                          <button
                            onClick={() => handleOpenProductModal(prod)}
                            className="p-1.5 rounded-lg text-[#101E10]/70 hover:text-[#101E10] hover:bg-[#F5F4F2] transition-colors"
                            title="Edit product"
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(prod.id)}
                            className="p-1.5 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                            title="Delete product"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer with Summary */}
            <div className="bg-[#FAF9F7] px-6 py-3 border-t border-[#EDE7EC] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#101E10]/60">
              <span>
                Showing <strong className="text-[#101E10]">{filteredProducts.length}</strong> of{" "}
                <strong className="text-[#101E10]">{products.length}</strong> total products in PostgreSQL
              </span>
              <span className="font-mono text-[11px]">
                Active Filter: <span className="font-bold text-[#101E10]">{selectedCategory}</span>
              </span>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* 02. CARDS GRID VIEW                                       */
          /* ========================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-[#EDE7EC] hover:border-[#5AB900]/40 transition-all duration-300 shadow-sm hover:shadow-md p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top: Number, Category, Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-[#5AB900] bg-[#5AB900]/10 px-2.5 py-1 rounded-md">
                        #{prod.num}
                      </span>
                      <span className="text-[11px] font-semibold text-[#101E10]/60 bg-[#F5F4F2] px-2.5 py-1 rounded-md">
                        {prod.family}
                      </span>
                    </div>
                    {prod.badge && (
                      <span className="text-[11px] font-bold text-[#101E10] bg-[#C2EC9A] px-2 py-0.5 rounded-md">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Title and Chemistry */}
                  <h3 className="text-xl font-extrabold text-[#101E10] group-hover:text-[#5AB900] transition-colors mb-1">
                    {prod.grade}
                  </h3>

                  {prod.active_ingredient && (
                    <p className="text-xs font-semibold text-[#5AB900] line-clamp-1 mb-2">
                      {prod.active_ingredient}
                    </p>
                  )}

                  {prod.cas_number && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#101E10]/50 mb-3">
                      <span>CAS:</span>
                      <span className="font-semibold text-[#101E10]/80">{prod.cas_number}</span>
                    </div>
                  )}

                  <p className="text-xs text-[#101E10]/70 leading-relaxed line-clamp-2 mb-4">
                    {prod.target_application || prod.description}
                  </p>

                  {/* Chemical Specs Pills */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#F5F4F2] p-3 rounded-xl mb-4">
                    <div>
                      <span className="text-[#101E10]/50 block">Dosage:</span>
                      <span className="font-semibold text-[#101E10]">
                        {prod.dosage_guide || "Standard"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#101E10]/50 block">Stability:</span>
                      <span className="font-semibold text-[#101E10]">
                        {prod.ph_stability || "pH 2.0-12.0"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-[#EDE7EC] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenProductModal(prod)}
                      className="p-2 rounded-lg text-[#101E10]/70 hover:text-[#101E10] hover:bg-[#F5F4F2] transition-colors"
                      title="Edit product"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirmId(prod.id)}
                      className="p-2 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                      title="Delete product"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <Link
                    href={`/products/${prod.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#101E10] hover:text-[#5AB900] bg-[#F5F4F2] px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Live Page</span>
                    <ExternalLink size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ========================================================= */}
      {/* 01. PRODUCT UPLOAD & EDIT MODAL                           */}
      {/* ========================================================= */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-3xl my-8 border border-[#EDE7EC] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-6 py-5 bg-[#101E10] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C2EC9A] text-[#101E10] flex items-center justify-center font-bold">
                  {editingProduct ? <Edit2 size={18} /> : <Upload size={18} />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {editingProduct ? `Edit ${editingProduct.grade}` : "Upload New Product"}
                  </h3>
                  <p className="text-xs text-white/60">
                    Saves directly into PostgreSQL `products` table
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Form */}
            <form onSubmit={handleSubmitProduct} className="p-6 overflow-y-auto flex flex-col gap-6">
              {/* Row 1: Grade Name & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Product Grade / Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. GuardExo BT-30 Ultra"
                    value={formGrade}
                    onChange={(e) => setFormGrade(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2.5 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Product Category *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2.5 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Active Chemistry & CAS Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Active Ingredient / Chemistry
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1,2-Benzisothiazolin-3-one (BIT 30%)"
                    value={formActiveIngredient}
                    onChange={(e) => setFormActiveIngredient(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2.5 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    CAS Registry Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2634-33-5"
                    value={formCasNumber}
                    onChange={(e) => setFormCasNumber(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2.5 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>
              </div>

              {/* Row 3: Target Application */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                  Target Applications & Industrial Uses *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Architectural emulsions, polymer slurries, tile mortars and adhesives"
                  value={formTargetApplication}
                  onChange={(e) => setFormTargetApplication(e.target.value)}
                  className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2.5 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                />
              </div>

              {/* Row 4: Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                  Detailed Product Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide comprehensive performance characteristics, headspace dynamics, or chemistry highlights..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2.5 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                />
              </div>

              {/* Row 5: Key Technical Benefits / Features */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Key Features / Assays (JSONB in PostgreSQL)
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormFeatures([...formFeatures, ""])}
                    className="text-xs text-[#5AB900] hover:underline font-semibold"
                  >
                    + Add Feature Bullet
                  </button>
                </div>
                {formFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={`Feature #${idx + 1}`}
                      value={feat}
                      onChange={(e) => {
                        const next = [...formFeatures];
                        next[idx] = e.target.value;
                        setFormFeatures(next);
                      }}
                      className="flex-1 bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                    />
                    {formFeatures.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setFormFeatures(formFeatures.filter((_, i) => i !== idx))
                        }
                        className="p-2 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Row 6: Dosage, pH, Thermal Limit */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Dosage Guide
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 0.05% – 0.25% w/w"
                    value={formDosageGuide}
                    onChange={(e) => setFormDosageGuide(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    pH Stability
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. pH 2.0 – 12.0"
                    value={formPhStability}
                    onChange={(e) => setFormPhStability(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Temperature Limit
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Up to 100°C"
                    value={formTempLimit}
                    onChange={(e) => setFormTempLimit(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>
              </div>

              {/* Row 7: Appearance & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Appearance
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Clear yellow-amber liquid"
                    value={formAppearance}
                    onChange={(e) => setFormAppearance(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Commercial Packaging
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 25kg carboys / 200kg drums / 1,000kg IBC"
                    value={formPackaging}
                    onChange={(e) => setFormPackaging(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>
              </div>

              {/* Row 8: Image Upload & Preset Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                  Product Image / Canister Visual
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#F5F4F2] p-4 rounded-2xl border border-[#EDE7EC]">
                  <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-white border border-[#EDE7EC] flex-none flex items-center justify-center">
                    {formImageUrl ? (
                      <Image
                        src={formImageUrl}
                        alt="Product visual"
                        fill
                        className="object-contain p-1"
                      />
                    ) : (
                      <Upload size={24} className="text-[#101E10]/30" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/png,image/jpeg,image/webp"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploadingImage}
                        className="inline-flex items-center gap-1.5 bg-[#101E10] text-white hover:bg-[#101E10]/80 px-4 py-2 rounded-xl text-xs font-bold transition-colors disabled:opacity-50"
                      >
                        <Upload size={14} />
                        <span>{isUploadingImage ? "Uploading..." : "Upload Local Image"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormImageUrl("/images/product-bt20-canister.jpg")}
                        className="text-xs text-[#5AB900] hover:underline font-semibold"
                      >
                        Use GuardXO Canister
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Or enter direct image URL"
                      value={formImageUrl}
                      onChange={(e) => setFormImageUrl(e.target.value)}
                      className="w-full bg-white border border-[#EDE7EC] rounded-xl px-3 py-1.5 text-xs text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 9: Badge & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Badge / Tag (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Zero VOC, High Purity, Fast Kill"
                    value={formBadge}
                    onChange={(e) => setFormBadge(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                    Publish Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2 text-xs sm:text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  >
                    <option value="active">Active (Visible in Public Catalog)</option>
                    <option value="draft">Draft (Admin Only)</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-[#EDE7EC] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#EDE7EC] text-xs sm:text-sm font-semibold text-[#101E10]/80 hover:bg-[#F5F4F2]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="inline-flex items-center gap-2 bg-[#C2EC9A] hover:bg-[#b0e67e] text-[#101E10] px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                >
                  {formSubmitting ? (
                    <RefreshCw size={16} className="animate-spin" />
                  ) : (
                    <CheckCircle2 size={16} />
                  )}
                  <span>
                    {editingProduct ? "Save Changes to PostgreSQL" : "Upload & Save to PostgreSQL"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 02. CATEGORIES MANAGEMENT MODAL                           */}
      {/* ========================================================= */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-2xl border border-[#EDE7EC] shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-6 py-5 bg-[#101E10] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C2EC9A] text-[#101E10] flex items-center justify-center font-bold">
                  <Layers size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Manage Product Categories</h3>
                  <p className="text-xs text-white/60">
                    PostgreSQL `categories` table with relational linkage
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-6 max-h-[75vh] overflow-y-auto">
              {/* Existing Categories List */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                  Active Categories ({categories.length})
                </h4>
                <div className="flex flex-col gap-2">
                  {categories.map((c) => {
                    const count = products.filter((p) => p.family === c.name).length;
                    return (
                      <div
                        key={c.id}
                        className="flex items-center justify-between bg-[#F5F4F2] p-4 rounded-xl border border-[#EDE7EC]"
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-[#101E10]">{c.name}</span>
                            <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded text-[#101E10]/60">
                              {c.slug}
                            </span>
                          </div>
                          {c.description && (
                            <p className="text-xs text-[#101E10]/60 line-clamp-1 mt-0.5">
                              {c.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold bg-[#C2EC9A] text-[#101E10] px-2.5 py-1 rounded-lg">
                            {count} products
                          </span>
                          {count === 0 && (
                            <button
                              onClick={() => handleDeleteCategory(c.id)}
                              className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
                              title="Delete empty category"
                            >
                              <Trash2 size={15} />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add New Category Form */}
              <form
                onSubmit={handleCreateCategory}
                className="pt-6 border-t border-[#EDE7EC] flex flex-col gap-4"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101E10]/70">
                  + Add New Category
                </h4>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101E10]/70">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Surface Sanitizers & Disinfectants"
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2.5 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#101E10]/70">
                    Category Description (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of application scope..."
                    value={newCatDescription}
                    onChange={(e) => setNewCatDescription(e.target.value)}
                    className="w-full bg-[#F5F4F2] border border-[#EDE7EC] rounded-xl px-4 py-2 text-sm text-[#101E10] focus:outline-none focus:border-[#5AB900]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={newCatSubmitting}
                  className="self-end inline-flex items-center gap-2 bg-[#101E10] text-[#C6F19D] hover:bg-[#101E10]/90 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                >
                  <Plus size={16} />
                  <span>{newCatSubmitting ? "Creating..." : "Create Category in PostgreSQL"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 03. DELETE CONFIRMATION MODAL                             */}
      {/* ========================================================= */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 border border-[#EDE7EC] shadow-2xl flex flex-col gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#101E10]">Delete Product?</h3>
            <p className="text-xs sm:text-sm text-[#101E10]/70">
              Are you sure you want to permanently delete this product from the PostgreSQL
              database? This action cannot be undone.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl border border-[#EDE7EC] text-xs sm:text-sm font-semibold text-[#101E10]"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProduct(deleteConfirmId)}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold"
              >
                Yes, Delete from DB
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

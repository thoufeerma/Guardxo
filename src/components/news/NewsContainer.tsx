"use client";

import React, { useState } from "react";
import NewsHero from "./NewsHero";
import ArticlesGrid from "./ArticlesGrid";

export default function NewsContainer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    // Smooth scroll to articles grid when category is selected
    const el = document.getElementById("articles");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NewsHero
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <ArticlesGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />
    </>
  );
}

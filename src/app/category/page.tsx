"use client";

import { useState, useMemo } from "react";
import Filters from "@/page/category/filters";
import { animalData } from "@/data/db";
import AnimalCard from "@/components/animalsCards/animalsCard";
import { FilterState } from "@/data/type";
import CategoryHero from "@/components/categoryHero/categoryHero";

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    priceRange: [0, 1000],
    brand: "",
    color: "",
    searchQuery: "",
    genre: "",
    sortBy: "popular",
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...animalData];

    // Filtre catégorie
    if (filters.category) {
      filtered = filtered.filter(
        (p) => p.category?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Filtre prix
    filtered = filtered.filter((p) => {
      const prixNumber = parseFloat(p.prix || "0");
      return (
        prixNumber >= filters.priceRange[0] &&
        prixNumber <= filters.priceRange[1]
      );
    });

    // Filtre genre
    if (filters.genre) {
      filtered = filtered.filter(
        (p) => p.genre?.toLowerCase() === filters.genre
      );
    }

    // Filtre couleur
    if (filters.color) {
      filtered = filtered.filter((p) =>
        p.colors
          ?.toLowerCase()
          .split(",")
          .map((c) => c.trim())
          .includes(filters.color.toLowerCase())
      );
    }

    // Recherche
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.type.toLowerCase().includes(query) ||
          p.matriculation.toLowerCase().includes(query)
      );
    }

    // Tri
    switch (filters.sortBy) {
      case "price-low":
        filtered.sort(
          (a, b) => parseFloat(a.prix || "0") - parseFloat(b.prix || "0")
        );
        break;
      case "price-high":
        filtered.sort(
          (a, b) => parseFloat(b.prix || "0") - parseFloat(a.prix || "0")
        );
        break;
      case "name":
        filtered.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHero/>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres */}
          <div className="lg:w-80 flex-shrink-0">
            <Filters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Grille */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
              {filteredProducts.map((card, idx) => (
                <AnimalCard key={idx} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

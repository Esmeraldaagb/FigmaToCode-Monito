"use client";

import { useState, useMemo } from "react";
import Filters from "@/page/category/filters";
import { animalData } from "@/data/db";
import AnimalCard from "@/components/animalsCards/animalsCard";
import CategoryHero from "@/components/categoryHero/categoryHero";
import { FilterState } from "@/data/type";
// FilterState adapté à tes filtres


export default function Home() {
const [filters, setFilters] = useState<FilterState>({
  category: "",
  genre: "",
  priceRange: [0, 1000],
  gender: "",
  color: "",
  breed: "",
  sortBy: "popular",
  searchQuery: "",
  brand: "",
});
  const filteredProducts = useMemo(() => {
    let filtered = [...animalData];

    // Filtre prix
    filtered = filtered.filter(
      (p) => (p.price ?? 0) >= filters.priceRange[0] && (p.price ?? 0) <= filters.priceRange[1]
    );

    // Filtre genre / gender
    if (filters.gender) {
      filtered = filtered.filter(
        (p) => p.gender?.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    // Filtre couleur
    if (filters.color) {
      filtered = filtered.filter(
        (p) => p.color?.toLowerCase() === filters.color.toLowerCase()
      );
    }

    // Filtre race / breed
    if (filters.breed) {
      filtered = filtered.filter(
        (p) => p.breed?.toLowerCase() === filters.breed.toLowerCase()
      );
    }

    // Recherche par nom/type/matriculation (optionnel)
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.type?.toLowerCase().includes(query) ||
          p.matriculation?.toLowerCase().includes(query) ||
          p.name?.toLowerCase().includes(query)
      );
    }

    // Tri
    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "price-high":
        filtered.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "name":
        filtered.sort((a, b) => (a.type ?? "").localeCompare(b.type ?? ""));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHero />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres */}
             <div className="lg:w-80 flex-shrink-0">
            <Filters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Grille */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
              {filteredProducts.map((card) => (
                <AnimalCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

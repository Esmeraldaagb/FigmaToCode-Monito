"use client";

import { useState, useMemo } from "react";
import Filters from "@/components/category/filters";
import { animalData } from "@/data/db";
import AnimalCard from "@/components/animalsCards/animalsCard";
import CategoryHero from "@/components/categoryHero/categoryHero";
import { FilterState } from "@/data/type";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";  
export default function Category() {
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    genre: "",
    priceRange: [0, 100000000],
    gender: "",
    color: "",
    breed: "",
    sortBy: "popular",
    searchQuery: "",
    brand: "",
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtrage des produits
  const filteredProducts = useMemo(() => {
    let filtered = [...animalData];

    if (!(filters.priceRange[0] === 0 && filters.priceRange[1] === 100000000)) {
      filtered = filtered.filter(
        (p) =>
          (p.price ?? 0) >= filters.priceRange[0] &&
          (p.price ?? 0) <= filters.priceRange[1]
      );
    }

    if (filters.gender) {
      filtered = filtered.filter(
        (p) => p.gender?.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    if (filters.color) {
      filtered = filtered.filter(
        (p) => p.color?.toLowerCase() === filters.color.toLowerCase()
      );
    }

    if (filters.breed) {
      filtered = filtered.filter(
        (p) => p.breed?.toLowerCase() === filters.breed.toLowerCase()
      );
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.type?.toLowerCase().includes(query) ||
          p.matriculation?.toLowerCase().includes(query) ||
          p.name?.toLowerCase().includes(query)
      );
    }

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

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHero />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres */}
          <div className="lg:w-80 flex-shrink-0">
            <Filters filters={filters} onFiltersChange={setFilters} />
          </div>

     <div>
        <div className="flex items-center justify-between mt-2">
          {/* Titre et sous-titre */}
          <div className="flex items-center gap-2">
            <p className="text-[#003459] text-2xl font-bold">Small dog</p>
            <h1 className="text-lg font-medium">52 poppies</h1>
          </div>

          {/* Bouton */}
          <Link href="/category">
            <Button asChild variant="outline" className="p-3 hidden md:block rounded-full border-[#003459]">
              <div className="flex items-center gap-1">
                View more
                <ChevronRight />
              </div>
            </Button>
          </Link>
        </div>

          {/* Grille */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
              {paginatedProducts.map((card) => (
                <AnimalCard key={card.id} {...card} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2  ${
                  currentPage === 1
                    ? " cursor-not-allowed"
                    : "bg-[#002A48] text-white hover:bg-blue-700"
                }`}
              >
               <ArrowLeft className="w-4 h-4 text-[#002A48] text-bold"/>
              </button>

              {/* Numéros de page */}
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === i + 1
                      ? "bg-[#002A48] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2  ${
                  currentPage === totalPages
                    ? " cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <ArrowRight className="w-4 h-4 text-[#002A48] text-bold"/>
              </button>
            </div>
          </div>
</div>
    
        </div>
      </div>
    </div>
  );
}

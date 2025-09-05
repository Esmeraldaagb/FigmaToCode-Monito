"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { X, Filter } from 'lucide-react';
import { FilterState } from '@/data/type';

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export default function Filters({ filters, onFiltersChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['Male', 'Female'];
  const brands = ['TechBrand', 'AudioTech', 'WearTech', 'StyleCo', 'SportFlex', 'BrewMaster', 'EcoWear', 'ZenFit'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Silver', 'Green', 'Gray', 'Navy'];

const updateFilters = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
  onFiltersChange({ ...filters, [key]: value });
};

const clearFilters = () => {
  onFiltersChange({
    category: '',
    priceRange: [0, 1000],
    brand: '',
    color: '',
    searchQuery: filters.searchQuery,
    sortBy: filters.sortBy,
    genre: '',
    gender: '',
    breed: '',
  });
}
  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.category) count++;
    if (filters.brand) count++;
    if (filters.color) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="w-full justify-between"
        >
          <span className="flex items-center">
            Filters
          </span>
          {activeFiltersCount > 0 && (
            <Badge className="bg-blue-900 text-white">{activeFiltersCount}</Badge>
          )}
        </Button>
      </div>

      {/* Filters Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-6`}>
        <Card className="animate-fade-in-up bg-transparent">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-blue-900 flex items-center">
              Filter
            </CardTitle>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-orange-500 hover:text-orange-600"
              >
                Clear All
                <X className="w-4 h-4 ml-1" />
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-6">

            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Gender</h3>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={filters.category === category}
                      onCheckedChange={(checked) => 
                        updateFilters('category', checked ? category : '')
                      }
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

{/* Price Filter */}
<div className="space-y-3">
  <h3 className="font-semibold text-gray-900">Price</h3>
  <div className="flex items-center space-x-4">
    {/* Min */}
    <input
      type="number"
      min={0}
      value={filters.priceRange[0]}
      onChange={(e) =>
        updateFilters('priceRange', [Number(e.target.value), filters.priceRange[1]])
      }
      placeholder="Min"
      className="w-20 border rounded px-2 py-1 text-sm"
    />

    {/* Max */}
    <input
      type="number"
      min={0}
      value={filters.priceRange[1]}
      onChange={(e) =>
        updateFilters('priceRange', [filters.priceRange[0], Number(e.target.value)])
      }
      placeholder="Max"
      className="w-20 border rounded px-2 py-1 text-sm"
    />
  </div>
</div>

       {/* Color Filter */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Colors</h3>
            <div className="space-y-2 max-h-40 overflow-y-hidden pr-2">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  {/* Checkbox */}
                  <Checkbox
                    id={`color-${color}`}
                    checked={filters.color === color}
                    onCheckedChange={(checked) =>
                      updateFilters('color', checked ? color : '')
                    }
                  />
                  {/* Cercle couleur */}
                  <span
                    className="w-4 h-4 rounded-full border"
                    style={{
                      backgroundColor:
                        color.toLowerCase() === 'silver'
                          ? '#c0c0c0'
                          : color.toLowerCase() === 'navy'
                          ? '#000080'
                          : color.toLowerCase(),
                    }}
                  />
                  {/* Label */}
                  <label
                    htmlFor={`color-${color}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {color}
                  </label>
                </div>
              ))}
            </div>
          </div>

          </CardContent>
        </Card>
      </div>
    </>
  );
}
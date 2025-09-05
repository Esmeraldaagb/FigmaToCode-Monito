"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { X, Filter } from 'lucide-react';
import { FilterState } from '@/data/type';
import { Input } from '@/components/ui/input';

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export default function Filters({ filters, onFiltersChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['Male', 'Female'];
  const colors = ['Red', 'Apricot', 'Black', 'Black & white', 'Silver', 'Tan'];

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
        <Card className="animate-fade-in-up bg-transparent shadow-none border-0">
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
       
     <CardContent className="divide-y divide-gray-200">

        {/*Filtre category */}
        <div className="space-y-3 py-4">
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
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* FIltre prix */}
        <div className="space-y-3 py-4">
          <h3 className="font-semibold text-gray-900">Price</h3>
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              min={0}
              value={filters.priceRange[0]}
              onChange={(e) =>
                updateFilters('priceRange', [Number(e.target.value), filters.priceRange[1]])
              }
              placeholder="Min"
              className="w-full shadow-sm border-0 rounded px-4 py-2 text-sm"
            />
            <Input
              type="number"
              min={0}
              value={filters.priceRange[1]}
              onChange={(e) =>
                updateFilters('priceRange', [filters.priceRange[0], Number(e.target.value)])
              }
              placeholder="Max"
              className="w-full shadow-sm border-0 rounded px-4 py-2 text-sm"
            />
          </div>
        </div>

        {/* FIltre couleur */}
        <div className="space-y-3 py-4">
          <h3 className="font-semibold text-gray-900">Colors</h3>
          <div className="space-y-2 max-h-40 overflow-y-hidden pr-2">
            {colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={filters.color === color}
                  onCheckedChange={(checked) =>
                    updateFilters('color', checked ? color : '')
                  }
                />
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

        {/*Filtre breed */}
        <div className="space-y-3 py-4">
          <h3 className="font-semibold text-gray-900">Breed</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
            {['Small', 'Meduim', 'Large'].map((breed) => (
              <div key={breed} className="flex items-center space-x-2">
                <Checkbox
                  id={`breed-${breed}`}
                  checked={filters.breed === breed}
                  onCheckedChange={(checked) =>
                    updateFilters('breed', checked ? breed : '')
                  }
                />
                <label
                  htmlFor={`breed-${breed}`}
                  className="text-sm font-medium cursor-pointer"
                >
                  {breed}
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
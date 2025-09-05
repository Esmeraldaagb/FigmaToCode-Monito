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

  const categories = ['Electronics', 'Fashion', 'Sports', 'Home'];
  const brands = ['TechBrand', 'AudioTech', 'WearTech', 'StyleCo', 'SportFlex', 'BrewMaster', 'EcoWear', 'ZenFit'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Silver', 'Green', 'Gray', 'Navy'];

  const updateFilters = (key: keyof FilterState, value: any) => {
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
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </span>
          {activeFiltersCount > 0 && (
            <Badge className="bg-blue-900 text-white">{activeFiltersCount}</Badge>
          )}
        </Button>
      </div>

      {/* Filters Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-6`}>
        <Card className="animate-fade-in-up">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-blue-900 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
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
              <h3 className="font-semibold text-gray-900">Category</h3>
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

            {/* Price Range Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilters('priceRange', value)}
                  max={1000}
                  min={0}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Brand</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={filters.brand === brand}
                      onCheckedChange={(checked) => 
                        updateFilters('brand', checked ? brand : '')
                      }
                    />
                    <label
                      htmlFor={`brand-${brand}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Colors</h3>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((color) => (
                  <div key={color} className="text-center">
                    <button
                      onClick={() => updateFilters('color', filters.color === color ? '' : color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                        filters.color === color
                          ? 'border-blue-900 ring-2 ring-blue-200'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ 
                        backgroundColor: color.toLowerCase() === 'silver' ? '#c0c0c0' : 
                                         color.toLowerCase() === 'navy' ? '#000080' : 
                                         color.toLowerCase() === 'gray' ? '#808080' : 
                                         color.toLowerCase() 
                      }}
                      title={color}
                    />
                    <span className="text-xs text-gray-600 mt-1 block">{color}</span>
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
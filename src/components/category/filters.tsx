'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { X, Filter } from 'lucide-react'
import { FilterState } from '@/data/type'
import { Input } from '@/components/ui/input'

interface FiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

type SortOptions = "popular" | "price-low" | "price-high" | "name"

export default function Filters({ filters, onFiltersChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const categories = ['Male', 'Female']
  const colors = ['Red', 'Apricot', 'Black', 'Black & white', 'Silver', 'Tan']
  const breeds = ['Small', 'Medium', 'Large']

  const updateFilters = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onFiltersChange({ ...filters, [key]: value })
  }

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
    })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (filters.category) count++
    if (filters.brand) count++
    if (filters.color) count++
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) count++
    if (filters.breed) count++
    return count
  }

  const activeFiltersCount = getActiveFiltersCount()

  const FilterContent = () => (
    <Card className="bg-transparent shadow-none border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-blue-900 flex items-center">Filters</CardTitle>
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
        {/* Genre */}
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
                <label htmlFor={`category-${category}`} className="text-sm font-medium cursor-pointer">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Prix */}
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

        {/* Couleur */}
        <div className="space-y-3 py-4">
          <h3 className="font-semibold text-gray-900">Colors</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
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
                      color.toLowerCase() === 'silver' ? '#c0c0c0' : color.toLowerCase(),
                  }}
                />
                <label htmlFor={`color-${color}`} className="text-sm font-medium cursor-pointer">
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Breed */}
        <div className="space-y-3 py-4">
          <h3 className="font-semibold text-gray-900">Breed</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
            {breeds.map((breed) => (
              <div key={breed} className="flex items-center space-x-2">
                <Checkbox
                  id={`breed-${breed}`}
                  checked={filters.breed === breed}
                  onCheckedChange={(checked) =>
                    updateFilters('breed', checked ? breed : '')
                  }
                />
                <label htmlFor={`breed-${breed}`} className="text-sm font-medium cursor-pointer">
                  {breed}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      {/* Mobile filtre*/}
     
<div className="lg:hidden flex items-center justify-between mb-4 px-2 space-x-4">
  <select
    value={filters.sortBy}
    onChange={(e) => updateFilters('sortBy', e.target.value as SortOptions)}
    className="flex-[0.7] py-3 px-4 rounded-full text-sm border border-gray-200"
  >
    <option value="popular">Popular</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
    <option value="name">Name</option>
  </select>

  <Button variant="outline" className="relative p-3" onClick={() => setIsOpen(true)}>
    <Filter className="w-5 h-5" />
    {activeFiltersCount > 0 && (
      <Badge className="absolute -top-1 -right-1 bg-blue-900 text-white">
        {activeFiltersCount}
      </Badge>
    )}
  </Button>
</div>

      {/*FIltre pc */}
      <div className="hidden lg:block space-y-6">
        <FilterContent />
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/30 z-50 flex justify-end">
          <div className="w-3/4 bg-white h-full p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <FilterContent />
          </div>
        </div>
      )}
    </>
  )
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CustomerReview } from '@/data/type';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomerReviewsProps {
  reviews: CustomerReview[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= reviews.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerView < 0 ? Math.max(0, reviews.length - itemsPerView) : prev - itemsPerView
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Our lovely customers</h3>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsPerView >= reviews.length}
            className="p-2 rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {visibleReviews.map((review) => (
          <div key={review.id} className="relative">
            <Image
              src={review.image}
              alt={`Customer ${review.customerName}`}
              width={200}
              height={200}
              className="w-full aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(reviews.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === index 
                ? 'bg-blue-700' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
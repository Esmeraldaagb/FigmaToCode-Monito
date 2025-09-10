'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CustomerReview } from '@/data/type';

interface CustomerReviewsProps {
  reviews: CustomerReview[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  // Ici on utilise number | null pour le navigateur
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // window.setInterval retourne un number côté navigateur
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % total);
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [total]);

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Our lovely customers</h3>

      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full sm:w-[200px] md:w-[250px] lg:w-[300px] p-2"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={review.image}
                  alt={review.customerName || ""}
                  width={300}
                  height={300}
                  className="w-full h-[250px] object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Points indicateurs */}
        <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-5 h-2 bg-blue-900'
                  : 'w-3 h-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;

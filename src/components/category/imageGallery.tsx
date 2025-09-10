'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Info,ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ImageGalleryProps {
  images: string[];
  dogName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, dogName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
     
      <div className="relative bg-gray-100 overflow-hidden aspect-square md:rounded-xl md:aspect-square md:bg-gray-100">
        <Image
          src={images[selectedImage]}
          alt={`${dogName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
        />

        {/* Navigation Buttons */}
         <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

         {/* Retour (mobile) */}
        <div className="absolute top-4 left-4 md:hidden">
          <Link href="/">
            <div className="bg-white/30 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <ArrowLeft className="w-5 h-5 text-gray-900" />
            </div>
          </Link>
        </div>

        {/* Info Icon (mobile) */}
        <div className="absolute top-4 right-4 md:hidden">
          <div className="bg-white/30 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <Info className="w-5 h-5 text-gray-900" />
          </div>
        </div>

      </div>

     
      {/* Gallery */}
      <div className="flex md:grid md:grid-cols-6 gap-2 overflow-x-auto md:overflow-visible mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-lg overflow-hidden aspect-square flex-shrink-0 w-20 md:w-auto hover:opacity-75 transition-all duration-200 ${
              selectedImage === index 
                ? 'ring-2 ring-blue-700 ring-offset-2' 
                : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1'
            }`}
          >
            <Image
              src={image}
              alt={`${dogName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default ImageGallery;

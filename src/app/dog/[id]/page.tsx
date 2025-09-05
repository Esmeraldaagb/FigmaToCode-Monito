import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { animalData,customerReviews } from '@/data/db';
import ImageGallery from '@/components/category/imageGallery';
import CustomerReviews from '@/components/category/customerReview';
import { 
  MessageCircle, 
  Phone, 
  Share2, 
  Facebook, 
  Twitter, 
  Mail, 
  Shield, 
  Award, 
  MapPin, 
  Calendar,
  ArrowLeft,
  Heart
} from 'lucide-react';

interface DogDetailPageProps {
  params: {
    id: string;
  };
}

const DogDetailPage: React.FC<DogDetailPageProps> = ({ params }) => {
 const dog = animalData.find(d => d.id === Number(params.id));

  if (!dog) {
    notFound();
  }

 const formatPrice = (price: number, currency?: string) => {
  return `${price.toLocaleString()} ${currency ?? ""}`;
};

  const formatDate = (dateStr: string) => {
    return dateStr;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dogs</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
           <ImageGallery images={dog.images ?? []} dogName={dog.name ?? dog.type ?? ""} />
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{dog.name}</h1>
                <button className="p-3 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
             <p className="text-3xl font-bold text-blue-700 mb-6">
                {formatPrice(dog.price ?? 0, dog.currency)}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact us</span>
              </button>
              <button className="flex-1 bg-white border border-blue-700 text-blue-700 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Monita</span>
              </button>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 py-6 border-t border-gray-200">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU</span>
                  <span className="font-medium">{dog.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender</span>
                  <span className="font-medium">{dog.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Age</span>
                  <span className="font-medium">{dog.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Size</span>
                  <span className="font-medium">{dog.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color</span>
                  <span className="font-medium">{dog.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vaccinated</span>
                  <span className="font-medium text-green-600">{dog.vaccinated ? 'Yes' : 'No'}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Dewormed</span>
                  <span className="font-medium text-green-600">{dog.dewormed ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cert</span>
                  <span className="font-medium">{dog.cut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Microchip</span>
                  <span className="font-medium text-green-600">{dog.microchip ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{dog.location}</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Published Date</span>
                  <span className="font-medium flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                   <span>{formatDate(dog.publishedDate ?? "")}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex items-center space-x-6 py-4 bg-green-50 rounded-lg px-4">
              <div className="flex items-center space-x-2 text-green-700">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">100% health guarantee for pets</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">100% guarantee of pet identification</span>
              </div>
            </div>

            {/* Share */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Share:</span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Additional Information</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {dog.additionalInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16">
          <CustomerReviews reviews={customerReviews} />
        </div>

        {/* What's New Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s new?</h3>
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 font-medium"
          >
            <span>See More Puppies</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DogDetailPage;
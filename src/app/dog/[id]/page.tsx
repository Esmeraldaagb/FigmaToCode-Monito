
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { animalData, customerReviews } from '@/data/db';
import ImageGallery from '@/components/category/imageGallery';
import CustomerReviews from '@/components/category/customerReview';
import { 

  Phone, 
  Share2, 
  Facebook, 
  Twitter, 
  Mail, 
  MapPin, 
  ArrowLeft,
  MessageSquareMore,
} from 'lucide-react';
import AnimalCard from '@/components/animalsCards/animalsCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from 'next/image';


interface DogDetailPageProps {
  params: {
    id: string;
  };
}

const DogDetailPage: React.FC<DogDetailPageProps> = ({ params }) => {
  const dog = animalData.find(d => d.id === Number(params.id));
  if (!dog) notFound();

  const formatPrice = (price: number, currency?: string) => {
    return `${price.toLocaleString()} ${currency ?? ""}`;
  };

  const formatDate = (dateStr: string) => dateStr;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-2 p-4 border-[#EBEEEF] rounded-lg">

          <div className="flex flex-col space-y-6">

            {/* Image principale */}
            <div className="w-full pt-4 sm:pt-6">
              <ImageGallery
                images={(dog?.images ?? []).map(img =>
                  typeof img === "string" ? img : img.src
                )}
                dogName={dog?.name ?? ""}
              />
            </div>

            {/* Garanties */}
            <div className="flex flex-row py-2 bg-[#FFE7BF] rounded-lg px-4 space-x-4">
              <div className=" flex items-center space-x-2 text-[#002A48]">
                <Image src="/icon1.png" width={20} height={20} alt="icon"/>
                <span className="text-sm  font-bold">100% health guarantee for pets</span>
              </div>
              <div className=" flex items-center space-x-2 text-[#002A48]">
                  <Image src="/icon2.png" width={20} height={20} alt="icon"/>

                <span className="text-sm font-bold ">100% guarantee of pet identification</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-gray-600 font-medium flex gap-2"><Share2 className='w-5 h-5 font-bold'/>Share:</span>
              <div className="flex space-x-3">
                <button className=" text-gray-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className=" text-gray-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </button>
                <button className=" text-gray-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </button>
                <button className="text-gray-400 transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

          </div>

          <div className="flex flex-col space-y-6 text-left">

            {/* Breadcrumb  */}
            <div className="w-full overflow-x-auto">
              <Breadcrumb className="flex-nowrap">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/"><h2 className='text-lg'>Home</h2></Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/dogs"><h2 className='text-lg'>Dog</h2></Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={`/dogs?size=${dog?.size}`}><h2 className='text-lg'>{dog?.size}</h2></Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                   <h2 className='text-lg'>{dog?.type} </h2>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* SKU */}
            <p className="text-[#99A2A5] text-md">SKU: <span className="font-medium">{dog?.sku}</span></p>

            {/* Nom et Prix */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#00171F] text-xl font-bold">{dog?.type}</p>
              </div>
              <p className="text-3xl font-bold text-[#002A41]">{formatPrice(dog?.price ?? 0, dog?.currency)} VND</p>
            </div>

            {/* Boutons */}
            <div className="flex flex-row space-x-4">
              <button className="flex-1 bg-[#003459] text-white py-3 px-6 rounded-full hover:bg-[#002A48] transition-colors font-medium flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact us</span>
              </button>
              <button className="flex-1 bg-white border border-[#002A48] text-[#002A48] py-3 px-6 rounded-full hover:bg-blue-50 transition-colors font-medium flex items-center justify-center space-x-2">
                <MessageSquareMore className="w-5 h-5" />
                <span>Chat with Monita</span>
              </button>
            </div>

            
              {/* Infos détaillées */}
              <div className="flex flex-col divide-y divide-gray-200 py-6">
                {[
                  { label: 'SKU', value: dog?.sku },
                  { label: 'Gender', value: dog?.gender },
                  { label: 'Age', value: dog?.age },
                  { label: 'Size', value: dog?.size },
                  { label: 'Color', value: dog?.color },
                  { label: 'Vaccinated', value: dog?.vaccinated ? 'Yes' : 'No', highlight: dog?.vaccinated },
                  { label: 'Dewormed', value: dog?.dewormed ? 'Yes' : 'No', highlight: dog?.dewormed },
                  { label: 'Cert', value: dog?.cut },
                  { label: 'Microchip', value: dog?.microchip ? 'Yes' : 'No', highlight: dog?.microchip },
                  { label: 'Location', value: dog?.location, icon: <MapPin className="w-4 h-4" /> },
                  { label: 'Published Date', value: formatDate(dog?.publishedDate ?? "")},
                  { label: 'Additional Information', value: dog?.additionalInfo },
                ].map((item, i) => (
                  <div key={i} className="flex py-2 items-center">
                    {/* Label */}
                    <span className="text-[#667479] w-1/3">{item.label}</span>

                    {/* Value */}
                    <span className={`text-left font-light flex items-center space-x-1 w-2/3 `}>
                      {item.icon && item.icon}
                      <span>:{item.value}</span>
                    </span>
                  </div>
                ))}
              </div>

          </div>
        </div>

        {/* Avis */}
        <div className="mt-16">
          <CustomerReviews reviews={customerReviews} />
        </div>

  
      <div className="mt-16">
        <p>{"What's"} new?</p>
        <h2 className="text-2xl font-bold mb-6 text-[#003459]">See more Puppies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {animalData
            .filter(a => a.id !== dog?.id) 
            .slice(0, 4)
            .map(animal => (
              <AnimalCard
                key={animal.id}
                id={animal.id}
                type={animal.type}
                matriculation={animal.matriculation}
                age={animal.age}
                gender={animal.gender} 
                images={animal.images}
                price={animal.price}
              />
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetailPage;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Eye } from "lucide-react";
import { AnimalCardProps } from "@/data/type";

const AnimalCard: React.FC<AnimalCardProps> = ({
  id,
  type,
  matriculation,
  age,
  genre,
  images,
  price,

}) => {
  return (
    <div
      className={`group rounded-xl shadow-lg bg-white flex flex-col gap-3 p-4 w-full relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      {/* Image */}
     <div className="relative w-full h-64 rounded-md overflow-hidden">
        {images?.map((image, index) => (
          <Image
            key={index}
             src={images?.[0] || "/placeholder.png"} // première image ou placeholder
            alt={`Chiot ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={300}
            height={320}
          />
        ))}  

        <Link
         href={`/dog/${id}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <span className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-transform transform hover:scale-110">
            <Eye className="w-5 h-5" />
            View Details
          </span>
        </Link>
      </div>

      {/* Type */}
      <h2 className="text-lg font-bold text-[#00171F] mt-2">
        {matriculation} - {type}
      </h2>

      {/* Infos */}
      <div className="flex gap-5 text-sm text-gray-700">
        <div className="flex gap-2">
          Genre: <p className="text-[#667469] font-bold">{genre}</p>
        </div>
        <div className="flex gap-2">
          Age: <p className="text-[#667469] font-bold">{age} months</p>
        </div>
      </div>

      {/* Prix */}
      {price && (
        <p className="text-[#00171F] text-lg font-semibold">{price} VND</p>
      )}
    </div>
  );
};

export default AnimalCard;

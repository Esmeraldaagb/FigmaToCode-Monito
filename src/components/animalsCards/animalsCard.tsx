import Image from "next/image";
import React from "react";
import { AnimalCardProps } from "@/data/type";

const AnimalCard: React.FC<AnimalCardProps> = ({
  type,
  matriculation,
  age,
  genre,
  image,
  prix,
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl shadow-lg bg-white flex flex-col gap-3 p-4 w-full ${className}`} // largeur un peu plus compacte
    >
      {/* Image */}
      {image && (
        <Image
          src={image}
          alt={type}
          className="w-full h-64 object-cover rounded-md"
          width={300}
          height={320}
        />
      )}

      {/* Type */}
      <h2 className="text-lg font-bold text-[#00171F]">{matriculation} - {type}</h2>

      {/* Infos */}
      <div className="flex gap-5 text-sm text-gray-700">
        <div className="flex gap-2">Genre: <p className="text-[#667469] font-bold"> {genre}</p></div> *
        <div className="flex gap-2">Age:<p className="text-[#667469] font-bold"> {age} months</p> </div>
      </div>

      {/* Prix */}
      {prix && <p className="text-[#00171F] text-lg font-semibold">{prix} VND</p>}
    </div>
  );
};

export default AnimalCard;

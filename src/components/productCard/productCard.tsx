import Image from "next/image";
import React from "react";
import { ProductCardProps } from "@/data/type";
import { Button } from "../ui/button";
import icon from "@/assets/gift.png"
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  product,
  size,
  image,
  prix,
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl shadow-lg bg-white flex flex-col gap-3 p-4 w-full ${className}`} 
    >
      {/* Image */}
      {image && (
        <Image
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-md"
          width={300}
          height={320}
        />
      )}

      {/* Type */}
      <h2 className="text-lg font-bold text-[#00171F]">{name}</h2>

      {/* Infos */}
      <div className="flex gap-5 text-sm text-gray-700">
        <div className="flex gap-2">Prdocut: <p className="text-[#667469] font-bold"> {product}</p></div> *
        <div className="flex gap-2">Size:<p className="text-[#667469] font-bold"> {size} months</p> </div>
      </div>

      {/* Prix */}
      {prix && <p className="text-[#00171F] text-lg font-semibold">{prix} VND</p>}

      <Button className="p-2 bg-[#FCEED5] hover:bg-blue-950 hover:text-white ">
        <div className="flex gap-4">
            <Image src={icon} alt="icon" width={20} height={20}/> *
            <p className="text-[#002A48] text-md font-semibold ">Free Toy & Free Shaker</p>
        </div>
      </Button>
    </div>
  );
};

export default ProductCard;

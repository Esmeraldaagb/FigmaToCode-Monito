import { StaticImageData } from "next/image";

export type AnimalCardProps = {
  id: number;
  type: string;
  matriculation: string;
  genre?: "male" | "female";
  age?: number;
  prix?: string;
  image?: string | StaticImageData;
  className?: string;
  category?: string;
  colors?: string;
};



export type ProductCardProps = {
  name: string;
  product?: string;
  size?: string;
  prix?: string; 
  image?: string | StaticImageData;
  className?: string;
};

export type SellersProps={
  image?: string | StaticImageData;
  
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  brand?: string; // optionnel ou supprimé si inutile
  color: string;
  searchQuery: string;
  genre: "" | "male" | "female"; // autorise vide
  sortBy: "popular" | "price-low" | "price-high" | "name" | "rating";
}
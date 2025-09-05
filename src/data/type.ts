import { StaticImageData } from "next/image";

export type AnimalCardProps = {
  id?: number;
  type?: string;
  matriculation: string;
  genre?: "male" | "female";
  name?: string;
  price?: number;
  currency?: string;
  images: (string | StaticImageData)[];
  sku?: string;
  gender?: string;
  age?: number;
  size?: string;
  color?: string;
  vaccinated?: boolean;
  dewormed?: boolean;
  cut?: string;
  microchip?: boolean;
  location?: string;
  publishedDate?: string;
  additionalInfo?: string;
  breed?: string;
  description?: string;
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

export type FilterState = {
  category: string;
  genre: string;
  priceRange: [number, number];
  gender: string;
  color: string;
  breed: string;
  sortBy: "popular" | "price-low" | "price-high" | "name";
  searchQuery?: string;
  brand?: string;
};

export interface CustomerReview {
  id: string;
  image: string;
  customerName?: string;
}
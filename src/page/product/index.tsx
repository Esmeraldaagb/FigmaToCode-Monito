import ProductCard from "@/components/productCard/productCard";
import { Button } from "@/components/ui/button";
import { productData } from "@/data/db";
import { ChevronRight} from "lucide-react";

export default function ProductList() {
  return (
    <div className="px-20 py-20">

<div className="flex">

    <div className="my-2">
        <p className="text-lg font-medium">Hard to choose right products for your pets?</p>
        <h1 className="text-[#003459] text-2xl font-bold">Our product</h1>
    </div>

    <div className="justify-end ml-auto">
        <Button asChild variant="outline" className="p-3 rounded-full border-[#003459]">
            <div className="flex gap-1">
                View more
                <ChevronRight/>
            </div>
        </Button>
    </div>

</div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
      {productData.map((card, index) => (
        <ProductCard key={index} {...card} />
      ))}
    </div>
    </div>
  );
}

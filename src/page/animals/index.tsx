import AnimalCard from "@/components/animalsCards/animalsCard";
import { Button } from "@/components/ui/button";
import { animalData } from "@/data/db";
import { ChevronRight} from "lucide-react";
import Link from "next/link";

export default function AnimalsList() {
  return (
    <div className="px-20 py-20">

      <div className="flex">

          <div className="my-2">
              <p className="text-lg font-medium">{"What's "} new?</p>
              <h1 className="text-[#003459] text-2xl font-bold">Take a look at some of our pets</h1>
          </div>

          <div className="justify-end ml-auto">
            <Link href="/category">
              <Button asChild variant="outline" className="p-3 rounded-full border-[#003459]">
                  <div className="flex gap-1">
                      View more
                      <ChevronRight/>
                  </div>
              </Button>
            </Link>
          </div>

      </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
      {animalData.map((card, index) => (
        <AnimalCard key={index} {...card} />
      ))}
    </div>
    </div>
  );
}

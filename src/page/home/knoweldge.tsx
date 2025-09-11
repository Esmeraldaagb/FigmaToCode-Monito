
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import k1 from "@/assets/knoweldge/k1.png"
import k2 from "@/assets/knoweldge/k2.png"
import k3 from "@/assets/knoweldge/k3.png"
import Image from "next/image";

const petArticles = [
  {
    id: 1,
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    description: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus...",
    image: k1,
    category: "Pet knowledge"
  },
  {
    id: 2,
    title: "Dog Diet You Need To Know",
    description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...",
    image: k2,
    category: "Pet knowledge"
  },
  {
    id: 3,
    title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    description: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    image: k3,
    category: "Pet knowledge"
  }
];

export default function Knowledge() {
  return (
    <main className="">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <section className="">
         
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-12">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-600 text-sm lg:text-base mb-2">You already know ?</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003459]">
                Useful Pet Knowledge
              </h1>
            </div>

            <div className="flex gap-3">
            <button 
                className="flex items-center border-2 border-[#003459] text-[#003459] hover:bg-blue-50 transition-colors duration-200 px-4 py-2 rounded-full"
            >
                View more
                <ChevronRight className="ml-2 h-4 w-4" />
            </button>
           </div>

          </div>

                        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {petArticles.map((article) => (
                            <Card 
                key={article.id} 
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white flex flex-col"
                >
                {/* Wrapper avec padding uniquement horizontal */}
                <div className="relative w-full px-4 lg:px-6 pt-4">
                    <div className="w-full h-48 sm:h-56 lg:h-64 relative overflow-hidden rounded-lg">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover w-full h-full rounded-lg"
                        priority
                    />
                    </div>
                </div>

                <CardContent className="p-4 lg:p-6 pt-2">
                    <Badge 
                    variant="secondary" 
                    className="mb-2 bg-[#00A7E7] text-white hover:bg-blue-200 transition-colors duration-200"
                    >
                    {article.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg leading-tight line-clamp-2">
                {article.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-4">
                {article.description}
                </p>
            </CardContent>
                </Card>


            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
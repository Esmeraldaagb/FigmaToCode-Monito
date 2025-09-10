import AdoptionCard from "@/components/adoptionCard/adoptionCard";
import Hero from "@/components/hero";
import PubCard from "@/components/pubCard/pubCad";
import AnimalsList from "@/page/animals";
import Knowledge from "@/page/home/knoweldge";
import ProductList from "@/page/product";
import Sellers from "@/page/sellers/sellers";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <AnimalsList/>
       <PubCard/>
      <ProductList/>
      <Sellers/>
    <AdoptionCard/>
    <Knowledge/>
     
    </div>
  );
}

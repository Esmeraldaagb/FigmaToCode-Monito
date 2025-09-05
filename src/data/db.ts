import { chiotimages,productimages,sellersimages } from "./image";
import { AnimalCardProps,ProductCardProps,SellersProps } from "./type";

export const animalData: AnimalCardProps[] = [
  {
    id: 1,
    matriculation: "MO231",
    type: "Pomeranian White",
    genre: "male",
    age: 2,
    image: chiotimages.chiot1,
    prix: "6.900.000",
  },
  {
    id: 2,
    type: "Poodle Tiny Yellow",
    matriculation: "MO502",
    genre: "female",
    age: 2,
    image: chiotimages.chiot2,
    prix: "3.900.000",
  },
  {
    id: 3,
    type: "Poodle Tiny Yellow",
    matriculation: "MO102",
    genre: "male",
    age: 2,
    image: chiotimages.chiot3,
    prix: "4.000.000",
  },
  {
    id: 4,
    type: "Alaskan Malamute Grey",
    matriculation: "MO512",
    genre: "male",
    age: 2,
    image: chiotimages.chiot4,
    prix: "8.900.000",
  },
  {
    id: 5,
    type: "Pembroke Corgi Cream",
    matriculation: "MO231",
    genre: "male",
    age: 2,
    image: chiotimages.chiot5,
    prix: "7.900.000",
  },
  {
    id: 6,
    type: "Pembroke Corgi Cream",
    matriculation: "MO502",
    genre: "female",
    age: 2,
    image: chiotimages.chiot6,
    prix: "9.000.000",
  },
  {
    id: 7,
    type: "Pomeranian White",
    matriculation: "MO231",
    genre: "female",
    age: 2,
    image: chiotimages.chiot7,
    prix: "6.500.000",
  },
  {
    id: 8,
    type: "Poodle Tiny Yellow",
    matriculation: "MO512",
    genre: "male",
    age: 2,
    image: chiotimages.chiot8,
    prix: "5.000.000",
  },
];


export const productData = [
  
    {
    id:1,
    name: "Reflex Plus Adult Cat Food Salmon",
    product: "Dog food",
    size: "385gm",
    image: productimages.prod1,
    prix:"140.000",
  },
  {
    id:2,
    name: "Reflex Plus Adult Cat Food Salmon",
    product: "Cat food",
    size: "2",
    image: productimages.prod2,
    prix:"165.000",

  },
   {
    id:3,
    name: "Cat scratching ball toy kitten sisal rope ball",
    product: "Toy",
    size:" 1.5kg",
    image: productimages.prod3,
    prix:"1.100.000",

  },
   {
    id:4,
    name: "Cute Pet Cat Warm Nest",
    product: "Toy",
    size: "2",
    image: productimages.prod4,
    prix:"410.000",

  },
   {
    id:5,
    name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    product: "Dog food",
     size: "385gm",
    image: productimages.prod5,
    prix:"350.000",

    

  },
   {
    id:6,
    name: "Costumes Fashion Pet Clother Cowboy Rider",
    product: "Costume",
    size: "1.5kg",
    image: productimages.prod6,
    prix:"500.000",

  },
   {
    id:7,
    name: "Costumes Chicken Drumsti ck Headband",
    product: "Costume",
    size: "2",
    image: productimages.prod7,
    prix:"400.000",

  },
   {
    id:8,
    name: "Plush Pet Toy",
    product: "Toy",
    size: "2",
    image: productimages.prod8,
    prix:"250.000",

  },
];


export const sellersData=[
  { id:1, img:sellersimages.sel1,},
  { id:2, imh:sellersimages.sel2,},
  { id:3, img:sellersimages.sel3,},
  { id:4, img:sellersimages.sel4,},
  { id:5, img:sellersimages.sel5,},
  { id:6, img:sellersimages.sel6,},
  { id:7, img:sellersimages.sel7,},


]
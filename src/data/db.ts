import { chiotImages1,chiotImages2,chiotImages3,chiotImages4,chiotImages5,chiotImages6,chiotImages7,chiotImages8,productimages,sellersimages } from "./image";
import { AnimalCardProps,CustomerReview } from "./type";

export const animalData: AnimalCardProps[] = [
  {
    id: 1,
    matriculation: "MO231",
    type: "Pomeranian White",
    genre: "male",
    age: 2,
    images: chiotImages1,
    price: 6900000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
  },
  {
    id: 2,
    type: "Poodle Tiny Yellow",
    matriculation: "MO502",
    genre: "female",
    age: 2,
    images:chiotImages2,
    price: 3900000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
  },
  {
    id: 3,
    type: "Poodle Tiny Yellow",
    matriculation: "MO102",
    genre: "male",
    age: 2,
    images:chiotImages3,
    price: 4000000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
  },
  {
    id: 4,
    type: "Alaskan Malamute Grey",
    matriculation: "MO512",
    genre: "male",
    age: 2,
    images:chiotImages4,
    price: 8900000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
  },
  {
    id: 5,
    type: "Pembroke Corgi Cream",
    matriculation: "MO231",
    genre: "male",
    age: 2,
    images:chiotImages5,

    price: 7900000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
  },
  {
    id: 6,
    type: "Pembroke Corgi Cream",
    matriculation: "MO502",
    genre: "female",
    age: 2,
    images:chiotImages6,

    price: 9000000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
  },
  {
    id: 7,
    type: "Pomeranian White",
    matriculation: "MO231",
    genre: "female",
    age: 2,
    images:chiotImages7,
    price: 6500000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
  },
  {
    id: 8,
    type: "Poodle Tiny Yellow",
    matriculation: "MO512",
    genre: "male",
    age: 2,
    images:chiotImages8,
    price: 5000000,
    sku: '#000078',
    gender: 'Female',
    size: 'Small',
    color: 'Apricot & Tan',
    vaccinated: true,
    dewormed: true,
    cut: 'Yes (MKA)',
    microchip: true,
    location: 'Vietnam',
    publishedDate: '12-Oct-2022',
    additionalInfo: 'Pure breed Shib Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.',
    breed: 'Shiba Inu',
    description: 'Beautiful Shiba Inu with excellent temperament and health guarantees.'
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

export const customerReviews: CustomerReview[] = [
  {
    id: '1',
    image: chiotImages1[0],
    customerName: 'Happy Family'
  },
  {
    id: '2',
    image: chiotImages2[0],
    customerName: 'Dog Lover'
  },
  {
    id: '3',
    image: chiotImages3[0],
    customerName: 'Pet Parent'
  },
  {
    id: '4',
    image: chiotImages4[0],
    customerName: 'Animal Enthusiast'
  },
  {
    id: '5',
    image: chiotImages5[0],
    customerName: 'Puppy Family'
  }
];
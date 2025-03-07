import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Image from "next/image";

interface ProductProps {
  id: number;
  name: string;
  price: string;
  description: string;
  image?: string;
}

const products: ProductProps[] = [
  { id: 1, name: "Smartphone", price: "$20000", description: "Latest 5G smartphone with 128GB storage.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Shoe", price: "$5000", description: "Runnning shoe", image: "/images/shoose2.jpg" },
  { id: 3, name: "headphone", price: "$2500", description: "wireless conection", image: "/images/headphone1.jpg" },
  { id: 4, name: "labtop", price: "$45000" , description: "8GB to 16GB of RAM provides a good balance of performance and value. Power users and professionals may benefit from 32GB ",image: "/images/labtop2.jpg"},
  { id: 5, name: "watch", price: "$40000" , description:"SKMEI Super Amoled 3D Curved Display LS05 Smartwatch  (Black Strap, Medium)" ,image: "/images/watch.jpg"}, 
  { id: 6, name: "LED TV", price: "$50000" , description: "Samsung 40 inches Full HD LED TV 40N5000 ",image: "/images/LEDTV.jpg"},
];

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              {product.image && <Image src={product.image} alt="Product Image" width={500} height={500} /> }
              <p className="text-gray-700">{product.price}</p>
              <Link href={`/product/${product.id}`}>
              
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Product</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

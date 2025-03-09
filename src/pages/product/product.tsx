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
  { id: 2, name: "Shoe", price: "$5000", description: "Running shoe", image: "/images/shoose2.jpg" },
  { id: 3, name: "Headphone", price: "$2500", description: "Wireless connection", image: "/images/headphone1.jpg" },
  { id: 4, name: "Laptop", price: "$45000" , description: "8GB to 16GB of RAM provides a good balance of performance and value. Power users and professionals may benefit from 32GB.", image: "/images/labtop2.jpg" },
  { id: 5, name: "LED TV", price: "$50000" , description: "Samsung 40 inches Full HD LED TV 40N5000.", image: "/images/LEDTV.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              {product.image && (
                <div className="w-full h-48 relative mb-4">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
              )}
              <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
              <p className="text-gray-700 mt-1">{product.description}</p>
              <p className="text-blue-600 font-bold mt-2">{product.price}</p>
              <Link href={`/product/${product.id}`}>
                <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300">View Product</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

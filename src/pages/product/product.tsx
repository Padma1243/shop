import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Image from 'next/image';

interface ProductProps {
  id: number;
  name: string;
  price: string;
  description: string;
  image?: string;
}

const products: ProductProps[] = [
  { id: 1, name: "Smartphone", price: "$10000", description: "Latest 5G smartphone with 128GB storage.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Shoe", price: "$1500", description: "Runnning shoe", image: "/images/shoose2.jpg" },
  
];

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              {product.image && <img src={product.image} alt={product.name} className="w-full h-40 object-cover mt-2" />}
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

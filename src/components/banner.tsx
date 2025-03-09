"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

// Sample Featured Products
const featuredProducts = [
  { id: 1, name: "Smartphone", price: "$20000", image: "/images/smartphone.jpg" },
  { id: 2, name: "Shoe", price: "$5000", image: "/images/shoose2.jpg" },
  { id: 3, name: "Headphone", price: "$2500", image: "/images/headphone1.jpg" },
];

const PromoBanner: React.FC = () => {
  const router = useRouter();

  return (
    <div className="p-8 py-16 bg-gradient-to-r from-blue-600 to-violet-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Up to <span className="text-red-300">50% Off</span> on Selected Items!
          </h2>
          <p className="text-lg mt-2">Limited time offer. Grab your favorite products now!</p>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white text-gray-900 rounded-lg shadow-lg p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-lg font-bold text-blue-600">{product.price}</p>
              <button
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        
      </div>
    </div>
  );
};

export default PromoBanner;

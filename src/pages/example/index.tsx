import Link from "next/link";
import Navbar from "../../components/navbar";
import React from 'react'
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 15 },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">E-Commerce Store</h1>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <Link href={`/products/${product.id}`} className="inline-block">
                <button className="bg-blue-500 text-white p-2 rounded mt-2 w-full">
                  View
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

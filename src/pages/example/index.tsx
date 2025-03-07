import Link from "next/link";
import Navbar from "../../components/navbar";
import PromoBanner from "@/components/banner";
import Article from "@/components/article";
import React from 'react';
import Footer from "@/components/footer";
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
        
             
      </div>
      <PromoBanner />
      <Article />
      <Footer />
    </div>
  );
}

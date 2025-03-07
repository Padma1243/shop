// import Link from "next/link";
import Navbar from "../../components/navbar";
import PromoBanner from "@/components/banner";
import Article from "@/components/article";
import React from 'react';
import Footer from "@/components/footer";

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

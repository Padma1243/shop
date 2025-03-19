 import Link from "next/link";
import Layout from "@/components/layout";
import PromoBanner from "@/components/banner";
import Article from "@/components/article";
import React from 'react';
import ImageCarousel from "@/components/imagecarousel";



export default function Home() {
  return (
    <Layout>
    <div>
     
      <div className="container mx-auto p-4">
        <ImageCarousel />
        
       
      </div>
      <PromoBanner />
      <Article />
      
    </div>
    </Layout>
  );
}

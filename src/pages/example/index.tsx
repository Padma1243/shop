// import Link from "next/link";
import Layout from "@/components/layout";
import PromoBanner from "@/components/banner";
import Article from "@/components/article";
import React from 'react';
import ImageCarousel from "@/components/imagecarousel";



export default function Home() {
  return (
    <Layout>
    <div className=" w-full space-y-2">
    
      {/* <div className="container mx-auto p-4"> */}
        <ImageCarousel />
      {/* </div> */}
      <Article />
      <PromoBanner />
      
    </div>
    </Layout>
  );
}

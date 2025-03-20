"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Layout from "@/components/layout";
import WishlistButton from "@/components/wishlistbutton";
import { useCart } from "@/context/cart-context";
import SearchFilter from "@/components/searchfilter";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Smartphone", price: 20000, image: "/images/smartphone.jpg", category: "electronics" },
  { id: 2, name: "Bluetooth", price: 5000, image: "/images/blutooth.jpg", category: "electronics" },
  { id: 3, name: "Headphone", price: 2500, image: "/images/headphone1.jpg", category: "electronics" },
  { id: 4, name: "Laptop", price: 45000, image: "/images/top.jpg", category: "electronics" },
  { id: 5, name: "LED TV", price: 50000, image: "/images/tv.jpg", category: "electronics" },
  { id: 6, name: "Tholkaapiyam", price: 20000, image: "/images/thol.jpg", category: "books" },
  { id: 7, name: "Thirukural Book", price: 5000, image: "/images/thiru.webp", category: "books" },
  { id: 8, name: "Kitchen Products", price: 2500, image: "/images/home.jpg", category: "home" },
  { id: 9, name: "T-shirts", price: 45000, image: "/images/photo-1562157873-818bc0726f68.avif", category: "clothing" },
  { id: 10, name: "Jeans", price: 50000, image: "/images/jeans.jpg", category: "clothing" },
  { id: 11, name: "Toys for kids", price: 20000, image: "/images/toy2.jpg", category:"toys" },
  { id: 12, name: "Kids toys", price: 5000, image: "/images/toy1.jpg",category:"toys"},
  { id: 13, name: "Running shoes", price: 2500, image: "/images/shooo.jpg", category:"sports" },
  { id: 14, name: "Tennis ball & bat", price: 45000, image: "/images/tennisbat.jpg", category:"sports"} ,
  { id: 15, name: "Football", price: 50000, image: "/images/football.jpg",category:"sports" },
  { id: 16, name: "Couch", price: 5500, image: "/images/shopha.jpg",category:"home"   },
];



const ProductList = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleViewDetails = (id: number) => {
    router.push(`/product/${id}`);
  };

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  };

  const filteredProducts = products.filter((product) =>
    (selectedCategory ? product.category === selectedCategory : true) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
        <div className="flex justify-end mb-6">
          <SearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <WishlistButton productId={product.id} className="absolute top-4 right-4" />
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={200} 
                className="rounded-lg cursor-pointer" 
                onClick={() => handleViewDetails(product.id)} 
              />
              <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
              <p className="text-xl font-semibold mt-2">₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;

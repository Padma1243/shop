"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/layout";
import WishlistButton from "@/components/wishlistbutton"; // ✅ Fixed import
import { useCart } from "@/context/cart-context"; // ✅ Fixed cart context import

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Smartphone", price: 20000, image: "/images/smartphone.jpg" },
  { id: 2, name: "Bluetooth", price: 5000, image: "/images/blutooth.jpg" },
  { id: 3, name: "Headphone", price: 2500, image: "/images/headphone1.jpg" },
  { id: 4, name: "Laptop", price: 45000, image: "/images/top.jpg" },
  { id: 5, name: "LED TV", price: 50000, image: "/images/tv.jpg" },
  { id: 6, name: "Tholkaapiyam", price: 20000, image: "/images/thol.jpg" },
  { id: 7, name: "Thirukural Book", price: 5000, image: "/images/thiru.webp" },
  { id: 8, name: "Kitchen Products", price: 2500, image: "/images/home.jpg" },
  { id: 9, name: "T-shirts", price: 45000, image: "/images/photo-1562157873-818bc0726f68.avif" },
  { id: 10, name: "Jeans", price: 50000, image: "/images/jeans.jpg" },
  { id: 11, name: "Toys for kids", price: 20000, image: "/images/toy2.jpg" },
  { id: 12, name: "Kids toys", price: 5000, image: "/images/toy1.jpg" },
  { id: 13, name: "Running shoes", price: 2500, image: "/images/shoes1.jpg" },
  { id: 14, name: "Tennis ball & bat", price: 45000, image: "/images/tennisbat.jpg" },
  { id: 15, name: "Football", price: 50000, image: "/images/football.jpg" },
];

const ProductList = () => {
  const router = useRouter();
  const { addToCart } = useCart(); // ✅ Fixed context usage

  // ✅ Fixed route path
  const handleViewDetails = (id: number) => {
    router.push(`/product/product/${id}`);
  };

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  };

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <WishlistButton productId={product.id} className="absolute top-4 right-4" /> {/* ✅ Fixed WishlistButton */}
              <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-lg" />
              <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
              <p className="text-xl font-semibold mt-2">₹{product.price}</p>
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => handleViewDetails(product.id)} 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;

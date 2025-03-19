"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PromoBanner: React.FC = () => {
  const router = useRouter();

  return (
    <div className="p-8 py-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Up to <span className="text-red-300">50% Off</span> on Selected Items!
          </h2>
          <p className="text-lg mt-2">Limited time offer. Grab your favorite products now!</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => router.push("/product/product")} 
            className="mt-4 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/wishlist-context";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({ id, name, image, price }: ProductCardProps) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWishlisted = wishlist.includes(id);

  const handleWishlist = useCallback(() => {
    toggleWishlist(id);
    toast.success(
      isWishlisted ? `${name} removed from wishlist` : `${name} added to wishlist`
    );
  }, [id, isWishlisted, toggleWishlist, name]);

  return (
    <div className="border p-4 rounded-lg shadow-md transition-transform hover:scale-105">
      {/* Optimized Image */}
      <div className="w-full h-40 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded"
          priority
        />
      </div>

      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">₹{price}</p>

      {/* Wishlist Button */}
      <button
        aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        className={`mt-2 flex items-center gap-2 px-3 py-1 rounded transition-all ${
          isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-black"
        }`}
        onClick={handleWishlist}
      >
        <Heart size={20} className={isWishlisted ? "text-white" : "text-black"} />
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
}

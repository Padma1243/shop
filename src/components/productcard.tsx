"use client";
import React from "react";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/wishlist-context";
import { toast } from "sonner"; // ✅ Import toast for notifications

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
}

export default function ProductCard({ id, name, image }: ProductCardProps) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = wishlist.includes(id);

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(id);
      toast.error("Removed from Wishlist ❌");
    } else {
      addToWishlist(id);
      toast.success("Added to Wishlist! ✅");
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>

      {/* Wishlist Button */}
      <button
        className={`mt-2 flex items-center gap-2 px-3 py-1 rounded ${
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

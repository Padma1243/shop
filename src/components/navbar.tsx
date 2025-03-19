"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context"; // ✅ Correct import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist(); // ✅ Use wishlist from context

  return (
    <nav className="bg-gray-800 text-white z-50 w-full fixed p-4 px-6 flex justify-between items-center">
      {/* Logo / Home Link */}
      <Link href="/index" className="text-xl font-bold">
        E-Commerce
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links */}
      <div className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
        <Link href="/product/product">
          <span className="hover:text-gray-300 transition">Product</span>
        </Link>
        <Link href="/login/login">
          <span className="hover:text-gray-300 transition">Login</span>
        </Link>
       

        {/* Cart Icon with Count */}
        <Link href="/cart">
          <div className="relative cursor-pointer">
            <ShoppingCart size={24} className="text-gray-300 hover:text-yellow-400 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </Link>

        {/* Wishlist Icon with Count */}
        <Link href="/wishlist">
          <div className="relative cursor-pointer">
            <Heart size={24} className="text-gray-300 hover:text-red-400 transition" />
            {wishlist.length > 0 && ( // ✅ Fixed: Use wishlist.length
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {wishlist.length} {/* ✅ Display wishlist count */}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}


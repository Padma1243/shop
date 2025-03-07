import React from 'react'
import { useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-800 text-white p-4 px-6 flex justify-between items-center">
      {/* Logo / Home Link */}
      <Link href="/" className="text-xl font-bold">
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
       
        
        <Link href="/card/card">
          <span className="hover:text-gray-300 transition">Card</span>
        </Link>
        <Link href="/contact/contact">
          <span className="hover:text-gray-300 transition">Contact</span>
        </Link>
        
        <Link href="/login/login">
          <span className="hover:text-gray-300 transition">Login</span>
        </Link>
       
        <Link href="/signup/signup">
          <span className="hover:text-gray-300 transition">Signup</span>
        </Link>
      </div>
    </nav>
  );
}
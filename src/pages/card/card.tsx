"use client";
import React, { useState } from "react";
import Navbar from "../../components/navbar";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  // Sample cart items (replace with context or global state)
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Smartphone", price: 20000, quantity: 1 },
    { id: 2, name: "Headphone", price: 2500, quantity: 2 },
    { id: 3, name: "Shoe", price: 5000, quantity: 1 },
  ]);

  // Function to update quantity
  const updateQuantity = (id: number, amount: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Shopping Cart</h1>

          {cart.length > 0 ? (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-200 p-4 rounded-md">
                    <span className="text-lg font-medium">{item.name}</span>
                    <div className="flex items-center space-x-3">
                      <button
                        className="px-3 py-1 bg-gray-400 text-white rounded"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        className="px-3 py-1 bg-gray-400 text-white rounded"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                      <span className="font-semibold">${item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkout Section */}
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold text-gray-800">Total: ${totalPrice}</p>
                <button className="mt-3 px-6 py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

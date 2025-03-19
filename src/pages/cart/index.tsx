"use client";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { useCart } from "@/context/cart-context";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleDecrease = (id: number, quantity: number) => {
    if (quantity === 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, -1);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setAlertMessage("🛒 Your cart is empty!");
      return;
    }
    setAlertMessage("✅ Proceeding to checkout...");
    setTimeout(() => setAlertMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-15">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">🛍️ Shopping Cart</h1>

          {/* ✅ Alert Message */}
          {alertMessage && (
            <div className="bg-green-500 text-white p-3 rounded-md mb-4 text-center transition-opacity duration-500">
              {alertMessage}
            </div>
          )}

          {/* ✅ Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-200 p-4 rounded-md shadow-md">
                    <span className="text-lg font-medium">{item.name}</span>
                    <div className="flex items-center space-x-3">
                      <button 
                        className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition" 
                        onClick={() => handleDecrease(item.id, item.quantity)}
                      >
                        −
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition" 
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                      <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                      <button 
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ Cart Actions */}
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold text-gray-800">Total: ₹{totalPrice.toFixed(2)}</p>
                <button
                  className="mt-3 px-6 py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition duration-300 shadow-md"
                  onClick={handleCheckout}
                >
                  ✅ Proceed to Checkout
                </button>
                <button
                  className="mt-3 ml-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300 shadow-md"
                  onClick={clearCart}
                >
                  🗑️ Clear Cart
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600 text-center text-lg">🛒 Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

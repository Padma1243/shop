
import Navbar from "../../components/navbar";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
          <p className="text-gray-600">You have multiple products in your cart.</p>

          {/* Cart Items Placeholder */}
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between bg-gray-200 p-4 rounded-md">
              <span className="text-lg font-medium">Product Name</span>
              <span className="font-semibold">$99.99</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


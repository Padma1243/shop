import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <div className="p-8 py-16 bg-gradient-to-r from-blue-600 to-violet-800 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
          {/* Offer Text */}
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Up to <span className="text-red-300">50% Off</span>
          </h2>

          {/* Promo Code */}
          <div className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md mt-6 lg:mt-0">
            <span className="text-lg font-medium">First Order Use Code:</span>
            <span className="font-bold text-xl ml-2 text-pink-600">WELCOME20</span>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            rel="noreferrer noopener"
            className="px-6 py-3 mt-6 lg:mt-0 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;


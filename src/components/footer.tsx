import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-white">EcomStore</h2>
            <p className="mt-2 text-gray-500">
              Your one-stop shop for the latest and greatest products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-violet-500">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500">Shop</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-violet-500">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="hover:text-violet-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-violet-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-violet-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-violet-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} EcomStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

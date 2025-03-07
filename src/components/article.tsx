import React from "react";
// import Image from "next/image";

const BlogPost: React.FC = () => {
  return (
    <article className="max-w-3xl px-6 py-16 mx-auto space-y-12 bg-black-100 shadow-lg rounded-lg dark:bg-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <div className="w-full mx-auto space-y-4 text-center">
        <p className="text-sm font-semibold tracking-wider uppercase text-gray-600">
          Welcome to Our Store
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Top 4-6 Products with Exclusive Deals!
        </h1>
       
      </div>

      {/* Content Section */}
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Check out our best-selling products with amazing discounts and fast
          delivery. Upgrade your lifestyle with top-quality gadgets and
          accessories.
        </p>
      </div>

      {/* Author Section */}
      <div className="pt-12 border-t dark:border-gray-700">

        {/* Social Links */}
        <div className="flex justify-center pt-6 space-x-4">
          {[
            { label: "GitHub", icon: "github", href: "#" },
            { label: "Dribbble", icon: "dribbble", href: "#" },
            { label: "Twitter", icon: "twitter", href: "#" },
            { label: "Email", icon: "envelope" },
          ].map((item, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href={item.href}
              aria-label={item.label}
              className="p-2 transition-colors duration-300 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-violet-600 dark:hover:bg-violet-500"
            >
              <i className={`fab fa-${item.icon} w-5 h-5 text-gray-800 dark:text-gray-100`} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

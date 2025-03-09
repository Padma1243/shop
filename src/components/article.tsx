import React from "react";

const BlogPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-900 shadow-lg rounded-lg text-gray-800 dark:text-gray-100">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
         Shopping the products
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Top 4-6 Products with Exclusive Deals!
        </h1>
      </div>

      

      {/* Content Section */}
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
        <p>
          Check out our best-selling products with amazing discounts and fast
          delivery. Upgrade your lifestyle with top-quality gadgets and
          accessories.
        </p>
      </div>

    

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {[
            { label: "GitHub", icon: "github", href: "#" },
            { label: "Dribbble", icon: "dribbble", href: "#" },
            { label: "Twitter", icon: "twitter", href: "#" },
            { label: "Email", icon: "envelope", href: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.label}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-violet-600 dark:hover:bg-violet-500 transition"
            >
              <i className={`fab fa-${item.icon} text-xl text-gray-800 dark:text-gray-100`} />
            </a>
          ))}
        </div>
      
    </article>
  );
};

export default BlogPost;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <motion.div className="w-full md:w-1/2" whileHover={{ scale: 1.05 }}>
          <Image
            src="/images/about.jpg"
            alt="About Us"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <strong>Our E-Commerce Store</strong>, your one-stop destination for high-quality products.
            We are passionate about providing you with the best shopping experience.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        className="mt-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our mission is to bring you <strong>premium quality products</strong> at <strong>affordable prices</strong> while ensuring a smooth shopping experience.
        </p>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="mt-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ staggerChildren: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "💎", title: "High-Quality Products", desc: "We source the best products to ensure durability and value." },
            { icon: "🚚", title: "Fast & Secure Delivery", desc: "We deliver your orders quickly and safely." },
            { icon: "🛠", title: "Excellent Customer Support", desc: "Our support team is always here to help you." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-md text-center bg-white hover:shadow-lg transform hover:scale-105"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold">{item.icon} {item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Customer Testimonials */}
      <motion.section
        className="mt-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ staggerChildren: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { quote: "Absolutely love the products! The quality is top-notch!", name: "Sarah L." },
            { quote: "Fast shipping and great customer support. Highly recommend!", name: "John D." }
          ].map((review, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transform hover:scale-105"
              variants={fadeIn}
            >
              <p className="italic text-gray-700">&ldquo;{review.quote}&rdquo;</p>
              <h4 className="mt-4 font-semibold">- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;

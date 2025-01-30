import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; 
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.jpg";


const Clients = () => {
  const logos = [logo, logo1, logo2,];

  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Nos Clients
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            We’ve had the pleasure of working with some amazing companies.
          </p>
        </div>

        {/* Logos Marquee */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20, // Adjust the duration for speed
            }}
          >
            {/* Map through logos */}
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

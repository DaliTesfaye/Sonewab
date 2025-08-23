import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHome, FaTools, FaDraftingCompass } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/services");
        setServices(response.data.slice(0 , 3));
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600">Loading services...</p>;

  return (
    <section id="services" className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center"
      >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Nos Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Nos travaux sont de qualité supérieure et nous nous engageons à
          satisfaire notre clientèle en offrant de larges gammes de services.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              data-aos="fade-up"
            >
              {/* Use dynamic icons if available, else default */}
              {service.icon === "home" ? (
                <FaHome className="text-4xl text-yellow-500 mb-4" />
              ) : service.icon === "tools" ? (
                <FaTools className="text-4xl text-yellow-500 mb-4" />
              ) : (
                <FaDraftingCompass className="text-4xl text-yellow-500 mb-4" />
              )}

              <h3 className="text-xl font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-12">
          <Link
            to="/services"
            className="bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded hover:bg-yellow-600 transition"
          >
            Plus De Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;

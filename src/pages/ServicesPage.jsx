import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/services"); 
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Filter services based on the selected category
  const filteredServices =
    selectedCategory === "Tous"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <section className="bg-gray-50 py-16">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-12 text-center py-12">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explorez notre large gamme de services, allant de la construction à
          l'aménagement de maisons, en passant par la rénovation complète de vos
          espaces.
        </motion.p>

        {/* Filter Buttons */}
        <div className="mb-8 flex justify-center space-x-4">
          {["Tous", "Maison", "Rénovation", "Industriel"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full ${
                selectedCategory === category
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-600">Chargement des services...</p>
      ) : (
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <img
                src={`http://localhost:5000${service.image}`} // Replace with database images later
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  to="/projects"
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  Voir Projets
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesPage;

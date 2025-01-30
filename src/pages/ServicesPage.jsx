import React, { useState } from "react";
import { motion } from "framer-motion";
import buildingImg from "../assets/facade.jpeg";
import renovationImg from "../assets/cuisine.jpg";
import kitchenImg from "../assets/cuisine.jpeg";
import bathroomImg from "../assets/sdb.jpg";
import carportImg from "../assets/abri.jpeg";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Construction",
      description:
        "Nous réalisons des projets de construction sur mesure, combinant qualité, durabilité et esthétique pour répondre à vos besoins.",
      image: buildingImg,
      category: "Industriel", // Building category
    },
    {
      id: 2,
      title: "Rénovation Total ",
      description:
        "Transformez votre espace existant avec nos services de rénovation, alliant modernité et respect du style d'origine.",
      image: renovationImg,
      category: "Rénovation", // Renovation category
    },
    {
      id: 3,
      title: "Cuisines",
      description:
        "Nous concevons et installons des cuisines fonctionnelles et élégantes adaptées à votre style de vie.",
      image: kitchenImg,
      category: "Maison", // House category
    },
    {
      id: 4,
      title: "Salles de Bain",
      description:
        "Créez votre espace de détente parfait avec nos solutions de rénovation de salles de bain modernes.",
      image: bathroomImg,
      category: "Maison", // House category
    },
    {
      id: 5,
      title: "Abri pour Voitures",
      description:
        "Protégez vos véhicules avec nos abris élégants et robustes conçus pour durer.",
      image: carportImg,
      category: "Industriel", 
    },
    {
      id: 6,
      title: "Peinture Totale Maison",
      description:"nous faisons une peinture totale pour votre maison ou vos chambres privées.",
      image: "https://cdn.futura-sciences.com/sources/images/SP_peinture_murale_sejour_1.jpg",
      category: "Maison", 
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("Tous");

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
          l'aménagement de maisons, en passant par la rénovation complète de
          vos espaces.
        </motion.p>

        {/* Filter Buttons */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setSelectedCategory("Tous")}
            className={`py-2 px-4 rounded-full ${
              selectedCategory === "Tous"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedCategory("Maison")}
            className={`py-2 px-4 rounded-full ${
              selectedCategory === "Maison"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Maison
          </button>
          <button
            onClick={() => setSelectedCategory("Rénovation")}
            className={`py-2 px-4 rounded-full ${
              selectedCategory === "Rénovation"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Rénovation
          </button>
          <button
            onClick={() => setSelectedCategory("Industriel")}
            className={`py-2 px-4 rounded-full ${
              selectedCategory === "Industriel"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Industriel
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <img
              src={service.image}
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
    </section>
  );
};

export default ServicesPage;

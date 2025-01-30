import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For dynamic routing
import { motion } from "framer-motion"; // For animations
import img1 from "../assets/sdb.jpg";
import img2 from "../assets/abri.jpeg";
import img3 from "../assets/cuisine.jpg";

const projects = [
  {
    id: 1,
    title: "Renovation SDB",
    description:
      "Renovation totale d'une salle de bain avec des matériaux de luxe et un design moderne, conçu pour le confort et l'élégance.",
    category: "Salle de Bain",
    images: [img1, img2, img3],
  },
  {
    id: 2,
    title: "Abri de voiture",
    description:
      "Construction d'abris pour voitures de tous modèles avec des matériaux robustes et des designs personnalisés pour répondre à vos besoins.",
    category: "Batiment",
    images: [img2, img3, img1],
  },
  {
    id: 3,
    title: "Cuisine Renovation",
    description:
      "Rénovation complète de la cuisine, incluant électricité, plomberie, et revêtements, pour un espace fonctionnel et esthétique.",
    category: "Building",
    images: [img3, img1, img2],
  },
  {
    id: 4,
    title: "Terrasse Modernisée",
    description:
      "Création de terrasses modernes et élégantes avec des matériaux durables et résistants aux intempéries.",
    category: "Building",
    images: [img2, img1, img3],
  },
  {
    id: 5,
    title: "Piscine Design",
    description:"Conception et construction de piscines sur mesure avec un design élégant et fonctionnel",
    category : "Building",
    images: [img1, img2, img3],
  },
  {
    id: 6,
    title: "Jardin Aménagé",
    description: "Conception et aménagement de jardins avec des éléments naturels",
    category: "Building",
    images: [img3, img1, img2]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  if (!project) {
    return (
      <p className="text-center text-xl text-red-600">Projet introuvable.</p>
    );
  }

  const similarProjects = projects.filter((p) => p.id !== project.id);

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  return (
    <section className="bg-gray-50 py-12">
      {/* Centered Main Project Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 lg:px-16 flex flex-col items-center text-center py-12"
      >
        <h1 className="text-6xl font-extrabold text-gray-900 mb-8">
          {project.title}
        </h1>
        <p className="text-xl text-gray-700 mb-4 leading-relaxed max-w-3xl">
          {project.description}
        </p>
        <p className="text-lg text-gray-600 font-semibold mb-8">
          Catégorie :{" "}
          <span className="text-yellow-500 text-2xl">{project.category}</span>
        </p>
        <div className="w-full max-w-4xl flex flex-col items-center relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-xl w-full h-96 relative"
          >
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Navigation Toggles */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-yellow-500 text-3xl font-bold"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-yellow-500 text-3xl font-bold"
          >
            &#8594;
          </button>
          <div className="flex mt-4 gap-2">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full ${
                  index === currentImageIndex ? "bg-yellow-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Similar Projects Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Projets Similaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarProjects.map((p) => (
            <motion.a
              key={p.id}
              href={`/projects/${p.id}`}
              whileHover={{ scale: 1.05 }}
              className="block bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-lg text-yellow-500 font-semibold">
                  {p.category}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

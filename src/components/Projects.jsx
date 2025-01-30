import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/sdb.jpg";
import img2 from "../assets/abri.jpeg";
import img3 from "../assets/cuisine.jpg";


const projects = [
  {
    id: 1,
    title: "Renovation SDB",
    description: "Luxury renovation of a bathroom with modern materials.",
    image: img1,
  },
  {
    id: 2,
    title: "Abri de voiture",
    description: "Construction of car shelters with robust materials.",
    image: img2,
  },
  {
    id: 3,
    title: "Cuisine Renovation",
    description: "Complete renovation of the kitchen for functionality and style.",
    image: img3,
  },
];

export const extendedProjects = [
  ...projects,
  {
    id: 4,
    title: "Garden Landscape",
    description: "Beautiful garden landscaping with natural materials.",
    image: img3,
  },
  {
    id: 5,
    title: "Pool Installation",
    description: "Luxurious pool installations for modern homes.",
    image: img2,
  },
  {
    id: 6,
    title: "Office Renovation",
    description: "Complete renovation of office spaces for productivity.",
    image: img1,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Nos Projets
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les projets complets réalisés par notre équipe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description.slice(0, 30)}...
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-medium rounded hover:bg-yellow-600 transition"
                >
                  Voir les Détails
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded hover:bg-yellow-600 transition"
          >
            Tous les projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

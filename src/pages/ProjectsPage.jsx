import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/sdb.jpg";
import img2 from "../assets/abri.jpeg";
import img3 from "../assets/cuisine.jpg";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Renovation SDB",
      description:
        "Renovation totale d'une salle de bain avec des matériaux de luxe et un design moderne, conçu pour le confort et l'élégance.",
      image: img1,
    },
    {
      id: 2,
      title: "Abri de voiture",
      description:
        "Construction d'abris pour voitures de tous modèles avec des matériaux robustes et des designs personnalisés pour répondre à vos besoins.",
      image: img2,
    },
    {
      id: 3,
      title: "Cuisine Renovation",
      description:
        "Rénovation complète de la cuisine, incluant électricité, plomberie, et revêtements, pour un espace fonctionnel et esthétique.",
      image: img3,
    },
    {
      id: 4,
      title: "Terrasse Modernisée",
      description:
        "Création de terrasses modernes et élégantes avec des matériaux durables et résistants aux intempéries.",
      image: img1,
    },
    {
      id: 5,
      title: "Piscine Design",
      description:
        "Conception et construction de piscines sur mesure avec un design élégant et fonctionnel.",
      image: img2,
    },
    {
      id: 6,
      title: "Jardin Aménagé",
      description:
        "Conception et aménagement de jardins avec des éléments naturels.",
      image: img3,
    },
  ];

  return (
    <section id="projects-page" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 mb-4">
            Tous les Projets
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez nos projets variés et innovants réalisés avec soin et expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description.slice(0, 50)}...
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
      </div>
    </section>
  );
};

export default ProjectsPage;

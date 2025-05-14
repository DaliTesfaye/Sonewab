import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const ProjectsPage = () => {
  const [projects , setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchProjects = async () => {
        try{
          const response = await fetch("http://localhost:5000/api/projects");
          const data = await response.json();
          setProjects(data);
          setLoading(false);
        }

        catch(err){
          console.error("Error fetching Projects" , err);
          setLoading(false)
        }
      };
      fetchProjects();
  } , [])

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
          {projects.map((project , index) => (
            <motion.div
              key={project._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
            >
              <img
                src={project.image.startsWith("http") ? project.image : `http://localhost:5000${project.image}`}
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
                  to={`/projects/${project._id}`}
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

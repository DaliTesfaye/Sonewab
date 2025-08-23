import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [similarProjects, setSimilarProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`);
        if (!response.ok) throw new Error("Projet non trouvé");
        const data = await response.json();
        setProject(data);
        fetchSimilarProjects(data.category, id);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchSimilarProjects = async (category, currentId) => {
      try {
        const response = await fetch(`http://localhost:5000/api/projects`);
        if (!response.ok) throw new Error("Erreur lors de la récupération des projets");
        const data = await response.json();
        const filteredProjects = data
          .filter(p => p.category === category && p._id !== currentId) // Exclude current project
          .slice(0, 3); // Limit to 3 similar projects
        setSimilarProjects(filteredProjects);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets similaires:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Chargement...</p>;
  if (error) return <p className="text-center text-xl text-red-600">{error}</p>;
  if (!project) return <p className="text-center text-lg">Aucun projet trouvé.</p>;

  return (
    <section className="bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 lg:px-16 flex flex-col items-center text-center py-12"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl">{project.description}</p>
        <p className="text-md text-gray-600 font-semibold mb-6">
          Catégorie : <span className="text-yellow-500 text-lg">{project.category}</span>
        </p>
        <div className="w-full max-w-4xl flex flex-col items-center relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-xl w-full h-96 relative"
          >
            <img
              src={project.image.startsWith("http") ? project.image : `http://localhost:5000${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Similar Projects Section */}
      {similarProjects.length > 0 && (
        <div className="container mx-auto px-6 lg:px-16 py-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Projets Similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProjects.map((simProject, index) => (
              <motion.div
                key={simProject._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={simProject.image.startsWith("http") ? simProject.image : `http://localhost:5000${simProject.image}`}
                  alt={simProject.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {simProject.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {simProject.description.slice(0, 30)}...
                  </p>
                  <Link
                    to={`/projects/${simProject._id}`}
                    className="inline-block bg-yellow-500 text-black px-4 py-2 text-sm font-medium rounded hover:bg-yellow-600 transition"
                  >
                    Voir les Détails
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;

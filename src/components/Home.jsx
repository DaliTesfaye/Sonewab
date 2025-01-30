import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <header
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover", // Ensure the image covers the area
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-6 flex flex-col items-center justify-center h-full text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Sonewab
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Travaux de construction et rénovation Maçonnerie, enduit, peinture,
          revêtement, étanchéité,abri... Prix bien étudié
        </p>
        <div className="mt-8 flex space-x-4">
          <Link
            to="/projects"
            className="bg-yellow-500 px-6 py-3 text-lg font-semibold rounded hover:bg-yellow-600"
          >
            Voir Nos Projets
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 text-lg font-semibold rounded hover:bg-gray-100"
          >
            Proposer offre
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Home;

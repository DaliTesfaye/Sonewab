import { Link } from "react-router-dom";
import img2 from "../assets/facade.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 mb-8 lg:mb-0"
        >
          <div className="relative w-full h-64 lg:h-96">
            <img
              src={img2}
              alt="Construction Building"
              className="w-full h-full object-fill rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 lg:pl-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Qui nous sommes?
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
          <p className="text-lg text-gray-700 mb-4">
            Nous sommes une équipe de constructeurs et de designers passionnés
            dédiés à la création d'espaces innovants et durables. Notre
            expertise couvre la construction résidentielle, commerciale et
            industrielle, faisant de nous votre partenaire de confiance pour
            tout projet.
          </p>
          <h3 className="text-2xl font-bold text-black mt-8 mb-2">
            Que nous faisons ?
          </h3>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-lg text-gray-700 mb-4">
            De la planification architecturale à l’exécution de projets clé en
            main, nous proposons des solutions de construction complètes. Notre
            objectif est d’offrir qualité, efficacité et satisfaction tout en
            façonnant l’horizon de demain.
          </p>
          <Link
            to="/AboutPage"
            className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded hover:bg-yellow-600"
          >
            En Savoir Plus 
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

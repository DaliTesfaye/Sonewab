import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/facade.jpeg";

const AboutPage = () => {
  return (
    <section className="bg-gray-50">
      {/* Section d'En-tête */}
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-16 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Qui Sommes-Nous ?
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Chez <strong>Notre Entreprise</strong>, nous sommes passionnés par la transformation des rêves en réalité. 
          De la construction innovante aux rénovations impeccables, nous réalisons des projets qui résistent à l'épreuve du temps.
        </motion.p>
      </div>

      {/* Section À Propos de Nous */}
      <div className="container mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img1}
            alt="À propos de nous"
            className="w-full object-cover h-full"
          />
        </motion.div>

        {/* Contenu Texte */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Construire l'Avenir, Restaurer le Passé
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Depuis plus d'une décennie, nous fournissons des services exceptionnels de construction 
            et de rénovation dans la région. Notre équipe combine technologie de pointe et savoir-faire traditionnel pour créer des espaces inspirants.
          </p>
          <p className="text-lg text-gray-700">
            Qu'il s'agisse de grands projets commerciaux ou de rénovations personnalisées, 
            notre approche garantit qualité, durabilité et satisfaction dans chaque détail.
          </p>
        </motion.div>
      </div>

      {/* Section Mission */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            className="text-3xl font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Notre Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Offrir des solutions de construction innovantes, durables et de haute qualité, répondant aux besoins de la vie moderne tout en préservant l'environnement pour les générations futures.
          </motion.p>
        </div>
      </div>

      {/* Section Valeurs Fondamentales */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Valeurs Fondamentales
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Excellence
            </h3>
            <p className="text-gray-700">
              Nous nous engageons à offrir une qualité exceptionnelle dans chaque projet.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Innovation
            </h3>
            <p className="text-gray-700">
              Nous utilisons les technologies les plus récentes pour construire de manière plus intelligente et efficace.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Durabilité
            </h3>
            <p className="text-gray-700">
              Nous nous efforçons de créer des projets écoresponsables au bénéfice des communautés.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section Appel à l'Action */}
      <div className="bg-yellow-500 py-12 text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Rejoignez-Nous pour Construire l'Avenir
        </motion.h2>
        <motion.a
          href="/contact"
          className="text-lg bg-white text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contactez-Nous Aujourd'hui
        </motion.a>
      </div>
    </section>
  );
};

export default AboutPage;

import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center py-12">
        {/* Hero Section */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contactez-nous
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Vous avez un projet en tête ? Parlons-en ! Remplissez le formulaire
          ci-dessous et nous vous répondrons rapidement.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Nom
              </label>
              <input
                type="text"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Votre email"
                required
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Message
              </label>
              <textarea
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="5"
                placeholder="Écrivez votre message ici..."
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
              whileHover={{ scale: 1.05 }}
            >
              Envoyer le message
            </motion.button>
          </form>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#"
            className="text-gray-700 text-2xl hover:text-yellow-500 transition"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-gray-700 text-2xl hover:text-yellow-500 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-700 text-2xl hover:text-yellow-500 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

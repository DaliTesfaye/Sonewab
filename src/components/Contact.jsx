import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gray-50">
      <div className="py-12 lg:py-20 px-6 mx-auto max-w-screen-md">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl tracking-tight font-bold text-center text-gray-800">
            Contact-Nous
          </h2>
          <p className="mb-12 text-center text-lg font-light text-gray-600">
            Proposer votre projet ou construction de reve et notre equipe va
            vous aider a le realiser.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          action="#"
          className="space-y-8"
        >
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Ton Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-3"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-800 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="comment on peux vous aider?"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Votre Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-3 w-full text-sm text-gray-800 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Leave a comment or idea..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-yellow-500 px-6 py-3 text-lg font-semibold text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Envoyer Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { nom, email, telephone, sujet, message };

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi");

      navigate("/success"); // ✅ redirection après succès
    } catch (err) {
      alert("Une erreur est survenue !");
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="py-12 lg:py-20 px-6 mx-auto max-w-screen-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-center text-gray-800">
            Contact-Nous
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Proposez votre projet ou construction de rêve, notre équipe vous aidera à le réaliser.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <label className="block mb-2 text-sm text-gray-800">Ton Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg text-sm bg-white text-gray-800"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-800">Numéro</label>
            <input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
              className="w-full p-3 border rounded-lg text-sm bg-white text-gray-800"
              placeholder="+21612345678"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-800">Nom</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className="w-full p-3 border rounded-lg text-sm bg-white text-gray-800"
              placeholder="Ahmed Ben Mohamed"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-800">Sujet</label>
            <input
              type="text"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
              required
              className="w-full p-3 border rounded-lg text-sm bg-white text-gray-800"
              placeholder="Comment pouvons-nous vous aider ?"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-800">Votre Message</label>
            <textarea
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border rounded-lg text-sm bg-white text-gray-800"
              placeholder="Laissez votre message ici..."
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-yellow-500 px-6 py-3 text-lg font-semibold text-white rounded-lg hover:bg-yellow-600 transition"
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

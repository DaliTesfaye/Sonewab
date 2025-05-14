import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Message envoyé !
        </h2>
        <p className="text-gray-700 mb-6">
          Votre message a été envoyé avec succès. Nous vous contacterons bientôt.
        </p>
        <Link
          to="/"
          className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
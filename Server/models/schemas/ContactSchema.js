const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  sujet: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = contactSchema;
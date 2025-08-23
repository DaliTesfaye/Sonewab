const mongoose = require("mongoose");
const contactSchema = require("./schemas/ContactSchema"); 

module.exports = mongoose.model("Contact", contactSchema);
const mongoose = require("mongoose");
const contactSchema = require("./schemas/ContactSchema"); // ✅ import du vrai schema

module.exports = mongoose.model("Contact", contactSchema);
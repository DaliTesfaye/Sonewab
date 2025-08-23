const mongoose = require("mongoose");
const contactSchema = require("./schemas/ContactSchema"); 

module.exports = mongoose.model("Contact", contactSchema);
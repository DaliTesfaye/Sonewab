const mongoose = require("mongoose");
const adminSchema = require("./schemas/AdminSchema")

const Admin = mongoose.model("Admin" , adminSchema) ;

module.exports = Admin ;
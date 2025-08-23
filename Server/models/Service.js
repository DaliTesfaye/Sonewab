const mongoose = require('mongoose') ;

const serviceSchema = require("./schemas/ServiceSchema")

const Service = mongoose.model("Service" , serviceSchema)

module.exports = Service ;
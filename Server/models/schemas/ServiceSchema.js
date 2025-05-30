const mongoose = require("mongoose");
const ServiceSchema = require("./ProjectSchema");

const serviceSchema = new mongoose.Schema({
    title : {type : String , required: true},
    description : {type : String , required: true},
    category : {type : String , required: true},
    image : {type : String , required : true}
})

module.exports = ServiceSchema ;
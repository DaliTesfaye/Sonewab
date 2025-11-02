const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

//Routes
//Add New Contact
router.post("/", contactController.CreateContact);
//Get All Contacts
router.get("/", contactController.GetAllContacts);


module.exports = router;

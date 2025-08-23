const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// @route POST /api/contacts
router.post("/", async (req, res) => {
  try {
    const { nom, email, telephone, sujet, message } = req.body;

    const newContact = new Contact({ nom, email, telephone, sujet, message });
    await newContact.save();

    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error Sending message:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get All Contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;

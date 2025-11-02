const Contact = require("../models/Contact");

// Add New Contact
exports.CreateContact = async (req , res) => {
    try {
        const { nom, email, telephone, sujet, message } = req.body;

        const newContact = new Contact({ nom, email, telephone, sujet, message });
        await newContact.save();

        res.status(201).json(newContact);

    }
    catch (error) {
        console.error("Error Sending message:", error);
    }
}

// Get All Contacts
exports.GetAllContacts = async (req , res ) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    }
    catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
}

//Get Single Contact
// exports.getContactById = async (req , res) => {
//     try {
//         const contact = await Contact.findById(req.params.id);
//         if (!contact) {
//             return res.status(404).json({ error: "Contact non trouvé" });
//         }
//         res.json(contact);

//     }

//     catch (error) {
//         res.status(500).json({ error: "Erreur serveur" });
//     }
// }


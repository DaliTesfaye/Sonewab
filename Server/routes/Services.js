const express = require("express")
const Service = require("../models/Service")
const multer = require("multer");
const path = require("path");

const router = express.Router();

// 📂 Configurer le stockage local pour les images des services
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // 📁 Dossier où enregistrer les images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Renommer avec un timestamp
    },
});

const upload = multer({ storage: storage })

//Retrive All Services available
router.get("/", async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    }
    catch (err) {
        res.status(500).json({ err: "Server Error" });
    }
});

//Create Service
router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { title, description, category, image } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: "Le titre et la description sont obligatoires" });
        }

        let imagePath = "";

        if (req.file) {
            // 📂 Image locale (Stockée dans /uploads/)
            imagePath = `/uploads/${req.file.filename}`;
        } else if (image) {
            // 🌍 Image en ligne (Lien URL)
            imagePath = image;
        } else {
            return res.status(400).json({ error: "Veuillez fournir une image" });
        }

        const newService = new Service({ title, description, category, image: imagePath });
        await newService.save();

        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ error: "Erreur Serveur" });
    }
});

// Modify Service
router.put("/:id", async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(res.params.id, req.body, { new: true });
        if (!updatedService) return res.status(404).json({ error: "Service Not Found" })
        res.json(updatedService);
    }
    catch (err) {
        res.status(500).json({ err: "Server Error" });
    }
});

//Delete Services

router.delete("/:id", async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) return res.status(404).json({ err: "Service not found" })
        res.json({ message: "Service Deleted Successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Server Error" })
    }
})

module.exports = router;

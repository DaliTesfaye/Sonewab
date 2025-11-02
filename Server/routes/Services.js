const express = require("express");
const path = require("path");
const multer = require("multer");
const controller = require("../controllers/serviceController");

const router = express.Router();

// Configure local storage for service images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Retrieve All Services available
// Get All Services
router.get("/" , controller.getAllServices);
// Get Service by ID
router.get("/:id" , controller.getServiceById);
// Create Service
router.post("/" , upload.single("image") , controller.createService);
//Update Service
router.put("/:id" , upload.single("image") , controller.updateService);
//Delete Service
router.delete("/:id" , controller.deleteService);

module.exports = router;
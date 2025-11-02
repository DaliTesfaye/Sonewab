const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });

//Routes
//Get All Projects
router.get("/", projectController.getAllProjects);
//Get Project by ID
router.get("/:id", projectController.getProjectsById);
//Create a new Project
router.post("/", upload.single("image"), projectController.createProject);
//Update a Project
router.put("/:id", upload.single("image"), projectController.updatedProject);
//Delete a Project
router.delete("/:id", projectController.deleteProject);


module.exports = router;

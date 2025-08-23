const express = require("express");
const Project = require("../models/Project");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store images in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  },
});

const upload = multer({ storage });

// ✅ Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ Get a single project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project Not Found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ Create a new project (Supports file upload or direct URL)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, imageUrl } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    let imagePath = "";

    // ✅ If user uploads a file, save the file path
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }
    // ✅ If user provides an online image URL, store it directly
    else if (imageUrl) {
      imagePath = imageUrl;
    }
    // ❌ If neither file nor URL is provided, return an error
    else {
      return res.status(400).json({ error: "An image is required (upload or URL)" });
    }

    // Create the project with the image path (local or online)
    const newProject = new Project({ title, description, category, image: imagePath });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});



// ✅ Update a project (Supports image update)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, imageUrl } = req.body;

    let imagePath = imageUrl;

    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, category, image: imagePath },
      { new: true }
    );

    if (!updatedProject) return res.status(404).json({ error: "Project not found" });

    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ Delete a project
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ error: "Project Not Found" });
    res.json({ message: "Project Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;

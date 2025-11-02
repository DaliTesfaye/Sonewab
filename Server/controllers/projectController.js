const Project = require("../models/Project");

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    }

    catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

// Get a single project by ID
exports.getProjectsById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project)
            return res.status(404).json({ message: "Project Not Found" });
        res.json(project);
    }
    catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
}


// Create a new project 
exports.createProject = async (req, res) => {
    try {
        const { title, description, category, imageUrl } = req.body;
        if (!title || !description || !category) {
            return res.status(400).json({ error: "Title and description are required" });
        }
        let imagePath = "";
        if (req.file) {
            imagePath = `/uploads/${req.file.filename}`;
        }
        else if (imageUrl) {
            imagePath = imageUrl;
        }
        else {
            return res.status(400).json({ error: "An image is required (upload or URL)" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
// Update a project 
exports.updatedProject = async (req, res) => {
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
        if (!updatedProject)
            return res.status(404).json({ error: "Project not found" });
        res.json(updatedProject);
    }
    catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}


//Delete a project
exports.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject)
            return res.status(404).json({ error: "Project Not Found" });
        res.json({ message: "Project Deleted Successfully" });

    }

    catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}



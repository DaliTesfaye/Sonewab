// ...existing code...
const Service = require("../models/Service");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.json(services);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: "Service Not Found" });
    return res.json(service);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.createService = async (req, res) => {
  try {
    const { title, description, category, image } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    let imagePath = "";
    if (req.file) imagePath = `/uploads/${req.file.filename}`;
    else if (image) imagePath = image;
    else return res.status(400).json({ error: "Please provide an image" });

    const newService = new Service({ title, description, category, image: imagePath });
    await newService.save();
    return res.status(201).json(newService);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const updatedData = { title, description, category };

    if (req.file) updatedData.image = `/uploads/${req.file.filename}`;

    const updatedService = await Service.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedService) return res.status(404).json({ error: "Service Not Found" });
    return res.json(updatedService);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ error: "Service Not Found" });
    return res.json({ message: "Service Deleted Successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
};

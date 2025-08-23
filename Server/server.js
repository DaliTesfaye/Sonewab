const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();



// Import Routes
const projectRoutes = require("./routes/Projects")
const serviceRoutes = require("./routes/Services")
const authRoutes = require("./routes/Auth")
const contactRoutes = require("./routes/Contacts");

//Middlewares
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error));

// Use Routes
app.use("/api/projects", projectRoutes);
app.use("/api/services" , serviceRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/auth" , authRoutes)
app.use("/api/contacts", contactRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const connectDB = require("./config/database");
const router = express.Router();




// Import Routes
const projectRoutes = require("./routes/Projects")
const serviceRoutes = require("./routes/Services")
const authRoutes = require("./routes/Auth")
const contactRoutes = require("./routes/Contacts")

//Middlewares
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Use Routes
// app.use("/api/auth" , authRoutes)
app.use("/uploads", express.static("uploads"));
app.use ("/api/services", serviceRoutes);
app.use ("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();


// Import Routes
const projectRoutes = require("./routes/Projects")
const serviceRoutes = require("./routes/Services")
const authRoutes = require("./routes/Auth")

//Middlewares
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error));

// Use Routes
app.use("/api/projects", require("./routes/Projects"));
app.use("/api/services" , serviceRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/auth" , authRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Admin = require("../models/Admin");
const authMiddleware = require("../middlewares/authMiddleware")
require("dotenv").config();

const router = express.Router();

//Admin SignUp 
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const checkAdmin = await Admin.findOne({ email });
        if (checkAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ name, email, password: hashedPassword });
        await newAdmin.save();

        res.status(201).json({ message: "Admin Registered Successfully" })
    }
    catch (err) {
        res.status(500).json({ err: "Admin Already Exists" })
    }
});

//Admin Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        //check if admin exists
        const checkAdmin = await Admin.findOne({ email });
        if (!checkAdmin) {
            return res.status(400).json({ message: "Check email or password" });
        }

        //Compare Passwords
        const isMatch = await bcrypt.compare(password, checkAdmin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Check email or password" });
        }

        //Generate JWT TOKEN
        const token = jwt.sign({ id: checkAdmin._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({ token, checkAdmin: { id: checkAdmin._id, name: checkAdmin.name, email: checkAdmin.email } })

    }

    catch (err) {
        res.status(500).json({ err: "Server Error try again later" })
    }
});

//Get admin profile(protected Route)

router.get("/profile", authMiddleware, async (req, res) => {
    try {
      const admin = await Admin.findById(req.admin.id).select("-password");
      if (!admin) return res.status(404).json({ error: "Admin not found" });
  
      res.json(admin);
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  });

router.get("/dashboard" , authMiddleware , (req , res) => {
    res.json({message : "Welcome to Admin Dashboard !"})
})

module.exports = router ;
const exp = require("express");
const userApp = exp.Router();
const bcryptjs = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const e = require("express");
require("dotenv").config();
let usersCollection;

userApp.use((req, res, next) => {
    usersCollection = req.app.get("usersCollection");
    next();
});

userApp.post("/register", expressAsyncHandler(async (req, res) => {
    const data = req.body;
    const result = await usersCollection.insertOne(data);
    res.send(result);
}))

userApp.post("/login", expressAsyncHandler(async (req, res) => {
    const { email } = req.body
    
    if (!email) {
        return res.status(400).send({ 
            success: false,
            message: "Email and userType are required" 
        });
    }

    const user = await usersCollection.findOne({ email });
    
    if (!user) {
        return res.status(401).send({ 
            success: false,
            message: "Invalid email or user type" 
        });
    }
    return res.send({ 
        success: true,
        message: "Login successful",
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            userType: user.userType,
        }
    });
}));


module.exports = userApp;
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


module.exports = userApp;
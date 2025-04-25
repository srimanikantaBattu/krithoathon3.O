const exp = require("express");
const userApp = exp.Router();
const bcryptjs = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const e = require("express");
require("dotenv").config();

userApp.post("/register", expressAsyncHandler(async (req, res) => {
    const data = req.body;
    console.log(data);
}))


module.exports = userApp;
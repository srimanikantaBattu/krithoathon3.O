const exp = require("express");
const userApp = exp.Router();
const bcryptjs = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const e = require("express");
const { ObjectId } = require("mongodb");
require("dotenv").config();
let usersCollection;

userApp.use((req, res, next) => {
    usersCollection = req.app.get("usersCollection");
    next();
});

// Register new user
// userApp.post("/register", expressAsyncHandler(async (req, res) => {
//     const data = req.body;
//     const result = await usersCollection.insertOne(data);
//     res.send(result);
// }));

userApp.post("/register", expressAsyncHandler(async (req, res) => {
    try {
        const { agentId, request } = req.body;
        
        // First find the user document
        const user = await usersCollection.findOne({ _id: new ObjectId(agentId) });
        
        if (!user) {
            return res.status(404).send({ message: 'Agent not found' });
        }

        // Initialize requests array if it doesn't exist
        const requests = user.requests || [];
        
        // Add the new request
        requests.push(request);

        // Update the user document with the new requests array
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(agentId) },
            { $set: { requests: requests } }
        );

        res.status(200).send({
            message: 'Request added successfully',
            result: result
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}));

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

// Add this route to fetch accepted requests for agents
userApp.get(
  "/accepted-requests/:agentId",
  expressAsyncHandler(async (req, res) => {
    const agentId = req.params.agentId;

    try {
      // Find the agent by ID
      const agent = await usersCollection.findOne({ _id: agentId, userType: "agent" });

      if (!agent) {
        return res.status(404).send({
          success: false,
          message: "Agent not found",
        });
      }

      // Return the acceptedRequests array from the agent's document
      res.send({
        success: true,
        acceptedRequests: agent.acceptedRequests || [],
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  })
);


// Get all users - will be used to fetch agents on the frontend
userApp.get("/allusers", expressAsyncHandler(async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await usersCollection.find().toArray();
        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: "Failed to fetch users", error: error.message });
    }
}));

// Get user by ID
userApp.get("/:id", expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersCollection.findOne({ _id: new ObjectId(id) });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        
        res.status(200).send(user);
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        res.status(500).send({ message: "Failed to fetch user", error: error.message });
    }
}));

module.exports = userApp;
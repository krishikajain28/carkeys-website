require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Added mongoose here for later

const app = express();

// 1. MIDDLEWARE
app.use(express.json());
app.use(cors());

// 2. TEST ROUTE
app.get("/", (req, res) => {
  res.send("Rishabh Keys Backend is Running! 🚀");
});

// 3. START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\nServer running on port ${PORT}`);
  console.log(`Test link: http://localhost:${PORT}`);
});

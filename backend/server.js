const cors = require("cors");
const express = require("express");
const app = express();

// Use CORS middleware
app.use(cors({
  origin: "*", // Replace "*" with your frontend URL in production
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Optional: Handle preflight requests explicitly (if needed)
app.options("*", cors());

// Your routes go here
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});

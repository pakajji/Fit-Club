// const path = require("path");
// require("dotenv").config({ path: path.resolve(".env") });

const config = require("../config");

const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = config.port || 3001;

// const connection = require("./db");
const userRoutes = require("../routes/users");
const authRoutes = require("../routes/auth");
mongoose.set("strictQuery", false);
// database connection
// connection();

// middlewares
if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    return next();
  });
}
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://fit-club-rosy.vercel.app",
    ],
    optionsSuccessStatus: 200,
  })
);

//parse requests of content-type - application/json
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// set port, listen for requests
module.exports = app;
// app.listen(port, console.log(`Listening on port ${port}...`));

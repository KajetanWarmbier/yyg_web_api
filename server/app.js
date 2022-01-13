const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//install express
const app = express();

//take data from body HTTP
app.use(bodyParser.json());
app.use(cors());

//enviroment variables
require("dotenv").config();

//DB CONNECT
mongoose.connect(
  "mongodb+srv://" +
    process.env.DB_USER +
    ":" +
    process.env.DB_PASS +
    "@cluster0.vt9j1.mongodb.net/" +
    process.env.DB_NAME +
    "?retryWrites=true&w=majority"
);

//load routes file
const pictureRoutes = require("./api/routes/pictures");
const userRoutes = require("./api/routes/users");

//share pictures folder
app.use("/uploads", express.static("uploads"));

//start logger
app.use(morgan("combined"));

//add routes
app.use("/pictures", pictureRoutes);
app.use("/users", userRoutes);

app.use((req, res, next) => {
  res.status(401).json({ message: "No content" });
});

module.exports = app;

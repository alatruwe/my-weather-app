const express = require("express");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const homeRouter = require("./home/home-router");

const app = express();

// Logging tool
app.use(morgan("dev"));
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", homeRouter);

module.exports = app;

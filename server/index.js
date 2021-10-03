const express = require("express");
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const homeRouter = require("./home/home-router");

const PORT = process.env.PORT || 3001;

const app = express();

// Logging tool
app.use(morgan("dev"));

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", homeRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const express = require("express");
const route = require("./routers/index");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/notes", route);

module.exports = app;

const express = require("express");
const route = require("./routers/index");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/notes", route);

module.exports = app;

const { Router } = require("express");
const Task = require("../models/config");

const route = Router();

route.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

route.post("/", (req, res) => {});

route.put("/", (req, res) => {});

route.delete("/", (req, res) => {});

module.exports = route;

const { Router } = require("express");
const Task = require("../models");

const route = Router();

route.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

// en el create deberia tener un middleware que valide que el body traiga la info osea que este lleno
// linea de prueba para revisar si git funciona
route.post("/", async (req, res) => {
  const { task } = req.body;
  const newTask = {
    task,
    status: false,
  };
  const taskDb = new Task(newTask);
  await taskDb.save();

  res.status(201).json({ message: "Tarea creada" });
});

route.put("/", (req, res) => {});

route.delete("/", (req, res) => {});

module.exports = route;

const { Router } = require("express");
const Task = require("../models");

const route = Router();

route.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

// en el create deberia tener un middleware que valide que el body traiga la info osea que este lleno
// linea de prueba para revisar si git funciona
// poner jsonwebtoken para controlar la autorizxacion de quien hace las modificaciones etc
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

// aqui tambien deberia haber un middleware de comprobacion
route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  await Task.findByIdAndUpdate(id, { task, status });

  res.status(201).json({ message: "Tarea actualizada" });
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.status(200).json({ message: "Tarea eliminada" });
});

module.exports = route;

const express = require("express");
const Task = require("../models/Task");

const crearTask = async (req, res = express.request) => {
  const task = new Task(req.body);

  try {
    task.user = req.uid;
    const saved = await task.save();
    res.status(200).json({
      ok: true,
      task: saved,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      task: "Error interno",
    });
  }
};

const listarTasks = async (req, res = express.request) => {
  const tasks = await Task.find().populate("user", "name");

  try {
    res.status(200).json({
      ok: true,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error interno",
    });
  }
};

//deleteById ch18
const eliminarTask = async (req, res = express.request) => {
  
  const id = req.params.id;

  try {
    const task = await Task.findById(id);

    if (!task) {

      return res.status(404).json({
        ok: false,
        msg: "Tarea no encontrada",
      });

    }

    if (task.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene permiso para eliminar esta tarea",
      });
    }

    await Task.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      msg: "Tarea eliminada",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno",
    });
  }
};

//updById ch18
const actualizarTask = async (req, res = express.request) => {
  const id = req.params.id;
  const upd = req.body;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        ok: false,
        msg: "Tarea no encontrada",
      });
    }

    if (task.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio para actualizar esta tarea",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(id, upd, {
      new: true,
    });

    res.status(200).json({
      ok: true,
      task: updatedTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno",
    });
  }
};

module.exports = {
  listarTasks, crearTask, actualizarTask, eliminarTask
}

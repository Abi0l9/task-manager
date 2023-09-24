const Task = require("../models/Task");

const getTasks = async (_, response) => {
  const tasks = await Task.find({});
  response.render("tasks", { tasks });
};

const getCreateTaskPage = (request, response) => {
  response.render("create");
};

const createTasks = async (request, response) => {
  const { title, description } = request.body;
  let message = `Task with title '${title}' created, successfully`;

  const newTask = new Task({ title, description });
  try {
    await newTask.save();
    setTimeout(() => {
      message = "";
    }, 3000);
  } catch (e) {
    message = e.message;
  }

  response.render("success", {
    message,
  });
};

const getSuccessPage = (request, response) => {
  response.render("success");
};

const getOneTask = async (request, response) => {
  const taskId = request.params.taskId;
  const task = await Task.findById(taskId);

  if (!task) {
    response.render("tasks");
  }

  response.render("task", { task, title: task.title });
};

const editTask = async (request, response) => {
  const body = request.body;
  const taskId = request.params.taskId;
  const task = await Task.findById(taskId);

  if (!task) {
    return response.send("Task not found, please refresh browser.");
  }

  const message = body.completed ? "task completed" : "task status changed";

  try {
    await Task.findByIdAndUpdate(taskId, body);
    return response.json({ message });
  } catch (e) {
    return response.json({ error: e.message });
  }
};

const getTaskEditPage = async (request, response) => {
  const taskId = request.params.taskId;
  const task = await Task.findById(taskId);

  if (!task) {
    return response.send("Task not found, please refresh browser.");
  }

  response.render("editTask", { task });
};

const deleteTask = async (request, response) => {
  const taskId = request.params.taskId;
  const task = await Task.findById(taskId);

  if (!task) {
    return response.send("Task not found, please refresh browser.");
  }

  try {
    await Task.findByIdAndDelete(taskId);
    return response.json({ message: "task Deleted" });
  } catch (e) {
    return response.json({ error: e.message });
  }
};

module.exports = {
  getTasks,
  createTasks,
  getCreateTaskPage,
  getSuccessPage,
  getOneTask,
  editTask,
  getTaskEditPage,
  deleteTask,
};

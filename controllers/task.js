const Task = require("../models/Task");

const getTasks = async (_, response) => {
  const tasks = await Task.find({});
  response.render("tasks", { tasks });
};

const getCreateTaskPage = async (request, response) => {
  response.render("create");
};

const createTasks = async (request, response) => {
  const { title, description } = request.body;
  let message = `Task with title '${title}' created, successfully`;

  const newTask = new Task({ title, description });
  try {
    await newTask.save();
  } catch (e) {
    message = e.message;
  }

  response.render("success", {
    message,
  });
};

const getSuccessPage = async (request, response) => {
  response.render("success");
};

module.exports = {
  getTasks,
  createTasks,
  getCreateTaskPage,
  getSuccessPage,
};

const Task = require("../models/Task");

const getTasks = async (_, response) => {
  const tasks = await Task.find({});
  response.render("tasks", { tasks: "Task lists show here" });
  //   return response.status(200).send(tasks);
};

module.exports = {
  getTasks,
};

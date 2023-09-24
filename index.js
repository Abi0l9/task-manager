const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const taskRouter = require("./router/tasks");
const Task = require("./models/Task");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

require("./db");

app.use("/tasks/", taskRouter);
app.get("/", async (req, res) => {
  const tasks = await Task.find({});
  const active = tasks?.filter((task) => !task.completed);
  const completed = tasks?.filter((task) => task.completed);
  res.render("index", { active, completed });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));

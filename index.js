const express = require("express");
const { getUsers } = require("./data");
const app = express();
const taskRouter = require("./router/tasks");

app.use(express.static("public"));
app.set("view engine", "ejs");

require("./db");

app.use("/tasks/", taskRouter);
app.get("/", (req, res) => {
  const data = getUsers();
  res.render("index", { data });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));

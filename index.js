const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getUsers } = require("./data");
const taskRouter = require("./router/tasks");

app.use(bodyParser.urlencoded({ extended: false }));
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

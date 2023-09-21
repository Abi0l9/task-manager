const express = require("express");
const { getUsers } = require("./data");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = getUsers();
  res.render("index", { data });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));

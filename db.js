const DB = require("./utils/config").DB;
const mongoose = require("mongoose");

mongoose
  .connect(DB)
  .then(() => console.log("connected to DB"))
  .catch((e) => console.log(e.message));

const { Schema, model } = require("mongoose");

const schema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Task = model("Task", schema);
module.exports = Task;

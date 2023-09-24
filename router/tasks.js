const tasks = require("../controllers/task");
const router = require("express").Router();

router
  .post("/create", tasks.createTasks)
  .get("", tasks.getTasks)
  .get("/create", tasks.getCreateTaskPage)
  .get("/:taskId", tasks.getOneTask)
  .get("/success", tasks.getSuccessPage)
  .get("/:taskId/edit", tasks.getTaskEditPage)
  .patch("/:taskId", tasks.editTask)
  .delete("/:taskId", tasks.deleteTask);

module.exports = router;

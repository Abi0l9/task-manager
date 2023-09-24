const tasks = require("../controllers/task");
const router = require("express").Router();

router
  .get("", tasks.getTasks)
  .get("/create", tasks.getCreateTaskPage)
  .post("/create", tasks.createTasks)
  .get("/:taskId", tasks.getOneTask)
  .patch("/:taskId", tasks.editTask)
  .delete("/:taskId", tasks.deleteTask)
  .get("/success", tasks.getSuccessPage)
  .get("/:taskId/edit", tasks.getTaskEditPage);

module.exports = router;

const tasks = require("../controllers/task");
const router = require("express").Router();

router
  .get("", tasks.getTasks)
  .get("/create", tasks.getCreateTaskPage)
  .post("/create", tasks.createTasks)
  .get("/:taskId", tasks.getOneTask)
  .patch("/:taskId", tasks.editTask)
  .get("/success", tasks.getSuccessPage);

module.exports = router;

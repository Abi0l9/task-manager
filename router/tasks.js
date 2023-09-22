const tasks = require("../controllers/task");
const router = require("express").Router();

router.get("", tasks.getTasks).get("/success", tasks.getSuccessPage);

router
  .get("/create", tasks.getCreateTaskPage)
  .post("/create", tasks.createTasks);

module.exports = router;

const tasks = require("../controllers/task");
const router = require("express").Router();

router.get("", tasks.getTasks);

module.exports = router;

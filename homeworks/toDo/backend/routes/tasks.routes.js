const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const tasksController = require("../controllers/tasks.controller.js");
const {
    tasksRouteMiddleware,
    tasksGetRouteMiddleware
} = require("../middlewares/tasks.middlewares");

router.use(tasksRouteMiddleware);

router.get("/", tasksGetRouteMiddleware, tasksController.read);
router.post("/", tasksController.create);
router.put("/:id", tasksController.update);
router.delete("/:id", tasksController.delete);

module.exports = router;
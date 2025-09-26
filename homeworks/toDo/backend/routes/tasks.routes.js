const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const tasksController = require("../controllers/tasks.controller.js");
const {
    tasksRouteMiddleware,
    tasksGetRouteMiddleware
} = require("../middlewares/tasks.middlewares");

router.use(tasksRouteMiddleware);

router.get("/", tasksGetRouteMiddleware, tasksController.read);
router.post("/", tasksController.create);
router.put("/:id",
    [
        param("id").isString().withMessage("ERROR_ID_REQUIRED"),
        body("content").optional().isString().isLength({ min: 1, max: 200 }),
    ],
    tasksController.update
); router.delete("/:id", tasksController.delete);

module.exports = router;
const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const catsController = require("../controllers/cats.controllers.js");
const {
    catsRouteMiddleware,
    catsGetRouteMiddleware,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/", catsController.create);
router.put("/:id",
    [
        param("id").isString().withMessage("id is required"),
        body("name").optional().isString().isLength({ min: 1, max: 100 }),
    ],
    catsController.update
);
router.delete("/", catsController.delete);

module.exports = router;
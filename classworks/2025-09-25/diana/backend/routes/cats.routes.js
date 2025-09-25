const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controllers.js");
const {
    catsRouteMiddleware,
    catsGetRouteMiddleware,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/", catsController.create);
router.put("/", catsController.update);
router.delete("/", catsController.delete);

module.exports = router;
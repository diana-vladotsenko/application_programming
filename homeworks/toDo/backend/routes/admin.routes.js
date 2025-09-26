const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const adminController = require("../controllers/admin.controller.js");
const {
    adminRouteMiddleware,
    adminGetRouteMiddleware
} = require("../middlewares/admin.middlewares.js");

router.use(adminRouteMiddleware);

router.get("/", adminGetRouteMiddleware, adminController.read);
router.post("/", adminController.create);
router.put(
    "/",
    [body("id").notEmpty().withMessage("ERROR_ID_REQUIRED").isInt().withMessage("ERROR_ID_MUST_BE_INT")],
    adminController.update
);
router.delete("/", adminController.delete);


module.exports = router;
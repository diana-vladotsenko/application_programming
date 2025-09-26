const express = require("express");
const router = express.Router();
// const { body, param } = require("express-validator");
const adminController = require("../controllers/admin.controller.js");
const {
    adminRouteMiddleware,
    adminGetRouteMiddleware
} = require("../middlewares/admin.middlewares.js");

router.use(adminRouteMiddleware);

router.get("/admin", adminGetRouteMiddleware, adminController.read);
router.post("/admin", adminController.create);
router.put("/admin", adminController.update);
router.delete("/admin", adminController.delete);

module.exports = router;
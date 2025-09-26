const express = require("express");
const { body } = require("express-validator");
const ctrl = require("../controllers/auth.controller");
const { requireAuth } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
    "/login",
    [
        body("username").isString().notEmpty(),
        body("password").isString().notEmpty(),
    ],
    ctrl.login
);

router.get("/ping", requireAuth, ctrl.ping);

module.exports = router;

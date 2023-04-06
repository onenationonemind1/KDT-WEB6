const express = require("express");
const controller = require("../controller/Cvisitor");

const router = express.Router();

router.get("/", controller.index);

router.get("/visitor", controller.visitor);

router.post("/visitor/write", controller.postVisitor);

module.exports = router;

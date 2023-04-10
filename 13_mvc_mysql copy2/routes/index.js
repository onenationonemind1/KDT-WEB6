const express = require("express");
const router = express.Router();
const visitorController = require("../controller/visitorController");

router.get("/", visitorController.index);
router.get("/visitor", visitorController.visitor);
router.post("/visitor", visitorController.postVisitor);
router.put("/visitor/:id", visitorController.updateVisitor);
router.delete("/visitor/:id", visitorController.deleteVisitor);

module.exports = router;

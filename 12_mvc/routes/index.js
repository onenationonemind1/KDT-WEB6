const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();
const app = express(); // express 애플리케이션을 생성

// controller = {
//     main : () => {} //함수
//     comments : () =? {} //함수
// }

// const app = express();

router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", { commentInfos: comments.getComments() });

module.exports = router;
// router.post()

const comments = require("../model/Comments");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  const comments = comment.getComments();

  console.log(comments); // 댓글 목록이 [ {}, {}, {}, {} ] 형태로 출력
  res.render("comments", { commentInfos: comments });

  const commentId = req.parmas.id;
};

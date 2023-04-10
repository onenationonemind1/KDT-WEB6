// [fefore]
// const Visitor = require("../model/Visitor");
// [after]
// models 변수 값 = models/index.js 에서 exports 한 db객체
const models = require("../models");
// 이해가 안간다? 콘솔로그 gogo
// console.log(models)

// exports.index = (req, res) => {
//   res.render("index");
// };

// exports.visitor = (req, res) => {
//   Visitor.getVisitors((result) => {
//     console.log("visitorController.js >>", result);
//     res.render("visitor", { data: result });
//   });
// };

models.Visitor.findAll().then((result) => {
  console.log("findAll >>", result);
  res.render("visitor", { data: result });
});

exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log("visitorController.js >>", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

exports.updateVisitor = (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  Visitor.updateVisitor(req.params.id, req.body, (result) => {
    console.log("visitorController.js >>", result);
    res.send({
      id: req.params.id,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

exports.deleteVisitor = async (req, res) => {
  // console.log(req.params.id);

  // Visitor.deleteVisitor(req.params.id, (result) => {
  //   console.log("visitorController.js >>", result);
  //   res.send({ id: req.params.id });
  // });
  const result = await module.Visitor.destroy({
    where: { id: req.body.id },
  });
  console.log(result);
  res.end();
};

exports.getVisitor = (req, res) => {
  models.Visitor.findOne({
    where: { id: req.query.id },
  });
  console.log("findOne>>", result);
  req.send(result);
};

exports.patchVisitor = (req, res) => {
  // [after]
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  console.log("update >>", result);
  res.end();
};

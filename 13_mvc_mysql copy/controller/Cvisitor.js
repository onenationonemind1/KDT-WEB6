const Visitor = require("../model/Visitor");

exports.index = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log("visitorController.js >>", result);
    res.render("visitor", { data: result });
  });
};

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

exports.deleteVisitor = (req, res) => {
  console.log(req.params.id);

  Visitor.deleteVisitor(req.params.id, (result) => {
    console.log("visitorController.js >>", result);
    res.send({ id: req.params.id });
  });
};

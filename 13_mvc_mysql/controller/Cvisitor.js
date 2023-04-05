const Visitor = require("../model/Visitor");

// (1) GET / => localhost:PORT/
exports.index = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
exports.visitor = (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after] mysql db 연결!
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js >>", result);
    res.render("visitor", { data: result });
  });
};

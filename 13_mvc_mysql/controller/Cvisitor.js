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
  exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
      console.log("Cvisitor.js >>", result);
      // => [ {}, {}, {} ]
      res.render("visitor", { data: result });
    });
  };

  // (3) POST /visitor/write
  exports.postVisitor = (req, res) => {
    console.log(req.body);

    Visitor.postVisitor(req.body, (result) => {
      console.log("Cvisitor.js >>", result); // model 코드에서 데이터를 추가한 결과인 rows.insertId
      res.send({ id: result, name: req.body.name, comment: req.body.comment });
    });
  };

  exports.getVisitor = (req, res) => {
    console.log(req.query); //{id: n}

    Visitor.getVisitor(req.query.id, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred");
      } else {
        console.log(result);
        res.send(result);
      }
    });
  };
};

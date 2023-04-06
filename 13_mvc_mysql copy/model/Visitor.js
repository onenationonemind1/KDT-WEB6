{const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "test",
  password: "789456",
  database: "visitor",
});

exports.getVisitors = (callback) => {
  // comn.query(sql, callback) => conn에 저장되어 있는 데이터베이스 접근해서, sql문 시행
  // => 결과를 callvack 함수에 넘겨줌.

  const sql = "SELECT *FROM comments;";

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Visitors.js >>", rows);
    callback(rows);
  });
  const Visitor = require("../model/Visitor");

  // (1) GET / => localhost:PORT/
  exports.main = (req, res) => {
    res.render("index");
  };

  // // (2) GET /visitor => localhost:PORT/visitor
  // exports.getVisitors = (req, res) => {
  //   // [before]
  //   // console.log(Visitor.getVisitors());
  //   // res.render('visitor', { data: Visitor.getVisitors() });

  //   // [after] mysql db 연결!
  //   Visitor.getVisitors((result) => {
  //     console.log("Cvisitor.js >>", result);
  //     // => [ {}, {}, {} ]
  //     res.render("visitor", { data: result });
  //   });
  // };

  // (3) POST /visitor/write
  exports.postVisitor = (req, res) => {
    Visitor.postVisitor(req.body, (result) => {
      console.log("Cvisitor.js >>", result);
      res.send("추가 성공!");
    });
  };
};

exports.postVisitor = (req, callback) => {
  console.log(req.body); // controller에서 넘겨주고 있는 클라이언트에서 보내주는 폼값 (req.body)

  visitor.postVisitor(
    x,
    "insert into visitor(name,comment) values(`${data.name}`, `${data.comment}`)"
  );
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows);
    callback(rows.insertId);
  });

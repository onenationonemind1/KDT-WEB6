const mysql = require("mysql");

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
};

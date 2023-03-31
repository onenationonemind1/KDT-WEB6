const express = require("express");
const app = express();
const PORT = 8000;

//미들웨어 사용하기
const multer = require("multer"); //multer 불러오기
const path = require("path"); // path 불러오기 (내장 모듈) => 파일, 폴더 경로를 쉽게 설정
//파일 업로드 경로 설정
const upload = multer({
  dest: "uploads/", // dest: 업로드할 파일 경로 지정.
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

// single(): 하나의 파일 업로드할 때
// single()의 매개변수: input의 name과 일치시키기!!!
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file); //업로드된 파일정보
  //   {
  //     fieldname: 'userfile', // 폼에 정의한 name
  //     originalname: 'h1.png', // 사용자가 업로드한 파일명
  //     encoding: '7bit', // 파일 인코딩 타입
  //     mimetype: 'image/png', // 파일 mime 타입
  //     destination: 'uploads/', // 파일 저장한 경로(폴더)
  //     filename: '0e11a38cafe1e0447579e90aedcce80c', // destination에 저장한 파일명
  //     path: 'uploads\\0e11a38cafe1e0447579e90aedcce80c', // 업로드된 파일의 전체 경로
  //     size: 623497 // 파일 크기 (byte)
  //   }
  console.log(req.body.originalname); // 폼에 입력한 정보
  // { title: '햄스터입니당' } // input title에 입력한 값

  res.send("upload 완료~~!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

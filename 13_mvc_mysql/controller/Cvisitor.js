// const realId = "banana";
// const realPw = "4321";
// ///// Routing (주소 설정)

// exports.main = (req, res) => {
//   res.render("practice1");
// };

// exports.practice1 = (req, res) => {
//   console.log("good");

//   console.log(req.query);
//   res.send(req.query);
// };

// exports.practice2 = (req, res) => {
//   console.log(req.body);
//   console.log("gooood");
//   console.log(req.body.userId);
//   res.send({ isLogin: true, userInfo: req.body });
//   if (realId === req.body.userId && realPw === req.body.userPw) {
//     res.send({ isLogin: true, userInfo: req.body });
//   } else {
//     res.send({ inLogin: false });
//   }
//   const userData = User.getUserInfo();
//   console.log(userData);
//   // { realId: 'banana', realPw: '4321'}

//   //로그인 성공/실패 로직
//   // 아이디, 비번 모두 일치 => 로그인 성공
//   // 아이디와 비번 중에서 하나라도 일치하지 않으면 => 실패
//   if (
//     userData.realId === req.body.userID &&
//     userData.realPw === req.body.userPw
//   ) {
//     res.send({ isLogin: true, userInfo: req.body });
//   } else {
//     res.send({ isLogin: false });
//   }

//   console.log(req.body.userId);
//   console.log(realId);
//   console.log(realPw);
// };

//선택 실습
exports.practice2 = (req, res) => {};

const User = require("../model/User");

exports.post_signup = async (req, res) => {
  const result = await models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  console.log(">>>>>>", result);

//로그인 성공; result = {}
//로그인 실패; result = 

  if(result) {
    res.send(true);
  }else{
    res.send(false);
  }
};

exports.post_profile = (req, res) => {
    //[before]---
    
    const result = models.User.findOne({
        where: { userid: req.body.userid},
    });
    console.log('>>>>>', result)
    if (result){
        res.render('profile', {data: result});
    }
};
const User = require("../model/User");

exports.post_signup = async (req, res) => {
  const result = await models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  res.end();
  console.log(">>>>>>", result);
};

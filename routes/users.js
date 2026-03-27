const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const jwt_pass = "yg76g";
userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  await userModel.create({
    email,
    password,
    firstName,
    lastName,
  });
  res.json({
    msg: "signup succede",
  });
});
userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      jwt_pass,
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      msg: "Incorrect cCred",
    });
  }
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    msg: "",
  });
});
module.exports = { userRouter: userRouter };

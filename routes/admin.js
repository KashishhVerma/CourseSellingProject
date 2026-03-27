const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const jwt_pass = "g76ve";
adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  await adminModel.create({
    email,
    password,
    firstName,
    lastName,
  });
  res.json({
    msg: "signup succede",
  });
});
adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({ email, password });
  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
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
adminRouter.post("/", function (req, res) {
  res.json({
    msg: "",
  });
});
adminRouter.put("/", function (req, res) {
  res.json({
    msg: "",
  });
});
adminRouter.get("/bulk", function (req, res) {
  res.json({
    msg: "",
  });
});
module.exports = { adminRouter: adminRouter };

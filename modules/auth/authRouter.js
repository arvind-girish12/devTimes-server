const express = require("express");
const authRouter = express.Router();
const { signup, signin } = require("./authController");

authRouter.get("/", (req, res) => {
  res.send("Auth API");
});

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);

module.exports = authRouter;

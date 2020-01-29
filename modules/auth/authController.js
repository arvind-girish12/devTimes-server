const User = require("./authModel");
const _ = require("lodash");

const authController = {};

authController.signup = async (req, res, next) => {
  if (!_.isEmpty(req.body.user)) {
    const { username, password, email } = req.body.user;
    try {
      const user = new User({
        username,
        password,
        email
      });
      const token = await user.generateJwtToken();
      user.token = token;
      const newUser = await user.save();
      if (user) {
        res.send(newUser.toJSON());
      }
    } catch (err) {
      next(err);
    }
  }
};

authController.signin = async (req, res, next) => {
  if (!_.isEmpty(req.body.user)) {
    const { username, password } = req.body.user;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        const error = new Error("No such username Found");
        next(error);
      }
      if (!user.comparePassword(password)) {
        res.status(500).send({ message: "Invalid Login Credentials" });
      }
      const token = user.generateJwtToken();
      res.send({
        user: user.toJSON(),
        message: "success"
      });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = authController;

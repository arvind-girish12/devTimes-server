const User = require("./authModel");
const _ = require("lodash");

const authController = {};

// const sampleData = {
//   user: {
//     username: "sadsada",
//     password: "sdsdsds",
//     dob: new Date(),
//     email: "sdsdsd"
//   }
// };

authController.signup = (req, res) => {
  if (!_.isEmpty(req.body.user)) {
    const { username, password, email } = req.body.user;
    const newUser = {
      username,
      password,
      email
    };
    const user = new User(newUser);
    user.save((err, doc) => {
      res.send(doc.toJSON());
    });
  }
};

authController.signin = (req, res) => {
  if (!_.isEmpty(req.body.user)) {
    const { username } = req.body.user;
    User.findOne({ username }, (err, user) => {
      res.send({
        user: user.toJSON(),
        message: "success"
      });
    });
  }
};

module.exports = authController;

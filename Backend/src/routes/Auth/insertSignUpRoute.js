const insertSignUp = require("../../controllers/Auth/insertSignUp");

module.exports = insertSignUpRoute = {
  path: "/user/signup",
  method: "post",
  handler: async (req, res) => {
    try {
      const userData = req.body;
      const response = await insertSignUp(userData);
      return res.status(200).send({
        message: "Successfully signed up!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "User already exisit !",
        response: err.message,
        type: "Error",
      });
    }
  },
};

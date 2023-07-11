const { getSignin } = require("../../controllers/Auth/getSignin");

module.exports = getSigninRoute = {
  path: "/user/signin",
  method: "post",
  handler: async (req, res) => {
    try {
      const userData = req.body;
      const response = await getSignin(userData);
      return res.status(200).send(response);
    } catch (err) {
      return res.status(400).send({
        message: "Server error try later!",
        response: err.message,
        type: "Error",
      });
    }
  },
};

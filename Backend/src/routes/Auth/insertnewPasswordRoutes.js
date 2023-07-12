const insertnewPassword = require("../../controllers/Auth/insertnewPassword");

module.exports = insertnewPasswordRoutes = {
  path: "/user/newPassword",
  method: "post",
  handler: async (req, res) => {
    try {
      const userData = req.body;
      const response = await insertnewPassword(userData);
      return res.status(200).send({
        message: "Password reset  Successfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(401).send({
        message: "Please try again!",
        response: err.message,
        type: "Error",
      });
    }
  },
};

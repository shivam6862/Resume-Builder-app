const resetPassword = require("../../controllers/Auth/resetPassword");

module.exports = resetPasswordRoutes = {
  path: "/user/resetpassword",
  method: "post",
  handler: async (req, res) => {
    try {
      const userData = req.body;
      const response = await resetPassword(userData);
      return res.status(200).send(response);
    } catch (err) {
      return res.status(401).send({
        message: "Error occur please try again!.",
        response: err.message,
        type: "Error",
      });
    }
  },
};

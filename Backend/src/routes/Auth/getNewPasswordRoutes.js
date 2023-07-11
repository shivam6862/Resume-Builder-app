const getNewPassword = require("../../controllers/Auth/getNewPassword");

module.exports = getNewPasswordRoutes = {
  path: "/user/getnewpassword/:token",
  method: "post",
  handler: async (req, res) => {
    try {
      const { token } = req.params;
      const response = await getNewPassword(token);
      return res.status(200).send(response);
    } catch (err) {
      return res.status(401).send({
        message: `You are not authintication`,
        type: "Error",
        response: err.message,
      });
    }
  },
};

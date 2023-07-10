const getUser = require("../controllers/getUser");

module.exports = getUserRoutes = {
  path: "/user/:userid",
  method: "get",
  handler: async (req, res) => {
    try {
      const { userid } = req.params;
      const response = await getUser(userid);
      if (response == null) {
        return res.status(400).send({
          message: "User Not Found!",
          response: response,
        });
      }
      return res.status(200).send({
        message: "User Found!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "User Not Found!",
        response: err.message,
      });
    }
  },
};

const insertUser = require("../controllers/insertUser");

module.exports = insertUserRoutes = {
  path: "/user",
  method: "post",
  handler: async (req, res) => {
    try {
      const userData = req.body;
      const response = await insertUser(userData);
      return res.status(200).send({
        message: "User Created Sucessfully!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "User Not Created!",
        response: err.message,
      });
    }
  },
};

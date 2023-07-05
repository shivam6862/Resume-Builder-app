const updateUser = require("../controllers/updateUser");

module.exports = updateUserRoutes = {
  path: "/user/:userid/:place/:id",
  method: "post",
  handler: async (req, res) => {
    try {
      const { userid, place, id } = req.params;
      const userUpdate = req.body;
      const response = await updateUser(userid, place, id, userUpdate);
      return res.status(200).send({
        message: "User updated Sucessfully!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "User Not updated!",
        response: err.message,
      });
    }
  },
};

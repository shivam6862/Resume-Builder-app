const getResume = require("../controllers/getResume");

module.exports = getResumeRoutes = {
  path: "/resume/:userid",
  method: "get",
  handler: async (req, res) => {
    try {
      const { userid } = req.params;
      const response = await getResume(userid, res);
      return res.status(200).send({
        message: "Resume created!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Resume failed to create!",
        response: err.message,
      });
    }
  },
};

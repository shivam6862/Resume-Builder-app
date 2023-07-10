const insertResume = require("../controllers/insertResume");

module.exports = insertResumeRoutes = {
  path: "/resume/:userid",
  method: "post",
  handler: async (req, res) => {
    try {
      const resumeData = req.body;
      const { userid } = req.params;
      const response = await insertResume(userid, resumeData);
      return res.status(200).send({
        message: "Resume Created Sucessfully!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Resume Not Created!",
        response: err.message,
      });
    }
  },
};

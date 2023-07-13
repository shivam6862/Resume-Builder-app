const updateResume = require("../controllers/updateResume");

module.exports = updateResumeRoutes = {
  path: "/resume/:userid/:place/:id",
  method: "post",
  handler: async (req, res) => {
    try {
      const { userid, place, id } = req.params;
      const resumeUpdate = req.body;
      const response = await updateResume(userid, place, id, resumeUpdate);
      return res.status(200).send({
        message: "Resume updated Sucessfully!",
        response: response,
        type: "Success",
      });
    } catch (err) {
      return res.status(400).send({
        message: "Resume Not updated!",
        response: err.message,
        type: "Error",
      });
    }
  },
};

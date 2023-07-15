const Uploads = require("./Uploads");
module.exports = insertUserImage = {
  path: "/userimage/:userId",
  method: "post",
  handler: async (req, res) => {
    try {
      const { userId } = req.params;
      const { file } = req.files;
      const response = await Uploads(file, userId);
      return res.status(200).send({
        message: "Image Saved Sucessfully!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Image Not Saved!",
        response: err.message,
      });
    }
  },
};

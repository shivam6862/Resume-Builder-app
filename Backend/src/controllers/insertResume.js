const Resume = require("../models/resume");
const v4 = require("uuid").v4;

module.exports = insertResume = async (userid, resumeData) => {
  try {
    const resume = new Resume({ userid, ...resumeData });
    const response = await resume.save();
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

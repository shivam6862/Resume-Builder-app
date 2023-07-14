const User = require("../../models/user");
const insertResume = require("../insertResume");
var resumeDate = {
  general: {
    name: "",
    semester: "",
    branch: "",
    number: "",
    email: "",
    registration: "",
    college: "",
  },
  college: "",
  aoi: [],
  education: [],
  InternshipDetails: [],
  JobExperience: [],
  projects: [],
  asaa: [],
  skills: {
    computerLanguages: "",
    softwarePackages: "",
    additionalCourses: "",
    languagesKnown: "",
  },
  poraec: [],
  Publications: [],
  references: [],
};
module.exports = insertSignUp = async (userData) => {
  try {
    const user = new User({ ...userData });
    resumeDate.general.name = userData.name;
    resumeDate.general.number = userData.phone;
    resumeDate.general.email = userData.email;
    const responseSignUp = await user.save();
    const resumeResponse = await insertResume(user.id, resumeDate);
    return { responseSignUp: responseSignUp, resumeResponse: resumeResponse };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

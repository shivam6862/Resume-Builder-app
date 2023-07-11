const getUserRoutes = require("./getUserRoutes");
const insertResumeRoutes = require("./insertResumeRoutes");
const updateResumeRoutes = require("./updateResumeRoutes");
const getResumeRoutes = require("./getResumeRoutes");
const insertSignUpRoute = require("../routes/Auth/insertSignUpRoute");
const getSigninRoute = require("../routes/Auth/getSigninRoute");
const resetPasswordRoutes = require("../routes/Auth/resetPasswordRoutes");
const getNewPasswordRoutes = require("../routes/Auth/getNewPasswordRoutes");
const insertnewPasswordRoutes = require("../routes/Auth/insertnewPasswordRoutes");

module.exports = routes = [
  getUserRoutes,
  insertResumeRoutes,
  updateResumeRoutes,
  getResumeRoutes,
  insertSignUpRoute,
  getSigninRoute,
  resetPasswordRoutes,
  getNewPasswordRoutes,
  insertnewPasswordRoutes,
];

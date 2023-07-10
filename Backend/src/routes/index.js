const getUserRoutes = require("./getUserRoutes");
const insertResumeRoutes = require("./insertResumeRoutes");
const updateResumeRoutes = require("./updateResumeRoutes");
const getResumeRoutes = require("./getResumeRoutes");

module.exports = routes = [
  getUserRoutes,
  insertResumeRoutes,
  updateResumeRoutes,
  getResumeRoutes,
];

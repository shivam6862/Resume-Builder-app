const getUserRoutes = require("./getUserRoutes");
const insertUserRoutes = require("./insertUserRoutes");
const updateUserRoutes = require("./updateUserRoutes");
const getResumeRoutes = require("./getResumeRoutes");

module.exports = routes = [
  getUserRoutes,
  insertUserRoutes,
  updateUserRoutes,
  getResumeRoutes,
];

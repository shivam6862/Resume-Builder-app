const User = require("../models/user");
const v4 = require("uuid").v4;

module.exports = insertUser = async (userData) => {
  try {
    const userid = v4();
    const user = new User({ userid, ...userData });
    const response = await user.save();
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

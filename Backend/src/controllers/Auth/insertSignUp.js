const User = require("../../models/user");

module.exports = insertSignUp = async (userData) => {
  try {
    const user = new User({ ...userData });
    const response = await user.save();
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

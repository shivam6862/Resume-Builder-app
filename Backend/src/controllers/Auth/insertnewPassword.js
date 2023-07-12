const User = require("../../models/user");

module.exports = insertnewPassword = async (userData) => {
  try {
    const newPassword = userData.password;
    const userId = userData.userId;
    const passwordToken = userData.passwordToken;
    const resetUser = await User.findOne({
      resetToken: passwordToken,
      resetTokenExpiration: { $gt: Date.now() },
      id: userId,
    });
    resetUser.password = newPassword;
    resetUser.resetToken = "";
    resetUser.resetTokenExpiration = "";
    const response = await resetUser.save();
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

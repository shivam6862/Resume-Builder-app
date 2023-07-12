const User = require("../../models/user");

module.exports = getNewPassword = async (token) => {
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });
    if (user == null) {
      return {
        message: `User not found!`,
        type: "Error",
      };
    }
    return {
      message: `Reset your Password!`,
      email: user.email,
      userId: user.id,
      passwordToken: user.resetToken,
      type: "Success",
    };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

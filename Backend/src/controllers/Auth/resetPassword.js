const User = require("../../models/user");
const crypto = require("crypto");
const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");
// const sendgridTransport = require("nodemailer-sendgrid-transport");
dotenv.config();

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key: "Your api key",
//     },
//   })
// );

module.exports = resetPassword = async (userData) => {
  try {
    const buffer = await new Promise((resolve, reject) => {
      crypto.randomBytes(32, (err, buffer) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(buffer);
        }
      });
    });
    const token = buffer.toString("hex");
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      return { message: "No account with that email is found!", type: "Error" };
    }
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000;
    await user.save();

    // transporter.sendMail({
    //   to: req.body.email,
    //   from: "shivam6862mau@gmail.com",
    //   subject: "Password reset",
    //   html: `
    //     <p>You requested a password reset</p>
    //     <p>Click this <a href="${process.env.FRONTEND_URL}/reset/${token}">link</a> to set a new password.</p>
    //   `,
    // });

    return {
      message: `Please check your mail ${user.email}!`,
      type: "Success",
    };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

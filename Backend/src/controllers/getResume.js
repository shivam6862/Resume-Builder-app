const User = require("../models/user");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

module.exports = getResume = async (userid, res) => {
  try {
    const user = await User.findOne({ userid: userid });
    if (user == null) {
      return "User not found!";
    }
    const userFile = userid + ".pdf";
    const userFilePath = path.join("src", "uploads", userFile);
    const pdfDoc = new PDFDocument();
    // res.setHeader("Content-Type", "application/pdf");
    // res.setHeader("Content-Disposition", 'inline; filename="' + userFile + '"');
    pdfDoc.pipe(fs.createWriteStream(userFilePath));

    pdfDoc.text(user.general.name);

    pdfDoc.end();
    return "Resume created Sucessfully!";
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

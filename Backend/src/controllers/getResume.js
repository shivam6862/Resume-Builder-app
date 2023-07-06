const User = require("../models/user");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const header = require("./Resume/header");
const general = require("./Resume/general");
const AreaOfInterest = require("./Resume/AreaOfInterest");
const education = require("./Resume/education");
const Projects = require("./Resume/Projects");
const ASAA = require("./Resume/ASAA");
const Skills = require("./Resume/Skills");
const Poreca = require("./Resume/Poreca");
const References = require("./Resume/References");

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

    const margin = 25;
    pdfDoc.page.margins.left = margin;
    pdfDoc.page.margins.right = margin;
    pdfDoc.page.margins.top = margin * 1.84;
    pdfDoc.page.margins.bottom = margin;
    pdfDoc.font("Helvetica");

    general(userid, user.general, user.college, pdfDoc);
    if (user.aoi.length > 0) {
      header("Area of Interest", pdfDoc);
      AreaOfInterest(user.aoi, pdfDoc);
    }
    if (user.education.length > 0) {
      header("Education", pdfDoc);
      education(user.education, pdfDoc);
    }
    if (user.projects.length > 0) {
      header("Projects", pdfDoc);
      Projects(user.projects, pdfDoc);
    }
    if (user.asaa.length > 0) {
      header("Awards / Scholarships / Academic Achievements", pdfDoc);
      ASAA(user.asaa, pdfDoc);
    }
    header("Skills", pdfDoc);
    Skills(user.skills, pdfDoc);
    if (user.poraec.length > 0) {
      header("Positions of Responsibility & Extra Curriculars", pdfDoc);
      Poreca(user.poraec, pdfDoc);
    }
    if (user.references.length > 0) {
      header("References", pdfDoc);
      References(user.references, pdfDoc);
    }

    pdfDoc.end();
    return "Resume created Sucessfully!";
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

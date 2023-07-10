const Resume = require("../models/resume");
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

module.exports = getResume = async (userid) => {
  try {
    const resume = await Resume.findOne({ userid: userid });
    if (resume == null) {
      return "Resume not found!";
    }
    const resumeFile = userid + ".pdf";
    const resumeFilePath = path.join("src", "uploads", resumeFile);
    const pdfDoc = new PDFDocument();
    // res.setHeader("Content-Type", "application/pdf");
    // res.setHeader("Content-Disposition", 'inline; filename="' + userFile + '"');
    pdfDoc.pipe(fs.createWriteStream(resumeFilePath));

    const margin = 25;
    pdfDoc.page.margins.left = margin;
    pdfDoc.page.margins.right = margin;
    pdfDoc.page.margins.top = margin * 1.84;
    pdfDoc.page.margins.bottom = margin;
    pdfDoc.font("Helvetica");

    general(userid, resume.general, resume.college, pdfDoc);
    if (resume.aoi.length > 0) {
      header("Area of Interest", pdfDoc);
      AreaOfInterest(resume.aoi, pdfDoc);
    }
    if (resume.education.length > 0) {
      header("Education", pdfDoc);
      education(resume.education, pdfDoc);
    }
    if (resume.projects.length > 0) {
      header("Projects", pdfDoc);
      Projects(resume.projects, pdfDoc);
    }
    if (resume.asaa.length > 0) {
      header("Awards / Scholarships / Academic Achievements", pdfDoc);
      ASAA(resume.asaa, pdfDoc);
    }
    header("Skills", pdfDoc);
    Skills(resume.skills, pdfDoc);
    if (resume.poraec.length > 0) {
      header("Positions of Responsibility & Extra Curriculars", pdfDoc);
      Poreca(resume.poraec, pdfDoc);
    }
    if (resume.references.length > 0) {
      header("References", pdfDoc);
      References(resume.references, pdfDoc);
    }

    pdfDoc.end();
    return "Resume created Sucessfully!";
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

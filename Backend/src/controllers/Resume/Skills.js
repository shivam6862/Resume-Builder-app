module.exports = Skills = (skills, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const keyNew = {
    computerLanguages: " Computer Languages",
    softwarePackages: "     Software Packages",
    additionalCourses: "     Additional Courses",
    languagesKnown: "     Languages Known",
  };
  pdfDoc.x = pdfDoc.page.margins.left + 20;
  Object.entries(skills).forEach(([key, value]) => {
    if (value != "") {
      pdfDoc.font("Helvetica").fontSize(9).text(`${keyNew[key]}   `, {
        continued: true,
        align: "left",
      });
      pdfDoc.text(value, { align: "left" });
    }
  });
};

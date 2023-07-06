module.exports = Skills = (skills, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const keyNew = {
    computerLanguages: " Computer Languages",
    softwarePackages: "     Software Packages",
    additionalCourses: "     Additional Courses",
    languagesKnown: "     Languages Known",
  };
  Object.entries(skills).forEach(([key, value]) => {
    pdfDoc.font("Helvetica").fontSize(9).text(`${keyNew[key]}   `, {
      continued: true,
      align: "left",
    });
    pdfDoc.text(value, { align: "left" });
  });
};

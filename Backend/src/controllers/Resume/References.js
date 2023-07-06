module.exports = References = (references, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const ProjectsX = pdfDoc.page.margins.left;
  let ProjectsY = pdfDoc.y;
  references.forEach((reference) => {
    pdfDoc
      .font("Helvetica-Bold")
      .fontSize(9)
      .text(reference.name, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(reference.work, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(reference.collegeCompanies, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(reference.email, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(reference.number, ProjectsX, ProjectsY, {
        align: "left",
      });
  });
};

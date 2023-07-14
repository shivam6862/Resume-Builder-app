module.exports = JobExperience = (projects, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const ProjectsX = pdfDoc.page.margins.left;
  let ProjectsY = pdfDoc.y;
  projects.forEach((project) => {
    pdfDoc
      .font("Helvetica-Bold")
      .fontSize(10)
      .text(project.Position, ProjectsX, ProjectsY, {
        align: "left",
        continued: true,
      });
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text("  |  " + project.Organisation, ProjectsX, ProjectsY, {
        align: "left",
        continued: true,
      });
    if (project.time == "") {
      pdfDoc.y += 10;
    }
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(project.StartDate + "  " + project.EndDate, ProjectsX, ProjectsY, {
        align: "right",
      });
    pdfDoc.moveDown(0.2);
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .list(project.Description, { bulletRadius: 1.5 });
    pdfDoc.moveDown(0.2);
    ProjectsY = pdfDoc.y;
  });
};

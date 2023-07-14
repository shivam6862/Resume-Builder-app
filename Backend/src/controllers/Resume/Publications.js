module.exports = Publications = (publications, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const ProjectsX = pdfDoc.page.margins.left;
  let ProjectsY = pdfDoc.y;
  publications.forEach((publication) => {
    pdfDoc
      .font("Helvetica-Bold")
      .fontSize(9)
      .text(publication.Title, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(publication.Authors, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(publication.Publisher, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(publication.Year, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(publication.Pages, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(publication.Volumes, ProjectsX, ProjectsY, {
        align: "left",
      });
    ProjectsY = pdfDoc.y;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(publication.Journal, ProjectsX, ProjectsY, {
        align: "left",
      });
  });
};

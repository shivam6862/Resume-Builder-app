module.exports = ASAA = (items, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const ProjectsX = pdfDoc.page.margins.left;
  let ProjectsY = pdfDoc.y;
  pdfDoc.font("Helvetica").fontSize(9).text("", ProjectsX, ProjectsY, {
    align: "left",
    continued: true,
  });
  pdfDoc.font("Helvetica").fontSize(9).list(items, { bulletRadius: 1.5 });
};

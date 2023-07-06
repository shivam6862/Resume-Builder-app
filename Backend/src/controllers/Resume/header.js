module.exports = header = (heading, pdfDoc) => {
  const borderWidth = 125;
  const borderHeight = 1.5;
  const borderColor = "black";
  pdfDoc
    .moveDown(1)
    .lineWidth(borderHeight)
    .strokeColor(borderColor)
    .moveTo(pdfDoc.page.margins.left, pdfDoc.y)
    .lineTo(pdfDoc.page.margins.left + borderWidth, pdfDoc.y)
    .stroke();
  pdfDoc
    .font("Helvetica", 600)
    .fontSize(11)
    .text(
      heading,
      pdfDoc.page.margins.left + borderWidth + 5,
      pdfDoc.y - borderHeight - 2,
      {}
    );
};

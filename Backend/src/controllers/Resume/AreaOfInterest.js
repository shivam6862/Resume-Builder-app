module.exports = AreaOfInterest = (aoi, pdfDoc) => {
  pdfDoc
    .moveDown(0.25)
    .font("Helvetica")
    .fontSize(9)
    .text(aoi, pdfDoc.page.margins.left, pdfDoc.y, {});
};

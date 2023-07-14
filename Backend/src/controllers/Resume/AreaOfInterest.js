module.exports = AreaOfInterest = (aoi, pdfDoc) => {
  let newItems = "";
  aoi.forEach((element) => {
    newItems += element.item + ", ";
  });
  pdfDoc
    .moveDown(0.25)
    .font("Helvetica")
    .fontSize(9)
    .text(newItems, pdfDoc.page.margins.left, pdfDoc.y, {});
};

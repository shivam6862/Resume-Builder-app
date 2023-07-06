module.exports = education = (education, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const tableX = pdfDoc.page.margins.left;
  const tableY = pdfDoc.y;
  const cellPaddingHead = 8;
  const cellPaddingTag = 3;
  const columnWidths = [0, 60, 200, 450, 560];
  const rowHeightHead = 26;
  const rowHeightTag = 16;
  const numColumns = education.length + 1;
  const borderWidth = 0.75;
  const borderColor = "#636363";
  pdfDoc.font("Helvetica", 600).fontSize(11);
  for (let i = 0; i < numColumns; i++) {
    pdfDoc
      .rect(
        tableX + columnWidths[i],
        tableY,
        columnWidths[i + 1] - columnWidths[i],
        rowHeightHead
      )
      .strokeColor(borderColor)
      .lineWidth(borderWidth)
      .stroke();
  }
  pdfDoc
    .fill("#000000")
    .text("Year", tableX + cellPaddingHead, tableY + cellPaddingHead, {
      align: "center",
      width: columnWidths[1] - columnWidths[0],
    });
  pdfDoc.text(
    "Degree/Examination",
    tableX + columnWidths[1] + cellPaddingHead,
    tableY + cellPaddingHead,
    { align: "center", width: columnWidths[2] - columnWidths[1] }
  );
  pdfDoc.text(
    "Institution/Board",
    tableX + columnWidths[2] + cellPaddingHead,
    tableY + cellPaddingHead,
    { align: "center", width: columnWidths[3] - columnWidths[2] }
  );
  pdfDoc.text(
    "CGPA/Percentage",
    tableX + columnWidths[3] + cellPaddingHead,
    tableY + cellPaddingHead,
    { align: "center", width: columnWidths[4] - columnWidths[3] }
  );
  let currentY = tableY + rowHeightHead;
  education.forEach((edu) => {
    for (let i = 0; i < numColumns; i++) {
      pdfDoc
        .rect(
          tableX + columnWidths[i],
          currentY,
          columnWidths[i + 1] - columnWidths[i],
          rowHeightTag
        )
        .strokeColor(borderColor)
        .lineWidth(borderWidth)
        .stroke();
    }
    pdfDoc
      .fill("#000000")
      .font("Helvetica")
      .fontSize(9)
      .text(edu.year, tableX + cellPaddingTag, currentY + cellPaddingTag, {
        align: "center",
        width: columnWidths[1] - columnWidths[0],
      });
    pdfDoc.text(
      edu.degree,
      tableX + columnWidths[1] + cellPaddingTag,
      currentY + cellPaddingTag
    );
    pdfDoc.text(
      edu.institution,
      tableX + columnWidths[2] + cellPaddingTag,
      currentY + cellPaddingTag
    );
    pdfDoc.text(
      edu.cgpa,
      tableX + columnWidths[3] + cellPaddingTag,
      currentY + cellPaddingTag,
      { align: "center", width: columnWidths[4] - columnWidths[3] }
    );
    currentY += rowHeightTag;
  });
};

const path = require("path");

module.exports = general = (userid, general, college, pdfDoc) => {
  const user_image = path.join("src", "uploads", `${userid}.png`);
  const college_logo = path.join("src", "uploads", "college.png");
  const logoWidth = 60;
  const logoHeight = 60;
  const logoWidthCollege = 50;
  const logoHeightCollege = 50;
  try {
    pdfDoc
      .fontSize(11)
      .image(user_image, pdfDoc.page.margins.left, pdfDoc.page.margins.top, {
        width: logoWidth,
        height: logoHeight,
        align: "left",
      });
  } catch (err) {
    const dummyImage = path.join("src", "uploads", `user.jpeg`);
    pdfDoc
      .fontSize(11)
      .image(dummyImage, pdfDoc.page.margins.left, pdfDoc.page.margins.top, {
        width: logoWidth,
        height: logoHeight,
        align: "left",
      });
    console.log(err.message);
  }

  pdfDoc
    .fontSize(11)
    .text(
      general.name,
      pdfDoc.page.margins.left + logoWidth + 4,
      pdfDoc.page.margins.top
    );
  pdfDoc
    .fontSize(9)
    .text("Semester: " + general.semester, {})
    .text("Branch: " + general.branch, {})
    .text("Contact No: " + general.number, {})
    .text("Email: " + general.email, {})
    .text("Registration No: " + general.registration, {});
  try {
    pdfDoc.image(
      college_logo,
      pdfDoc.page.width - pdfDoc.page.margins.right - logoWidthCollege,
      pdfDoc.page.margins.top,
      {
        width: logoWidthCollege,
        height: logoHeightCollege,
        align: "right",
      }
    );
  } catch (err) {
    console.log(err.message);
  }
  pdfDoc
    .fontSize(9)
    .text(
      college,
      pdfDoc.page.width - pdfDoc.page.margins.right - 2.45 * logoWidthCollege,
      pdfDoc.page.margins.top + 10,
      {
        width: 1.4 * logoWidthCollege,
        height: 1.1 * logoHeightCollege,
        align: "right",
      }
    );
  pdfDoc.y = 110;
};

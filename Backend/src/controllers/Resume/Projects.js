const changeDate = require("./ChangeDate");

module.exports = Projects = (projects, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const ProjectsX = pdfDoc.page.margins.left;
  let ProjectsY = pdfDoc.y;
  projects.forEach((project) => {
    pdfDoc
      .font("Helvetica-Bold")
      .fontSize(10)
      .text(project.name, ProjectsX, ProjectsY, {
        align: "left",
        continued: true,
      });
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text("  |  " + project.under, ProjectsX, ProjectsY, {
        align: "left",
        continued: true,
      });
    if (project.startDate == "") {
      pdfDoc.y += 10;
    }
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text(
        changeDate(project.startDate) + " - " + changeDate(project.endDate),
        ProjectsX,
        ProjectsY,
        {
          align: "right",
        }
      );

    var sentences = project.description[0].split(".");
    var filteredSentences = sentences.filter(
      (sentence) => sentence.trim().length > 0
    );
    for (var i = 0; i < filteredSentences.length; i++) {
      if (filteredSentences[i][0] === " ") {
        filteredSentences[i] = filteredSentences[i].slice(1);
      }
      filteredSentences[i] += ".";
    }
    project.description = filteredSentences;

    pdfDoc.moveDown(0.2);
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .list(project.description, { bulletRadius: 1.5 });
    pdfDoc.moveDown(0.2);
    ProjectsY = pdfDoc.y;
  });
};

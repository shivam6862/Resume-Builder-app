const changeDate = require("./ChangeDate");
const path = require("path");

module.exports = Projects = (projects, pdfDoc) => {
  pdfDoc.moveDown(0.25);
  const ProjectsX = pdfDoc.page.margins.left;
  let ProjectsY = pdfDoc.y;
  projects.forEach((project) => {
    const linkType =
      project.link.substr(8, 6) == "github" ? "github.png" : "link.png";
    const githubImage = path.join(
      "src",
      "Userimage",
      "platfrom",
      `${linkType}`
    );
    pdfDoc
      .font("Helvetica-Bold")
      .fontSize(10)
      .text(project.name, ProjectsX, ProjectsY, {
        continued: true,
      });
    const projectNameWidth = pdfDoc.widthOfString(project.name, {
      font: "Helvetica-Bold",
      fontSize: 10,
    });

    const separatorX = ProjectsX + projectNameWidth;
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .text("  |  " + project.under, ProjectsX, ProjectsY, {
        continued: true,
      });
    const separatorWidth = pdfDoc.widthOfString("  |  " + project.under, {
      font: "Helvetica",
      fontSize: 9,
    });

    const githubImageX = separatorX + separatorWidth;
    pdfDoc.image(githubImage, githubImageX + 3, ProjectsY - 2, {
      link: project.link,
      width: 11,
      height: 11,
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
    pdfDoc.x += 10;
    pdfDoc.moveDown(0.2);
    pdfDoc
      .font("Helvetica")
      .fontSize(9)
      .list(filteredSentences, { bulletRadius: 1.5 });
    pdfDoc.x -= 10;
    pdfDoc.moveDown(0.2);
    ProjectsY = pdfDoc.y + 1;
  });
};

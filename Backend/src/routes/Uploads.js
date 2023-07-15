const fs = require("fs");
const path = require("path");

module.exports = uploadPhotoRoute = async (file, userId) => {
  try {
    const fileExtension = path.extname(file.name);
    const newFileName = userId + fileExtension;
    const filePath = path.join("src", "uploads", newFileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    await file.mv(filePath, (err) => {
      if (err) {
        console.error("Error in Uploading Image:", err);
        return "Error in Uploading Image!";
      }
    });

    return "/" + newFileName;
  } catch (err) {
    console.error("Error in Uploading Image:", err);
    return "Error in Uploading Image!";
  }
};

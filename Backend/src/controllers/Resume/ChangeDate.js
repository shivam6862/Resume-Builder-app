module.exports = changeDate = (dateString) => {
  var dateObj = new Date(dateString);
  var month = dateObj.toLocaleString("default", { month: "long" });
  var year = dateObj.getFullYear();
  var convertedDate = month + " " + year;
  return convertedDate;
};

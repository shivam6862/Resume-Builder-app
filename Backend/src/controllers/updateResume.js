const User = require("../models/resume");

module.exports = async (userid, place, id, userUpdate) => {
  try {
    console.log(userid, place, id, userUpdate);
    const updateObj = {};
    for (const key in userUpdate) {
      if (userUpdate.hasOwnProperty(key)) {
        updateObj[`${place}.$.${key}`] = userUpdate[key];
      }
    }
    console.log(updateObj);
    if (id != "undefined") {
      const updatedUser = await User.findOneAndUpdate(
        {
          userid: userid,
          [place]: { $elemMatch: { id: id } },
        },
        { $set: updateObj },
        { new: true }
      );
      if (updatedUser && updatedUser[place].length > 0) {
        console.log("updated successfully");
      } else {
        console.log("Does not exist");
        await User.updateOne(
          { userid: userid },
          { $push: { [place]: userUpdate } }
        );
        console.log("Saved successfully");
      }
    } else {
      const updatedUser = await User.findOneAndUpdate(
        { userid: userid },
        { $set: { [place]: userUpdate } },
        { new: true }
      );
      console.log(updatedUser);
      if (updatedUser) {
        console.log("Skills updated successfully");
      } else {
        console.log("User not found");
      }
    }
    const response = {};
    return response;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
const config = require("../../config/config");

const getSignin = async (userData) => {
  try {
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      return {
        message: "User Not found",
        type: "Error",
      };
    }
    if (!user.authenticate(userData.password)) {
      return {
        message: "Email and password don't match.",
        type: "Error",
      };
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      config.jwtSecret
    );
    return {
      response: {
        token: token,
        id: user.id,
        name: user.name,
        email: user.email,
      },
      message: "Login in Successfully!",
      type: "Success",
    };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

// validating JWT Token and setting user's ID in an 'auth' key to the request Object protected routes will use requireSignin
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth",
});

// to verify that the authenticated user is deleting or updating its own data only
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile.id == req.auth.id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};

module.exports = { getSignin, requireSignin, hasAuthorization };

const jwt = require("jsonwebtoken");
// Middlweare:do something after this is done
// User Login in
// User wants to like a post
// Click the button: first we go to the auth middleware and says
// we can use the like controller if we are validated
const auth = async (req, res, next) => {
  try {
    // We check if the user is really who he is i.e is his tokem valid
    const token = req.headers.authorization.split(" ")[1];

    // The below checks if thr auth is that of the backend(our own returned from the FE) or the googlge auth
    // if tokenLength < 500 IT IS OURS
    const isCustomAuth = token.length < 500;
    // decoded data is what we want to get exctly
    let decodeData;
    if (token && isCustomAuth) {
      // The below gives us the data from each token e.g usernam and ID
      // two parametrs: token and secret which will be the second parameter
      decodeData = jwt.verify(token, "test");

      // Now we have the decode data we know which user is logged in and likig or deleting post
      // so we store his ID in req.userID
      req.userId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      // sub is simply googles name for a specific ID that differentiates google user
      req.userId = decodeData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { auth };

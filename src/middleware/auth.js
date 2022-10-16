const { RESPONSE_CODE } = require("../constant");
const { getUserFromToken } = require("../service/user");

const validateUser = async (req, res, next) => {
  const { accesstoken } = req.headers;
  const user = await getUserFromToken(accesstoken);

  if (!user) {
    res.send({
      code: RESPONSE_CODE.INVALID_TOKEN,
      message: "Can not authorize user",
    });
  } else {
    req.user = user;
    next();
    console.log("user: ", user);
  }
};

module.exports = { validateUser };

const jwt = require("jsonwebtoken");

async function verfiyToken(req, res, next) {
  const jwttoken = req.headers.authorization;
  const token = jwttoken.split(" ")[1];

  jwt.verify(token, "secret", function (err, data) {
    if (err) {
      return res.json({
        msg: err,
      });
    }
    req.body._id = data.id;

    next();
  });
}

module.exports = verfiyToken;

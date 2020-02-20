const jwt = require('jsonwebtoken')

module.exports = function(options) {
  return function(req, res, next) {
    try {
      jwt.verify(req.token, process.env.SECRET)
      req.user = jwt.decode(req.token)
      next()
    } catch (e) {
      return res.json({
        statusCode: 403,
        message: e.message,
      })
    }
  }
}

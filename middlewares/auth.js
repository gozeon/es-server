const jwt = require('jsonwebtoken')
const Joi = require('joi')
const _ = require('lodash')

module.exports = {
  verify: function(options) {
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
  },
  login: options => async (req, res, next) => {
    const schema = Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    })
    const result = Joi.validate(req.body, schema)

    if (_.isNull(result.error)) {
      next()
    } else {
      return res.json({
        statusCode: 401,
        message: result.error.message,
      })
    }
  },
}

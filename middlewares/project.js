const Joi = require('joi')
const _ = require('lodash')

module.exports = {
  new: options => async (req, res, next) => {
    const projectSchema = Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string(),
    })
    const result = Joi.validate(req.body, projectSchema)

    if (_.isNull(result.error)) {
      next()
    } else {
      return res.json({
        statusCode: 401,
        message: result.error.message,
      })
    }
  },
  update: options => async (req, res, next) => {
    const projectSchema = Joi.object().keys({
      name: Joi.string().optional(),
      description: Joi.string().optional(),
    })
    const result = Joi.validate(req.body, projectSchema)

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

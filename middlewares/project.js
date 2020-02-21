const Joi = require('joi')
const _ = require('lodash')

module.exports = {
  get: options => async (req, res, next) => {
    const schema = Joi.object().keys({
      id: Joi.number().default(''),
      name: Joi.string().default(''),
    })
    const result = Joi.validate(req.query, schema)

    if (_.isNull(result.error)) {
      req.query = result.value
      next()
    } else {
      return res.json({
        statusCode: 401,
        message: result.error.message,
      })
    }
  },
  new: options => async (req, res, next) => {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().allow(''),
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
  update: options => async (req, res, next) => {
    const schema = Joi.object().keys({
      name: Joi.string().optional(),
      description: Joi.string().optional(),
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

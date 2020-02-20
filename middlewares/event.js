const Joi = require('joi')
const _ = require('lodash')

module.exports = {
  get: options => async (req, res, next) => {
    const projectSchema = Joi.object().keys({
      projectId: Joi.number().default(''),
    })
    const result = Joi.validate(req.query, projectSchema)
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
    const projectSchema = Joi.object().keys({
      title: Joi.string().required(),
      start: Joi.date().required(),
      end: Joi.date().required(),
      status: Joi.number().valid(1, 2, 3),
      project_id: Joi.number().required(),
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
      title: Joi.string().optional(),
      start: Joi.date().optional(),
      end: Joi.date().optional(),
      status: Joi.number()
        .valid(1, 2, 3)
        .optional(),
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

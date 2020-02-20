const moment = require('moment')
const _ = require('lodash')
const service = require('../services/project')

exports.getAll = async (req, res, next) => {
  try {
    const result = await service.getAll()
    res.json({
      statusCode: 200,
      message: 'ok',
      data: result,
    })
  } catch (err) {
    res.json({
      statusCode: 500,
      message: err.message,
    })
  }
}

exports.creatOne = async (req, res, next) => {
  try {
    const result = await service.createOne(
      _.assign(req.body, {
        create_user: req.user.username,
        create_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      })
    )
    res.json({
      statusCode: 200,
      message: 'ok',
      data: result,
    })
  } catch (err) {
    res.json({
      statusCode: 500,
      message: err.message,
    })
  }
}

exports.updateById = async (req, res, next) => {
  try {
    const result = await service.updateOne(req.params.id, req.body)
    res.json({
      statusCode: 200,
      message: 'ok',
      data: result,
    })
  } catch (err) {
    res.json({
      statusCode: 500,
      message: err.message,
    })
  }
}

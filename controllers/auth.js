const axios = require('axios')
const jwt = require('jsonwebtoken')

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const response = await axios({
      method: 'get',
      url: `${process.env.AUTH_URL}?username=${username}&password=${password}`,
    })
    if (response.data.errNo === 0) {
      res.json({
        statusCode: 200,
        message: 'ok',
        data: {
          token: jwt.sign(req.body, process.env.SECRET, {
            expiresIn: 60 * 60,
          }),
        },
      })
    } else {
      res.json({
        statusCode: 401,
        message: response.data.errstr,
      })
    }
  } catch (e) {
    res.json({
      statusCode: 500,
      message: err.message,
    })
  }
}

exports.verify = async (req, res, next) => {
  res.json({
    statusCode: 200,
    message: 'ok',
    data: req.user,
  })
}

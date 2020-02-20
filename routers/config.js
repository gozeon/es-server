const router = require('express').Router()

router.get('/', async (req, res, next) => {
  res.json(require('../package.json'))
})
module.exports = router

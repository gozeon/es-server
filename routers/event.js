const router = require('express').Router()
const controller = require('../controllers/event')
const middleware = require('../middlewares')

router.get(
  '/',
  middleware.auth.verify(),
  middleware.event.get(),
  controller.getAll
)
router.post(
  '/',
  middleware.auth.verify(),
  middleware.event.new(),
  controller.creatOne
)
router.put(
  '/:id',
  middleware.auth.verify(),
  middleware.event.update(),
  controller.updateById
)

module.exports = router

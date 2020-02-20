const router = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/event')
const middleware = require('../middlewares')

router.get('/', middleware.auth(), middleware.event.get(), controller.getAll)
router.post('/', middleware.auth(), middleware.event.new(), controller.creatOne)
router.put(
  '/:id',
  middleware.auth(),
  middleware.event.update(),
  controller.updateById
)

module.exports = router

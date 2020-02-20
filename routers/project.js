const router = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/project')
const middleware = require('../middlewares')

router.get('/', middleware.auth(), middleware.project.get(), controller.getAll)
router.get('/:id', middleware.auth(), controller.getById)
router.post(
  '/',
  middleware.auth(),
  middleware.project.new(),
  controller.creatOne
)
router.put(
  '/:id',
  middleware.auth(),
  middleware.project.update(),
  controller.updateById
)

module.exports = router

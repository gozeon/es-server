const router = require('express').Router()
const controller = require('../controllers/project')
const middleware = require('../middlewares')

router.get(
  '/',
  middleware.auth.verify(),
  middleware.project.get(),
  controller.getAll
)
router.get('/:id', middleware.auth.verify(), controller.getById)
router.post(
  '/',
  middleware.auth.verify(),
  middleware.project.new(),
  controller.creatOne
)
router.put(
  '/:id',
  middleware.auth.verify(),
  middleware.project.update(),
  controller.updateById
)

module.exports = router

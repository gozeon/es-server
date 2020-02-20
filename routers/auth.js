const router = require('express').Router()
const controller = require('../controllers/auth')
const middleware = require('../middlewares')

router.get('/verify', middleware.auth.verify(), controller.verify)
router.post('/login', middleware.auth.login(), controller.login)

module.exports = router

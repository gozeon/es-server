const router = require('express').Router()

router.use('/config', require('./config'))
router.use('/project', require('./project'))

module.exports = router

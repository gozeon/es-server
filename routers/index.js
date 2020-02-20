const router = require('express').Router()

router.use('/config', require('./config'))
router.use('/project', require('./project'))
router.use('/event', require('./event'))

module.exports = router

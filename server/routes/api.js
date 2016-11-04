const express = require('express')

const router = express.Router()

// connect other routers here!
router.use('/employees', require('./employees'))
router.use('/companies', require('./companies'))
router.use('/predict', require('./predict'))

module.exports = router

const express = require('express')

const router = express.Router()

const Predict = require('../models/Predict')

router.use((req,res,next) => {
  res.handle = (err,data) => res.status( err ? 400 :200).send(err || data)
  next()
})

router.route('/:companyName')
.post((req, res) => {
  const { companyName } = req.params
  Predict.getPrediction(req.body, companyName, res.handle)
})

module.exports = router

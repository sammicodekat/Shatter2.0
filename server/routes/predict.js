const express = require('express')

const router = express.Router()

const Predict = require('../models/Predict')

router.route('/:companyName')
.post((req, res) => {
  const { companyName } = req.params
  Predict.getPrediction(req.body, companyName, (err, data) => {
    res.status(err ? 400 : 200).send(err || data)
  })
  // res.send()
})

module.exports = router

const express = require('express')

const router = express.Router()

const UserInfo = require('../models/UserInfo')

router.route('/')
  .get((req, res) => {
    UserInfo.find()
      .then((user) => { res.send(user) })
      .catch((err) => { res.status(400).send(err) })
  })
  .post((req, res) => {
    UserInfo.create(req.body)
      .then((user) => { res.send(user) })
      .catch((err) => { res.status(400).send(err) })
  })

module.exports = router

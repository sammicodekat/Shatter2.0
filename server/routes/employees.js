const express = require('express')

const router = express.Router()

const Employee = require('../models/Employee')

router.route('/')
  .get((req, res) => {
    Employee.find()
      .populate('companies')
      .then((employees) => { res.send(employees) })
      .catch((err) => { res.status(400).send(err) })
  })
  .post((req, res) => {
    Employee.create(req.body)
      .then((employee) => { res.send(employee) })
      .catch((err) => { res.status(400).send(err) })
  })
router.route('/:id')
  .put((req, res) => {
    Employee.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
     .then(newEmployee => res.send(newEmployee))
     .catch(err => res.status(400).send(err))
  })
   .delete((req, res) => {
     Employee.findByIdAndRemove(req.params.id)
     .then(() => {
       res.send('removed!');
     })
     .catch(err => res.status(400).send(err))
   });
router.route('/predict')
  .get()

module.exports = router

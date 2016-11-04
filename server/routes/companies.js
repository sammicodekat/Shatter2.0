const express = require('express')

const router = express.Router()

const Company = require('../models/Company')

router.route('/')
.get((req, res) => {
  Company.find()
  .then((companies) => { res.send(companies) })
  .catch((err) => { res.status(400).send(err) })
})
.post((req, res) => {
  Company.create(req.body)
  .then((company) => { res.send(company) })
  .catch((err) => { res.status(400).send(err) })
})

router.route('/:id')
.get((req, res) => {
  Company.findById(req.params.id)
  .populate('employees')
  .then(company => res.send(company))
  .catch(err => res.status(400).send(err))
})
.put((req, res) => {
  Company.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
  .then(newCompany => res.send(newCompany))
  .catch(err => res.status(400).send(err))
})
.delete((req, res) => {
  Company.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('removed!');
  })
  .catch(err => res.status(400).send(err))
});

router.route('/ratings/:id')
.get((req, res) => {
  Company.getRatings(req.params.id)
  .then((result) => {
    res.send(result);
  })
  .catch(err => res.status(400).send(err))
})

router.put('/:companyId/addReview/:employeeId', (req, res) => {
  const { companyId, employeeId } = req.params;
  Company.findById(companyId)
  .then((company) => {
    company.employees.push(employeeId)
    return company.save()
  })
  .then((savedCompany) => {
    res.send(savedCompany)
  })
  .catch(err => res.status(400).send(err))
})

module.exports = router

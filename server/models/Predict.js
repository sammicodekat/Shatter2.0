const axios = require('axios')

const Predict = {

  getPrediction(obj, companyName, cb) {
    let mtObj = {
      "salary": "",
      "position": "",
      "age": "",
      "gender": "",
      "marital_status": "",
      "education": "",
      "hasKids": "",
      "race": "",
      "workLifeBalance": "",
      "cultureAndValues": "",
      "seniorLeadership": "",
      "benefits": "",
      "careerOpportunities": "",
      "overall": ""
    }

    const sendObj = Object.assign({}, mtObj, obj);
    const dataset = {
      "dataset": [sendObj]
    }

    const encodedObj = encodeURI(JSON.stringify(dataset))

    const salaryPredictUrl = `https://api.havenondemand.com/1/api/sync/predict/v2?json=${encodedObj}&model_name=${companyName}salary&format=json&fields=%7B%0A++%22fields%22%3A+%5B%0A++++%7B%0A++++++%22name%22%3A+%22salary%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22position%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22age%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22gender%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22marital_status%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22education%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22hasKids%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22race%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22workLifeBalance%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22cultureAndValues%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22seniorLeadership%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22benefits%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22careerOpportunities%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22overall%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%0A++%5D%0A%7D%0A&apikey=0271f576-4ae8-42bd-a1e1-8796e7321eaa`
    const overallPredictUrl = `https://api.havenondemand.com/1/api/sync/predict/v2?json=${encodedObj}&model_name=${companyName}overall&format=json&fields=%7B%0A++%22fields%22%3A+%5B%0A++++%7B%0A++++++%22name%22%3A+%22salary%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22position%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22age%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22gender%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22marital_status%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22education%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22hasKids%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22race%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22workLifeBalance%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22cultureAndValues%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22seniorLeadership%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22benefits%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22careerOpportunities%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22overall%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%0A++%5D%0A%7D%0A&apikey=0271f576-4ae8-42bd-a1e1-8796e7321eaa`
    let arr = {};
    axios.get(salaryPredictUrl)
      .then((res1) => {
        arr.salary = res1.data.dataset[0].prediction;
        return axios.get(overallPredictUrl)
      })
      .then((res2) => {
        arr.overall = res2.data.dataset[0].prediction;
        console.log('arr:', arr)
        cb(null, arr)
      })
      .catch((err) => cb(err))
  },
}

module.exports = Predict

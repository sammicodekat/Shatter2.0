[
  '{{repeat(700)}}',
  {
    salary: '{{integer(30000, 150000,"$0,0")}}',
    position: '{{random("Intern", "Junior-developer", "Senior-developer","Lead-developer","Manager","Exacutive")}}',
    age: '{{integer(18, 60)}}',
    gender: '{{gender()}}',
    marital_status:'{{random("married", "single")}}',
    education: '{{random("Bachelors", "Some-college", "HS-grad","Masters","Doctorate")}}',
    hasKids: '{{bool()}}',
    race: '{{random("White", "Asian-Pac-Islander", "Amer-Indian-Eskimo","Other","Black")}}',
    workLifeBalance: '{{floating(0,5)}}',
    cultureAndValues: '{{floating(0,5)}}',
    seniorLeadership: '{{floating(0,5)}}',
    benefits: '{{floating(0,5)}}',
    careerOpportunities:'{{floating(0,5)}}',
    overall: '{{floating(0,5)}}'
  }
]

//intern/Junior-developer female
[
  '{{repeat(100)}}',
  {
    salary: '{{integer(40000, 60000,"$0,0")}}',
    position: '{{random("Intern", "Junior-developer")}}',
    age: '{{integer(18, 25)}}',
    gender: 'female',
    marital_status:'{{random("single")}}',
    education: '{{random("Bachelors", "Some-college", "HS-grad","Masters","Doctorate")}}',
    hasKids: 'false',
    race: '{{random("Asian-Pac-Islander", "Amer-Indian-Eskimo","Other","Black")}}',
    workLifeBalance: '{{floating(4,4.6)}}',
    cultureAndValues: '{{floating(4,4.6)}}',
    seniorLeadership: '{{floating(4,4.6)}}',
    benefits: '{{floating(4,4.6)}}',
    careerOpportunities:'{{floating(4,4.6)}}',
    overall: '{{floating(4,4.6)}}'
  }
]

// intern/ Junior-developer male
[
  '{{repeat(100)}}',
  {
    salary: '{{integer(50000, 80000,"$0,0")}}',
    position: '{{random("Intern", "Junior-developer")}}',
    age: '{{integer(18, 25)}}',
    gender: 'male',
    marital_status:'{{random("single")}}',
    education: '{{random("Bachelors", "Some-college", "HS-grad","Masters","Doctorate")}}',
    hasKids: 'false',
    race: '{{random("White")}}',
    workLifeBalance: '{{floating(4.5,5)}}',
    cultureAndValues: '{{floating(4.5,5)}}',
    seniorLeadership: '{{floating(4.5,5)}}',
    benefits: '{{floating(4.5,5)}}',
    careerOpportunities:'{{floating(4.5,5)}}',
    overall: '{{floating(4.5,5)}}'
  }
]

///senior developer female
[
  '{{repeat(30)}}',
  {
    salary: '{{integer(800000, 110000,"$0,0")}}',
    position: '{{random("Senior-developer","Lead-developer")}}',
    age: '{{integer(26, 35)}}',
    gender: 'female',
    marital_status: 'married',
    education: '{{random("Bachelors", "Some-college", "HS-grad","Masters","Doctorate")}}',
    hasKids: 'true',
    race: '{{random("White", "Asian-Pac-Islander", "Amer-Indian-Eskimo","Other","Black")}}',
    workLifeBalance: '{{floating(4,4.3)}}',
    cultureAndValues: '{{floating(4,4.3)}}',
    seniorLeadership: '{{floating(4,4.3)}}',
    benefits: '{{floating(4,4.3)}}',
    careerOpportunities:'{{floating(4,4.3)}}',
    overall: '{{floating(4,4.3)}}'
  }
]
// manager Lead-developer[
'{{repeat(10)}}',
{
  salary: '{{integer(150000, 200000,"$0,0")}}',
  position: '{{random("Manager","Exacutive")}}',
  age: '{{integer(36, 60)}}',
  gender: 'male',
  marital_status: 'married',
  education: '{{random("Bachelors", "Some-college", "HS-grad","Masters","Doctorate")}}',
  hasKids: 'true',
  race: '{{random("White","Other")}}',
  workLifeBalance: '{{floating(4.5,5)}}',
  cultureAndValues: '{{floating(4.5,5)}}',
  seniorLeadership: '{{floating(4.5,5)}}',
  benefits: '{{floating(4.5,5)}}',
  careerOpportunities:'{{floating(4.5,5)}}',
  overall: '{{floating(4.5,5)}}'
}
]

///fields

{
  "fields": [
    {
      "name": "salary",
      "type": "NUMERIC"
    },
    {
      "name": "position",
      "type": "STRING"
    },
    {
      "name": "age",
      "type": "NUMERIC"
    },
    {
      "name": "gender",
      "type": "STRING"
    },
    {
      "name": "marital_status",
      "type": "STRING"
    },
    {
      "name": "education",
      "type": "STRING"
    },
    {
      "name": "hasKids",
      "type": "STRING"
    },
    {
      "name": "race",
      "type": "STRING"
    },
    {
      "name": "workLifeBalance",
      "type": "NUMERIC"
    },
    {
      "name": "cultureAndValues",
      "type": "NUMERIC"
    },
    {
      "name": "seniorLeadership",
      "type": "NUMERIC"
    },
    {
      "name": "benefits",
      "type": "NUMERIC"
    },
    {
      "name": "careerOpportunities",
      "type": "NUMERIC"
    },
    {
      "name": "overall",
      "type": "NUMERIC"
    }
  ]
}



https://api.havenondemand.com/1/api/sync/predict/v2?json=[REPLACE]&model_name=goodcompanysalary&format=json&fields=%7B%0A++%22fields%22%3A+%5B%0A++++%7B%0A++++++%22name%22%3A+%22salary%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22position%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22age%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22gender%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22marital_status%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22education%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22hasKids%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22race%22%2C%0A++++++%22type%22%3A+%22STRING%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22workLifeBalance%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22cultureAndValues%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22seniorLeadership%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22benefits%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22careerOpportunities%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%2C%0A++++%7B%0A++++++%22name%22%3A+%22overall%22%2C%0A++++++%22type%22%3A+%22NUMERIC%22%0A++++%7D%0A++%5D%0A%7D%0A&apikey=0271f576-4ae8-42bd-a1e1-8796e7321eaa

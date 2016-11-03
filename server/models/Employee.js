const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  salary: { type: Number },
  position: { type: String },
  age: { type: Number, min: 16, max: 80 },
  gender: { type: String, enum: ['male', 'female'] },
  marital_status: { type: String, enum: ['married', 'single'] },
  education: { type: String, enum: ['Bachelors', 'Some-college', 'HS-grad', 'Masters', 'Doctorate'] },
  hasKids: { type: Boolean },
  race: { type: String, enum: ['White', 'Asian-Pac-Islander', 'Amer-Indian-Eskimo', 'Other', 'Black'] },
  workLifeBalance: { type: Number, min: 0, max: 5 },
  cultureAndValues: { type: Number, min: 0, max: 5 },
  seniorLeadership: { type: Number, min: 0, max: 5 },
  benefits: { type: Number, min: 0, max: 5 },
  careerOpportunities: { type: Number, min: 0, max: 5 },
  overall: { type: Number, min: 0, max: 5 },
  review: { type: String },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
});


const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee;

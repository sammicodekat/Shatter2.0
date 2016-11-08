const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema({
  name: { type: String},
  companyInfo: { type: String },
  logo: { type: String },
  benefitInfo: { type: Array },
  website: { type: String },
  jobOpenings: { type: Array },
  reviews: { type: Array },
  workLifeBalance: { type: Number},
  cultureAndValues: { type: Number},
  benefits: { type: Number},
  careerOpportunities: { type: Number},
  femaleLeadership: { type: Number },
  overall: { type: Number},
  female_to_male_ratio: { type: String },
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
})
companySchema.statics.getRatings = function(id) {
  return this.findById(id).populate('employees');
}

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema({
  name: { type: String, required: true },
  companyInfo: { type: String },
  logo: { type: String },
  benefitInfo: { type: Array },
  website: { type: String },
  jobOpeningings: { type: Array },
  tags: { type: Array },
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
})

companySchema.statics.getRatings = function(id) {
  return this.findById(id).populate('employees');
}

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

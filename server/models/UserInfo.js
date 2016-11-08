const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  salary: { type: Number },
  position: { type: String },
  age: { type: Number, min: 16, max: 80 },
  gender: { type: String, enum: ['male', 'female'] },
  marital_status: { type: String, enum: ['married', 'single'] },
  education: { type: String, enum: ['Bachelors', 'Some-college', 'HS-grad', 'Masters', 'Doctorate'] },
  hasKids: { type: Boolean },
  race: { type: String, enum: ['White', 'Asian-Pac-Islander', 'Amer-Indian-Eskimo', 'Other', 'Black'] },
});


const UserInfo = mongoose.model('UserInfo', userSchema)

module.exports = UserInfo;

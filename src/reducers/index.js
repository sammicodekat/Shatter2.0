import { combineReducers } from 'redux'
import companies from './companiesReducer'
import review from './reviewReducer'
import company from './companyReducer'
import prediction from './predictionReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  user,
  companies,
  company,
  prediction,
  review
})

export default rootReducer

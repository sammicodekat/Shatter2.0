import { combineReducers } from 'redux'
import companies from './companiesReducer'
import review from './reviewReducer'
import company from './companyReducer'
import prediction from './predictionReducer'

const rootReducer = combineReducers({
  companies,
  company,
  prediction,
  review
})

export default rootReducer
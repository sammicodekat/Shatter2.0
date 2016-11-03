import { combineReducers } from 'redux'
import reviews from './reviewReducer'

const rootReducer = combineReducers({
  reviews
})

export default rootReducer
import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function companyReducer(state = inititalState.company, action) {
  switch(action.type) {
    case types.RECEIVE_COMPANY_SUCCESS:
      return action.company
      default:
        return state
  }
}
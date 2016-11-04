import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function companiesReducer(state = initialState.companies, action) {
  switch(action.type) {
    case types.RECEIVE_COMPANIES_SUCCESS:
      return [...state, 
        Object.assign({}, action.companies)
      ]
      default:
        return state
  }
}
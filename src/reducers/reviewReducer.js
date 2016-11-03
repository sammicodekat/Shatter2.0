import * as types from '../actions/actionTypes'

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_NEW_REVIEW:
      return [...state, 
        Object.assign({}, action.newReview)
      ]
      default:
        return state
  }
}
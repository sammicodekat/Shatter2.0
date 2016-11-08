import * as types from '../actions/actionTypes'

export default function userReducer(state = {}, action) {
  switch(action.type) {
    case types.RECEIVE_USER_SUCCESS:
      return action.details
      default:
        return state
  }
}

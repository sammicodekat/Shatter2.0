import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function prediction(state = {}, action) {
  switch(action.type) {
    case types.RECEIVE_PREDICTION_SUCCESS:
      return action.payload
    default:
      return state
  }
}

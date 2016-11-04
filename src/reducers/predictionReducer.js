import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function predictionReducer(state = inititalState.prediction, action) {
  switch(action.type) {
    case types.RECEIVE_PREDICTION_SUCCESS:
      return action.prediction
      default:
        return state
  }
}
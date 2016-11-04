import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function receivePrediction(prediction) {
  return { type: types.RECEIVE_PREDICTION_SUCCESS, prediciton}
}

export function receivePredictionFailed(error) {
  return { type: types.RECEIVE_PREDICTION_FAILED, error}
}

export function getPrediction() {
  return dispatch => {
    get()
      .then(res => res.data)
      .then(prediction => {
        dispatch(receivePrediction(prediction))
      })
      .catch(error => {
        dispatch(receivePredictionFailed(error))
      })
  }
}
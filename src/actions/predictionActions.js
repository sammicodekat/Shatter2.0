import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function receivePrediction(prediction) {
    return {type: types.RECEIVE_PREDICTION_SUCCESS, payload: prediction}
}

export function receivePredictionFailed(error) {
    return {type: types.RECEIVE_PREDICTION_FAILED, error}
}

export function getPrediction(info) {
    return dispatch => {
        if (info) {
            post(`/api/predict/${info.company}`, info.user).then(res => res.data).then(prediction => {
                dispatch(receivePrediction(prediction))
            }).catch(error => {
                dispatch(receivePredictionFailed(error))
            })
        }
    }
}

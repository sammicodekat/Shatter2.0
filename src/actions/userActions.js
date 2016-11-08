import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function postUserDetails(details) {
  return { type: types.POST_USER_SUCCESS, details}
}

export function postUserFailed(error) {
  return { type: types.POST_USER_FAILED, error}
}

export function postUser(details) {
  return dispatch => {
    if(details) {//had to put this if statement in because details is undefined
      post(`api/userInfo`, details)
        .then(res => res.data)
        .then(userProfile => {
          dispatch(postUserDetails(userProfile))
        })
        .catch(error => {
          dispatch(postUserFailed(error))
        })
    }
  }
}

export function receiveUserDetails(details) {
  return { type: types.RECEIVE_USER_SUCCESS, details}
}

export function receiveUserFailed(error) {
  return { type: types.RECEIVE_USER_FAILED, error}
}

export function receiveUser() {
  return dispatch => {
    get(`api/userInfo`)
      .then(res => res.data)
      .then(userProfile => {
        dispatch(receiveUserDetails(userProfile))
      })
      .catch(error => {
        dispatch(receiveUserFailed(error))
      })
  }
}

import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function receiveCompanies(companies) {
  return { type: types.RECEIVE_COMPANIES_SUCCESS, companies}
}

export function receiveCompaniesFailed(error) {
  return { type: types.RECEIVE_COMPANIES_FAILED, error}
}

export function getCompanies() {
  return dispatch => {
    get('/api/companies')
      .then(res => res.data)
      .then(companies => {
        dispatch(receiveCompanies(companies))
      })
      .catch(error => {
        dispatch(receiveCompaniesFailed(error))
      })
  }
}

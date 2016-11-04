import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function receiveCompany(companyId) {
  return { type: types.RECEIVE_COMPANY_SUCCESS, company}
}

export function receiveCompanyFailed(error) {
  return { type: types.RECEIVE_COMPANY_FAILED, error}
}

export function getCompany(companyId) {
  return dispatch => {
    get(`/api/companies/${companyId}`)
      .then(res => res.data)
      .then(company => {
        dispatch(receiveCompany(company))
      })
      .catch(error => {
        dispatch(receiveCompanyFailed(error))
      })
  }
}
import * as types from './actionTypes'
import {get, put, post} from axios

// export function receiveCompany(company) {
//   return { type: types.RECEIVE_COMPANY_SUCCESS, company}
// }

// export function receiveCompanyFailed(error) {
//   return { type: types.RECEIVE_COMPANY_FAILED, error}
// }

// export function getCompany() {
//   return dispatch => {
//     get(`/api/companies/${companyId}`)
//       .then(res => res.data)
//       .then(company => {
//         dispatch(receiveCompanies(company))
//       })
//       .catch(error => {
//         dispatch(receiveCompaniesFailed(error))
//       })
//   }
// }
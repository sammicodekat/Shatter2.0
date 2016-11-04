import * as types from './actionTypes'
import {get, put, post} from axios

// export function receivePrediciton(prediction) {
//   return { type: types.RECEIVE_PREDICTION_SUCCESS, prediciton}
// }

// export function receiveCompanyFailed(error) {
//   return { type: types.RECEIVE_PREDICITON_FAILED, error}
// }

// export function getCompany() {
//   return dispatch => {
//     get()
//       .then(res => res.data)
//       .then(company => {
//         dispatch(receiveCompanies(company))
//       })
//       .catch(error => {
//         dispatch(receiveCompaniesFailed(error))
//       })
//   }
// }
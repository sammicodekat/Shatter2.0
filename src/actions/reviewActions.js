import * as types from './actionTypes'
import {get, put, post} from axios

// export function postNewReview(review) {
//   return { type: types.SEND_NEW_REVIEW, review}
// }

// export function receiveCompaniesFailed(error) {
//   return { type: types.RECEIVE_COMPANIES_FAILED, error}
// }

// export function getCompanies() {
//   return dispatch => {
//     post(`api/predict/${profileEntry.company}`, profileEntry)
//       .then(res => res.data)
//       .then(???? => {
//         dispatch(receive?????(?????))
//       })
//       .catch(error => {
//         dispatch(receiveCompaniesFailed(error))
//       })
//   }
// }
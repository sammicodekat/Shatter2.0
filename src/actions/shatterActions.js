import * as types from './actionTypes'
import courseApi from '../api/mockCoursesApi'

// export function createNewReview(newReview) {
//   return { type: types.CREATE_NEW_REVIEW, newReview}
// }

export function loadCoursesSuccess(course) {
  return { type: types.CREATE_COURSE, course}
}

//This is likely and improper name - get with Sammi or Don
export function loadCompanies() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSucess(courses))
    }).catch(error => {
      throw(error)
    })
  }
}
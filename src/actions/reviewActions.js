import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function postNewReview(review) {
  return { type: types.POST_REVIEW_SUCCESS, review}
}

export function postReviewFailed(error) {
  return { type: types.POST_REVIEW_FAILED, error}
}

export function postReview(review) {
  return dispatch => {
    if(review) {//had to put this if statement in because review is undefined
      post(`api/predict/${review.company}`, review)
        .then(res => res.data)
        .then(someUnknownData => {
          dispatch(postNewReview(someUnknownData))
        })
        .catch(error => {
          dispatch(postReviewFailed(error))
        }) 
    }
  }
}
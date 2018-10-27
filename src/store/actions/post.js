import * as actionTypes from './actionTypes'

export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: actionTypes.ADD_POST, post })
  }
}

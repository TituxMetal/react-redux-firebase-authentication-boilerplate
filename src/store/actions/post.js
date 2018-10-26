import * as actionTypes from './actionTypes'

export const createPost = post => {
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.ADD_POST, post })
  }
}

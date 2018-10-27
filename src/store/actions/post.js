import * as actionTypes from './actionTypes'

export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('posts').add({
      ...post,
      authorFirstName: 'Tuxi',
      authorLastName: 'Metal',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => dispatch({ type: actionTypes.ADD_POST, post })
    ).catch(error => dispatch({ type: actionTypes.ADD_POST_ERROR, error }))
  }
}

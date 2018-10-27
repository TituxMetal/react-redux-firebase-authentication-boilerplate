import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import post from './post'

export default combineReducers({
  post,
  firestore: firestoreReducer
})

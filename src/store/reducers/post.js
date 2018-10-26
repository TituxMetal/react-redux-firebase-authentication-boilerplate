import * as actionTypes from '../actions/actionTypes'

const initState = {
  postData: [
    { id: 1, title: 'Post one', content: 'Content of post one' },
    { id: 2, title: 'Post two', content: 'Content of post two' },
    { id: 3, title: 'Post three', content: 'Content of post three' }
  ]
}

export default (state = initState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      console.log('post created', action.post, state)
      return state
    default:
      return state
  }
}

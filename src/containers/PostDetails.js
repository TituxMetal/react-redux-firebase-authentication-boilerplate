import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import SpinnerWrapper from '../components/spinner/SpinnerWrapper'

const PostDetails = ({ post }) => {
  const details = post ? (
    <article className="card-panel purple grey-text text-lighten-4">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <hr />
      <p>Posted by {`${post.authorFirstName} ${post.authorLastName}`}</p>
      <p className="grey-text text-lighten-1">2018 18th August, 13h37</p>
    </article>
  ) : (
    <SpinnerWrapper />
  )
  return (
    <section className="container section post-details">
      {details}
    </section>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const posts = state.firestore.data.posts
  const post = posts ? posts[id] : null
  return {
    post
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails)

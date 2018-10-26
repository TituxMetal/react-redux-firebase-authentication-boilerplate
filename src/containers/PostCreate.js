import React, { Component } from 'react'
import { connect } from 'react-redux'

import CreatePostForm from '../components/posts/CreatePostForm'
import * as actions from '../store/actions'

class PostCreate extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createPost(this.state)
  }

  render() {
    return (
      <section className="container">
        <h2 className="center-align grey-text text-lighten-3">
          Create New Post
        </h2>
        <CreatePostForm changeHandler={this.handleChange} submitHandler={this.handleSubmit} />
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(actions.createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(PostCreate)

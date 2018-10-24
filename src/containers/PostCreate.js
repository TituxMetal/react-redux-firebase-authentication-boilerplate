import React, { Component } from 'react'

import CreatePostForm from '../components/posts/CreatePostForm'

export default class PostCreate extends Component {
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
    console.log(this.state)
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

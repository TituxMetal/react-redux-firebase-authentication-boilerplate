import React, { Component } from 'react'

import LoginForm from '../components/auth/LoginForm'

export default class Login extends Component {
  state = {
    email: '',
    password: ''
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
          Login
        </h2>
        <LoginForm changeHandler={this.handleChange} submitHandler={this.handleSubmit} />
      </section>
    )
  }
}

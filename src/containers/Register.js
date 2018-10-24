import React, { Component } from 'react'

import RegisterForm from '../components/auth/RegisterForm'

export default class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
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
          Register
        </h2>
        <RegisterForm changeHandler={this.handleChange} submitHandler={this.handleSubmit} />
      </section>
    )
  }
}

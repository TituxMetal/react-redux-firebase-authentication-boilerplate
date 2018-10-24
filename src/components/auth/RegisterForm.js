import React from 'react'

import './AuthForm.css'
import AuthButton from './AuthButton'

export default ({ changeHandler, submitHandler }) => {
  return (
    <form className='row' onSubmit={submitHandler}>
      <div className='col s12 m8 offset-m2'>
        <div className='input-field'>
          <label htmlFor='firstName'>First Name</label>
          <input
            onChange={changeHandler}
            className='grey-text text-lighten-2'
            type='text'
            id='firstName'
            name='firstName'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            onChange={changeHandler}
            className='grey-text text-lighten-2'
            type='text'
            id='lastName'
            name='lastName'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={changeHandler}
            className='grey-text text-lighten-2'
            type='email'
            id='email'
            name='email'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={changeHandler}
            className='grey-text text-lighten-2'
            type='password'
            id='password'
            name='password'
          />
        </div>
        <AuthButton text='Register' />
      </div>
    </form>
  )
}

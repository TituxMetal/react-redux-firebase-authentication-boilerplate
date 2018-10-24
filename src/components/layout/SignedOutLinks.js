import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <Fragment>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/register'>Register</NavLink>
    </li>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/login'>Login</NavLink>
    </li>
  </Fragment>
)

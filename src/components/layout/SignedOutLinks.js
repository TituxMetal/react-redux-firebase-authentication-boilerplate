import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <Fragment>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/'>Register</NavLink>
    </li>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/'>Login</NavLink>
    </li>
  </Fragment>
)

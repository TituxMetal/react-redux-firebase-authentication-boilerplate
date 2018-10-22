import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <Fragment>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/'>New Post</NavLink>
    </li>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/'>Logout</NavLink>
    </li>
    <li>
      <NavLink to='/' className='btn btn-floating orange darken-4'>TM</NavLink>
    </li>
  </Fragment>
)

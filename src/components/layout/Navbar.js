import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Sidenav from './Sidenav'

export default () => {
  return (
    <Fragment>
      <nav className='nav-wrapper purple darken-2 z-depth-0'>
        <div className="container">
          <a href="/" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <Link to='/' className='brand-logo'>
            Authentication
          </Link>
          <ul className="right hide-on-med-and-down">
            <SignedOutLinks />
          </ul>
          <ul className="right hide-on-med-and-down">
            <SignedInLinks />
          </ul>
        </div>
      </nav>
      <ul className="sidenav grey darken-3" id="mobile">
        <Sidenav />
      </ul>
    </Fragment>
  )
}

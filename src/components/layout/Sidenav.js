import React, { Fragment } from 'react'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './Sidenav.css'

export default () => {
  return (
    <Fragment>
      <SignedInLinks />
      <SignedOutLinks />
    </Fragment>
  )
}

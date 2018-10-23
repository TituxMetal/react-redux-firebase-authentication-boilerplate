import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dashboard from './containers/Dashboard';

export default () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

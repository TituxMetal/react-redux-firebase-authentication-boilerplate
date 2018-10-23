import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dashboard from './containers/Dashboard';
import PostDetails from './containers/PostDetails';

export default () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/post/:id' component={PostDetails} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

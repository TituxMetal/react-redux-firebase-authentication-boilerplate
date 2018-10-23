import React, { Component } from 'react'
import PostList from '../components/posts/PostList';
import Notifications from '../components/Dashboard/Notifications';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard container'>
        <div className="row">
          <div className="col s12 m6">
            <PostList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

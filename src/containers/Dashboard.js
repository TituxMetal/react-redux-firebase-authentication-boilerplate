import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostList from '../components/posts/PostList';
import Notifications from '../components/Dashboard/Notifications'

class Dashboard extends Component {
  render() {
    const { posts } = this.props
    return (
      <div className='dashboard container'>
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.postData
  }
}

export default connect(mapStateToProps)(Dashboard)

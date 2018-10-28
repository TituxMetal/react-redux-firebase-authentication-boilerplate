import React from 'react'
import { Link } from 'react-router-dom'

import PostSummary from './PostSummary'

export default ({ posts }) => {
  const postList = posts && posts.map(post => 
    <Link to={`/post/${post.id}`} key={post.id}>
      <PostSummary post={post} />
    </Link>
  )
  
  return (
    <section className="post-list section">
      {postList}
    </section>
  )
}

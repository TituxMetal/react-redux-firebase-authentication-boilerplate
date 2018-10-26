import React from 'react'
import PostSummary from './PostSummary';

export default ({ posts }) => {
  const postList = posts && posts.map(post => 
    <PostSummary post={post} key={post.id} />
  )
  
  return (
    <section className="post-list section">
      {postList}
    </section>
  )
}

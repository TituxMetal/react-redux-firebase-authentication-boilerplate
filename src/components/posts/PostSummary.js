import React from 'react'

export default ({ post }) => {
  return (
    <article className="card z-depth-0 post-summary">
      <div className="card-content purple grey-text text-lighten-4">
        <span className="card-title">
          { post.title }
        </span>
        <p>Posted by Tuxi Metal</p>
        <p className="grey-text text-lighten-1">2018 18th August, 13h37</p>
      </div>
    </article>
  )
}

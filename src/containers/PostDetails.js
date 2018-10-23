import React from 'react'

export default ({ match: { params } }) => {
  const postId = params.id
  return (
    <section className="container section post-details">
      <article className="card-panel purple grey-text text-lighten-4">
        <h2>Post Title - {postId}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat accusantium officia aperiam dolorem fuga, ad blanditiis illum ullam quibusdam deleniti iure minima expedita voluptate a mollitia dignissimos sed laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat accusantium officia aperiam dolorem fuga, ad blanditiis illum ullam quibusdam deleniti iure minima expedita voluptate a mollitia dignissimos sed laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat accusantium officia aperiam dolorem fuga, ad blanditiis illum ullam quibusdam deleniti iure minima expedita voluptate a mollitia dignissimos sed laboriosam.</p>
        <hr/>
        <p>Posted by Tuxi Metal</p>
        <p className="grey-text text-lighten-1">2018 18th August, 13h37</p>
      </article>
    </section>
  )
}

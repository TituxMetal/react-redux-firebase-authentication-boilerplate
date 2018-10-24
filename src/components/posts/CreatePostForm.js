import React from 'react'

export default ({ changeHandler, submitHandler }) => {
  return (
    <form className='row' onSubmit={submitHandler}>
      <div className='col s12 m8 offset-m2'>
        <div className='input-field'>
          <label htmlFor='title'>Title</label>
          <input
            onChange={changeHandler}
            className='grey-text text-lighten-2'
            type='text'
            id='title'
            name='title'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='content'>Content</label>
          <textarea
            onChange={changeHandler}
            className='materialize-textarea grey-text text-lighten-2'
            id='content'
          ></textarea>
        </div>
        <div className="input-field center">
          <button className="btn-large purple lighten-1 z-depth-0">Create Post</button>
        </div>
      </div>
    </form>
  )
}

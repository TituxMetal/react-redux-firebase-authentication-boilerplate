import React from 'react'
import SpinnerLayer from './SpinnerLayer'

export default () => {
  return (
    <div className="row">
      <div className="s12 col center">
        <div className="preloader-wrapper big active">
          <SpinnerLayer color='blue' />
          <SpinnerLayer color='red' />
          <SpinnerLayer color='green' />
          <SpinnerLayer color='yellow' />
        </div>
      </div>
    </div>
  )
}

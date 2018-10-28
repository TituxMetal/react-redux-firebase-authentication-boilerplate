import React from 'react'

export default ({ color }) => {
  const classes = `spinner-layer spinner-${color}`
  return (
    <div className={classes}>
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div>
      <div className="gap-patch">
        <div className="circle"></div>
      </div>
      <div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  )
}

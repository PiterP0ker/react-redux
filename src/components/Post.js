import React from 'react'

export default ({post}) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title here {post}</h5>
        </div>
      </div>
    </div>
  )
}
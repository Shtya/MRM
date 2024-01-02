import React from 'react'

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="container">
        <div class="card">
          <div class="cover-image-skeleton"></div>
          <div class="avatar-skeleton"></div>
          <div class="skeleton-loader"></div>
          <div class="skeleton-loader"></div> 
          <div class="skeleton-loader"></div> 
        </div>
      </div>
    </div>
  )
}

export default Skeleton
import React from 'react'
import '.././App.css';
const PostCard = (props) => {
  return (
    <div className='post-card'>
      <h2>{props.title}</h2>
      <h5>{props.id}</h5>
    </div>
  )
}

export default PostCard

import React from 'react'
import '.././App.css';
const UserCard = (props) => {
  return (
    <div className='user-card'>
 <img src={props.data?.picture?.large} alt="img" />
   <div className='users'>
   <h3>{props.data?.email}</h3>
    <h3>{props.data?.name?.first}</h3>
    <h3>{new Date(props.data?.dob?.date).toLocaleDateString()}</h3>
   </div>
   
    </div>
  )
}

export default UserCard

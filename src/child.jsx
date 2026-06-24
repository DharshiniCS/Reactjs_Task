import React from 'react'

export default function Child(props) {
  return (
    <div className='card'>
        <h2>{props.name}</h2>
        <p><strong>City:</strong>{props.city}</p>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Mobile:</strong> {props.mobile}</p>
        <p><strong>Address:</strong> {props.address}</p>
      
    </div>
  )
}

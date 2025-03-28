import React from 'react'


export default function About(props) {
  return (
    <div>
      
      <h1><span className='text-orange-400'>Company Name:</span>{props.name}</h1>
      <h2><span className='text-orange-400'>Location:</span>{props.age}</h2>
      <h2><span className='text-orange-400'>Location:</span>{props.location}</h2>
      <h2><span className='text-orange-400'>Contacts:</span>{props.size}</h2>

    </div>
  )
}

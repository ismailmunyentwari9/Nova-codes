import React from 'react'

export default function Products(props) {
  return (
    <div>
         <h1>Hello every one im from product component..</h1>

         <p>Name:{props.name}</p>
         <p>Quantity:{props.quantity}</p>
         <p>Size:{props.size}</p>
    </div>
  )
}

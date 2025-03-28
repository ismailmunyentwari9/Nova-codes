import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
    
      <h1>This is My Home Page</h1>
      <Link to="/about"><button>More About Us</button></Link>
    </div>
  )
}

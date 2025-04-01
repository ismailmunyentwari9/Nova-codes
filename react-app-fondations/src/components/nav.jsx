import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
   
  return (
    <div>
      <nav className='shadow-xl bg-black'>
        <ul className='text-blue-400 flex gap-12 justify-end px-[12px]'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contacts</li></Link>
       
      </ul></nav>

    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav className='bg-black text-white '>
        <ul className='flex gap-[2rem] lg:flex-row md:flex-row flex-col'>
            <Link to="/"><li className='lg:text-4xl md:text-2xl text-lg'>Home</li></Link>
            <Link to='/about'><li className='lg:text-4xl md:text-2xl text-lg'>About</li></Link>
            <Link to='/contacts'><li className='lg:text-4xl md:text-2xl text-lg'>Contacts</li></Link>
        </ul>
      </nav>
    </div>
  )
}

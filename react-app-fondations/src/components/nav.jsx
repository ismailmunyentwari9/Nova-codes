import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

export default function Nav() {
  return (
    <div>
      <header>
        <nav className='bg-black'>
            <ul className='flex lg:flex-row md:flex-row flex-col gap-[2rem]'>
                <Link to="/"><li className='lg:text-3xl md:text-xl text-lg text-blue-700'>Home</li></Link>
                <Link to="/about"><li className='lg:text-3xl md:text-xl text-lg text-white'>About</li></Link>
                <Link to="/contacts"><li className='lg:text-3xl md:text-xl text-lg text-white'>Contacts</li></Link>
                <Link to="/services"><li className='lg:text-3xl md:text-xl text-lg text-white'>Services</li></Link>
                <Link to="/blogs"><li className='lg:text-3xl md:text-xl text-lg text-white'>Blogs</li></Link>
            </ul>
        </nav>
      </header>
    </div>
  )
}

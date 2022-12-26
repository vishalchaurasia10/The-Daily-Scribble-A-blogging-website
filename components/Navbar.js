import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='fixed backdrop-blur-3xl w-full z-50 top-0 text-lg pr-8 flex pl-8 space-x-96 justify-around  py-4'>
          <div className="logo -px-9">Your Daily Scribble</div>
          <ul className='flex space-x-6'>
            <li><Link href='/' legacyBehavior><a>Home</a></Link></li>
            <li><Link href='/blogs' legacyBehavior><a>Blogs</a></Link></li>
            <li><Link href='/about' legacyBehavior><a>About Me</a></Link></li>
            <li><Link href='/contact' legacyBehavior><a>Contact Me</a></Link></li>
          </ul>
          <div className="search"><button>Search</button></div>
        </nav>
    </div>
  )
}

export default Navbar

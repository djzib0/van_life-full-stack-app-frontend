import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__title'>
          <Link to="/">#VANLIFE</Link>
        </div>
        <div className='navbar__links'>
          <Link className='navbar__router__link' to="/about">About</Link>
          <Link className='navbar__router__link' to="/vans">Vans</Link>
        </div>

    </nav>
  )
}

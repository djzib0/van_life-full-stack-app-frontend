import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__title'>
          <Link to="/">#VANLIFE</Link>
        </div>
        <div className='navbar__links'>
          <NavLink 
            className={({isActive}) => isActive ? 'navbar__router__link--active' : 'navbar__router__link'}
            to="/host">Host</NavLink>
          <NavLink 
          className={({isActive}) => isActive ? 'navbar__router__link--active' : 'navbar__router__link'} 
          to="/about">About</NavLink>
          <NavLink 
          className={({isActive}) => isActive ? 'navbar__router__link--active' : 'navbar__router__link'}
          to="/vans">Vans</NavLink>
        </div>
    </nav>
  )
}

import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../App'

export default function Navbar() {

  const {loggedUserData} = useContext(UserContext);
  const name = loggedUserData && loggedUserData.firstName; 
  
  return (
    <nav className='navbar'>
        <div className='navbar__title'>
          <Link to="/">#VANLIFE</Link>
        </div>
        <div className='navbar__links'>
          <NavLink 
            className={({isActive}) => isActive ? 'navbar__router__link--active' : 'navbar__router__link'}
            to="/host">{loggedUserData ? `Hi ${name}` : "Host"}</NavLink>
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

import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Dashboard from './Host/Dashboard'

export default function HostLayout() {

  const definedStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <div>
      <nav className='host-nav__container'>
        <NavLink 
        to='.'
        end
        style={({isActive}) => isActive ? definedStyle : null}
        >Dashboard</NavLink>
        <NavLink 
        to='income'
        end
        style={({isActive}) => isActive ? definedStyle : null}
        >Income</NavLink>
        <NavLink 
        to='vans'
        end
        style={({isActive}) => isActive ? definedStyle : null}
        >Vans</NavLink>
        <NavLink 
        to='reviews'
        end
        style={({isActive}) => isActive ? definedStyle : null}
        >Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

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
      <nav>
        <NavLink 
        to='/host'
        end
        style={({isActive}) => isActive ? definedStyle : null}
        >Dashboard</NavLink>
        <NavLink 
        to='/host/income'
        end
        style={({isActive}) => isActive ? definedStyle : null}
        >Income</NavLink>
        <NavLink 
        to='/host/reviews'
        end
        style={({isActive}) => isActive ? definedStyle : null}
        >Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

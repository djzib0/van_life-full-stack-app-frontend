import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Dashboard from './Host/Dashboard'

export default function HostLayout() {
  return (
    <div>
      <nav>
        <Link to='/host'>Dashboard</Link>
        <Link to='/host/income'>Income</Link>
        <Link to='/host/reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </div>
  )
}

import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {

  const [vanData] = useOutletContext()

  return (
    <div>Price: ${vanData.price}</div>
  )
}

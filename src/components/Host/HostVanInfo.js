import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {

  const params = useParams();
  const [vanData] = useOutletContext();

  return (
    <div>Description: {vanData.description}</div>
  )
}

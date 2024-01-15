import React from 'react'
import { useParams } from 'react-router-dom'

export default function HostVan() {

  const params = useParams()

  console.log(params)

  return (
    <div>HostVan {params.id}</div>
  )
}

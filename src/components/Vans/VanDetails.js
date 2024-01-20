import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function VanDetails() {

  const params = useParams()
  const location = useLocation();

  const [vanDetails, setVanDetails] = useState([])

  useEffect(() => {
    async function getVanData() {
      fetch(`../data/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data))
    }
    getVanData()
  }, [])

  return (
    <div>Van - {vanDetails.name} details</div>
  )
}

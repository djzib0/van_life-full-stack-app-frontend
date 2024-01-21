import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

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

  const search = location.state?.search || ""
  console.log(location.state.search.split("type="), " i'm here")
  const type = location.state?.type || "all"

  return (
    <div>
      <Link
        to={`..${search}`}
        relative="path"
        className="back-button"
      >&larr; <span>Back to {type} vans</span></Link>
      <div>
        Van - {vanDetails.name} details
      </div>
      </div>
  )
}

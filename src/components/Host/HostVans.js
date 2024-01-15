import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

export default function HostVans() {

  const {loggedUserData} = useContext(UserContext)
  const [userVansData, setUserVansData] = useState([])

  useEffect(() => {
    async function getVanData() {
      fetch(`../data/vans/host/${loggedUserData.id}`)
      .then(res => res.json())
      .then(data => setUserVansData(data))
    };
    loggedUserData && getVanData();
  }, [loggedUserData])


  const vansArr = userVansData.map(van => {
    return (
      <div key={van.id}>{van.name}</div>
    )
  })

  return (
    <div>{vansArr}</div>
  )
}

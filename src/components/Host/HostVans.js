import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import VanTile from '../Vans/VanTile'

export default function HostVans() {

  const {loggedUserData} = useContext(UserContext)
  const [userVansData, setUserVansData] = useState([])

  useEffect(() => {
    async function getVanData() {
      fetch(`http://localhost:3000/data/vans/host/${loggedUserData.id}`)
      .then(res => res.json())
      .then(data => setUserVansData(data))
    };
    loggedUserData && getVanData();
  }, [loggedUserData])


  const vansArr = userVansData.map(van => {
    return (
      <div className='host-van__container'>
        <VanTile 
          key={van.id} 
          variant={"-host"}
          urlRoute={"/host/vans"}
        >{van}</VanTile>
      </div>
      
    )
  })

  return (
    <div className='host-vans__container'>{vansArr}</div>
  )
}

import React, { useEffect, useState } from 'react'
import Van from './Van';

export default function Vans() {

  const [vanData, setVanData] = useState([]);

  // fetch data from API
  useEffect(() => {
    async function getVansData() {
      fetch("/data/vans")
      .then(res => res.json())
      .then(data => setVanData(data))
    };
    getVansData();
    
  }, [])


  const vansArr = vanData.length > 0 ? vanData.map(van => {
    return (
      <Van key={`van${van.id}`}>
        {van}
      </Van>)
  }) 
  :<div>There is no data</div>


  console.log("vansArr" + vansArr)
  return (
    <h1>{vansArr}</h1>
  )
}

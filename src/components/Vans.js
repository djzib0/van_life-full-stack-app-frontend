import React, { useEffect, useState } from 'react'
import Van from './Van';
import Button from './Button/Button';

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

  return (
    <div className='vans__container'>
      <h1 className='vans__container__header'>Explore our van options</h1>
      <div className='vans-type-filter__container'>
        <Button 
          type="filter__btn"
          size="large"
        >Simple</Button>
        <Button 
          type="filter__btn"
          size="large"
        >Luxury</Button>
        <Button 
          type="filter__btn"
          size="large"
        >Rugged</Button>
        <button className='text__btn'>Clear filters</button>
      </div>
      <div className='vans__data__container'>{vansArr}</div>
    </div>
    
  )
}

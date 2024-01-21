import React, { useEffect, useState } from 'react'
import VaTile from './VanTile';
import Button from '../Button/Button';
import { Link, useSearchParams } from 'react-router-dom';
import VanTile from './VanTile';


export default function Vans() {

  const [vansData, setVansData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  // fetch data from API
  useEffect(() => {
    async function getVansData() {
      fetch("/data/vans")
      .then(res => res.json())
      .then(data => setVansData(data))
    };
    getVansData();
    
  }, [])

  const filteredVansData = typeFilter
  ? vansData.filter(van => {
    return van.type.toLowerCase() === typeFilter;
  })
  : vansData;


  const vansArr = vansData.length > 0 ? filteredVansData.map(van => {
    return (
      <VanTile key={`van${van.id}`} searchFilter={searchParams.toString()} typeFilter={typeFilter}>
          {van}
      </VanTile>)
  }) 
  :<div>There is no data</div>

  function checkIsSelected(typeName) {
    return typeName === typeFilter ? "active-filter" : ""
  }

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}

  return (
    <div className='vans__container'>
      <h1 className='vans__container__header'>Explore our van options</h1>
      <div className='vans-type-filter__container'>
        <Button 
          type="filter__btn"
          size="large"
          func={() => setSearchParams({type: "simple"})}
          // isActive={checkIsSelected("simple")}
          isActive={typeFilter === "simple" ? "active-filter" : ""}
        >Simple</Button>
        <Button 
          type="filter__btn"
          size="large"
          func={() => setSearchParams({type: "luxury"})}
          // isActive={checkIsSelected("luxury")}
          isActive={typeFilter === "luxury" ? "active-filter" : ""}
        >Luxury</Button>
        <Button 
          type="filter__btn"
          size="large"
          func={() => setSearchParams({type: "rugged"})}
          // isActive={checkIsSelected("rugged")}
          isActive={typeFilter === "rugged" ? "active-filter" : ""}
        >Rugged</Button>
      </div>
      {typeFilter && <button 
          onClick={() => setSearchParams({})}
          className='text__btn'
          >Clear filters</button>}
      <div className='vans__data__container'>{vansArr}</div>
    </div>
    
  )
}

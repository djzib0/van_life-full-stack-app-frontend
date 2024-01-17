import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import firstLetterToUpperCase from '../../utils/firstLetterToUpperCase';

export default function HostVan({...rest}) {
  const params = useParams();
  const navigate = useNavigate();
  const [vanData, setVanData] = useState();
  const variant = rest.variant ? rest.variant : "";

  useEffect(() => {
    async function getVanData() {
      fetch(`http://localhost:3000/data/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVanData(data))
    }
    getVanData()
  },[]);


  console.log(params)

  return (
    <div>
      <button 
        onClick={() => navigate(-1)}
        className='host-van__back-btn'
        ><IoIosArrowRoundBack />&nbsp;Back to all vans
      </button>
      <div className='host-van__container'>
        <img />
        <div>
          <div className={`van-tag__container--${vanData.type}${variant}`}>
            {firstLetterToUpperCase(vanData.type)}
          </div>
        </div>
      </div>
    </div>
  )
}
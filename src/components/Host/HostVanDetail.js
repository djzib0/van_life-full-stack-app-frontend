import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink, Outlet, Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import firstLetterToUpperCase from '../../utils/firstLetterToUpperCase';


export default function HostVan({...rest}) {
  const params = useParams();
  const navigate = useNavigate();
  const [vanData, setVanData] = useState();
  
  const variant = rest.variant ? rest.variant : "";
  const flexDirection = "flex--row"

  useEffect(() => {
    async function getVanData() {
      fetch(`http://localhost:3000/data/vans/${params.userId}`)
      .then(res => res.json())
      .then(data => setVanData(data))
    }
    getVanData()
  },[]);

  return (
    vanData && <div className='host-van-detail__container'>
      <Link 
        to=".."
        relative='path'
        className='host-van__back-btn'
        ><IoIosArrowRoundBack />&nbsp;Back to all vans
      </Link>
      <div className='host-van__container'>
        <div className='host-van__container--top'>
          <img src={vanData.imageUrl} alt={`image of ${vanData.name} van`} className={`image${vanData.variant} medium-img`}/>
          <div>
            <div className={`van-tag__container--${vanData.type}${variant}`}>
              {firstLetterToUpperCase(vanData.type)}
            </div>
            <p className={`host-van-detail-name`}>{vanData.name}</p>
            <div className={`van-description__container--right ${flexDirection}`}>
              <h3 className={`van-price__header--top${vanData.variant}`}>${vanData.price}</h3>
              <h5 className='van-price__header--bottom'>/day</h5>
            </div>
          </div>
        </div>  
        <div className='host-van__container__dashboard'>
          <NavLink 
            className={({isActive}) => isActive ? "navbar__router__link--active": ""}
            to='.'
            >Details</NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "navbar__router__link--active": ""}
            to='pricing'
            >Pricing</NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "navbar__router__link--active": ""}
            to='photos'
            >Photos</NavLink>
        </div>
        <div>
          <Outlet context={[vanData]}/>
        </div>
      </div>

    </div>
  )
}
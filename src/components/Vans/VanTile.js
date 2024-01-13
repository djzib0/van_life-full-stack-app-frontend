import React from 'react';
import firstLetterToUpperCase from '../../utils/firstLetterToUpperCase';
import { Link } from 'react-router-dom';


export default function VanTile({children}) {
  const {id, name, imageUrl, type, price} = children


  return (
    <Link to={`../vans/${id}`} 
      className='van__container'
      aria-label={`View detailf for ${name}, prices at $${price}
      per day`}
      >
      <div className='van-image__container'>
        <img src={imageUrl} alt={`image of ${name} van`} className="image"/>
      </div>
      <div className='van-description__container'>
        <div className='van-description__container--left'>
          <p className='van-name'>{name}</p>
          <div className={`van-tag__container--${type}`}>
            {firstLetterToUpperCase(type)}
          </div>
        </div>
        <div className='van-description__container--right'>
          <h3 className='van-price__header--top'>${price}</h3>
          <h5 className='van-price__header--bottom'>/day</h5>
        </div>
      </div>
    </Link>
  )
}

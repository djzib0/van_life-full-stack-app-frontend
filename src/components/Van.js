import React from 'react';
import firstLetterToUpperCase from '../utils/firstLetterToUpperCase';


export default function Van({children}) {
  const {name, imageUrl, type, price} = children


  return (
    <div className='van__container'>
      <div className='van-image__container'>
        <img src={imageUrl} alt='van' className="image"/>
      </div>
      <div className='van-description__container'>
        <div className='van-description__container--left'>
          <h3 className='van-name'>{name}</h3>
          <div className={`van-tag__container--${type}`}>
            {firstLetterToUpperCase(type)}
          </div>
        </div>
        <div className='van-description__container--right'>
          <h3 className='van-price__header--top'>${price}</h3>
          <h5 className='van-price__header--bottom'>/day</h5>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import firstLetterToUpperCase from '../../utils/firstLetterToUpperCase';
import { Link } from 'react-router-dom';


export default function VanTile({children, ...rest}) {
  const {id, name, imageUrl, type, price} = children

  // css class variant will be different for a different view
  const variant = rest.variant ? rest.variant : "";

  // url route
  const urlRoute = rest.urlRoute ? rest.urlRoute : "/vans"

  return (
    <Link to={`${urlRoute}/${id}`} 
      className={`van__container${variant}`}
      aria-label={`View details for ${name}, prices at $${price}
      per day`}
      >
      <div className={`van-image__container${variant}`}>
        <img src={imageUrl} alt={`image of ${name} van`} className={`image${variant}`}/>
      </div>
      <div className={`van-description__container${variant}`}>
        <div className='van-description__container--left'>
          <p className={`van-name${variant}`}>{name}</p>
          <div className={`van-tag__container--${type}${variant}`}>
            {firstLetterToUpperCase(type)}
          </div>
        </div>
        <div className={`van-description__container--right${variant}`}>
          <h3 className={`van-price__header--top${variant}`}>${price}</h3>
          <h5 className='van-price__header--bottom'>/day</h5>
        </div>
      </div>
    </Link>
  )
}

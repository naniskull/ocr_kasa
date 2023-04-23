
import React from 'react';
import './Host.css'
import redStar from '../../assets/red_star.png';
import greyStar from '../../assets/grey_star.png';

const Host = ({ property }) => {
  const stars = property.rating;

  const greyStars = Array.from({ length: 5 - stars }).map((_, i) => (
    <img key={i} src={greyStar} alt="etoile grise" />
  ));

  const redStars = Array.from({ length: stars }).map((_, i) => (
    <img key={i} src={redStar} alt="etoile rouge" />
  ));

  return (
    <div className='container_host'>
      <div className='name_picture'>
        <p className='host_name'>{property.host.name}</p>
        <img className='host_picture' src={property.host.picture} alt={"host"}></img>
      </div>
      <div className='host_rating'>{redStars}{greyStars}</div>
    </div>
  );
};

export default Host;
import React from 'react';
import "./Title.css"

const PropertyTitle = ({ property }) => {
    return (
        <div className='container_title'>
           <h1 className='title'>{property.title}</h1>
           <p className='location'>{property.location}</p>
        </div>
    );
};

export default PropertyTitle;
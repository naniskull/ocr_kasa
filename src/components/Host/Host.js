import React from 'react';
import './Host.css'

const Host = ({ property }) => {
    return (
        <div className='container_host'>
            <div className='name_picture'>
                <p className='host_name'>{property.host.name}</p>
                <img className='host_picture' src = {property.host.picture} alt={"host"}></img>
            </div>
            <div className='host_rating'>{property.rating} (étoiles)</div>
        </div>
    );
};

export default Host;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import data from '../data/data.json';
import Error from './Error/Error';

const Property = () => {
    const [propertyData, setPropertyData] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const property = data.find((item) => item.id === id);
      setPropertyData(property);
    }, [id]);
  
    return (
      <div key={id}>
        {propertyData ? (
          <div>
            <Slideshow property={propertyData} />

            <h1>{propertyData.title}</h1>
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  };
  
  export default Property;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/Title';
import Slideshow from '../components/Slideshow/Slideshow';
import data from '../data/data.json';
import Error from './Error/Error';
import Host from '../components/Host/Host';
import Tags from '../components/Tags/Tags';
import Collapse from '../components/Collapse/Collapse';


const Property = () => {
    const [propertyData, setPropertyData] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const property = data.find((item) => item.id === id);
      setPropertyData(property);
    }, [id]);

    const propertyCollapse = propertyData
    ? [
        {
          title: "Description",
          content: propertyData.description,
        },
        {
          title: "Equipements",
          content: (
            <ul>
              {propertyData.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          ),
        },              
      ]
    : [];

    return (
      <div key={id}>
        {propertyData ? (
          <div>
            <Slideshow property={propertyData} />
            <Title property={propertyData} />
            <Host property={propertyData} />
            <Tags tags={propertyData.tags} />
            <Collapse items={propertyCollapse} />
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  };
  
export default Property;
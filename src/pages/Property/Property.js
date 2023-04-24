import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import Slideshow from '../../components/Slideshow/Slideshow';
import data from '../../data/data.json';
import Host from '../../components/Host/Host';
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/Collapse/Collapse';
import './Property.css';

const Property = () => {
  const [propertyData, setPropertyData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const property = data.find((item) => item.id === id);

    if (!property) {
      navigate('/error');
    } else {
      setPropertyData(property);
    }
        }, [id, navigate]);

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
      propertyData && (
        <div key={id}>
          <Slideshow property={propertyData} />
          <div className='container_property'>
            <div className='title_tags'>
              <Title property={propertyData} />
              <Tags tags={propertyData.tags} />
            </div>
            <div className='host'>
              <Host property={propertyData} />
            </div>
          </div>
          <Collapse items={propertyCollapse} collapsePage="property" />
        </div>
      )
    );
}

export default Property;

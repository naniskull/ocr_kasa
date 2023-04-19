import React, { useState } from 'react';
import Vector from '../../assets/vector.png';

import './Collapse.css';

const Collapse = ({ items }) => {
  const [openStates, setOpenStates] = useState(items.map(() => false));

  const toggleCollapse = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="collapse-container">
      {items.map((item, index) => (
        <div className="collapse-item" key={index}>
          <div className="collapse-header" onClick={() => toggleCollapse(index)}>
            <h3 className='collapse_title'>{item.title}</h3>
            <span className={`arrow ${openStates[index] ? 'up' : 'down'}`}>
              <img src={Vector} alt="vector" />
            </span>
          </div>
          {openStates[index] && (
            <div className="collapse-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapse;

import React, { useState } from 'react';
import Vector from '../../assets/vector.png';

import './Collapse.css';

const Collapse = () => {
  const [openStates, setOpenStates] = useState([false, false, false, false]);

  const toggleCollapse = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-item">
        <div className="collapse-header" onClick={() => toggleCollapse(0)}>
          <h3 className='collapse_title'>Fiabilité</h3>
          <span className={`arrow ${openStates[0] ? 'up' : 'down'}`}>
            <img src={Vector} alt="vector" />
          </span>
        </div>
        {openStates[0] && (
          <p className="collapse-content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </p>
        )}
      </div>

      <div className="collapse-item">
        <div className="collapse-header" onClick={() => toggleCollapse(1)}>
          <h3 className='collapse_title'>Respect</h3>
          <span className={`arrow ${openStates[1] ? 'up' : 'down'}`}>
            <img src={Vector} alt="vector" />
          </span>
        </div>
        {openStates[1] && (
          <p className="collapse-content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        )}
      </div>

      <div className="collapse-item">
        <div className="collapse-header" onClick={() => toggleCollapse(2)}>
          <h3 className='collapse_title'>Service</h3>
          <span className={`arrow ${openStates[2] ? 'up' : 'down'}`}>
            <img src={Vector} alt="vector" />
          </span>
        </div>
        {openStates[2] && (
          <p className="collapse-content">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        )}
      </div>

      <div className="collapse-item">
        <div className="collapse-header" onClick={() => toggleCollapse(3)}>
          <h3 className='collapse_title'>Sécurité</h3>
          <span className={`arrow ${openStates[3] ? 'up' : 'down'}`}>
            <img src={Vector} alt="vector" />
          </span>
        </div>
        {openStates[3] && (
          <p className="collapse-content">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        )}
      </div>
    </div>
  );
};

export default Collapse;

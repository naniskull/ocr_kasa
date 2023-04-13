import React from 'react';
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
        <div className='container_404'>
            <div className='number_404'>404</div>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className='back_home_link'>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default Error;
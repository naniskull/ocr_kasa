import React from 'react';
import { Link } from "react-router-dom"
import "../../styles/Header.css"
import Logo from '../../images/Logo.png';

const Header = () => {
  return (
    <div>
      <header>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li className='home'><Link to="/home">Accueil</Link></li>
            <li className='about'><Link to="/about">A propos</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
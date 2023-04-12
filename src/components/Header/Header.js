import React from 'react';
import { NavLink } from "react-router-dom"
import "./Header.css"
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <NavLink to="/home"><img src={Logo} alt="logo"/></NavLink>
      </div>
      <nav>
        <ul>
          <li className='home'><NavLink to="/home" activeclassname="active">Accueil</NavLink></li>
          <li className='about'><NavLink to="/about" activeclassname="active">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
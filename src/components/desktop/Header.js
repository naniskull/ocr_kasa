import React from 'react';
import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import Logo from '../../images/Logo.png';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link to="/home"><img src={Logo} alt="logo"/></Link>
      </div>
      <nav>
        <ul>
          <li className='home'><NavLink to="/home" activeClassName="active">Accueil</NavLink></li>
          <li className='about'><NavLink to="/about" activeClassName="active">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
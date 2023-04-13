import React from 'react';
import "./Footer.css";
import Logo from '../../assets/logo_footer.png';

const Footer = () => {
    return (
        <footer>
            <div className='container_footer'>
                <img src={Logo} alt="logo"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;